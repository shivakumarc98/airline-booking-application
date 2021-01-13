import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {

    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const { history } = useHistory();

    const handleLogout = async () => {
        setError('');

        try {
            await logout();
            history.push('/login')
        } catch {
            setError("Failed to logout.")
        }

    }

    return (
        <Navbar bg="primary"  variant="dark">
            <Navbar.Brand href="/">Airline Booking</Navbar.Brand>
            <Nav className="ml-auto">

                <NavDropdown title={currentUser.email}>
                    <NavDropdown.Item href="/update-profile">Update Profile</NavDropdown.Item>
                    <NavDropdown.Item href="/booking-summary">My Booking</NavDropdown.Item>
                    <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    );
}
export default Header;