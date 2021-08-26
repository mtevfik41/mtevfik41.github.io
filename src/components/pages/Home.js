import React from 'react';
import Navbar from '../Navbar/Navbar';

import HeroSection from '../HeroSectionHome/HeroSection';
import ProjectsInHome from '../ProjectsInHomeSection/ProjectsInHome';
import Footer from '../Footer/Footer';
import BlogInHome from '../BlogInHomeSection/BlogInHome';
import {FaArrowCircleUp} from 'react-icons/all';
import '../App.css';

const Home = () => {

  return (
      <div className="main-home">
        <Navbar/>
        <HeroSection/>
        <ProjectsInHome/>
        <BlogInHome/>
        <Footer/>
        <a href="#navbar" className="stable">
          <FaArrowCircleUp/>
        </a>
      </div>
  );
};

export default Home;