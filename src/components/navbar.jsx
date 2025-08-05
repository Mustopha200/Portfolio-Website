import React from 'react';
import {Link} from 'react-router-dom'
import './navbar.css';

const navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-bold">Toffa</span> <span className="logo-light">DEVS</span>
      </div>
      <ul className="nav-links">
       <Link to="/"><li className="active">Home</li></Link>
       <Link to="/about"><li className="active">About</li></Link>
       <Link to="/service"><li className="active">Service</li></Link>
       <Link to="/project"><li className="active">Projects</li></Link>
      </ul>
      <div className="nav-icon">😎</div> 
    </nav>
  );
};

export default navbar;