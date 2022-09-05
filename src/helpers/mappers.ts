import {
	ContinentMapper,
	LanguageMapper,
	Sorter,
	QueryFilter,
	NormalizedOutput,
	SectionsProps
} from './interfaces'

export const countriesByContinent: ContinentMapper = ({ data }) =>
	data.continents

export const countriesByLanguage: LanguageMapper = ({ data }) => {
	const { languages } = data

	return languages.map((language) => {
		return {
			...language,
			countries: data.countries.filter((country) =>
				country.languages.map((e) => e.name).includes(language.name)
			)
		}
	})
}

export const filterByQuery: QueryFilter = ({ data, query }) => {
	return data
		.map((element) => {
			return {
				...element,
				countries: element.countries.filter((country) =>
					country.name.toLowerCase().includes(query.toLowerCase())
				)
			}
		})
		.filter((element) => element.countries.length)
}

export const sortData: Sorter = ({ data, sort }) => {
	// La única forma en que el tipo de sort empiece con '-' es si el sort anterior era la versión no invertida (o descendiente).
	// Esto nos permite devolver el mismo array pero invertido, sin necesidad de aplicar ninguna lógica adicional.
	if (sort.charAt(0) === '-') return data.reverse()
	return data.sort((a, b) =>
		sort.includes('name')
			? a.name.localeCompare(b.name)
			: b.countries.length - a.countries.length <= 0
			? -1
			: 1
	)
}

export const getSections = ({ data, direction }: SectionsProps) => {
	const groups: NormalizedOutput[] = []
	let letter =
			data[direction.charAt(0) !== '-' ? 0 : data.length - 1]?.name.charAt(0),
		index = 0
	for (let i = 0; i < data.length; i++) {
		if (data[i]?.name.charAt(0) !== letter) {
			groups.push(data.slice(index, i))
			letter = data[i]?.name.charAt(0)
			index = i
		}
	}
	groups.push(data.slice(data.length - 1))
	return groups.filter((e) => e.length)
}
