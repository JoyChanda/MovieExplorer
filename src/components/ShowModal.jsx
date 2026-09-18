import React, { useEffect } from 'react';
import { X, Star, Calendar, Clock, Tag } from 'lucide-react';
import { stripHtml, formatReleaseYear, getPosterImage } from '../utils/formatters';
import './ShowModal.css';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80';

const ShowModal = ({ show, onClose }) => {
  if (!show) return null;

  // Lock body scroll while modal is open & handle Escape key press
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const backdropUrl = show.image?.original || getPosterImage(show.image);
  const rating = show.rating?.average ? show.rating.average.toFixed(1) : 'N/A';
  const summaryText = stripHtml(show.summary);
  const genres = show.genres && show.genres.length > 0 ? show.genres : ['Drama'];

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = FALLBACK_IMAGE;
  };

  return (
    <div className="modal-overlay" onClick={handleBackdropClick} role="dialog" aria-modal="true">
      <div className="modal-card">
        {/* Top Header & Close Button */}
        <button className="modal-close-top" onClick={onClose} aria-label="Close Modal">
          <X size={22} />
        </button>

        {/* Modal Backdrop Banner */}
        <div className="modal-backdrop-container">
          <img 
            src={backdropUrl} 
            alt={show.name} 
            className="modal-backdrop-img" 
            onError={handleImageError}
          />
          <div className="modal-backdrop-gradient"></div>
        </div>

        {/* Modal Main Body */}
        <div className="modal-body">
          <h2 className="modal-title">{show.name}</h2>

          {/* Quick Info Stats */}
          <div className="modal-stats-bar">
            <span className="modal-stat-pill rating-pill">
              <Star size={16} fill="#facc15" color="#facc15" />
              <span>Rating: {rating}</span>
            </span>
            <span className="modal-stat-pill">
              <Calendar size={16} />
              <span>Release: {formatReleaseYear(show.premiered)}</span>
            </span>
            {show.runtime && (
              <span className="modal-stat-pill">
                <Clock size={16} />
                <span>{show.runtime} mins</span>
              </span>
            )}
            {show.status && (
              <span className="modal-stat-pill status-pill">
                <span>{show.status}</span>
              </span>
            )}
          </div>

          {/* Genres Badge List */}
          <div className="modal-genres">
            <Tag size={16} className="genre-icon" />
            <div className="genre-badges">
              {genres.map((genre, idx) => (
                <span key={idx} className="genre-badge">{genre}</span>
              ))}
            </div>
          </div>

          {/* Show Overview / Summary */}
          <div className="modal-section">
            <h3 className="section-heading">Overview</h3>
            <p className="overview-text">{summaryText}</p>
          </div>

          {/* Additional Info Metadata Grid */}
          <div className="modal-meta-grid">
            {show.language && (
              <div className="meta-block">
                <span className="meta-label">Language</span>
                <span className="meta-value">{show.language}</span>
              </div>
            )}
            {show.network?.name && (
              <div className="meta-block">
                <span className="meta-label">Network / Channel</span>
                <span className="meta-value">{show.network.name}</span>
              </div>
            )}
            {show.schedule?.days?.length > 0 && (
              <div className="meta-block">
                <span className="meta-label">Air Days</span>
                <span className="meta-value">{show.schedule.days.join(', ')}</span>
              </div>
            )}
          </div>

          {/* Modal Action Buttons */}
          <div className="modal-footer-actions">
            <button className="modal-close-bottom" onClick={onClose}>
              <X size={18} />
              <span>Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowModal;
