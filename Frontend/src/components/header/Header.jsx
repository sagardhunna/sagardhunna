import React from 'react';
import "./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <div style={{border:'solid'}}>
            <Navbar expand="lg" className="bg-body-tertiary w-100 custom-navbar">
                <Container fluid>
                    <Navbar.Brand href="#home" className='title'>Sagar's Website</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#about">About Me</Nav.Link>
                            <Nav.Link href="#contact">Contact Me</Nav.Link>
                            <Nav.Link href="/assets/Sagar_Dhunna_Resume.pdf" target="_blank" rel="noopener noreferrer">My Resume</Nav.Link>
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