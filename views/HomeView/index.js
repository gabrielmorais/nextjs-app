import { useContext } from "react";
import UserContext from "../../contexts/UserContext"
import Link from "next/link";

const HomeView = () => {

    const {isLoggedIn, username } = useContext(UserContext)

    if (!isLoggedIn) return <>Please, log in before continue...</>

    return (
        <>
            <h2>Welcome to the Home page, <i>{username}</i> !</h2>
            <nav>
                <Link href={`/blog`}>Go to Blog</Link>
            </nav>
        </>
    )
}

export default HomeView
