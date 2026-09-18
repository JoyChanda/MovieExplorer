import React from 'react';
import { SatelliteRing } from './loading-ui/satellite-ring';
import './Loader.css';

const Loader = ({ message = 'Fetching movies from TVMaze...' }) => {
  return (
    <div className="loader-container">
      <SatelliteRing size={56} />
      <p className="loader-text">{message}</p>
    </div>
  );
};

export default Loader;
