import React from 'react';
import './satellite-ring.css';

export const SatelliteRing = ({ className = '', size = 56 }) => {
  return (
    <div 
      className={`satellite-ring-container ${className}`} 
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <div className="satellite-spinner">
        <div className="ring-outer"></div>
        <div className="ring-inner"></div>
        <div className="ring-core"></div>
      </div>
    </div>
  );
};
