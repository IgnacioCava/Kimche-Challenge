import { ByContinent, ByLanguage } from '../queries/interfaces'
import { Continent, Languages } from '../queries/interfaces'

interface DataMapProps {
	query: string
}

export interface ContinentMapProps extends DataMapProps {
	data: ByContinent
}

export interface LanguageMapProps extends DataMapProps {
	data: ByLanguage
}

export type ContinentMapper = ({
	data,
	query
}: ContinentMapProps) => Continent[]

export type LanguageMapper = ({ data, query }: LanguageMapProps) => Languages[]

export type NormalizedOutput = Continent[] | Languages[]
