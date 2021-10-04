import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const {name, teacher, topic, img, date, cost, details} = props.service
    return (
        <div className="col-md-4 col-12 mt-5">
            <Card  className="text-center  h-100">
                <Card.Img variant="top" className="images" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {topic}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="">
                    <ListGroupItem className=" service_details"> {teacher}</ListGroupItem>
                    <ListGroupItem className=" service_details">{date}</ListGroupItem>
                    <ListGroupItem className=" service_details">{details}</ListGroupItem>
                    <ListGroupItem className=" service_details"> {cost} </ListGroupItem>
                </ListGroup>
            </Card>
        </div>
    );
};

export default Service;