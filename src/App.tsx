import React, { useState, useEffect } from 'react'
import './App.css'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { FetchCountries } from './views/Countries'
import { QueryBy, SortBy } from './queries/interfaces'
import { Sorter } from './components/Sorter'
import { QuerySelector } from './components/QuerySelector'
import { handleQueryType, handleSortType } from './helpers/handlers'

const client = new ApolloClient({
	uri: 'https://countries.trevorblades.com',
	cache: new InMemoryCache()
})

const App = () => {
	const [queryType, setQueryType] = useState<QueryBy>('continent')
	const [sort, setSortType] = useState<SortBy>('name')

	useEffect(() => {
		setSortType('name')
	}, [queryType])

	return (
		<ApolloProvider client={client}>
			<div>
				<QuerySelector
					set={(e) => handleQueryType(e, setQueryType)}
					value={queryType}
				/>
				<Sorter set={(e) => handleSortType(e, setSortType)} value={sort} />
				<FetchCountries type={queryType} sort={sort} />
			</div>
		</ApolloProvider>
	)
}
export default App
