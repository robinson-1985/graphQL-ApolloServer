import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String,
      hi: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => {
        return 'Hello again!';
      },
      hi: () => {
        return 'Hi!';
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
