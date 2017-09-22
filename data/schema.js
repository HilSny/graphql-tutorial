import {addMockFunctionsToSchema, makeExecutableSchema} from 'graphql-tools'

import mocks from './mocks'
import resolvers from './resolvers'

const typeDefs = `
  type Show {
    id        : Int
    title     : String
  }

  type Query {
    shows               : [Show]
    show(title: String) : Show
    getFortuneCookie    : String
  }

  type Mutation {
    addShow(title: String!): Show
  }
`

const schema = makeExecutableSchema({typeDefs, resolvers})

//addMockFunctionsToSchema({schema, mocks})

export default schema
