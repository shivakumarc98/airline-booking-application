import React, { useRef, useState } from 'react';
import { Alert, Container, Form, Col, Button, Card } from 'react-bootstrap';
import Header from './Header';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from "react-router-dom";

const Booking = (props) => {

    const flight = props.location.state;
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const mobileNumberRef = useRef();
    const ageRef = useRef();
    const genderRef = useRef();
    const { currentUser } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstNameRef.current.value === '' && lastNameRef.current.value === '' && emailRef.current.value === '' &&
            mobileNumberRef.current.value === '' && ageRef.current.value === '' && genderRef.current.value === '') {
            return setError('All the fields Mandatory!')
        }

        try {
            setError('');
            setLoading(true);
            const booking = {
                ...flight,
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                email: emailRef.current.value,
                mobileNumber: mobileNumberRef.current.value,
                age: ageRef.current.value,
                gender: genderRef.current.value
            }
            console.log(booking)
            history.push('/payment', booking)
        } catch {
            setError('All the fields Mandatory!');
        }
        setLoading(false);

    }

    return (
        <>
            <Header />
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
                <div className="w-100" style={{ maxWidth: "800px" }}>
                    <div className="homepage">
                        <Card.Body>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Row>
                                    <Form.Group as={Col} id="formGridFirstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" ref={firstNameRef} placeholder="Enter first name" required />
                                    </Form.Group>

                                    <Form.Group as={Col} id="formGridLastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" ref={lastNameRef} placeholder="Enter last name" required />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} id="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" ref={emailRef} disabled defaultValue={currentUser.email} required />
                                    </Form.Group>

                                    <Form.Group as={Col} id="formGridNumber">
                                        <Form.Label>Mobile Number</Form.Label>
                                        <Form.Control type="text" ref={mobileNumberRef} placeholder="Enter mobile number" required />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} id="formGridAge">
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control type="text" ref={ageRef} placeholder="Enter age" required />
                                    </Form.Group>

                                    <Form.Group as={Col} id="formGridGender">
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Control as="select" ref={genderRef} default="Choose">
                                            <option disabled>Choose</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                                <Button disabled={loading} variant="primary" type="submit">Submit</Button>
                            </Form>
                            <hr></hr>
                            <Alert variant="warning">
                                <Alert.Heading>Important Information</Alert.Heading>
                                <p>
                                    1. Certify your health status through the Aarogya Setu app or the self-declaration form at the airport.
                                    2. Remember to web check-in before arriving at the airport; carry a soft copy of the boarding pass.<br></br>
                                    3. Please reach at least 2 hours prior to flight departure.<br></br>
                                    4. For the destination you are headed to, it is highly recommended that you get a pre-travel COVID-19 test. This may help you avoid mandatory quarantine post arrival.<br></br>
                                    5. Face masks are compulsory.<br></br>
                                </p>
                                <hr />
                                <Alert.Heading>Baggage information</Alert.Heading>
                                <p className="mb-0">
                                    Carry no more than 1 check-in baggage and 1 hand baggage per passenger. Additional pieces of Baggage will be subject to additional charges.
                                </p>
                            </Alert>
                        </Card.Body>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Booking;
