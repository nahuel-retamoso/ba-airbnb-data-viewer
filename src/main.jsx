import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloClient, ApolloProvider, InMemoryCache, gql } from '@apollo/client'
import { Provider } from 'react-redux'
import  store  from './store/store.jsx'

const client = new ApolloClient({
  uri: 'https://ba-airbnb-data-backend-1.onrender.com/localhost:4000',
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <ChakraProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ChakraProvider>
  </Provider>

)
