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
import { sortData } from '../helpers/sorters'
import { useUpdate } from '../helpers/useUpdate'
import { filterByQuery } from '../helpers/filterByQuery'

export const FetchCountries: FetchAction = ({
	type,
	query,
	sort
}: FetchProps) => {
	const { data, loading, error } = useQuery<Either<ByContinent, ByLanguage>>(
		type === 'continent' ? COUNTRIES_BY_CONTINENT : COUNTRIES_AND_LANGUAGES
	)

	// Extraer varias instancias de los mismos datos ocupa más espacio pero permite que los algoritmos de query y sort sean más rápidos
	const [mappedData, setMappedData] = useState<NormalizedOutput>([]) // Data mapeada a NormalizedInput
	const [filteredData, setFilteredData] = useState<NormalizedOutput>([]) // Data filtrada por query
	const [sortedData, setSortedData] = useState<NormalizedOutput>([]) // Data organizada por sort

	const update = useUpdate()

	useEffect(() => {
		if (!loading && data) {
			setMappedData(
				type === 'continent'
					? countriesByContinent({ data } as ContinentMapProps)
					: countriesByLanguage({ data } as LanguageMapProps)
			)
		}
	}, [data, type])

	useEffect(() => {
		setFilteredData(filterByQuery({ data: mappedData, query }))
		update()
	}, [query, mappedData])

	useEffect(() => {
		setSortedData(sortData({ data: filteredData, sort }))
		update()
	}, [sort, filteredData])

	if (error) return <div>error</div>
	else if (loading) return <div>loading</div>
	else if (sortedData)
		return (
			<div>
				{(sortedData.length ? sortedData : mappedData).map((e) => (
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
