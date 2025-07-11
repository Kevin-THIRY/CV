import React from 'react';
import './card.css';

const Card = ({ photo, name, profession, text }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={photo} alt={name} className="card-photo" />
        <h2 className="card-name">{name}</h2>
      </div>
      <div className="card-profession">{profession}</div>
      <p className="card-text">{text}</p>
    </div>
  );
};

export default Card;
