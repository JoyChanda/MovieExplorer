import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { Search, Star, Info, Tv } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Banner Section */}
      <Hero />

      {/* Features Showcase Section */}
      <section className="features-section" id="features">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Why Choose <span className="highlight">MovieExplorer</span></h2>
            <p className="section-subtitle">Everything you need to discover your next binge-worthy show.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Search size={24} className="feature-icon" />
              </div>
              <h3>Instant Title Search</h3>
              <p>Search through thousands of television shows instantly with accurate query suggestions.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Star size={24} className="feature-icon" />
              </div>
              <h3>Ratings & Release Info</h3>
              <p>Get up-to-date star ratings, premiere dates, runtime, and network details for every show.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Info size={24} className="feature-icon" />
              </div>
              <h3>Interactive Details Modal</h3>
              <p>Click any movie card to reveal high-resolution backdrops, plot summaries, genres, and cast.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Tv size={24} className="feature-icon" />
              </div>
              <h3>Responsive Design</h3>
              <p>Seamlessly optimized for desktop, tablet, and mobile viewing with ultra-fast loads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="home-cta-section">
        <div className="cta-box">
          <h2>Ready to Start Exploring?</h2>
          <p>Browse through hundreds of high-rated shows right now.</p>
          <Link to="/movies" className="cta-box-btn">
            Browse All Shows
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
