import React from 'react';
import './service.css';
import Navbar from "../../components/navbar";

const Service = () => {
  return (
    <>
    <Navbar/>
    <div className="services-container">
      <header className="services-header">
        <h1 className="services-title"> 
          <span className="icon">▶</span> <b>Services</b><span className="dot">.</span>
        </h1>
      </header>

      <div className="services-card">
        <div className="services-column">
          <h2>Web Design</h2>
          <p>UI/UX Design</p>
          <p>Responsive Design</p>
          <p>Wire Framing</p>
          <p>User Research</p>
        </div>

        <div className="services-column">
          <h2>Frontend</h2>
          <p>Html</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>React JS</p>
        </div>

        <div className="services-column">
          <h2>AI Content</h2>
          <p>Video Production</p>
          <p>Youtube automation</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Service;
