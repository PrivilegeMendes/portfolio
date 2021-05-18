import React from 'react';
import profile from './../../assets/profile.jpg';
import { Card, Button } from 'react-bootstrap';

const About = () => {
    return (
        // <article className="vh-100 dt w-100" style={{ backgroundImage: `url("http://mrmrs.github.io/photos/u/011.jpg")`, height: 800, weight: 800 }}>
        //     <div className="dtc v-mid tc bg-black-80 ph3 ph4-l">
        //         <h2 className="center fw1 f1 white-70 mt4 mb4 tc">About</h2>
        //         <div className="cf">
        //             <div className="fl w-40 tc">
        //                 <div className="about-wrapper__imag ">
        //                     <img
        //                         className="img-fluid rounded shadow-lg br3"
        //                         height="auto"
        //                         width="250px"
        //                         src={profile}
        //                         alt="Profile"
        //                     />
        //                 </div>
        //                 <div className="ph4">
        //                     <a className="f6 no-underline grow dib bg-blue white ba b--blue ph3 pv2 mb3" href="/">See Resume</a>
        //                 </div>
        //             </div>
        //             <div className="fl w-50 ">
        //                 <p className="white-80">
        //                     Privilege Mendes is a multi-skilled professional, Hardware Developer, Embedded Developer, Web Developer and aspiring Product Manager living in Centurion, South Africa.
        //                      </p>
        //                 <p className="white-80">
        //                     Privilege graduate from the University of Pretoria, where he studied Electronic Engineering. During his scholarship vacation work, he was indentified by a Principal Developer with great potential. Under his wing, he learned the tools of the trade of Engineering, not as an occupation, but a tool to change the world.
        //                     </p>
        //             </div>
        //         </div>
        //         <a className="f4 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="/">Projects</a>
        //     </div>
        // </article>
        <Card >
            <Card.Body>
                <Card.Title>About Me</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Privilege Mendes is a multi-skilled professional, Hardware Developer, Embedded Developer, Web Developer and aspiring Product Manager living in Centurion, South Africa.
                </Card.Text>
                <Card.Text>
                    Privilege graduate from the University of Pretoria, where he studied Electronic Engineering. During his scholarship vacation work, he was indentified by a Principal Developer with great potential. Under his wing, he learned the tools of the trade of Engineering, not as an occupation, but a tool to change the world.
                </Card.Text>
                <Button variant="primary">Download Resume</Button>

                {/* <Card.Link href="#">Card Link</Card.Link> */}
            </Card.Body>
        </Card>


    );
}

export default About;
