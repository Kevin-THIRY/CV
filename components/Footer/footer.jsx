import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3>Contact</h3>
        <p>Email: monemail@example.com</p>
        <p>Téléphone: +33 6 12 34 56 78</p>
      </div>
      <div className="footer-section">
        <h3>Adresse</h3>
        <p>123 Rue Exemple</p>
        <p>75000 Paris, France</p>
      </div>
      <div className="footer-section">
        <h3>Réseaux</h3>
        <p>LinkedIn: linkedin.com/in/monprofil</p>
        <p>GitHub: github.com/monprofil</p>
      </div>
    </footer>
  );
};

export default Footer;
