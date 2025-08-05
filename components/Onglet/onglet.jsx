import React, { useState } from 'react';
import Carousel from '../carousel/carousel';
import './onglet.css';
import './onglet1.css';
import './onglet2.css';
import Parcours from '../parcours/parcours';
import Card from '../card/card'

const Onglet1 = () => {
  const [activeTab, setActiveTab] = useState('terms');
  const baseStyle = "animated-paragraph";
  
  const tabs = [
    { key: 'terms', label: 'Terms & Conditions', subtitle: 'Rules & Stuff' },
    { key: 'privacy', label: 'Privacy Policy', subtitle: 'Your Data' },
    { key: 'projects', label: 'Personnal projects', subtitle: 'Personnal' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'terms':
        return (
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
                  <img src="/asset/flag-fr.png" alt="FR" />
                  <span>C2</span>
                </div>
                <div className="drapeau">
                  <img src="/asset/flag-uk.png" alt="US" />
                  <span>C1</span>
                </div>
                <div className="drapeau">
                  <img src="/asset/flag-de.png" alt="DE" />
                  <span>B2</span>
                </div>
                <div className="drapeau">
                  <img src="/asset/flag-jp.png" alt="JP" />
                  <span>A1</span>
                </div>
              </div>
              <Parcours
                    photo="/asset/cpe-logo.png"
                    title="Formation"
                    texts={[
                      "CPE Lyon", "Diplôme d'ingénieur, Ingénierie mécatronique, robotique et automatisation Spécialité : robotique de service (Robot Operating System (ROS))", "2019 - 2022"
                    ]}
                    side='left'
                  />
            </div>
        );
      case 'privacy':
        return (
            <div className="tab-content">
                <h1>J'ai travaillé avec :</h1>
                <Carousel />
                <div class="timeline">
                  <a href="#dra" class="timeline-point">DRA Technologies</a>
                  <a href="#volvo" class="timeline-point">Volvo Trucks</a>
                </div>
                <div id="dra" className="parcours-with-photo">
                  {/* <Parcours
                    photo="/asset/dra_technologies_logo.jpg"
                    title="DRA -- Mars 2024 - Septembre 2025"
                    texts={[
                      "ABB - Développement sous Excel pour construire des tableaux dynamiques personnalisés à partir de données récupérées depuis une base SQL et des données OPC DA", "Trouver des solutions adaptées pour réduire et optimiser le temps de récupération et de traitement + Contourner les limites d’Excel afin de pouvoir construire des cartes de chaleur et des graphiques spécifiques + Documenter l’ensemble du travail effectué afin de permettre au reste de l’équipe de s’adapter aux futurs besoins en matière de détails graphiques", "Technologies : Excel + SQL",
                      "Actemium Lyon Logistics (Groupe Vinci Energies) - Développeur supplémentaire pour du support ticketing + dev de nouvelles fonctionnalités", "Répondre aux besoins clients en assurant un support efficace à la hotline + Gérer le ticketing et le suivi des tâches via JIRA + Déployer des correctifs à distance et concevoir des stratégies pour résoudre des problèmes complexes + Documenter et collaborer sur Confluence pour optimiser les process + Développer de nouvelles fonctionnalités en C++ et C#", "Technologies : C++ (Win32) + C# + SQL + Outils JIRA et Confluence",
                      "Saint Gobain - Sécuriser les fichiers de configuration de leur soft lors du déploiement de mises à jour", "Développement d’un algorythme via InnoSetup, pour la réalisation de customs actions pour des installeurs C# + Tests / validation*", "Technologies : C# + InnoSetup (Pascal)",
                      "TDF - Mise à jour d'un système de diffusion des messages d'alarme pour les tunnels de Fourvière", "Recherche de solutions pour contourner l’obsolescence + Modification du code Labview", "Technologies : Labview",
                      "RESONANCE (Groupe FIRALP) - Réalisation d'un contrôle de cohérence entre pointages et géolocalisation", "Rédaction AF du besoin + Développement de l’applicatif front end, back end + Tests + Recettes", "Technologies : Python",
                    ]}
                    side='left'
                  /> */}
                  <Parcours
                    photo="/asset/dra_technologies_logo.jpg"
                    title="DRA -- Mars 2024 - Septembre 2025"
                    date="Mars 2024 - Septembre 2025"
                    lieu="2355 Av. Henri Schneider, 69330 Meyzieu"
                    contexte={[
                      "ABB - Développement sous Excel (VBA) avec des données récupérées depuis une base SQL et des données OPC DA",
                      "Actemium Lyon Logistics (Groupe Vinci Energies) - Développeur supplémentaire pour du support ticketing + dev de nouvelles fonctionnalités",
                      "Saint Gobain - Sécuriser les fichiers de configuration de leur soft lors du déploiement de mises à jour",
                      "TDF - Mise à jour d'un système de diffusion des messages d'alarme pour les tunnels de Fourvière",
                      "RESONANCE (Groupe FIRALP)"
                      // "RESONANCE (Groupe FIRALP) - Réalisation d'un contrôle de cohérence entre pointages et géolocalisation",
                    ]}
                    taches={[
                      [
                        "Trouver des solutions adaptées pour réduire et optimiser le temps de récupération et de traitement",
                        "Contourner les limites d’Excel afin de pouvoir construire des cartes de chaleur et des graphiques spécifiques",
                        "Documenter l’ensemble du travail effectué afin de permettre au reste de l’équipe de s’adapter aux futurs besoins en matière de détails graphiques"
                      ],
                      [
                        "Répondre aux besoins clients en assurant un support efficace à la hotline",
                        "Gérer le ticketing et le suivi des tâches via JIRA",
                        "Déployer des correctifs à distance et concevoir des stratégies pour résoudre des problèmes complexes",
                        "Documenter et collaborer sur Confluence pour optimiser les process",
                        "Développer de nouvelles fonctionnalités en C++ et C#"
                      ],
                      [
                        "Développement d’un algorythme via InnoSetup, pour la réalisation de customs actions pour des installeurs C#",
                        "Tests / validation"
                      ],
                      [
                        "Recherche de solutions pour contourner l’obsolescence",
                        "Modification du code Labview"
                      ],
                      [
                        "Rédaction AF du besoin",
                        "Développement de l’applicatif front end, back end",
                        "Tests",
                        "Recettes"
                      ]
                    ]}
                    environnement={[
                      ["Excel", "SQL"],
                      ["C++ (Win32)", "C#", "SQL", "Outils JIRA et Confluence"],
                      ["C#", "InnoSetup (Pascal)"],
                      ["Labview"],
                      ["Python"]
                    ]}
                    side="left"
                  />
                  {/* <div className="container-onglet2-photos">
                    <div className="techno-card full-size">
                      <div className="photo-grid">
                        <img src="/asset/flag-uk.png" alt="Logo 1" />
                        <img src="/asset/flag-uk.png" alt="Logo 2" />
                        <img src="/asset/flag-uk.png" alt="Logo 3" />
                        <img src="/asset/flag-uk.png" alt="Logo 4" />
                      </div>
                    </div>
                  </div> */}
                </div>
                <div id="volvo" className="parcours-with-photo">
                  {/* <img src="/asset/flag-fr.png" alt="Section" className="parcours-section-photo" /> */}
                  {/* <Parcours
                    photo="/asset/volvo_trucks_logo.jpg"
                    title="Volvo Trucks -- Août 2022 - Décembre 2023"
                    texts={[
                      "Ingénieur Data Scientist", "Septembre 2023 - Décembre 2023",
                      "Objectifs : \n• Mise en place d’une stratégie de maintenance prédictive sur les stations de test de fuite, \n• Détection automatique des faux défauts et localisation des vraies fuites. Tâches réalisées : • Compréhension approfondie des systèmes de production industrielle, • Identification et gestion des risques liés aux projets, • Récolte et analyse de données pour interpréter les informations collectées par les capteurs et autres sources, • Développement de Dashboard (monitoring) avec Thingworks, intégrant des fonctionnalités de maintenance prédictive pour optimiser les performances opérationnelles. Environnement : • Thingworks, Local Outlier Factor, • Programmation : Python, Java, C++, Intelligence Artificielle, Machine learning.",
                      
                      "Ingénieur en robotique", "Août 2022 - Septembre 2023", "Objectifs : • Mise en place d’une cellule robotisée dans le cadre d’un projet visant à faire du contrôle qualité en fin de ligne sur les moteurs. Tâches réalisées : • Détection du moteur dans la station, • Développement d’une application afin de créer des points de contrôle, • Calcul des trajectoires des bras robotiques, • Création d’algorithme de Machine Learning permettant de détecter les défauts moteurs sur une image, • Intégration de la brique robot dans le système qualité de Volvo (Volvo vision system). Environnement : • Cobots, Volvo vison system, Python"
                    ]}
                    side='right'
                  /> */}
                  <Parcours
                    photo="/asset/volvo_trucks_logo.jpg"
                    title="Volvo Trucks -- Août 2022 - Décembre 2023"
                    date=""
                    lieu=""
                    contexte={[
                      "Ingénieur Data Scientist (Septembre 2023 - Décembre 2023)",
                      "Ingénieur en robotique (Août 2022 - Septembre 2023)",
                    ]}
                    taches={[
                      [
                        "Mise en place d’une stratégie de maintenance prédictive sur les stations de test de fuite",
                        "Détection automatique des faux défauts et localisation des vraies fuites",
                        "Compréhension approfondie des systèmes de production industrielle",
                        "Identification et gestion des risques liés aux projets",
                        "Récolte et analyse de données",
                        "Développement de Dashboard (monitoring) avec Thingworks"
                      ],
                      [
                        "Mise en place d’une cellule robotisée pour contrôle qualité fin de ligne moteurs",
                        "Détection moteur",
                        "Développement application pour points de contrôle",
                        "Calcul trajectoires bras robotiques",
                        "Création d’algorithme Machine Learning",
                        "Intégration dans système qualité Volvo"
                      ]
                    ]}
                    environnement={[
                      ["Thingworks", "Local Outlier Factor", "Python", "Java", "C++"],
                      ["Cobots", "Volvo vision system", "Python"]
                    ]}
                    side="right"
                  />
                </div>
                <div className="card-grid">
                  <Card photo="/asset/photo.png" name="Noemie LERASLE" profession="Directrice" text='Ingénieur incroyable' />
                  <Card photo="/asset/photo.png" name="Noemie LERASLE" profession="Directrice" text='Ingénieur incroyable' />
                  <Card photo="/asset/photo.png" name="Noemie LERASLE" profession="Directrice" text='Ingénieur incroyable' />
                  <Card photo="/asset/photo.png" name="Noemie LERASLE" profession="Directrice" text='Ingénieur incroyable' />
                </div>
            </div>
        );
      case 'projects':
        return (
            <div className="tab-content">
                <h2>Projets Personnels</h2>

                <div className={baseStyle}>
                    <h3>💼 Portfolio (ce site)</h3>
                    <p>Site personnel développé en React et JavaScript + Vercel. Hébergé en ligne. Responsive et minimaliste.</p>
                    <a href="https://github.com/Kevin-THIRY/CV.git" target="_blank" rel="noopener noreferrer">
                        Code sur GitHub
                    </a>
                </div>

                <div className={baseStyle}>
                    <h3>🎮 Jeu Unity — War of time</h3>
                    <p>Jeu développé sous Unity (C#). Mécaniques principales : 4X, simulation, stratégie. Toujours en dev.</p>
                    <a href="https://github.com/Kevin-THIRY/WarOfTime.git" target="_blank" rel="noopener noreferrer">
                        Code sur GitHub
                    </a>
                </div>

                <div className={baseStyle}>
                    <h3>🕹️ Prototype inachevé — Fluppy</h3>
                    <p>Ancien projet de jeu, débuté sous Unity (C#), jeu de platforme 3D dans l'espace + génération de planète procédurale.</p>
                </div>
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
