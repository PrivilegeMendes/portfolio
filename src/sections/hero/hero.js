import React from 'react';
import { Button } from 'react-bootstrap';
import { Jumbotron, Container } from 'react-bootstrap';
// import Slide from 'react-reveal/Slide';
import './hero.css';


const Hero = () => {
    return (
        <Jumbotron fluid className= 'hero'>
            <Container className= 'hero_text'>
                <h1>I'm Privilege</h1>
                <p>
                    I am an Electronic Engineer and aspiring Founder
                </p>
                <Button variant = 'primary'> Know more</Button>
            </Container>
        </Jumbotron>

    );
}

export default Hero;

