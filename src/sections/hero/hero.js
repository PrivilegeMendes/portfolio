import React from 'react';
import { Button } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';


const Hero = () => {
    return (
        <article className="vh-100 dt w-100" style={{ backgroundImage: `url("http://mrmrs.github.io/photos/u/011.jpg")`, height: 800, weight: 800 }}>
            <div className="dtc v-mid tc bg-black-80 ph3 ph4-l">
                <Slide left>
                    <h1 className="f1 fw2 white-90 f-subheadline-l">Hi, I'm Privilege</h1>
                </Slide>
                <h2 className="f2 fw2 white-80">I am a Product Manager/Developer/Engineer/Super Saiyan</h2>
                <br /><br /><br />
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </div>
        </article>
    );
}

export default Hero;

