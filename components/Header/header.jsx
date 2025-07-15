import React from 'react';
import './header.css';

const HeaderTabs = () => {
  const tabs = ['Home', 'About', 'Services', 'Contact'];

  return (
    <div className="header-tabs-container">
      <div className="header-photo-wrapper">
        <img
          src="components/asset/photo.png"
          alt="Profile"
          className="header-photo"
        />
      </div>
      <div className="header-tabs">
        {tabs.map((tab, index) => (
          <div key={index} className="header-tab-box">
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderTabs;
