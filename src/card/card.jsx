import React from 'react';
import './card.css';

const Card = ({ photo, name, profession, text, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="card">
      <img src={photo} alt={name} className="card-photo" />
      <div className="card-profession">{profession}</div>
      <p className="card-text">{text}</p>
    </a>
  );
};

export default Card;
