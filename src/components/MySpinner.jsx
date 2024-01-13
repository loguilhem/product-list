import Spinner from 'react-bootstrap/Spinner';

export function MySpinner() {
    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
}
