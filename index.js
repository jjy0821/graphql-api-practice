import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers.jsc"

const server = new GraphQLServer({
    typeDefs : "graphql/schema.graphql",
    resolvers : resolvers
});

server.start(()=>console.log("server running"))