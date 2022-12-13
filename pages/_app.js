import { ApolloProvider } from '@apollo/client'
import { ApolloClientAPI } from '../apis/ApolloClientAPI'
import UserContext from '../contexts/UserContext'
import HeaderView from '../views/HeaderView/index'
import FooterView from '../views/FooterView/index'
import {useState} from "react";
import '../styles/globals.css'
const MyApp = ({ Component, pageProps }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [username, setUsername] = useState('Gabriel M');

    return (
        <UserContext.Provider value={{isLoggedIn, username } }>
            <ApolloProvider client={ApolloClientAPI}>
                <HeaderView>
                    {/* Optional: Replace with custom code */}
                </HeaderView>
                <Component {...pageProps} />
                <FooterView>
                    {/* Optional: Replace with custom code */}
                </FooterView>
            </ApolloProvider>
        </UserContext.Provider>
    )
}

export default MyApp
