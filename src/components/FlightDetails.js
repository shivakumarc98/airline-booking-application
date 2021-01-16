import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import firebase from 'firebase';
import { useHistory } from "react-router-dom";

const FlightDetails = () => {

    const [flights, setFlights] = useState([]);
    const history = useHistory();

    const handleBooking = (flight) => {
        history.push('/booking', flight)
    }

    useEffect(() => {
        var database = firebase.database();
        database.ref('flights').once('value').then((snapshot) => {
            let flightList = [];
            snapshot.forEach(snap => {
                flightList.push(snap.val());
            });
            setFlights(flightList);
        })
    }, [])

    return (
        <>
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "120vh" }}>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Flight no</th>
                            <th>Flight name</th>
                            <th>From city</th>
                            <th>To city</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Airport name</th>
                            <th>Ticket price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {flights && flights.map(flight => {
                            return (
                                <tr key={flight.flightNumber}>
                                    <td>{flight.flightNumber}</td>
                                    <td>{flight.flightName}</td>
                                    <td>{flight.departure}</td>
                                    <td>{flight.arrival}</td>
                                    <td>{flight.date}</td>
                                    <td>{flight.time}</td>
                                    <td>{flight.airportName}</td>
                                    <td>{flight.ticketPrice}</td>
                                    <td><Button onClick={() => handleBooking(flight)}>Book now</Button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>

            </Container>
        </>
    )
}

export default FlightDetails;
