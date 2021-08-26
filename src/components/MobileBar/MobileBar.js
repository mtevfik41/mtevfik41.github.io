import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import {FaGithub} from 'react-icons/all';

const MobileBar = ({isOpen, setIsOpen}) => {

  return (
      <div className="mobile-content-div">
        <ul className="mobile-list">
          <li className="mobile-list-item">
            <Link onClick={() => setIsOpen(!isOpen)} to="/"
                  className="mobile-list-item-link">
              Home
            </Link>
          </li>
          <li className="mobile-list-item">
            <Link onClick={() => setIsOpen(!isOpen)} to="/projects"
                  className="mobile-list-item-link">
              Projects
            </Link>
          </li>
          <li className="mobile-list-item">
            <Link onClick={() => setIsOpen(!isOpen)} to="/blog"
                  className="mobile-list-item-link">
              Blog
            </Link>
          </li>
          <li className="mobile-list-item">
            <Link onClick={() => setIsOpen(!isOpen)} to="/about-me"
                  className="mobile-list-item-link">
              About Me
            </Link>
          </li>
          <li className="mobile-list-item">
            <Link onClick={() => setIsOpen(!isOpen)} to="/contact-me"
                  className="mobile-list-item-link">
              Contact Me
            </Link>
          </li>
        </ul>
        <footer onClick={() => setIsOpen(!isOpen)} className="mobile-footer">
          <a className="mobile-footer-link" href="https://github.com/mtevfik41"
             target="_blank" rel="noreferrer">
            <FaGithub/> mtevfik41
          </a>
        </footer>
      </div>
  );
};

export default MobileBar;