import {useFetch} from "../hooks/useFetch.js";
import {SelectPostLimit} from "../components/SelectPostLimit.jsx";
import {MySpinner} from "../components/MySpinner.jsx";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {MyAlert} from "../components/MyAlert.jsx";
import {useEffect, useState} from "react";
import {MyCard} from "./MyCard.jsx";

export function Home () {
    const [limit, setLimit] = useState(5)
    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts?_limit='+limit)
    const {data, loading, error} = useFetch(url)

    useEffect(() => {
        setUrl('https://jsonplaceholder.typicode.com/posts?_limit='+limit)
    }, [limit])


    if (loading) {
        return <MySpinner />
    }

    if (error) {
        return <MyAlert variant="danger" msg={error.toString()}></MyAlert>
    }

    return <>
        <Container fluid>
            <Row>
                <Col>
                    <h1>Home Page</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SelectPostLimit value={limit} setter={setLimit} />
                </Col>
            </Row>
            <Row>
                {data && data.map((post) => {
                    return <Col key={post.id}>
                        <MyCard
                            image={`https://picsum.photos/id/${post.id}/280/180`}
                            title={post.title}
                            btnLabel="Read More ..."
                            desc={post.body}
                            href={`#post:${post.id}`}
                        />
                    </Col>
                    })
                 }
            </Row>
        </Container>
    </>
}
