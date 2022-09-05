import { MouseEvent, FormEvent } from 'react'
import {
	Continent,
	Country,
	Languages,
	QueryBy,
	SortBy
} from '../queries/interfaces'

export interface SorterComponentProps {
	set: (event: MouseEvent<HTMLButtonElement>) => void
	value: SortBy
}

export interface QuerySelectorProps {
	set: (event: MouseEvent<HTMLButtonElement>) => void
	value: QueryBy
}

export interface SearchComponentProps {
	set: (event: FormEvent<HTMLInputElement>) => void
	value: string
}

export interface CountryCardProps {
	country: Country
}

export interface TypeCardProps {
	data: Continent | Languages
}

export interface PaginatorProps {
	set: (event: FormEvent<HTMLInputElement>) => void
	page: number
	amount: number
	size: number
}

export type SorterComponent = (props: SorterComponentProps) => JSX.Element
export type QuerySelectorComponent = (props: QuerySelectorProps) => JSX.Element
export type SearchComponent = (props: SearchComponentProps) => JSX.Element
export type CountryCardComponent = (props: CountryCardProps) => JSX.Element
export type TypeCardComponent = (props: TypeCardProps) => JSX.Element
export type Paginator = (props: PaginatorProps) => JSX.Element
