import React from 'react';
import {HiArrowDown} from 'react-icons/all';

const HeroSection = () => {
  return (
      <div className="hero-section">
        <div className="texts">
          <p className="texts-header">
            I'm a passionate software engineering student who is a fan of
            continous learning.
          </p>
          <p className="texts-content">
            I have experience in developing both backend and frontend systems, I
            love contributing to Open Source, following the trends of evolving
            technology and science.
          </p>
          <p className="texts-content">
            I love being part of development of Web Technologies. <br/>I am also
            taking pleasure to interested in Machine Learning and Artificial
            Intelligence as a hobby.
          </p>
        </div>
        <div className="hero-section-logo">
          <HiArrowDown className="hero-logo"/>
          <HiArrowDown className="hero-logo-mobile"/>
        </div>
      </div>
  );
};

export default HeroSection;