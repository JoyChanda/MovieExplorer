import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import './ErrorMessage.css';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="error-container">
      <div className="error-icon-wrapper">
        <AlertTriangle size={32} />
      </div>
      <h3 className="error-title">Unable to Load Shows</h3>
      <p className="error-desc">{message || 'Something went wrong while communicating with the TVMaze API.'}</p>
      {onRetry && (
        <button className="retry-btn" onClick={onRetry}>
          <RefreshCw size={16} />
          <span>Try Again</span>
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
