import {gql} from "@apollo/client";
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
const SinglePost = gql`
    query ($id: ID!) {
        post(id: $id) {
            title
        }
    }
`;



export { QueryAllPosts, SinglePost }
