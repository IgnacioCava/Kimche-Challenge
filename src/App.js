import React from 'react'
import './App.css'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const client = new ApolloClient({
	uri: 'https://countries.trevorblades.com',
	cache: new InMemoryCache()
})

const App = () => (
	<ApolloProvider client={client}>
		<div>
			<h2>
				My first Apollo app{' '}
				<span role='img' aria-label='Rocket'>
					🚀
				</span>
			</h2>
		</div>
	</ApolloProvider>
)
export default App
