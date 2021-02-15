const { ApolloServer, UserInputError, gql } = require('apollo-server')
let books = [
    {
        title:"Le Fils du Voisin",
        author:"MrbTd",
        published:"12/01/2000",
        genres:"M",
        id:'3d599470-3436-11e9-bc57-8b80ba54c431'
    },
    {
        title:"Oh Lah Lah",
        published:"26/07/1990",
        genres:"F",
        id:'3d599471-3436-11e9-bc57-8b80ba54c431'
    },
    {
        title:"Djone est Mort",
        author:"Gims",
        published:"31/12/2020",
        genres:"M",
        id:'3d599472-3436-11e9-bc57-8b80ba54c431'
    },
  ]
  
  const typeDefs = gql`
  type Book {
    title: String!
    author: String
    published: String!
    genres: String!
    id: ID!
  }
  type Query {
    bookCount:Int!
    authorCount: Int
    allBooks:[Book]!
    
  }
  ` 
  const resolvers = {
    Query: {
        bookCount: () => books.length,
      
        authorCount: (root, args) => {
         const tb=   books.filter((val)=>{val.author!=''})
         return tb.length
      },
      allBooks: () =>books
     
  }
    }  

const server = new ApolloServer({
    typeDefs,
    resolvers,
  })
  
  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
  })