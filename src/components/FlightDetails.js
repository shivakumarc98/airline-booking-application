import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import firebase from 'firebase';

const FlightDetails = () => {

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        var database = firebase.database();
        database.ref('flights').once('value').then((snapshot) => {
            let flightList = [];
            snapshot.forEach(snap => {
                console.log(snap.key)
                flightList.push(snap.val());
            });
            console.log('flightList', flightList)
            setFlights(flightList);
        })
    }, [])
    console.log('flights', flights)

    return (
        <>
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                <Table striped bordered hover size="sm">
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
                                    <td><Button variant="link" href="/booking">Book now</Button></td>
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
