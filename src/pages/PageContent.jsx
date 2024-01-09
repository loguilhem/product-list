import {Home} from "./Home.jsx";
import {Contact} from "./Contact.jsx";
import {Single} from "./Single.jsx";
import {render} from "react-dom";
import {NotFound} from "./NotFound.jsx";

export function PageContent ({page}) {
    switch (page) {
        case '#home':
            return <Home />
        case '#contact':
            return <Contact />
        case '#post':
            return <Single />
        default:
            return <NotFound page={page} />
    }
}