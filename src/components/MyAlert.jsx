import {Alert} from "react-bootstrap";

export function MyAlert({variant, msg}) {
    return <Alert variant={variant}>{msg}</Alert>
}
