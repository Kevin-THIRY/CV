import React, { useState } from 'react';
import './header.css';

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { key: 'home', label: 'Home', subtitle: 'Welcome' },
    { key: 'about', label: 'About', subtitle: 'Who we are' },
    { key: 'services', label: 'Services', subtitle: 'What we do' },
    { key: 'contact', label: 'Contact', subtitle: 'Get in touch' },
  ];

  return (
    <div className="header-tabs-container">
      <div className="header-photo-wrapper">
        <img
          src="../asset/photo.png"
          alt="Profile"
          className="header-photo"
        />
      </div>
      {tabs.map(tab => (
        <div key={tab.key} className="header-tab-wrapper">
          <div className="header-tab-subtitle">{tab.subtitle}</div>
          <button
            className={`header-tab ${activeTab === tab.key ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default HeaderTabs;
