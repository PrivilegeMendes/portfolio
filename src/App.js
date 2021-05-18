import React, { Component } from 'react';
import Navibar from './sections/navbar/navbar';

import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Hero from './sections/hero/hero';
import About from './sections/about/about';
import Footer from './sections/footer/footer';
import Contact from './sections/contact/contact';
import Projects from './sections/projects/Projects';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Privilege Mendes',
            headerLinks: [
                { title: 'Hero', path: '/' },
                { title: 'Hero', path: '/about' },
                { title: 'Hero', path: '/contact' },
            ],
            hero: {
                title: 'Be Relentless',
                subTitle: 'Projects that make a difference',
                text: 'Checkout my projects below'
            },
            about: {
                title: 'About me'
            },
            contact: {
                title: 'Let\'s Talk'
            }
        }
    }
    render() {
        return (
            <Router>
                <Container className="p-0" fluid={true}>
                    <Navibar />
                    {/* <Route path='/' exact render={() => <Hero />} />
                    <Route path='/about' render={() => <About />} />
                    <Route path='/contact' render={() => <Contact />} /> */}
                    <Hero/>
                    {/* <Projects/> */}
                    <About/>
                    <Contact/>
                    <Footer />
                </Container>
            </Router>
        );
    }
}

export default App;