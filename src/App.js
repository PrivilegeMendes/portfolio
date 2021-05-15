import React, {Component} from 'react';
import Navibar from './sections/navbar/navbar';
import Hero from './sections/hero/hero';
import About from './sections/about/about';
import Footer from './sections/footer/footer';
import Contact from './sections/contact/contact';


class App extends Component {
    render() {
        return (
            <div>
                <Navibar/>
                <Hero/>
                <About/>
                <Contact/>
                <Footer/>
            </div>


        // <html lang="en">
        // <head>
        // {/* <!-- Put here your site title --> */}
        // <title>Privilege Mendes | Developer</title>
        // {/* <!-- Add some coding keywords below, Ex: (javascript, yourusername, etc) --> */}
        // <meta name="keywords" content="[username], [name], skill" />
        // {/* <!-- Improve your SEO by adding a small descrption of you --> */}
        // <meta name="description" content="[Your name here] | Developer" />

        // {/* <!-- Required librarys --> */}
        // <link
        //     rel="stylesheet"
        //     href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        // />
        // <script src="https://unpkg.com/scrollreveal"></script>
        // <script>
        //     {/* ScrollReveal({ reset: false }); */}
        // </script>

        // {/* <!-- Remove this script once you setup your custom portfolio --> */}
        // <script async defer src="https://buttons.github.io/buttons.js"></script>
        // </head>

        // {/* <!-- Follow the HTML instructions to create your stunning portfolio website --> */}
        // <body>
        // <div id="top"></div>
        // {/* <!-- Dark Mode Switch --> */}
        // <div className="theme-switch-wrapper">
        //     <span id="toggle-icon">
        //         <span className="toggle-text">Light Mode</span>
        //         <i className="fas fa-sun"></i>
        //     </span>
        //     <label className="theme-switch">
        //         <input type="checkbox"/>
        //         <div className="slider round"></div>
        //     </label>
        // </div>

        // {/* <!-- **** Hero Section **** --> */}
        // <div id="hero" className="jumbotron">
        //     <div className="container">
        //     <h1 className="hero-title" className="load-hidden">
        //         Hi, my name is <span className="text-color-main">Privilege.</span>
        //         <br />
        //         I am a Product Manager.
        //     </h1>
        //     <p className="hero-cta" className="load-hidden">
        //         <a className="cta-btn cta-btn--hero" href="#about">Know more</a>
        //     </p>
        //     </div>
        // </div>
        // {/* <!-- /END Hero Section -->

        // <!-- **** About Section **** --> */}
        // <section id="about">
        //     <div className="container">
        //     <h2 className="section-title">About me</h2>
        //     <div className="row about-wrapper">
        //         <div className="col-md-6 col-sm-12">
        //         <div className="about-wrapper__image">
        //             <img
        //             className="img-fluid rounded shadow-lg"
        //             height="auto"
        //             width="300px"
        //             src="./assets/profile.jpg"
        //             alt="Profile Image"
        //             />
        //         </div>
        //         </div>
        //         <div className="col-md-6 col-sm-12">
        //         <div className="about-wrapper__info">
        //             <p className="about-wrapper__info-text">
        //             This is where you can describe about yourself. The more you
        //             describe about yourself, the more chances you can!
        //             </p>
        //             <p className="about-wrapper__info-text">
        //             Extra Information about you! like hobbies and your goals.
        //             </p>
        //             <span className="d-flex mt-3">
        //             <a target="_blank" rel="noreferrer" className="cta-btn cta-btn--resume" href="">
        //                 View Resume
        //             </a>
        //             </span>
        //         </div>
        //         </div>
        //     </div>
        //     </div>
        // </section>
        // {/* <!-- /END About Section -->

        // <!-- **** Projects Section **** --> */}
        // <section id="projects">
        //     <div className="container">
        //     <div className="project-wrapper">
        //         <h2 className="section-title dark-blue-text">Projects</h2>

        //         {/* <!-- Each .row is a project --> */}
        //         <div className="row">
        //         <div className="col-lg-4 col-sm-12">
        //             <div className="project-wrapper__text">
        //             <h3 className="project-wrapper__text-title">Project Title 0</h3>
        //             <div>
        //                 <p className="mb-4">
        //                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        //                 Excepturi neque, ipsa animi maiores repellendus distinctio
        //                 aperiam earum dolor voluptatum consequatur blanditiis
        //                 inventore debitis fuga numquam voluptate ex architecto
        //                 itaque molestiae.
        //                 </p>
        //             </div>
        //             <a target="_blank" rel="noreferrer" className="cta-btn cta-btn--hero" href="#!">
        //                 See Live
        //             </a>
        //             <a target="_blank" rel="noreferrer" className="cta-btn text-color-main" href="#!">
        //                 Source Code
        //             </a>
        //             </div>
        //         </div>
        //         <div className="col-lg-8 col-sm-12">
        //             <div className="project-wrapper__image">
        //             <a href="#!" target="_blank" rel="noreferrer">
        //                 <div data-tilt className="thumbnail rounded">
        //                 <img className="img-fluid" src="./assets/project.jpg" />
        //                 </div>
        //             </a>
        //             </div>
        //         </div>
        //         </div>
        //         {/* <!-- /END Project -->

        //         <!-- Each .row is a project --> */}
        //         <div className="row">
        //         <div className="col-lg-4 col-sm-12">
        //             <div className="project-wrapper__text">
        //             <h3 className="project-wrapper__text-title">Project Title 1</h3>
        //             <div>
        //                 <p className="mb-4">
        //                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        //                 Excepturi neque, ipsa animi maiores repellendus distinctio
        //                 aperiam earum dolor voluptatum consequatur blanditiis
        //                 inventore debitis fuga numquam voluptate ex architecto
        //                 itaque molestiae.
        //                 </p>
        //             </div>
        //             <a target="_blank" rel="noreferrer" className="cta-btn cta-btn--hero" href="#!">
        //                 See Live
        //             </a>
        //             <a target="_blank" rel="noreferrer" className="cta-btn text-color-main" href="#!">
        //                 Source Code
        //             </a>
        //             </div>
        //         </div>
        //         <div className="col-lg-8 col-sm-12">
        //             <div className="project-wrapper__image">
        //             <a href="#!" target="_blank" rel="noreferrer">
        //                 <div data-tilt className="thumbnail rounded">
        //                 <img className="img-fluid" src="./assets/project.jpg" />
        //                 </div>
        //             </a>
        //             </div>
        //         </div>
        //         </div>
        //         {/* <!-- /END Project -->

        //         <!-- Each .row is a project --> */}
        //         <div className="row">
        //         <div className="col-lg-4 col-sm-12">
        //             <div className="project-wrapper__text">
        //             <h3 className="project-wrapper__text-title">Project Title 2</h3>
        //             <div>
        //                 <p className="mb-4">
        //                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        //                 Excepturi neque, ipsa animi maiores repellendus distinctio
        //                 aperiam earum dolor voluptatum consequatur blanditiis
        //                 inventore debitis fuga numquam voluptate ex architecto
        //                 itaque molestiae.
        //                 </p>
        //             </div>
        //             <a target="_blank" rel="noreferrer" className="cta-btn cta-btn--hero" href="#!">
        //                 See Live
        //             </a>
        //             <a target="_blank" rel="noreferrer" className="cta-btn text-color-main" href="#!">
        //                 Source Code
        //             </a>
        //             </div>
        //         </div>
        //         <div className="col-lg-8 col-sm-12">
        //             <div className="project-wrapper__image">
        //             <a href="#!" target="_blank" rel="noreferrer">
        //                 <div data-tilt className="thumbnail rounded">
        //                 <img className="img-fluid" src="./assets/project.jpg" />
        //                 </div>
        //             </a>
        //             </div>
        //         </div>
        //         </div>
        //         {/* <!-- /END Project --> */}
        //     </div>
        //     </div>
        // </section>
        // {/* <!-- /END Projects Section -->

        // <!-- **** Contact Section **** --> */}
        // <section id="contact">
        //     <div className="container">
        //     <h2 className="section-title">Contact</h2>
        //     <div className="contact-wrapper">
        //         <p className="contact-wrapper__text">[mendesprivilege@gmail.com]</p>
        //         <a
        //         target="_blank" rel="noreferrer"
        //         className="cta-btn cta-btn--resume"
        //         href="mailto:mendesprivilege@gmail.com"
        //         >Call to Action</a>
        //     </div>
        //     </div>
        // </section>
        // {/* <!-- /END Contact Section -->

        // <!-- **** Footer Section **** --> */}
        // <footer className="footer navbar-static-bottom">
        //     <div className="container">
        //     <a href="#top" className="back-to-top">
        //         <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        //     </a>
        //     <div className="social-links">
        //         <a href="https://twitter.com/privilegemendes" target="_blank" rel="noreferrer">
        //         <i className="fa fa-twitter fa-inverse"></i>
        //         </a>
        //         <a href="#!" target="_blank" rel="noreferrer">
        //         <i className="fa fa-codepen fa-inverse"></i>
        //         </a>
        //         <a href="https://linkedin.com/in/privilegemendes" target="_blank" rel="noreferrer">
        //         <i className="fa fa-linkedin fa-inverse"></i>
        //         </a>
        //         <a href="https://github.com/privilegemendes" target="_blank" rel="noreferrer">
        //         <i className="fa fa-github fa-inverse"></i>
        //         </a>
        //     </div>

        //     <hr />

        //     {/* <!-- If you give me some credit, will be huge for me :) --> */}
            // <p className="footer__text">
            //     © 2020 - Template created by
            //     <a href="https://github.com/cobidev" target="_blank" rel="noreferrer"
            //     >Jacobo Martínez</a>, edited by <a href="https://github.com/privilegemendes" target="_blank" rel="noreferrer">Privilege Mendes</a>
            // </p>
        //     </div>
        // </footer>
        // {/* <!-- /END Footer Section --> */}
        // </body>
        // </html>
        );
    }
}

export default App;