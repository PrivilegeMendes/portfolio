import React from 'react';

const Hero = () => {
    return (
        <article className="vh-100 dt w-100" style={{ backgroundImage: `url("http://mrmrs.github.io/photos/u/011.jpg")`, height: 800, weight: 800 }}>
            <div className="dtc v-mid tc bg-black-80 ph3 ph4-l">
                <h1 className="f1 fw2 white-90 f-subheadline-l">Hi, I'm Privilege</h1>
                <h2 className="f2 fw2 white-80">I am a Product Manager/Developer/Engineer/Super Saiyan</h2>
                <br /><br /><br />
                <a className="f4 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="/">Know more</a>
            </div>
        </article>
    );
}

export default Hero;