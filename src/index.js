import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyles from './styles'
import Pages from './pages'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://graphql-tut-cats-server.herokuapp.com/',
  cache: new InMemoryCache(),
  name: 'web',
  version: '1.0',
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles/>
    <Pages/>
  </ApolloProvider>,
  document.getElementById('root'),
)
