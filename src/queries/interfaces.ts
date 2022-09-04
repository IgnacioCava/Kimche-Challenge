export interface Language {
	name: 'string'
	code?: 'string'
}

export interface Continent {
	name: string
	code: string
	countries: Country[]
}

export interface Country {
	name: string
	code: string
	native: string
	capital: string
	emoji: string
	languages: Language[]
	continent?: { name: string }
}

export interface ByContinent {
	continents: Continent[]
}

export interface ByLanguage {
	countries: Country[]
	languages: Language[]
}

export type QueryBy = 'continent' | 'language'
export type SortBy = 'name' | 'count' | '-name' | '-count'

export interface FetchProps {
	type: QueryBy
	sort: SortBy
	query?: string
}

export type FetchAction = (props: FetchProps) => JSX.Element | null

export interface Languages extends Language {
	countries: Country[]
}
