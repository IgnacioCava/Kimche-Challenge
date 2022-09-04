import React from 'react'
import { SorterComponent, SorterComponentProps } from './interfaces'

export const Sorter: SorterComponent = ({ set }: SorterComponentProps) => {
	return (
		<>
			<button onClick={set} value='name'>
				Name
			</button>
			<button onClick={set} value='count'>
				Count
			</button>
		</>
	)
}
