const { ApolloServer, gql } = require("apollo-server")
const axios = require("axios")

const typeDefs = gql`
  type User {
    id: ID
    login: String
    avatar_url: String
    url: String
  }

  type Query {
    users(userName: String!): [User]
  }
`

const resolvers = {
  Query: {
    users: async (_, {userName}) => {
      console.log(userName)
      try {
        const users = await axios.get(`https://api.github.com/search/users?per_page=5&page=1&q=${userName}`)
        return users.data.items.map(({ id, login, avatar_url , url}) => ({
          id,
          login,
          avatar_url,
          url
        }))
      } catch (error) {
        throw error
      }
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => console.log(`Server ready at ${url}`))