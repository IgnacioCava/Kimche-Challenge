import React, { useState } from 'react'
import './App.css'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { FetchCountries } from './views/Countries'
import { QueryBy, SortBy } from './queries/interfaces'

const client = new ApolloClient({
	uri: 'https://countries.trevorblades.com',
	cache: new InMemoryCache()
})

const App = () => {
	const [queryType, setQueryType] = useState<QueryBy>('continent')
	const [sortType, setSortType] = useState<SortBy>('name')

	const handleQueryType = (query: QueryBy) => {
		setQueryType(query)
	}

	const handleSortType = (sort: SortBy) => {
		setSortType(
			sort === sortType && sortType.charAt(0) !== '-'
				? (('-' + sort) as SortBy)
				: sort
		)
	}

	return (
		<ApolloProvider client={client}>
			<div>
				<button onClick={() => handleQueryType('continent')}>Continents</button>
				<button onClick={() => handleQueryType('language')}>Languages</button>
				<button onClick={() => handleSortType('name')}>Name</button>
				<button onClick={() => handleSortType('count')}>Count</button>
				<FetchCountries type={queryType} sort={sortType} />
			</div>
		</ApolloProvider>
	)
}
export default App
