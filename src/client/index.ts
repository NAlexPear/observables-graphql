import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'


const cache = new InMemoryCache()

const link = createHttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${process.env.GITHUB_API_TOKEN}`,
  },
})

const client = new ApolloClient({
  cache,
  link,
})

export default client
