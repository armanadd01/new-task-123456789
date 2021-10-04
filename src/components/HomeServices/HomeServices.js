import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const HomeServices = (props) => {
    const {name, details, img, cost} = props.service
    return (
        <div className="col-md-3 col-12 mt-5">
            <Card  className="text-center  h-100">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {details}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Duration: {details}</ListGroupItem>
                    <ListGroupItem>Price: {cost}</ListGroupItem>
                </ListGroup>
            </Card>
        </div>
    );
};

export default HomeServices;