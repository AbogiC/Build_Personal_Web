import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import CompanySection from "../components/Company-Section/Company";

import AboutUs from "../components/About-Us/AboutUs";
import Courses from "../components/Courses-Section/Courses";
import ChooseUs from "../components/Choose-Us/ChooseUs";
import Features from "../components/Feature-Section/Feaetures";
import FreeCourse from "../components/Free-Course-Section/FreeCourse";

import Testimonial from "../components/Testimonial/Testimonial";

import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return (
        <Fragment>
            <Header />
            <HeroSection />
            <CompanySection />

            <AboutUs />
            <Courses />
            <ChooseUs />
            <Features />
            <FreeCourse />
            
            <Testimonial />

            <Newsletter />
            <Footer />
        </Fragment>
    );
};

export default Home;