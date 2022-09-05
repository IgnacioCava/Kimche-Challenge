import React, { useState, useEffect } from 'react'
import '../App.css'
import { Controls, AppWrapper, Filters } from './styled'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { FetchCountries } from '../components/Countries'
import { QueryBy, SortBy } from '../queries/interfaces'
import { Sorter } from '../components/Sorter'
import { QuerySelector } from '../components/QuerySelector'
import { SearchBar } from '../components/Searchbar'
import {
	handleQueryType,
	handleSortType,
	handleSearch
} from '../helpers/handlers'

const client = new ApolloClient({
	uri: 'https://countries.trevorblades.com',
	cache: new InMemoryCache()
})

const App = () => {
	const [queryType, setQueryType] = useState<QueryBy>('continent')
	const [sort, setSortType] = useState<SortBy>('name')
	const [searchedQuery, setSearched] = useState<string>('')

	useEffect(() => {
		setSortType('name')
	}, [queryType])

	return (
		<ApolloProvider client={client}>
			<AppWrapper>
				<Controls>
					<SearchBar
						set={(e) => handleSearch(e, setSearched)}
						value={searchedQuery}
					/>
					<Filters>
						<QuerySelector
							set={(e) => handleQueryType(e, setQueryType)}
							value={queryType}
						/>
						<Sorter set={(e) => handleSortType(e, setSortType)} value={sort} />
					</Filters>
				</Controls>
				<FetchCountries type={queryType} query={searchedQuery} sort={sort} />
			</AppWrapper>
		</ApolloProvider>
	)
}
export default App
