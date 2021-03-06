const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')
const Subscription = require ('./resolvers/Subscription')

const resolvers = {
    Query,
    Mutation,
    Subscription,
    Link,
    User
}

const server = new GraphQLServer({
    typeDefs: 'schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            prisma
        }}
})
server.start(() => console.log('Serve running. port 4000'))

