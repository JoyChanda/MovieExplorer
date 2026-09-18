import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Sparkles, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background Gradient & Overlay */}
      <div className="hero-backdrop"></div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Tagline Badge */}
          <div className="hero-badge">
            <Sparkles size={16} className="badge-icon" />
            <span>Unlimited Entertainment</span>
          </div>

          {/* Hero Heading */}
          <h1 className="hero-title">
            DISCOVER <span className="gradient-text">MOVIES</span> & TV SHOWS
          </h1>

          {/* Hero Description */}
          <p className="hero-description">
            Explore and discover your favorite movies and TV shows from around the world. 
            Search titles, view details, ratings, cast, and more in real-time.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <Link to="/movies" className="hero-btn primary-btn">
              <span>Explore Now</span>
              <ArrowRight size={18} />
            </Link>
            <a href="#features" className="hero-btn secondary-btn">
              <Film size={18} />
              <span>Learn More</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Shows & Movies</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">HD Quality</span>
              <span className="stat-label">Details & Ratings</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">100% Free</span>
              <span className="stat-label">TVMaze API Powered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
