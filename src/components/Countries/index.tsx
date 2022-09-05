import { useQuery } from '@apollo/react-hooks'
import { COUNTRIES_BY_CONTINENT, COUNTRIES_AND_LANGUAGES } from '../../queries'
import {
	ByContinent,
	ByLanguage,
	FetchProps,
	FetchAction
} from '../../queries/interfaces'
import { Either } from '../../queries/types'
import React, { useState, useEffect, useRef } from 'react'
import {
	countriesByContinent,
	countriesByLanguage,
	filterByQuery,
	sortData
} from '../../helpers/mappers'
import {
	ContinentMapProps,
	LanguageMapProps,
	NormalizedOutput
} from '../../helpers/interfaces'
import { useUpdate } from '../../helpers/useUpdate'
import { TypeCard } from '../TypeCard'
import {
	TypeWrapper,
	LoadWrapper,
	Loading,
	ErrorWrapper,
	Position
} from './styled'
import { handlePage } from '../../helpers/handlers'
import { Pagination } from '../Pagination'
import { getSections } from '../../helpers/mappers'

export const FetchCountries: FetchAction = ({
	type,
	query,
	sort
}: FetchProps) => {
	const { data, loading, error } = useQuery<Either<ByContinent, ByLanguage>>(
		type === 'continent' ? COUNTRIES_BY_CONTINENT : COUNTRIES_AND_LANGUAGES
	)

	const [page, setPage] = useState<number>(0)

	const scroll = useRef(null)

	// Extraer varias instancias de los mismos datos ocupa más espacio pero permite que los algoritmos de query y sort sean más rápidos
	const [mappedData, setMappedData] = useState<NormalizedOutput>([]) // Data mapeada a NormalizedInput
	const [filteredData, setFilteredData] = useState<NormalizedOutput>([]) // Data filtrada por query
	const [sortedData, setSortedData] = useState<NormalizedOutput>([]) // Data organizada por sort
	const [sections, setSections] = useState<NormalizedOutput[]>([])

	const update = useUpdate()

	useEffect(() => {
		if (!loading && data) {
			setMappedData(
				type === 'continent'
					? countriesByContinent({ data } as ContinentMapProps)
					: countriesByLanguage({ data } as LanguageMapProps)
			)
		}
		setPage(0)
	}, [data, type])

	useEffect(() => {
		setFilteredData(filterByQuery({ data: mappedData, query }))
		setPage(0)
	}, [query, mappedData])

	useEffect(() => {
		setSortedData(sortData({ data: filteredData, sort }))
		setPage(0)
	}, [sort, filteredData])

	useEffect(() => {
		setSections(getSections({ data: sortedData, direction: sort }))
		setPage(0)
		update()
	}, [sortedData, sort])

	if (error) return <ErrorWrapper>{error.message}</ErrorWrapper>
	else if (loading)
		return (
			<LoadWrapper>
				<Loading src={require('../../assets/loading.gif')} alt='Loading...' />
			</LoadWrapper>
		)
	else if (sections.length)
		return (
			<TypeWrapper ref={scroll}>
				{sections.length > 1 && (
					<Position>
						<Pagination
							set={(e) => handlePage(e, setPage, sections.length)}
							page={page}
							amount={sections.length}
							size={1}
						/>
					</Position>
				)}

				{sections
					.slice(page, page + 1)
					.map((typeConjuntion) =>
						typeConjuntion.map((type) => (
							<TypeCard data={type} key={type.code} />
						))
					)}
			</TypeWrapper>
		)
	else return null
}
