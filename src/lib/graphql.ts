import { GraphQLClient } from 'graphql-request';

// const GRAPHQL_ENDPOINT = 'http://localhost:8000/data/';
const GRAPHQL_ENDPOINT = 'http://spaanem.com/data/';

export const graphql = new GraphQLClient(GRAPHQL_ENDPOINT, {
  method: `GET`,
  headers: {
    
  }
})