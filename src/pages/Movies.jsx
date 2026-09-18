import React, { useState, useEffect } from 'react';
import { fetchAllShows, searchShows } from '../services/tvmazeApi';
import SearchBar from '../components/SearchBar';
import ShowCard from '../components/ShowCard';
import ShowModal from '../components/ShowModal';
import { SatelliteRing } from '../components/loading-ui/satellite-ring';
import ErrorMessage from '../components/ErrorMessage';
import EmptyState from '../components/EmptyState';
import './Movies.css';

const Movies = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeQuery, setActiveQuery] = useState('');
  const [selectedShow, setSelectedShow] = useState(null);

  // Fetch initial shows or handle search query
  const handleFetchShows = async (query = '') => {
    try {
      setLoading(true);
      setError(null);
      let data = [];
      if (query && query.trim() !== '') {
        data = await searchShows(query);
      } else {
        data = await fetchAllShows();
      }
      setShows(data);
      setActiveQuery(query);
    } catch (err) {
      setError(err.message || 'Failed to communicate with TVMaze server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchShows();
  }, []);

  const handleSearchSubmit = (query) => {
    handleFetchShows(query);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    handleFetchShows('');
  };

  const handleOpenModal = (show) => {
    setSelectedShow(show);
  };

  const handleCloseModal = () => {
    setSelectedShow(null);
  };

  return (
    <div className="movies-page">
      {/* Movies Page Header with Search Bar */}
      <div className="movies-header">
        <div className="movies-header-container">
          <h1 className="movies-title">Explore <span className="highlight">TV Shows</span></h1>
          <p className="movies-subtitle">Search titles, ratings, genres, and details in real time.</p>

          <div className="search-bar-wrapper">
            <SearchBar 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSearchSubmit={handleSearchSubmit}
              onClear={handleClearSearch}
            />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="movies-container">
        {/* Loading State */}
        {loading && (
          <div className="movies-loading">
            <SatelliteRing size={56} />
            <p className="movies-loading-text">
              {activeQuery ? `Searching for "${activeQuery}"...` : 'Fetching TV shows database...'}
            </p>
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <ErrorMessage 
            message={error} 
            onRetry={() => handleFetchShows(activeQuery)} 
          />
        )}

        {/* Empty Search Results */}
        {!loading && !error && shows.length === 0 && (
          <EmptyState 
            searchQuery={activeQuery} 
            onReset={handleClearSearch} 
          />
        )}

        {/* Shows Results Grid */}
        {!loading && !error && shows.length > 0 && (
          <>
            <div className="results-info">
              <h2>
                {activeQuery ? (
                  <>Search Results for "<span className="query-highlight">{activeQuery}</span>"</>
                ) : (
                  'All Popular Shows'
                )}
              </h2>
              <span className="results-badge">{shows.length} {shows.length === 1 ? 'Show' : 'Shows'} Found</span>
            </div>

            <div className="shows-grid">
              {shows.map((show) => (
                <ShowCard 
                  key={show.id} 
                  show={show} 
                  onSelectShow={handleOpenModal} 
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Show Details Modal Overlay */}
      {selectedShow && (
        <ShowModal 
          show={selectedShow} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
};

export default Movies;
