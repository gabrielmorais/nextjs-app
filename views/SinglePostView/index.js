import ReactHtmlParser from 'react-html-parser';
import {FETCH} from "../../apis/ApolloClientAPI";
import Container from "../../components/layout/Container";

const SinglePostView = ({ slug }) => {

    const useQuery_Post = FETCH.POST_BY_SLUG(slug)

    if (useQuery_Post.loading) return <>loading</>
    if (useQuery_Post.error) return <>error</>

    const { data: { postBy: Post }} = useQuery_Post

    return (
        <>
            <Container>
                {Post.featuredImage ? (<img src={Post.featuredImage.node.mediaItemUrl} alt=""/>) : null}

                <h2>{Post.title}</h2>
                <div>
                    { ReactHtmlParser(Post.excerpt) }
                </div>
            </Container>
        </>
    )
}

export default SinglePostView
