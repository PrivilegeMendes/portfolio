import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import './Projects.css'

import powerpack from './../../assets/powerpack.png'
import pcc from './../../assets/pcc.png'


function Projects() {
    return (
        <Card >
            <Card.Title>Projects</Card.Title>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={pcc} />
                    <Card.Body>
                        <Card.Title>Locator</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={powerpack} />
                    <Card.Body>
                        <Card.Title>2Wheel Power Pack</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={powerpack} />
                    <Card.Body>
                        <Card.Title>Pulse Count Collector</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                            </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </Card>
    )
}

export default Projects

//rfce

//BEM