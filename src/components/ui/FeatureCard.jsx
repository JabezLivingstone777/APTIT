import React from 'react';
import './FeatureCard.css';

const FeatureCard = ({ title, description, image }) => {
  return (
    <div className="feature-card">
      <div className="feature-img-container">
        <div className="feature-img-wrapper">
          <img src={image} alt={title} className="feature-img-content" />
          <div className="feature-img-overlay"></div>
        </div>
        <div className="feature-description">
          <span className="feature-title font-orbitron">{title}</span>
          <p className="feature-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
