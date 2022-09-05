import React from 'react'
import { SearchComponent, SearchComponentProps } from '../interfaces'
import { SearchWrapper, Input, MagIcon } from './styled'
import mag from '../../assets/glass.svg'

export const SearchBar: SearchComponent = ({ set }: SearchComponentProps) => {
	return (
		<SearchWrapper>
			<MagIcon src={mag} />
			<Input onChange={set} placeholder='Search by country' />
		</SearchWrapper>
	)
}
