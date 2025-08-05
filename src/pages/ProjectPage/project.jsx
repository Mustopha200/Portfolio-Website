import React from 'react';
import '../../pages/ProjectPage/project.css'
import Navbar from '../../components/navbar';
import Pic1 from '../../assets/land.png';
import Pic2 from '../../assets/icon.png';
import Pic4 from '../../assets/sign.png';
import Pic5 from '../../assets/login.png';
import Pic6 from '../../assets/calculator.png';
import Pic7 from '../../assets/ui.png';


const Project = () => {
  return (
    <>
    <Navbar/>
    <div className="projects-container">
      <header className="projects-header">
        <h1><span className="icon">▶</span> <b>Projects</b><span className="dot">.</span></h1>
      </header>

      <div className="projects-grid">
        <img src={Pic1} alt="Project 1" className="project-img1" />
        <img src={Pic2} alt="Project 2" className="project-img small" />
        <img src={Pic4} alt="Project 4" className="project-img" />
        <img src={Pic5} alt="Project 5" className="project-img" />
        <img src={Pic6} alt="Project 6" className="project-img" />
        <img src={Pic7} alt="Project 7" className="project-img" />
      


      </div>
    </div>
    </>
  );
};

export default Project;
