import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://immortal-mullet-64.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "tXKNAsE4XpWT3v62OJIf7mgcnu06s62w2ocXVNfsLtTV3Q8D6XeZv0m8yyNsXRYn",
  },
});

export default client;
