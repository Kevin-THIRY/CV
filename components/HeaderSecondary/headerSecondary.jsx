import React from 'react';
import './headerSecondary.css';

const HeaderTabsSecondary = () => {
  return (
    <div className="header-secondary-container">
      <div className="header-secondary-content">
        <div className="header-name">Kevin THIRY</div>
        <div className="header-title">Développeur informatique</div>
        <a
          href="/asset/CV_THIRY_Kevin.pdf"
          download
          className="header-cv-btn"
        >
          Télécharger le CV
        </a>
      </div>
      <div className="header-secondary-image"></div>
    </div>
  );
};

export default HeaderTabsSecondary;
