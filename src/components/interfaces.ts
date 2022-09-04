import { MouseEvent } from 'react'
import { QueryBy, SortBy } from '../queries/interfaces'

export interface SorterComponentProps {
	set: (event: MouseEvent<HTMLButtonElement>) => void
	value: SortBy
}

export interface QuerySelectorProps {
	set: (event: MouseEvent<HTMLButtonElement>) => void
	value: QueryBy
}

export type SorterComponent = (props: SorterComponentProps) => JSX.Element
export type QuerySelectorComponent = (props: QuerySelectorProps) => JSX.Element
