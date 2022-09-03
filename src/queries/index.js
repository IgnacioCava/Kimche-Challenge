export const COUNTRIES_BY_CONTINENT = `
    query getCountriesByContinent {
        continents{
            code
            name
            countries{
                name
                code
                native
                capital
                emoji
                languages{
                    name
                }
            }
        }
    }
`

export const COUNTRIES_AND_LANGUAGES = `
    query getCountriesLanguages {
        countries{
            name
            code
            native
            capital
            emoji
            continent{
                name
            }
            languages{
                name
            }
        }

        languages{
            name
            code
        }
    }
`
