import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client'

const QueryAllPosts = gql`
    query GetPosts {
        posts {
            nodes {
                id
                title
                date
            }
        }
    }
`;

export const PostsAPI = {
    QueryAllPosts: () => useQuery(QueryAllPosts),
    QueryRecentPosts: () => useQuery(QueryRecentPosts),
}
