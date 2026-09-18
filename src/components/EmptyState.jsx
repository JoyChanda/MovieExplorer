import React from 'react';
import { Film, RefreshCw } from 'lucide-react';
import './EmptyState.css';

const EmptyState = ({ searchQuery, onReset }) => {
  return (
    <div className="empty-state-container">
      <div className="empty-icon-box">
        <Film size={36} />
      </div>
      <h3 className="empty-title">No Shows Found</h3>
      <p className="empty-desc">
        We couldn't find any TV shows matching "<strong>{searchQuery}</strong>". Try checking for typos or search for another keyword.
      </p>
      {onReset && (
        <button className="reset-search-btn" onClick={onReset}>
          <RefreshCw size={16} />
          <span>Clear Search & Show All</span>
        </button>
      )}
    </div>
  );
};

export default EmptyState;
