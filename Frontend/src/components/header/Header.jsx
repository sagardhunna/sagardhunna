import React from 'react';
import "./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary w-100">
                <Container fluid>
                    <Navbar.Brand href="#home">Sagar's Website</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#about">About Me</Nav.Link>
                            <Nav.Link href="#contact">Contact Me</Nav.Link>
                            <Nav.Link href="/assets/Sagar Dhunna - Resume 2024.pdf" target="_blank" rel="noopener noreferrer">Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )

}

export default Header