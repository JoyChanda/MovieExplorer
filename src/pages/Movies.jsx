import React, { useState, useEffect } from 'react';
import { fetchAllShows } from '../services/tvmazeApi';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import './Movies.css';

const Movies = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch initial shows on component mount
  const loadShows = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchAllShows();
      setShows(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch shows from server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadShows();
  }, []);

  return (
    <div className="movies-page">
      {/* Movies Page Header */}
      <div className="movies-header">
        <div className="movies-header-container">
          <h1 className="movies-title">Explore <span className="highlight">TV Shows</span></h1>
          <p className="movies-subtitle">Browse through popular TV series, top ratings, and release details.</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="movies-container">
        {/* Loading State */}
        {loading && <Loader message="Fetching TV shows from TVMaze database..." />}

        {/* Error State */}
        {!loading && error && <ErrorMessage message={error} onRetry={loadShows} />}

        {/* Shows Count & Results */}
        {!loading && !error && (
          <>
            <div className="results-info">
              <h2>All Available Shows</h2>
              <span className="results-badge">{shows.length} Shows Found</span>
            </div>

            {/* Grid display placeholder */}
            <div className="shows-grid">
              {shows.slice(0, 20).map((show) => (
                <div key={show.id} className="show-card-preview">
                  <div className="poster-wrapper">
                    <img 
                      src={show.image?.medium || 'https://via.placeholder.com/210x295?text=No+Poster'} 
                      alt={show.name}
                      loading="lazy" 
                    />
                    {show.rating?.average && (
                      <span className="rating-tag">⭐ {show.rating.average}</span>
                    )}
                  </div>
                  <div className="card-info">
                    <h3 className="show-name">{show.name}</h3>
                    <p className="show-meta">
                      📅 {show.premiered ? show.premiered.substring(0, 4) : 'N/A'} • {show.genres?.[0] || 'Drama'}
                    </p>
                    <button className="details-btn">See Details</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Movies;
