import React, {useEffect, useState} from 'react';
import Navbar from '../Navbar/Navbar';
import data from '../ProjectsInHomeSection/allProjects.json';
import ProjectsCardHome from '../ProjectsInHomeSection/ProjectsCardHome';
import Footer from '../Footer/Footer';

const Projects = () => {

  const [dataf, setDataf] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await fetch(
        'https://api.github.com/users/mtevfik41/repos?per_page=100&sort=created');
    const dae = await res.json();
    setDataf(dae);
  };
  console.log(dataf);
  return (
      <div className="main-home">
        <Navbar/>
        <div className="projects-description">
          <h1 style={{marginTop: '20px'}}
              className="projects-description-header">
            <span
                style={{color: '#9FD3C7'}}>$</span> Projects
          </h1>
        </div>
        <div className="projects-in-home">
          {data
              .map(dat => <ProjectsCardHome key={dat.id}
                                            header={dat.name}
                                            description={dat.description}
                                            url={dat.html_url}/>)}
        </div>
        <Footer/>
      </div>
  );
};

export default Projects;