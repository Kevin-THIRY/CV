import React, { useState } from 'react';
import Carousel from '../carousel/carousel';
import './onglet.css';
import './onglet1.css';
import Parcours from '../parcours/parcours';

const Onglet1 = () => {
  const [activeTab, setActiveTab] = useState('terms');
  const baseStyle = "animated-paragraph";

  const tabs = [
    { key: 'terms', label: 'Terms & Conditions', subtitle: 'Rules & Stuff' },
    { key: 'privacy', label: 'Privacy Policy', subtitle: 'Your Data' },
    { key: 'refund', label: 'Refund Policy', subtitle: 'Money Back' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'terms':
        return (
            // <div className="tab-content">
            //     <h2>Terms & Conditions</h2>
            //     <p className={baseStyle}>Welcome to our terms of service, where we outline your rights and responsibilities.</p>
            //     <p className={baseStyle}>These terms govern your use of our platform, and it's crucial you understand them.</p>
            //     <p className={baseStyle}>Breach of these terms may result in suspension or termination of your account.</p>
            // </div>
            <div className="tab-content">
              {/* Partie 1 : Présentation + Image/Vidéo */}
              <div className="bloc-texte-image">
                <div className="texte">
                  <h2>My self</h2>
                  <p>Passionné, Curieux, aime découvrir de nouvelles technologies et résoudre des problèmes complexes.
                    Très bonne gestion de projet et très bonne capacité d’analyse.
                    Sociable, excellent relationnel, sens de la pédagogie.
                    Entrprenant.</p>
                </div>
                <div className="media">
                  <img src="image.jpg" alt="Illustration" />
                </div>
              </div>

              {/* Partie 2 : Compétences */}
              <div className="cadre-simple">
                Programmation de systèmes de contrôle automatique.
                Utilisation de systèmes de contrôle embarqués.
                Compréhension des algorithmes de contrôle de mouvement.
                Modélisation et simulation robotique.
                Programmation de robots industriels.
                Intégration de capteurs et d'actionneurs.
                Analyse de la cinématique et de la dynamique des robots.
                Traitement d'images, Vision 3D, Reconnaissance d'objets.
                Calibration de caméras.
                Programmation en intelligence artificielle.
                Utilisation de techniques d'apprentissage machine pour l'optimisation des performances.
              </div>

              {/* Partie 3 : Petits cadres avec hover */}
              <div className="mots-hover">
                <div className="mot">
                  Python
                  <div className="tooltip">Projet blablabla</div>
                </div>
                <div className="mot">
                  C++
                  <div className="tooltip">Projet blablabla</div>
                </div>
                <div className="mot">
                  C#
                  <div className="tooltip">Projet blablabla</div>
                </div>
                <div className="mot">
                  ROS
                  <div className="tooltip">Projet blablabla</div>
                </div>
                <div className="mot">
                  JavaScript
                  <div className="tooltip">Projet blablabla</div>
                </div>
                <div className="mot">
                  Matlab
                  <div className="tooltip">Projet blablabla</div>
                </div>
                <div className="mot">
                  VBA
                  <div className="tooltip">Projet blablabla</div>
                </div>
                <div className="mot">
                  React
                  <div className="tooltip">Projet blablabla</div>
                </div>
                <div className="mot">
                  Vue JS
                  <div className="tooltip">Projet blablabla</div>
                </div>
                <div className="mot">
                  SQL
                  <div className="tooltip">Projet blablabla</div>
                </div>
              </div>

              {/* Partie 4 : Drapeaux avec niveaux */}
              <div className="drapeaux">
                <div className="drapeau">
                  <img src="../asset/flag-fr.png" alt="FR" />
                  <span>C2</span>
                </div>
                <div className="drapeau">
                  <img src="../asset/flag-uk.png" alt="US" />
                  <span>C1</span>
                </div>
                <div className="drapeau">
                  <img src="../asset/flag-de.png" alt="DE" />
                  <span>B2</span>
                </div>
                <div className="drapeau">
                  <img src="../asset/flag-jp.png" alt="JP" />
                  <span>A1</span>
                </div>
              </div>
            </div>
        );
      case 'privacy':
        return (
            <div className="tab-content">
                <h1>J'ai travaillé avec :</h1>
                <Carousel />
                <Parcours
                  photo="../asset/photo.png"
                  title="Volvo"
                  texts={[
                    "Texte 1 TexteTexteTexteTexteTexteTexteTexteTexteTexteTexteTexteTexteTexteTexteTexteTexteTexteTexteTexteTexte", "Texte 2", "Texte 3",
                    "Texte 4", "Texte 5", "Texte 6",
                    "Texte 7", "Texte 8", "Texte 9",
                    "Texte 7", "Texte 8", "Texte 9",
                    "Texte 7", "Texte 8", "Texte 9",
                    "Texte 7", "Texte 8", "Texte 9",
                    "Texte 7", "Texte 8", "Texte 9",
                    "Texte 7", "Texte 8", "Texte 9",
                    "Texte 7", "Texte 8", "Texte 9"
                  ]}
                />

                <Parcours
                  photo="../asset/photo.png"
                  title="DRA"
                  texts={[
                    "Texte 1 TexteTexteTexteTexteTexteTexteTexteTexteTexteTexteTexteTexteTexteTexteTexteTexteTexteTexteTexteTexte", "Texte 2", "Texte 3",
                    "Texte 4", "Texte 5", "Texte 6",
                    "Texte 7", "Texte 8", "Texte 9",
                    "Texte 7", "Texte 8", "Texte 9",
                    "Texte 7", "Texte 8", "Texte 9",
                    "Texte 7", "Texte 8", "Texte 9",
                    "Texte 7", "Texte 8", "Texte 9",
                    "Texte 7", "Texte 8", "Texte 9",
                    "Texte 7", "Texte 8", "Texte 9"
                  ]}
                />

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
