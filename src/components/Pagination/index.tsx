import React, { useEffect, useState } from 'react'
import { Paginator, PaginatorProps } from '../interfaces'
import { PaginationWrapper, Input, PageButton, Buttons } from './styled'
import DownArrow from '../../assets/downarrow.svg'

const range = (start: number, end: number) => {
	const length = end - start
	return Array.from({ length }, (_, i) => start + i)
}

export const Pagination: Paginator = ({
	set,
	page,
	amount,
	size
}: PaginatorProps) => {
	const [maxPages, setMaxPages] = useState(Math.ceil(amount / size))
	const [pages, setPages] = useState<number[]>([])

	useEffect(() => {
		setMaxPages(Math.ceil(amount / size))
	}, [amount, size])

	useEffect(() => {
		if (page < 3) setPages(range(0, Math.min(maxPages, 5)))
		else if (page + 2 >= maxPages) return
		else setPages(range(page - 2, Math.min(maxPages, page + 3)))
	}, [page, maxPages])

	return (
		<PaginationWrapper limit={page === 0}>
			{page > 0 && (
				<Input
					type='image'
					src={DownArrow}
					dir='left'
					onClick={set}
					value={page - 1}
				/>
			)}
			<Buttons>
				{pages.map((number) => (
					<PageButton
						onClick={set}
						value={number}
						key={number}
						current={page === number}
					>
						{number + 1}
					</PageButton>
				))}
			</Buttons>
			{(amount - size) / page > size && (
				<Input
					type='image'
					src={DownArrow}
					dir='right'
					onClick={set}
					value={page + 1}
				/>
			)}
		</PaginationWrapper>
	)
}
