import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Heart, Film } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-icon">🎬</span>
              <span className="logo-text">Movie<span className="highlight">Explorer</span></span>
            </Link>
            <p className="footer-desc">
              Your ultimate destination for discovering television shows, cast information, ratings, and genre collections powered by TVMaze API.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-group">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/movies">Browse Movies & Shows</Link></li>
            </ul>
          </div>

          {/* API Credit & Info */}
          <div className="footer-links-group">
            <h4 className="footer-heading">Powered By</h4>
            <p className="api-credit">
              Data sourced live from <a href="https://www.tvmaze.com/api" target="_blank" rel="noopener noreferrer">TVMaze API</a>.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            © 2026 <strong>MovieExplorer</strong>. All rights reserved.
          </p>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a href="https://www.tvmaze.com" target="_blank" rel="noopener noreferrer" aria-label="Website">
              <Globe size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
