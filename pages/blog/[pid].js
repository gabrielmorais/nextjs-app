import { useRouter } from 'next/router'
import SinglePostView from '../../views/SinglePostView/index'
import {useEffect, useState} from "react";

const SinglePost = () => {

    const router = useRouter()
    const { pid } = router.query

    const [routerIsReady, setRouterIsReady] = useState(false)

    useEffect(()=>{
        if(router.isReady) setRouterIsReady(true)
    }, [router.isReady]);

    if (!routerIsReady) return (<>waiting route</>)
    return (<SinglePostView slug={pid} />)

}

export default SinglePost
