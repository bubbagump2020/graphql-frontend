import {
    ApolloClient,
    InMemoryCache
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://ec2-3-129-7-39.us-east-2.compute.amazonaws.com:4000/graphql',
    cache: new InMemoryCache()
})

export default client;