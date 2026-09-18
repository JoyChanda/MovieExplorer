import React from 'react';
import { Star, Calendar } from 'lucide-react';
import { formatReleaseYear, getPosterImage } from '../utils/formatters';
import './ShowCard.css';

const ShowCard = ({ show, onSelectShow }) => {
  const posterUrl = getPosterImage(show.image);
  const releaseYear = formatReleaseYear(show.premiered);
  const rating = show.rating?.average ? show.rating.average.toFixed(1) : 'N/A';

  return (
    <div className="show-card">
      <div className="poster-container">
        <img 
          src={posterUrl} 
          alt={show.name} 
          className="poster-image"
          loading="lazy" 
        />
        {show.rating?.average && (
          <div className="rating-badge">
            <Star size={14} fill="#facc15" color="#facc15" />
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
          See Details
        </button>
      </div>
    </div>
  );
};

export default ShowCard;
