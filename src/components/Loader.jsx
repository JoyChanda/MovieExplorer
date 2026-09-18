import React from 'react';
import './Loader.css';

const Loader = ({ message = 'Fetching movies from TVMaze...' }) => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p className="loader-text">{message}</p>
    </div>
  );
};

export default Loader;
