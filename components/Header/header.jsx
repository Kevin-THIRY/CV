import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const HeaderTabs = () => {
  const tabs = [
    { label: 'Home', path: '/' },
    { label: 'Experiences', path: '/experiences' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <div className="header-tabs-container">
      <div className="header-profile">
        <img
          src="/asset/logo_site.jpg"
          alt="Profile"
          className="header-photo"
        />
        <div className="header-text">
          <div className="header-name">Portfolio</div>
          <div className="header-title">???</div>
        </div>
      </div>
      <div className="header-tabs">
        {tabs.map((tab, index) => (
          <Link key={index} to={tab.path} className="header-tab-box">
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeaderTabs;
