import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="navbar-content">
        {/* Brand Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🎬</span>
          <span className="logo-text">Movie<span className="highlight">Explorer</span></span>
        </Link>

        {/* Navigation Links */}
        <nav className="navbar-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Home
          </NavLink>
          <NavLink 
            to="/movies" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Movies
          </NavLink>
        </nav>

        {/* CTA Button */}
        <Link to="/movies" className="cta-btn">
          Explore Now
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
