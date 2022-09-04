import { ContinentMapper, LanguageMapper } from './interfaces'

export const countriesByContinent: ContinentMapper = ({ data, query }) => {
	let { continents } = data

	if (query) {
		continents = continents
			.map((continent) => {
				return {
					...continent,
					countries: continent.countries.filter((country) =>
						country.name.toLowerCase().includes(query.toLowerCase())
					)
				}
			})
			.filter((continent) => continent.countries.length)
	}

	return continents
}

export const countriesByLanguage: LanguageMapper = ({ data, query }) => {
	let { countries, languages } = data

	if (query) {
		countries = data.countries.filter((country) =>
			country.name.toLowerCase().includes(query.toLowerCase())
		)
		languages = languages.filter(
			(language) =>
				countries.filter((country) =>
					country.languages.map((e) => e.name).includes(language.name)
				).length
		)
	}
	return languages.map((language) => {
		return {
			...language,
			countries: data.countries.filter((country) =>
				country.languages.map((e) => e.name).includes(language.name)
			)
		}
	})
}
