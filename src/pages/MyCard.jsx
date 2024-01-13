import {Button, Card} from "react-bootstrap";

export function MyCard ({title, desc, btnLabel, image, href}) {
    const showBtn = !!(href && btnLabel)

    return <Card style={{ width: '18rem' }}>
        {image && <Card.Img src={image} variant="top" />}
        <Card.Body>
            {title && <Card.Title>{title}</Card.Title>}
            {desc && <Card.Text>{desc}</Card.Text>}
            {showBtn && <Button href={href} variant="primary">{btnLabel}</Button>}
        </Card.Body>
    </Card>
}
