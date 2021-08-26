import React from 'react';
import {FaGithub} from 'react-icons/all';

const Footer = () => {
  return (
      <footer className="footer">
        <a href="https://github.com/mtevfik41/mtevfik41.github.io"
           target="_blank" rel="noreferrer" className="footer-text">
          <FaGithub/> Check this website @ Github
        </a>
      </footer>
  );
};

export default Footer;