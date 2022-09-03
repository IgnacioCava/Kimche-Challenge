import React, { useState } from 'react'
import './App.css'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { FetchCountries } from './views/Countries'
import { QueryBy } from './queries/interfaces'

const client = new ApolloClient({
	uri: 'https://countries.trevorblades.com',
	cache: new InMemoryCache()
})

const App = () => {
	const [queryType, setQueryType] = useState<QueryBy>('continent')

	return (
		<ApolloProvider client={client}>
			<div>
				<h2>
					<button onClick={() => setQueryType('continent')}>Continents</button>
					<button onClick={() => setQueryType('language')}>Languages</button>
					<FetchCountries query={queryType} />
				</h2>
			</div>
		</ApolloProvider>
	)
}
export default App
