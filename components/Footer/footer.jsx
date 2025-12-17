import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-profile">
        <div className="footer-logo">
          Informations complémentaires
        </div>
        <div className="footer-text">
          N'hésitez pas a me contacter pour toute information supplémentaire ou pour discuter de potentielles opportunités professionnelles.
        </div>
      </div>

      <div className="footer-sections">
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:kevin.damien@hotmail.fr">kevin.damien@hotmail.fr</a></p>
          <p>Téléphone: <a href="tel:+33671399265">+33 6 71 39 92 65</a></p>
        </div>
        <div className="footer-section">
          <h3>Adresse</h3>
          <p>47 Boulevard de l'Europe</p>
          <p>69600 Oullins, France</p>
        </div>
        <div className="footer-section">
          <h3>Réseaux</h3>
          <p><a href="https://www.linkedin.com/in/kevin-thiry-5720a4209" target="_blank">LinkedIn</a></p>
          <p><a href="https://github.com/Kevin-THIRY" target="_blank">GitHub</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
