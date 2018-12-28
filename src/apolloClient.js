import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  // uri: 'https://movieql-osezlvyqsg.now.sh',
  uri: 'http://localhost:4000',
});

export default client;