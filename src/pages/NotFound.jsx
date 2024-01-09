import {Alert} from "react-bootstrap";

export function NotFound ({page}) {
    return <div>
        <Alert variant="danger">
            404 Error !! The page "{page}" does not exist
        </Alert>
    </div>
}