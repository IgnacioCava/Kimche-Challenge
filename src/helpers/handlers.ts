import { SortHandler, QueryHandler } from './interfaces'
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
