import Link from "next/link";
import UserContext from "../../contexts/UserContext"
import {useContext} from "react";

const HeaderView = ({children}) => {

    const {isLoggedIn, username } = useContext(UserContext)

    return (
        <header>
            { children ? <div>{children}</div> : (
                <h1><Link href={`/`}>Header</Link></h1>
            )}

            {/*Authenticated block*/}
            {isLoggedIn ? (
                <>
                    <Link href={`/`}>Account ({username})</Link> <br />
                    <Link href={`/`}>Logout</Link>
                </>
            ) : (
                <>
                    <Link href={`/`}>Sign up</Link> <br />
                    <Link href={`/`}>Sign in</Link>
                </>
            )}
        </header>
    )
}

export default HeaderView;
