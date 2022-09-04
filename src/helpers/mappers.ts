import { ContinentMapper, LanguageMapper } from './interfaces'

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
