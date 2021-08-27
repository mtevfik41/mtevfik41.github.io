import React from 'react';
import {FaGithub} from 'react-icons/all';

const ProjectsCardHome = ({header, description, url}) => {
  return (
      <div className="projects-in-home-card">
        <h1 className="project-header">{header}</h1>
        <p className="project-description">{description.substr(0, 115)}...</p>
        <a href={url} target="_blank" rel="noreferrer" className="project-link">View
          on &nbsp;<FaGithub/></a>
      </div>
  );
};

export default ProjectsCardHome;