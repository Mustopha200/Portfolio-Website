import React from 'react';
import '../../pages/AboutPage/About.css';
import Profile from '../../assets/me.png'
import Navbar from '../../components/navbar';

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about-container">

      <section className="about-content">
        <div className="about-text">
          <div className="together">
          <h1><span className="arrow">▶</span> About me<span className="highlight">.</span></h1>
          <p>I am a passionate Frontend Developer committed to crafting engaging <br></br>and user-friendly digital experiences. With a keen eye for design,<br></br>
          I transform ideas into responsive and visually appealing websites.</p>
          <h2><span className="arrow">▶</span> Skills<span className="highlight">.</span></h2>
          </div>
          <ul className="skills-list">
            <div>
              <li>✔ UI/UX Design</li>
              <li>✔ Web Design and Dev</li>
              <li>✔ AI video automation</li>
              <li>✔ Graphics Design</li>
            </div>
            <div>
              <li>✔ Effective Communication</li>
              <li>✔ Leadership Skills</li>
              <li>✔ Project Management</li>
              <li>✔ Microsoft Office Suite</li>
            </div>
          </ul>
        </div>
        <div className="about-image">
          <img src={Profile} alt="profile" />
        </div>
      </section>
    </div>
    </>
  );
};

export default About;
