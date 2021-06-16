const { ApolloServer, PubSub } = require('apollo-server')
const { PrismaClient } = require('@prisma/client')
const fs = require('fs')
const path = require('path')
const prisma = new PrismaClient()

const Query = require('./resolvers/Query')
const Game = require('./resolvers/Game')
const Mutation = require('./resolvers/Mutation')

const pubsub = new PubSub()

const resolvers = {
  Query,
  Game,
  Mutation
}

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'), 'utf8'
  ),
  resolvers,
  context: {
    pubsub,
    prisma
  }
})

server
  .listen()
  .then(({ url }) => {
    console.log(`Server is running on ${url}`)
  });