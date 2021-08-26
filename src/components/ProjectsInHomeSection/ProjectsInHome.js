import React, {useState} from 'react';
import {FaArrowAltCircleDown} from 'react-icons/all';
import ProjectsCardHome from './ProjectsCardHome';

import datas from './projectsHomeData.json';

const ProjectsInHome = () => {
  const [counter, setCounter] = useState(6);
  const handleClick = () => {
    setCounter(counter + 3);
  };

  return (
      <div className="projects-in-home-section">
        <div className="projects-description">
          <h1 className="projects-description-header"><span
              style={{color: '#9FD3C7'}}>$</span> Projects</h1>
          <p className="projects-description-text">
            In this section you can see my main projects. For more, you can
            visit the projects page.
          </p>
        </div>
        <div className="projects-in-home">
          {datas.slice(0, counter)
              .map(data => <ProjectsCardHome key={data.id}
                                             header={data.projectName}
                                             description={data.projectDescription}
                                             url={data.url}/>)}
        </div>
        {counter < datas.length &&
        <button onClick={handleClick} className="see-more-tag">See More &nbsp;
          <FaArrowAltCircleDown/></button>}
      </div>
  );
};

export default ProjectsInHome;