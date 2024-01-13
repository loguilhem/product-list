import {useFetch} from "../hooks/useFetch.js";
import {MySpinner} from "../components/MySpinner.jsx";
import {MyAlert} from "../components/MyAlert.jsx";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import React from "react";
import {useDocumentTitle} from "../hooks/useDocumentTitle.js";

export function Single ({postId}) {
    const {data: post, loading, error} = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)

    useDocumentTitle(post?.title)

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
                    <h1>{post.title}</h1>
                </Col>
            </Row>
            <Row>
                <Col key={post.id} xs lg="2">
                    <Image src={`https://picsum.photos/id/${post.id}/400/400`} roundedCircle />
                </Col>
                <Col>
                    <p>
                        {post.body}
                    </p>
                </Col>
            </Row>
        </Container>
    </>
}