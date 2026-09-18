import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Film, Home as HomeIcon, Sparkles, Compass } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <>
      <header className="navbar-container">
        <div className="navbar-accent-line"></div>
        <div className="navbar-content">
          {/* Brand Logo */}
          <Link to="/" className="navbar-logo" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="logo-icon-wrapper">
              <Film size={20} className="logo-icon" />
            </div>
            <span className="logo-text">
              Movie<span className="highlight">Explorer</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="navbar-links desktop-only">
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

          {/* Desktop CTA Button */}
          <div className="navbar-right desktop-only">
            <Link to="/movies" className="cta-btn">
              <Sparkles size={16} className="cta-icon-left" />
              <span>Explore Now</span>
              <span className="btn-shimmer"></span>
            </Link>
          </div>

          {/* Animated Mobile Hamburger Toggle Button */}
          <button 
            className={`hamburger-toggle-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="hamburger-icon">
              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
            </div>
          </button>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-drawer-links">
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="mobile-nav-icon">
                <HomeIcon size={20} />
              </div>
              <span>Home</span>
            </NavLink>
            
            <NavLink 
              to="/movies" 
              className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="mobile-nav-icon">
                <Compass size={20} />
              </div>
              <span>Movies</span>
            </NavLink>

            <div className="mobile-drawer-cta">
              <Link 
                to="/movies" 
                className="cta-btn mobile-cta-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Sparkles size={18} className="cta-icon-left" />
                <span>Explore Now</span>
                <span className="btn-shimmer"></span>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Backdrop overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-backdrop" 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
      )}
    </>
  );
};

export default Navbar;


