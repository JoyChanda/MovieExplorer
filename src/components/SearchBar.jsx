import React from 'react';
import { Search, X } from 'lucide-react';
import './SearchBar.css';

const SearchBar = ({ searchQuery, setSearchQuery, onSearchSubmit, onClear }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit(searchQuery);
    }
  };

  return (
    <form className="search-bar-form" onSubmit={handleSubmit}>
      <div className="search-input-wrapper">
        <Search size={20} className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search for a show or movie title (e.g. Girls, Batman, Office)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search movies"
        />
        {searchQuery && (
          <button 
            type="button" 
            className="clear-btn" 
            onClick={onClear}
            aria-label="Clear search input"
          >
            <X size={18} />
          </button>
        )}
      </div>
      <button type="submit" className="search-submit-btn">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
