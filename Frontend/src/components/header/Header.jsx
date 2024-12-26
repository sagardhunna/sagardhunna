import React from 'react';
import "./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';  // to link to the other pages


const Header = () => {
    return (
        <div style={{ border: 'solid' }}>
            <Navbar expand="lg" className="bg-body-tertiary w-100 custom-navbar">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/" className='title' style={{color: 'white'}}>Sagar's Website</Navbar.Brand> {/*When someone clicks my name it goes to home page*/}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home" style={{color: 'white'}}>Home</Nav.Link> {/* Link to Home */}
                            <Nav.Link as={Link} to="/about" style={{color: 'white'}}>About Me</Nav.Link> {/* Link to About */}
                            <Nav.Link as={Link} to="/contact" style={{color: 'white'}}>Contact Me</Nav.Link> {/* Link to Contact */}
                            <Nav.Link href="/assets/Sagar_Dhunna_Resume.pdf" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>My Resume</Nav.Link> {/* Resume link */}
                            {/* important things to add when adding a link 
                            target=”_blank” ensures that the pdf is opened in a new tab
                            rel=”noopener noreferrer” provides security and prevents anyone from manipulating the page*/}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )

}

export default Header