import { GraphQLClient } from 'graphql-request';

const HYGRAPH_ENDPOINT = 'https://ap-south-1.cdn.hygraph.com/content/cmfuv2eiw009k07was6w2ed34/master';

export const hygraph = new GraphQLClient(HYGRAPH_ENDPOINT, {
  headers: {
    
  }
})