import React from "react";

import Hero from "./Hero";
import Problem from "./Problem";
import Solution from "./Solution";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import CTA from "./CTA";

const Home = () => {

    return (
        <div className="home">
            <Hero />
            <div className="content-home">
            <Problem />
            <Solution />
            <AboutMe />
            <CTA />
            </div>
            <Footer />
        </div>
    )
}

export default Home;