import React from 'react'
import { SorterComponent, SorterComponentProps } from '../interfaces'
import DownArrow from '../../assets/downarrow.svg'
import { Direction, Option, SortWrapper } from './styled'

export const Sorter: SorterComponent = ({
	set,
	value
}: SorterComponentProps) => {
	const selected = (type: string) =>
		value.includes(type) ? (value.charAt(0) === '-' ? '▲' : '▼') : ''

	return (
		<SortWrapper>
			<Option onClick={set} value='name' toggle={value.includes('name')}>
				Name
				{value.includes('name') && (
					<Direction
						dir={value.charAt(0) === '-'}
						src={DownArrow}
						alt={selected('name')}
					/>
				)}
			</Option>
			<Option onClick={set} value='count' toggle={value.includes('count')}>
				Count
				{value.includes('count') && (
					<Direction
						dir={value.charAt(0) === '-'}
						src={DownArrow}
						alt={selected('Count')}
					/>
				)}
			</Option>
		</SortWrapper>
	)
}
