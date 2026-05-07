import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand">Leena Sri K</NavLink>
        
        <button className="hamburger" aria-label="Menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className="main-nav" role="navigation" aria-label="Main Navigation">
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <i className="fas fa-home"></i>
            <span>Home</span>
          </NavLink>
          <NavLink to="/profile" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <i className="fas fa-user"></i>
            <span>Profile</span>
          </NavLink>
          <NavLink to="/work" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <i className="fas fa-code"></i>
            <span>Work</span>
          </NavLink>
          <NavLink to="/credentials" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <i className="fas fa-award"></i>
            <span>Credentials</span>
          </NavLink>
          <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-link resume">
            <i className="fas fa-file-pdf"></i>
            <span>Resume</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
