import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


// // When the user scrolls the page, execute myFunction
// window.onscroll = function () { myFunction() };

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky")
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }

const Navibar = () => {
    return (
        // <nav className="bg-blue">
        //     <div className="dt w-100 mw8 center">
        //         <div className="dtc v-mid tr pa3">
        //             <a className="f5 fw4 hover-white no-underline white-80 dib dn dib-l pv2 ph3" href="/" >About</a>
        //             <a className="f5 fw4 hover-white no-underline white-80 dib dib-l pv2 ph3" href="/" >Resume</a>
        //             <a className="f5 fw4 hover-white no-underline white-80 dib dib-l pv2 ph3" href="/" >Projects</a>
        //             <a className="f5 fw4 hover-white no-underline white-80 dib ml2 pv2 ph3 ba" href="/" >Contact</a>
        //         </div>
        //     </div>
        // </nav>
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#resume">Resume</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
        </Navbar>


    );
}

export default Navibar;