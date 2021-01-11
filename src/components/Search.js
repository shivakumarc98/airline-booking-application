import React, { useState, useEffect, useRef } from 'react';
import { Card, Col, Container, Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import firebase from 'firebase';
import FlightDetails from './FlightDetails';

const Search = () => {

    const departureRef = useRef();
    const arrivalRef = useRef();
    const [departureDate, setDepartureDate] = useState();
    const [flights, setFlights] = useState([]);
    const result = [];

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log('departure from ==>', departureRef.current.value.toUpperCase())
        // console.log('arrival to ==>', arrivalRef.current.value.toUpperCase())
        // console.log('date ==>', moment(departureDate).format('DD/MM/YYYY'))

        await firebase.database().ref().child('flights').once('value', (snapshot) => {

            setFlights(snapshot.val())
            flights.map(flight => {
                if (flight.departure === departureRef.current.value.toUpperCase()
                    && flight.arrival === arrivalRef.current.value.toUpperCase()
                    && flight.date === moment(departureDate).format('DD/MM/YYYY')) {
                    result.push(flight)
                }
                console.log("result", result)
            })
            // return result;
        });


    }

    return (
        <>
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "40vh" }}>
                <Card border="primary">
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Departure</Form.Label>
                                    <Form.Control size="sm" type="text" ref={departureRef} placeholder="FROM" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Arrival</Form.Label>
                                    <Form.Control size="sm" type="text" ref={arrivalRef} placeholder="TRAVELLING TO" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Departure Date</Form.Label>
                                    <DatePicker
                                        selected={departureDate}
                                        onChange={setDepartureDate}
                                        name='From Date'
                                        dateFormat='dd/MM/yyyy'
                                        minDate={new Date()}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Button className="w-100" type="submit">SEARCH FLIGHTS</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
            {/* <Container>
                <FlightDetails result={result} />
            </Container> */}
        </>
    )
}

export default Search;
