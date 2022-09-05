import { gql } from 'apollo-boost'

export const COUNTRIES_BY_CONTINENT = gql`
	query getCountriesByContinent {
		continents {
			code
			name
			countries {
				name
				code
				native
				capital
				emoji
				languages {
					name
				}
				continent {
					name
					code
				}
			}
		}
	}
`

export const COUNTRIES_AND_LANGUAGES = gql`
	query getCountriesLanguages {
		countries {
			name
			code
			native
			capital
			emoji
			continent {
				name
				code
			}
			languages {
				name
			}
		}

		languages {
			name
			code
		}
	}
`
