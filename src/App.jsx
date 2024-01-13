import {Header} from "./components/Header.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useHashNavigation} from "./hooks/useHashNavigation.js";
import {PageContent} from "./pages/PageContent.jsx";
import {Home} from "./pages/Home.jsx";

function App() {
    const {page, param} = useHashNavigation();

    return <>
        <Header page={page} />

        <PageContent page={page} param={param} />
    </>
}


export default App