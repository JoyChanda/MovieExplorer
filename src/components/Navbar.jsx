import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Film, Home as HomeIcon, Sparkles, Compass } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="navbar-accent-line"></div>
      <div className="navbar-content">
        {/* Brand Logo */}
        <Link to="/" className="navbar-logo">
          <div className="logo-icon-wrapper">
            <Film size={20} className="logo-icon" />
          </div>
          <span className="logo-text">
            Movie<span className="highlight">Explorer</span>
          </span>
        </Link>

        {/* Navigation Links with Icons */}
        <nav className="navbar-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            <HomeIcon size={16} />
            <span>Home</span>
          </NavLink>
          <NavLink 
            to="/movies" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            <Compass size={16} />
            <span>Movies</span>
          </NavLink>
        </nav>

        {/* Modern Animated CTA Button */}
        <Link to="/movies" className="cta-btn">
          <Sparkles size={16} className="cta-icon-left" />
          <span>Explore Now</span>
          <span className="btn-shimmer"></span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
