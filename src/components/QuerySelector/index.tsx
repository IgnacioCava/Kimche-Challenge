import React, { useState } from 'react'
import { QuerySelectorProps, QuerySelectorComponent } from '../interfaces'
import { SelectorWrapper, DropDown, Option, Selected } from './styled'
import DownArrow from '../../assets/downarrow.svg'

export const QuerySelector: QuerySelectorComponent = ({
	set,
	value
}: QuerySelectorProps) => {
	const [isOpen, toggle] = useState(false)

	const handleToggle = () => {
		toggle(!isOpen)
	}

	return (
		//(value !== 'language'&&.reverse())
		<SelectorWrapper onMouseEnter={handleToggle}>
			<Selected>
				<span style={{ textTransform: 'capitalize' }}>{value}</span>
				<img src={DownArrow} alt='▼' />
			</Selected>
			{isOpen && (
				<DropDown direction={value !== 'language'} onMouseLeave={handleToggle}>
					{['continent', 'language'].map((option) => (
						<Option
							onClick={set}
							value={option}
							key={option}
							selected={value === option}
						>
							{option}
						</Option>
					))}
				</DropDown>
			)}
		</SelectorWrapper>
	)
}
