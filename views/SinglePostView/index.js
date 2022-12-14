import ReactHtmlParser from 'react-html-parser';
import Container from "../../components/layout/Container";

const SinglePostView = ({ queryData }) => {

    const { postBy: Post } = queryData

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
