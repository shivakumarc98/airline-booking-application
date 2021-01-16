import React, { useEffect, useState } from 'react';
import { Accordion, Alert, Card, Container, Jumbotron, Row, Col, ListGroup, Button } from 'react-bootstrap';
import Header from './Header';
import firebase from 'firebase';
import { useAuth } from '../contexts/AuthContext';

const BookingSummary = () => {

    const [bookings, setBookings] = useState([]);
    const { currentUser } = useAuth();

    useEffect(() => {
        var database = firebase.database();
        database.ref('bookings').once('value').then((snapshot) => {
            let bookingsList = [];
            snapshot.forEach(snap => {
                bookingsList.push(snap.val());
            });
            setBookings(bookingsList);
        })
    }, [])

    return (
        <>
            <Header />
            <Container>
                <Jumbotron>
                    <h1><Alert variant="success">Booking Details</Alert></h1>
                    {bookings && bookings.filter((booking) => {
                        return booking.email === currentUser.email
                    }).map(booking => {
                        return (
                            <>
                                <Accordion defaultActiveKey="1">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                            <h4>{booking.firstName + ' ' + booking.lastName}</h4>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <Row>
                                                    <Col xs lg={6}>
                                                        <ListGroup>
                                                            <ListGroup.Item><h6>Flight No:</h6>{booking.flightNumber}</ListGroup.Item>
                                                            <ListGroup.Item><h6>Flight Name:</h6>{booking.flightName}</ListGroup.Item>
                                                            <ListGroup.Item><h6>Travel Date:</h6>{booking.date}</ListGroup.Item>
                                                            <ListGroup.Item><h6>Departure:</h6>{booking.departure}</ListGroup.Item>
                                                            <ListGroup.Item><h6>Arrival:</h6>{booking.arrival}</ListGroup.Item>
                                                            <ListGroup.Item><h6>Ticket Price:</h6>{booking.ticketPrice}</ListGroup.Item>
                                                            <ListGroup.Item><h6>Payment Status:</h6><Alert variant="success">Payment confirmed.</Alert></ListGroup.Item>
                                                        </ListGroup>
                                                    </Col>
                                                    <Col xs lg={6}>
                                                        <ListGroup>
                                                            <ListGroup.Item><h6>First Name:</h6>{booking.firstName}</ListGroup.Item>
                                                            <ListGroup.Item><h6>Last Name:</h6>{booking.lastName}</ListGroup.Item>
                                                            <ListGroup.Item><h6>Email ID:</h6>{booking.email}</ListGroup.Item>
                                                            <ListGroup.Item><h6>Contact No:</h6>{booking.mobileNumber}</ListGroup.Item>
                                                            <ListGroup.Item><h6>Age:</h6>{booking.age}</ListGroup.Item>
                                                            <ListGroup.Item><h6>Gender:</h6>{booking.gender}</ListGroup.Item>
                                                            <ListGroup.Item><h6>Baggage Allowed: </h6>Carry-On bag(7kgs) <br></br>Check-In Luggage(15kgs)</ListGroup.Item>
                                                        </ListGroup>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </>
                        )
                    })
                    }
                    <hr></hr>
                    <Button href="/">Back Home</Button>
                </Jumbotron>
            </Container>
        </>
    )
}

export default BookingSummary;
