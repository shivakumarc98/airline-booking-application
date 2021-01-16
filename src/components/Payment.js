import React, { useState } from 'react';
import { Button, Card, Container, Form, Col, InputGroup } from 'react-bootstrap';
import firebase from 'firebase';
import { useHistory } from "react-router-dom";

const Payment = (props) => {

    const booking = props.location.state;
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        try {
            setLoading(true);
            var bookingListRef = firebase.database().ref('bookings');
            var newBookingRef = bookingListRef.push();
            newBookingRef.set({ ...booking })
            history.push('/booking-summary')
        } catch {

        }
        setLoading(false);

    }

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <div className="homepage">
                    <Card.Body>
                        <div>
                            <h2 className="text-center mb-3">CREDIT CARD PAYMENT</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="Card Holder Name">
                                    <Form.Label>Card Holder Name</Form.Label>
                                    <Form.Control type="text" placeholder="Card Holder Name" required />
                                </Form.Group>
                                <Form.Group id="Card Number">
                                    <Form.Label>Card Number</Form.Label>
                                    <Form.Control type="text" placeholder="Card Number" required />
                                </Form.Group>
                                <Form.Label>Card Exp Date</Form.Label>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridGender">
                                        <Form.Control as="select" default="Month">
                                            <option disabled>Month</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridGender">
                                        <Form.Control as="select" default="Year">
                                            <option disabled>Year</option>
                                            <option>2021</option>
                                            <option>2022</option>
                                            <option>2023</option>
                                            <option>2024</option>
                                            <option>2025</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridAge">
                                        <Form.Control type="text" placeholder="Enter CVC" required />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group>
                                    <Form.Label>Amount</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend">RS</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="text"
                                            placeholder="000"
                                            aria-describedby="inputGroupPrepend"
                                            defaultValue={booking.ticketPrice}
                                            disabled
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Button className="w-100" type="submit" disabled={loading}>Pay Now</Button>
                                <hr></hr>
                                <Button className="w-100" type="link" href="/">Cancel</Button>
                            </Form>
                        </div>
                    </Card.Body>
                </div>
            </div>
        </Container >
    )
}

export default Payment;
