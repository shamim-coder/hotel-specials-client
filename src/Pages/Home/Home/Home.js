import React from "react";
import About from "../About/About";
import Accommodation from "../Accommodation/Accommodation/Accommodation";
import Blog from "../Blog/Blog";
import Facilities from "../Facilities/Facilities/Facilities";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <main>
            <Accommodation></Accommodation>
            <Facilities></Facilities>
            <About></About>
            <Testimonials></Testimonials>
            <Blog></Blog>
        </main>
    );
};

export default Home;
