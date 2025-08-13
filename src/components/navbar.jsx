import React from 'react';
import {Link} from 'react-router-dom'
import './navbar.css';

const navbar = () => {
  return (
      <div className="navbar">
        <h1><span className="logo-bold">Toffa</span> <span className="logo-light">DEVS</span></h1>
        <ul className="nav-links">
          <Link to="/"><li>Home</li></Link> 
          <Link to="/about"><li>About</li></Link>
          <Link to="/service"><li>Service</li></Link>
          <Link to="/project"><li>Project</li></Link>
      </ul>
      </div>
    
  );
};

export default navbar;