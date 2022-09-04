import { MouseEvent, Dispatch, SetStateAction } from 'react'
import { ByContinent, ByLanguage } from '../queries/interfaces'
import { Continent, Languages, SortBy, QueryBy } from '../queries/interfaces'

interface DataMapProps {
	query: string
}

export interface ContinentMapProps extends DataMapProps {
	data: ByContinent
}

export interface LanguageMapProps extends DataMapProps {
	data: ByLanguage
}

export type ContinentMapper = (props: ContinentMapProps) => Continent[]
export type LanguageMapper = (props: LanguageMapProps) => Languages[]

export type NormalizedOutput = Continent[] | Languages[]

export type SortHandler = (
	event: MouseEvent<HTMLButtonElement>,
	set: Dispatch<SetStateAction<SortBy>>
) => void
export type QueryHandler = (
	event: MouseEvent<HTMLButtonElement>,
	set: Dispatch<SetStateAction<QueryBy>>
) => void
