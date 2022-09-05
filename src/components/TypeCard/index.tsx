import React, { useEffect, useState } from 'react'
import { TypeCardComponent, TypeCardProps } from '../interfaces'
import { CountryCard } from '../CountryCard'
import { Distributor, TypeContainer } from './styled'
import { Subtext, Title } from '../../config/baseStyles'
import { Pagination } from '../Pagination'
import { handlePage } from '../../helpers/handlers'

export const TypeCard: TypeCardComponent = ({ data }: TypeCardProps) => {
	const [page, setPage] = useState<number>(0)

	useEffect(() => {
		setPage(0)
	}, [data])

	return (
		<TypeContainer>
			<Title>
				{data.name}
				<Subtext>, {data.countries.length} countries</Subtext>
			</Title>
			<Distributor>
				{data.countries?.slice(page, page + 3).map((country) => (
					<CountryCard key={country.code} country={country} />
				))}
			</Distributor>

			{data.countries.length > 3 && (
				<Pagination
					set={(e) => handlePage(e, setPage, data.countries.length / 3)}
					page={page}
					amount={data.countries.length}
					size={3}
				/>
			)}
		</TypeContainer>
	)
}
