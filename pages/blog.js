import { FETCH } from '../apis/ApolloClientAPI'
import PageBlogContext from '../contexts/PageBlogContext'
import PageBlogView from "../views/PageBlogView";

export default function Blog() {

    const useQuery_AllPosts = FETCH.ALL_POSTS()
    const useQuery_SinglePost = FETCH.SINGLE_POST("cG9zdDoyNA==")

    return (
        <PageBlogContext.Provider value={{useQuery_AllPosts, useQuery_SinglePost} }>
            <PageBlogView />
        </PageBlogContext.Provider>
    )
}
