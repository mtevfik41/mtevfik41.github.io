import React from 'react';
import {FaGithub, FaHackerrank, FaLinkedin} from 'react-icons/all';

const ProfilesInHome = () => {
  return (
      <div className="profiles-in-home">
        <div className="profiles-in-home-group">
          <h1 className="profiles-in-home-group-h1">
            <span style={{color: '#9FD3C7'}}>$</span> Profiles
          </h1>
          <p className="profiles-in-home-group-text">
            In this section you can see my main profiles. For more, you can
            visit the about me page.
          </p>
        </div>
        <div className="profiles-link-group">
          <a href="https://github.com/mtevfik41" target="_blank"
             rel="noreferrer" className="profiles-link">
            <FaGithub/> Github
          </a>
          <a href="https://www.linkedin.com/in/tevfikkadan/" target="_blank"
             rel="noreferrer" className="profiles-link">
            <FaLinkedin/> LinkedIn
          </a>
          <a href="https://www.hackerrank.com/mtevfik41" target="_blank"
             rel="noreferrer" className="profiles-link">
            <FaHackerrank/> Hackkerrank
          </a>
        </div>
      </div>
  );
};

export default ProfilesInHome;