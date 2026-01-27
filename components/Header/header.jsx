import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const HeaderTabs = () => {
  const tabs = [
    { label: 'Home', path: '/' },
    { label: 'Experiences', path: '/experiences' },
    { label: 'Contact', path: '/contact' },
    { label: 'Passion', path: '/passions' }
  ];

  const [theme, setTheme] = useState('light');

  // Charger le thème au démarrage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Appliquer le thème quand il change
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="header-tabs-container">
      {/* <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode" >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button> */}
      <button className={`theme-toggle ${theme === 'dark' ? 'dark' : ''}`} onClick={toggleTheme} aria-label="Toggle dark mode">
        <span className="toggle-knob"></span>
      </button>
      <div className="header-profile">
        <img
          src="/asset/logo_site.jpg"
          alt="Profile"
          className="header-photo"
        />
        <div className="header-text">
          <div className="header-name">CV Numérique</div>
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
