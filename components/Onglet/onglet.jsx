import React, { useState } from 'react';
import './onglet.css';

const Onglet1 = () => {
  const [activeTab, setActiveTab] = useState('terms');
  const baseStyle = "animated-paragraph";

  const tabs = [
    { key: 'terms', label: 'Terms & Conditions', subtitle: 'Rules & Stuff' },
    { key: 'privacy', label: 'Privacy Policy', subtitle: 'Your Data' },
    { key: 'refund', label: 'Refund Policy', subtitle: 'Money Back' },
    { key: 'faq', label: 'FAQ', subtitle: 'Got Questions?' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'terms':
        return (
            <div className="tab-content">
                <h2>Terms & Conditions</h2>
                <p className={baseStyle}>Welcome to our terms of service, where we outline your rights and responsibilities.</p>
                <p className={baseStyle}>These terms govern your use of our platform, and it's crucial you understand them.</p>
                <p className={baseStyle}>Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.

                  
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.

                  
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                  Breach of these terms may result in suspension or termination of your account.
                </p>
            </div>
        );
      case 'privacy':
        return (
            <div className="tab-content">
                <h2>Privacy Policy</h2>
                <p className={baseStyle}>Your privacy is our top priority; we never share your data without consent.</p>
                <p className={baseStyle}>We use advanced encryption to keep your information safe and secure.</p>
                <p className={baseStyle}>You can request to see, edit, or delete your data at any time.</p>
            </div>
        );
      case 'refund':
        return (
            <div className="tab-content">
                <h2>Refund Policy</h2>
                <p className={baseStyle}>We offer refunds within 30 days of purchase, no questions asked.</p>
                <p className={baseStyle}>Refunds may take up to 7 business days to process.</p>
                <p className={baseStyle}>Please contact support if you experience any issues.</p>
            </div>
        );
      case 'faq':
        return (
            <div className="tab-content">
                <h2>FAQ</h2>
                <p className={baseStyle}>Q: How do I reset my password?<br/>A: Use the "Forgot Password" link on login.</p>
                <p className={baseStyle}>Q: Can I upgrade my subscription?<br/>A: Yes, via your account settings.</p>
                <p className={baseStyle}>Q: How do I contact support?<br/>A: Email support@example.com anytime.</p>
            </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="onglet-container">
      <div className="onglet-tabs">
        {tabs.map((tab) => (
          <div key={tab.key} className="onglet-tab-wrapper">
            <div className="onglet-tab-subtitle">{tab.subtitle}</div>
            <button
              className={`onglet-tab ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          </div>
        ))}
      </div>
      <div className="onglet-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Onglet1;
