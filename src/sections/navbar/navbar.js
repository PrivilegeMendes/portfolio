import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Navibar = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="#about" to="/about">About</Nav.Link>
                <Nav.Link href="#resume" to="/resume">Resume</Nav.Link>
                <Nav.Link href="#projects" to="/projects">Projects</Nav.Link>
                <Nav.Link href="#contact" to="/contact">Contact</Nav.Link>
            </Nav>
        </Navbar>


    );
}

export default Navibar;