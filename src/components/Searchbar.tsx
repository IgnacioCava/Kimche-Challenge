import React from 'react'
import { SearchComponent, SearchComponentProps } from './interfaces'

export const SearchBar: SearchComponent = ({ set }: SearchComponentProps) => {
	return (
		<>
			<input onChange={set} />
		</>
	)
}
