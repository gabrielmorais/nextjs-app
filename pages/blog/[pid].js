import { useRouter } from 'next/router'
import SinglePostView from '../../views/SinglePostView/index'
import {useEffect, useState} from "react";
import {gql, useLazyQuery} from "@apollo/client";

const GET_POST = gql`
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
`;

function SinglePost() {

    const router = useRouter()
    const { pid } = router.query
    const [routerIsReady, setRouterIsReady] = useState(false)
    const [getPost, { loading, error, data }] = useLazyQuery(GET_POST);

    useEffect(()=>{
        if(!router.isReady) return
        setRouterIsReady(true)
        getPost({ variables: { slug: pid } }).then()
    }, [router.isReady]);

    if (!routerIsReady) return 'Waiting routes...';
    if (loading) return 'Querying...';
    if (error) return `Error! ${error}`;

    return (<SinglePostView queryData={data} />);
}

export default SinglePost
