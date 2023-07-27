import React from "react";
import '../../Styles/home.css';

import Hero from "./Hero";
import Problem from "./Problem";
import Solution from "./Solution";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

const Home = () => {

    return (
        <div className="home">
            <Hero />
            <Problem />
            <Solution />
            <AboutMe />
            <Hero />
            <Footer />
        </div>
    )
}

export default Home;