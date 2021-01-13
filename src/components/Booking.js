import React from 'react';
import { Container, Form, Col, Button, Card } from 'react-bootstrap';
import Header from './Header';

const Booking = () => {



    return (
        <>
            <Header />
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
                <div className="w-100" style={{ maxWidth: "800px" }}>
                <div className="homepage">
                    
                        <Card.Body>
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridFirstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter first name" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridLastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter last name" />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridNumber">
                                        <Form.Label>Mobile Number</Form.Label>
                                        <Form.Control type="text" placeholder="Enter mobile number" />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridAge">
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control type="text" placeholder="Enter age" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridGender">
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Control as="select">
                                            <option selected disabled>Choose</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                                <Button variant="primary" type="submit" href="/payment">Submit</Button>
                            </Form>
                        </Card.Body>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Booking;
