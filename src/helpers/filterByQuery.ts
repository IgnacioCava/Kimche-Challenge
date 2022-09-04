import { QueryFilter } from './interfaces'

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
