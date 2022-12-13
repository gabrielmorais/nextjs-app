import PageBlogContext from '../../contexts/PageBlogContext'
import {useContext, useState} from "react";
import QueryResult from "../../utils/query-result";
import ReactHtmlParser from 'react-html-parser';
import Link from "next/link";
import Container from "../../components/layout/Container";

const PageBlogView = () => {
    const {useQuery_AllPosts, useQuery_SinglePost} = useContext(PageBlogContext)

    return (
        <>
            <section>
                <Container>
                    <h2>Welcome to my Blog</h2>
                </Container>
                <Container className="relative">
                    <QueryResult value={useQuery_SinglePost}>
                        <img src={useQuery_SinglePost.data?.post.featuredImage.node.mediaItemUrl} alt=""/>
                        <div className="absolute white">
                            <h2>{useQuery_SinglePost.data?.post.title}</h2>
                            <div>
                                { ReactHtmlParser(useQuery_SinglePost.data?.post.excerpt) }
                            </div>
                            <Link href={`/blog${useQuery_SinglePost.data?.post.uri}`}>Read more</Link>
                        </div>
                    </QueryResult>
                </Container>
                <Container>
                    <QueryResult value={useQuery_AllPosts}>
                        {useQuery_AllPosts.data?.posts.nodes.map((post, index) =>
                            <li key={index}>
                                <small>{post.id}</small>
                                <h3>{post.title}</h3>
                                <p>{post.date}</p>
                                <Link href={`/blog${post.uri}`}>Read more</Link>
                            </li>
                        )}
                    </QueryResult>
                </Container>
            </section>


        </>
    )
}

export default PageBlogView
