import { GraphQLClient, gql } from 'graphql-request';
import { createAuthToken } from '../util/auth';

export async function getSearchResults(searchQuery) {
    const query = gql`
        query Search (
            $searchQuery: String!
        ) {
            contentNodes(where: { search: $searchQuery }) {
                nodes {
                    uri

                    ... on Page {
                        title
                    }

                    ... on Post {
                        title
                    }
                }
            }
        }
    `,
        variables = { searchQuery },
        headers = {};

    if (process.env.HTTP_AUTH_REQUIRED) {
        headers.authorization = createAuthToken();
    }

    const graphQLClient = new GraphQLClient(process.env['GRAPHQL_ENDPOINT'], {
        headers
    });

    const results = await graphQLClient.request(query, variables);
    return results.contentNodes.nodes;    
}