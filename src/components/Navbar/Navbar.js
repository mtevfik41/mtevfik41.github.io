import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/all';
import MobileBar from '../MobileBar/MobileBar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <nav className="navbar" id="navbar">
        <h1 className="navbar-heading">
          <a href="https://github.com/mtevfik41" target="_blank"
             rel="noreferrer" className="navbar-heading-link">
            <div className="big-size-span">
              <span style={{color: '#9FD3C7'}}>$</span>
              <span style={{color: '#ECECEC'}}> Welcome to my page,</span>
              <span style={{color: '#C9FDD7'}}> I'm Mustafa.</span>
            </div>
            <span className="mobile-adaptive" style={{color: '#ECECEC'}}>$ MUSTAFA</span>
          </a>
        </h1>
        <div className="mobile-icon">
          {!isOpen ? <FaBars onClick={() => setIsOpen(!isOpen)}/> : <FaTimes
              onClick={() => setIsOpen(!isOpen)} style={{zIndex: '999'}}/>}
          {isOpen ? <MobileBar setIsOpen={setIsOpen} isOpen={isOpen}/> :
              <Fragment/>}
        </div>
        <ul className="navbar-list">
          <li className="navbar-list-item">
            <Link to="/" className="navbar-list-item-link">
              <span className="fromLeft">Home</span>
            </Link>
          </li>
          <li className="navbar-list-item">
            <Link to="projects" className="navbar-list-item-link">
              <span className="fromLeft">Projects</span>
            </Link>
          </li>
          <li className="navbar-list-item">
            <Link to="/blog" className="navbar-list-item-link">
              <span className="fromLeft">Blog</span>
            </Link>
          </li>
          <li className="navbar-list-item">
            <Link to="/about-me" className="navbar-list-item-link">
              <span className="fromLeft">About Me</span>
            </Link>
          </li>
          <li className="navbar-list-item">
            <Link to="/contact-me" className="navbar-list-item-link">
              <span className="fromLeft">Contact Me</span>
            </Link>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;