import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import {FaArrowCircleUp, FaLinkedin, FaTwitter, FiMail} from 'react-icons/all';

const ContactMe = () => {
  return (
      <div className="main-home" style={{overflow: 'hidden'}}>
        <Navbar/>
        <div className="contact-me-section">
          <h1 className="contact-me-section-header">You can contact me via;</h1>
          <div className="contact-links-group">
            <a href="https://www.linkedin.com/in/tevfikkadan/" target="_blank"
               rel="noreferrer" className="contact-link">
              <FaLinkedin/>&nbsp; LinkedIn
            </a>
            <a href="https://twitter.com/mtevfik41" target="_blank"
               rel="noreferrer" className="contact-link">
              <FaTwitter/>&nbsp; Twitter
            </a>
            <a href="mailto:mtevfik41@gmail.com" target="_blank"
               rel="noreferrer" className="contact-link contact-link-mail">
              <FiMail/>&nbsp; Email
              <span className="contact-link-span">
                mtevfik41@gmail.com
              </span>
            </a>
          </div>
        </div>
        <Footer/>
        <a href="#navbar" className="stable">
          <FaArrowCircleUp/>
        </a>
      </div>
  );
};
export default ContactMe;