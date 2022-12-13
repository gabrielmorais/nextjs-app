import fetch from 'cross-fetch';
import {ApolloClient, InMemoryCache, HttpLink, useQuery, gql} from "@apollo/client";

const ApolloClientAPI = new ApolloClient({
    link: new HttpLink({ uri: 'http://wp.project/graphql/', fetch }),
    cache: new InMemoryCache()
});

const FETCH = {
    ALL_POSTS: () => useQuery(gql`
        query GetPosts {
            posts {
                nodes {
                    id
                    title
                    date
                    uri
                }
            }
        }
    `),
    SINGLE_POST: (id) => useQuery(gql`
        query GetSinglePost ($id: ID!) {
            post(id: $id) {
                id
                title
                excerpt
                uri
                featuredImage {
                    node {
                        mediaItemUrl
                    }
                }
            }
        }
    `,{
        variables: { id },
    }),
    POST_BY_SLUG: (slug) => useQuery(gql`
        query PostBySlug ($slug: String) {
            postBy(slug: $slug) {
                id
                title
                excerpt
                date
                featuredImage {
                    node {
                        mediaItemUrl
                    }
                }
            }
        }
    `, {
        variables: { slug },
    })
}

export {ApolloClientAPI, FETCH};
