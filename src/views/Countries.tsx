import { useQuery } from '@apollo/react-hooks'
import { COUNTRIES_BY_CONTINENT, COUNTRIES_AND_LANGUAGES } from '../queries'
import {
	ByContinent,
	ByLanguage,
	FetchProps,
	FetchAction
} from '../queries/interfaces'
import { Either } from '../queries/types'
import React, { useState, useEffect } from 'react'
import { countriesByContinent, countriesByLanguage } from '../helpers/mappers'
import {
	ContinentMapProps,
	LanguageMapProps,
	NormalizedOutput
} from '../helpers/interfaces'

export const FetchCountries: FetchAction = ({ type, query }: FetchProps) => {
	const { data, loading, error } = useQuery<Either<ByContinent, ByLanguage>>(
		type === 'continent' ? COUNTRIES_BY_CONTINENT : COUNTRIES_AND_LANGUAGES
	)

	const [currentData, setCurrentData] = useState<NormalizedOutput>([])

	useEffect(() => {
		if (!loading && data) {
			setCurrentData(
				type === 'continent'
					? countriesByContinent({ data, query } as ContinentMapProps)
					: countriesByLanguage({ data, query } as LanguageMapProps)
			)
		}
	}, [data, type])

	if (error) return <div>error</div>
	else if (loading) return <div>loading</div>
	else if (currentData)
		return (
			<div>
				{currentData.map((e) => (
					<div key={e.code}>
						<h3>{e.name}</h3>
						<small>
							{e.countries?.map((country) => country.name).join(', ')}
						</small>
					</div>
				))}
			</div>
		)
	else return null
}
