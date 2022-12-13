import { ApolloProvider } from '@apollo/client'
import { ApolloClientAPI } from '../apis/ApolloClientAPI'
import UserContext from '../contexts/UserContext'
import HeaderView from '../views/HeaderView/index'
import FooterView from '../views/FooterView/index'
import {useState} from "react";

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
                <style jsx global>{`
                html,
                body {
                  padding: 0;
                  margin: 0;
                  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }
                * {
                  box-sizing: border-box;
                }
                img {
                  max-width: 100%;
                }
                .relative {
                  position: relative;
                }
                .absolute {
                  position: absolute;
                }
                .white {
                  color: #fff;
                }
                .black {
                  color: #000;
                }
              `}</style>
            </ApolloProvider>
        </UserContext.Provider>
    )
}

export default MyApp
