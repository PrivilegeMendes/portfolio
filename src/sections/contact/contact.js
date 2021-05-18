import React from 'react';
import { Jumbotron, Button, Container } from 'react-bootstrap'
import './contact.css'


const Contact = () => {
    return (
        <Jumbotron fluid className='contact' >
            <Container >
                <p className='contact_text'>
                    Please contact me!
                </p>
                <Button variant='primary'> Contact</Button>
            </Container>
        </Jumbotron>
    );
}

export default Contact;


