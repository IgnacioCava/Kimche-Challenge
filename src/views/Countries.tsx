import { useQuery } from '@apollo/react-hooks'
import { COUNTRIES_BY_CONTINENT, COUNTRIES_AND_LANGUAGES } from '../queries'
import {
	ByContinent,
	ByLanguage,
	FetchProps,
	FetchAction
} from '../queries/interfaces'
import { Either } from '../queries/types'
import React from 'react'

export const FetchCountries: FetchAction = ({ query }: FetchProps) => {
	const { data, loading, error } = useQuery<Either<ByContinent, ByLanguage>>(
		query === 'continent' ? COUNTRIES_BY_CONTINENT : COUNTRIES_AND_LANGUAGES
	)
	// console.log(data)

	if (error) return <div>error</div>
	else if (loading) return <div>loading</div>
	else if (data)
		return (
			<div>
				{data?.countries?.length}
				{data?.continents?.length}
			</div>
		)
	else return null
}
