import {
	SortHandler,
	QueryHandler,
	SearchHandler,
	PageHandler
} from './interfaces'
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

export const handlePage: PageHandler = (event, set, amount) => {
	const moveBy = parseInt(event.currentTarget.value)
	set((page) => (page + moveBy >= 0 && moveBy < amount ? moveBy : page))
}
