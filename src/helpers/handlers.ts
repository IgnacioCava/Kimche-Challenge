import { SortHandler, QueryHandler, SearchHandler } from './interfaces'
import { QueryBy, SortBy } from '../queries/interfaces'

export const handleQueryType: QueryHandler = (event, set) => {
	const newType = event.currentTarget.value
	set(newType as QueryBy)
}

export const handleSortType: SortHandler = (event, set) => {
	const newType = event.currentTarget.value
	set(
		(sort) =>
			(newType === sort && sort.charAt(0) !== '-'
				? '-' + newType
				: newType) as SortBy
	)
}

export const handleSearch: SearchHandler = (event, set) => {
	const searched = event.currentTarget.value
	set(searched)
}
