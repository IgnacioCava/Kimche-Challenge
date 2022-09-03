interface Language {
	name: 'string'
	code?: 'string'
}

interface Country {
	name: string
	code: string
	native: string
	capital: string
	emoji: string
	languages: Array<Language>
	continent?: { name: string }
}

interface Continent {
	name: string
	code: string
	countries: Array<Country>
}

export interface ByContinent {
	continents: Array<Continent>
}

export interface ByLanguage {
	countries: Array<Country>
	languages: Array<Language>
}

export type QueryBy = 'continent' | 'language'

export interface FetchProps {
	query?: QueryBy
}

export type FetchAction = ({ query }: FetchProps) => JSX.Element | null
