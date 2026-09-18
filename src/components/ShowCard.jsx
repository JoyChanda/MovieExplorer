import React from 'react';
import { Star, Calendar, Eye, ArrowRight } from 'lucide-react';
import { formatReleaseYear, getPosterImage } from '../utils/formatters';
import './ShowCard.css';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80';

const ShowCard = ({ show, onSelectShow }) => {
  const posterUrl = getPosterImage(show.image);
  const releaseYear = formatReleaseYear(show.premiered);
  const rating = show.rating?.average ? show.rating.average.toFixed(1) : 'N/A';

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = FALLBACK_IMAGE;
  };

  return (
    <div className="show-card">
      <div className="poster-container">
        <img 
          src={posterUrl} 
          alt={show.name} 
          className="poster-image"
          loading="lazy" 
          onError={handleImageError}
        />
        {show.rating?.average && (
          <div className="rating-badge">
            <Star size={13} fill="#facc15" color="#facc15" />
            <span>{rating}</span>
          </div>
        )}
      </div>

      <div className="show-card-body">
        <h3 className="show-card-title" title={show.name}>
          {show.name}
        </h3>

        <div className="show-card-meta">
          <span className="meta-item">
            <Star size={14} className="star-icon" /> {rating}
          </span>
          <span className="meta-bullet">•</span>
          <span className="meta-item">
            <Calendar size={14} /> {releaseYear}
          </span>
        </div>

        <button 
          className="see-details-btn" 
          onClick={() => onSelectShow(show)}
        >
          <Eye size={16} className="btn-icon" />
          <span>See Details</span>
          <ArrowRight size={15} className="btn-arrow" />
        </button>
      </div>
    </div>
  );
};

export default ShowCard;
