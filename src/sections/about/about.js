import React from 'react';
import profile from './../../assets/profile.jpg';
import working from './../../assets/working.jpg';
import { Card, Button } from 'react-bootstrap';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import './about.css';

const About = () => {
    return (
        <Card className="about bg-dark text-white" variant="dark">
            <Card.Body>
                <Card.Title style={{ height: '5rem' }}>About Me</Card.Title>
                <Timeline align="alternate">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent> Born 18 November 1994 in Klerksdorp, South Africa</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Graduated from a Technical High School at 2012</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            Joined University of Pretoria to study Electronic Engineering 2013<br />
                            Member of Golden Key International Society 2015<br />
                            Member of University of Pretoria residence governing body in 2015<br />
                            3rd Place in Microcontrollers line following robot competition 2016
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            Worked as a developer intern part time during my studies at Nanoteq 2015 - 2017<br />
                            Graduated with a bachelors in Electronic Engineering from University of Pretoria in 2017<br />
                            Joined Nanoteq, South Africa’s leader in cryptographic technology as a hardware developer in 2018
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            Joined Nanoteq, South Africa’s leader in cryptographic technology as a hardware developer in 2018<br />
                            Worked on freelance projects for Bosch (vehicle tracking system and 2Wheel Power controller) 2018 – 2020
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent>
                            Acting Junior Project Manager for a production of a flagship product ordered by Armscor in 2021<br />
                            Studied Project Management at University of Stellenbosch Business School 2021<br />
                            Certified Scrum Product Owner (CSPO) with Scrum Alliance 2021
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
                <Button variant="primary">Download Resume</Button>{' '}
                <Button variant="primary">Download Portfolio</Button>
            </Card.Body>
        </Card>


    );
}

export default About;

/* <Card.Text>
                    Born 18 November 1994 in Klerksdorp, South Africa
                    I speak English, Portuguese and Afrikaans
                    Graduated from a technical high school at 2012
                    Joined University of Pretoria to study Electronic Engineering 2013
                    Member of Golden Key International Society 2015
                    Member of University of Pretoria residence governing body in 2015
                    3rd Place in Microcontrollers line following robot competition 2016
                    Worked as a developer intern part time during my studies at Nanoteq 2015 - 2017
                    Graduated with a bachelors in Electronic Engineering from University of Pretoria in 2017
                    Joined Nanoteq , South Africa’s leader in cryptographic technology as a hardware developer in 2018
                    Worked on freelance projects for Bosch \(vehicle tracking system and 2Wheel Power controller\) 2018 – 2020
                    Acting Junior Project Manager for a production of a flagship product ordered by Armscor in 2021
                    Studied Project Management at University of Stellenbosch Business School 2021
                    Certified Scrum Product Owner \(CSPO\) with Scrum Alliance 2021
                </Card.Text> */