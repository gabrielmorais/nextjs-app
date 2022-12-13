import HomeView from '../views/HomeView/index'
import Container from "../components/layout/Container";

// @Todo: query and provide BlogInfoContext to HomeView

export default function Home() {
    return (
            <div id="page_Home">
                <Container>
                    <HomeView />
                </Container>
            </div>
    )
}
