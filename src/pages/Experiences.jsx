import React, { useEffect, useRef, useState } from 'react';
import './Experiences.css';

const VerticalBlock = ({ title, block }) => {
  if (!block || !block.items || block.items.length === 0) return null;

  return (
    <div className={`vertical-block ${block.type}`}>
      <h4>{title}</h4>

      {block.type === 'bullets-inline' && (
        <ul className="inline-bullets">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

      {block.type === 'tags' && (
        <div className="tag-list">
          {block.items.map((item, i) => (
            <div className="tag" key={i}>
              {item.icon && <img src={item.icon} alt="" />}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Experiences = () => {
  const DATA = {
    projetJeuVideo: {
      background: '/asset/jeu_video.png',
      contexte: {
        type: 'bullets-inline',
        items: [
          'Conception d’un jeu vidéo sous unity',
          'Projet personnel mené en totale autonomie, sans équipe ni encadrement.',
          'Objectif : maîtriser l’ensemble de la chaîne de production d’un jeu 3D temps réel.',
          'Développement sur temps long, avec itérations successives.',
          'Ciblage PC, contraintes temps réel classiques (FPS, mémoire).',
          'Environnement Unity orienté production, pas simple prototype.'
        ]
      },
      mission: {
        type: 'bullets-inline',
        items: [
          'Concevoir un jeu vidéo 3D jouable de bout en bout.',
          'Implémenter les mécaniques de gameplay centrales.',
          'Structurer une architecture logicielle scalable et maintenable.',
          'Créer et intégrer l’ensemble des assets 3D.',
          'Garantir stabilité, performances et fluidité en runtime.',
          'Gérer le cycle de développement complet jusqu’à une version exploitable.'
        ]
      },
      contraintes: {
        type: 'bullets-inline',
        items: [
          'Développement solo → charge complète (code, 3D, design, debug).',
          'Performances temps réel (CPU / GPU / mémoire).',
          'Limites du moteur Unity (GC, gestion des scènes, physics).',
          'Optimisation nécessaire des assets pour éviter les surcoûts GPU.',
          'Maintenabilité du code malgré la croissance du nombre de scripts.'
        ]
      },

      languages: {
        type: 'tags',
        items: [
          { label: 'C# (.NET) pour l’ensemble de la logique applicative.', icon: '' },
          { label: 'API Unity Engine (MonoBehaviour, ScriptableObjects, Events).', icon: '' },
          { label: 'Notions de mathématiques 3D (vecteurs, rotations, collisions).', icon: '' }
        ]
      },
      data: {
        type: 'tags',
        items: [
          { label: 'Données de gameplay (stats, paramètres, états).', icon: '' },
          { label: 'Données de configuration via ScriptableObjects.', icon: '' },
          { label: 'Assets 3D (meshes, textures, animations).', icon: '' },
          { label: 'Scènes Unity structurées par responsabilités.', icon: '' },
        ]
      },
      tools: {
        type: 'tags',
        items: [
          { label: 'Unity Editor (scènes, lighting, profiler).', icon: '' },
          { label: 'Visual Studio pour le développement C#.', icon: '' },
          { label: 'Git (versioning local et distant).', icon: '' },
          { label: 'Outils de modélisation 3D (type Blender).', icon: '' },
          { label: 'Outils de baking (lightmaps, textures).', icon: '' },
        ]
      },
      methods: {
        type: 'tags',
        items: [
          { label: 'Réduction proactive des allocations mémoire.', icon: '' },
          { label: 'LOD et optimisation géométrique des assets.', icon: '' },
          { label: 'Tests continus en conditions runtime.', icon: '' },
          { label: 'Versioning discipliné (commits fréquents, rollback possible).', icon: '' },
        ]
      }
    },

    ABB: {
      background: '/asset/abb.png',
      contexte: {
        type: 'bullets-inline',
        items: [
          'Mission réalisée pour ABB dans un contexte industriel exigeant.',
          'Besoin de fiabiliser et automatiser le reporting opérationnel.',
          'Environnement bureautique contraint (Excel imposé).',
          'Enjeux forts de performance, robustesse et maintenabilité.'
        ]
      },
      mission: {
        type: 'bullets-inline',
        items: [
          'Concevoir et développer des outils de reporting automatisés sous Excel.',
          'Connecter Excel à une base SQL Server pour l’extraction des données.',
          'Générer automatiquement des rapports complexes multi-projets.',
          'Gérer des fréquences de génération très variables, du quasi temps réel au périodique long.',
          'Réduire drastiquement les temps de calcul et de génération.',
          'Documenter les outils pour assurer leur pérennité.'
        ]
      },
      contraintes: {
        type: 'bullets-inline',
        items: [
          'Excel comme front-end unique (pas de BI dédiée).',
          'Volumétrie de données industrielle.',
          'VBA limité en gestion mémoire et parallélisme.',
          'Développement majoritairement autonome, validation fonctionnelle partagée.'
        ]
      },

      languages: {
        type: 'tags',
        items: [
          { label: 'VBA (Excel) pour l’automatisation et la logique métier.', icon: '' },
          { label: 'SQL (T-SQL) pour l’extraction et l’agrégation des données.', icon: '' },
          { label: 'Maîtrise du modèle objet Excel (Workbooks, Worksheets, Ranges).', icon: '' }
        ]
      },
      data: {
        type: 'tags',
        items: [
          { label: 'Données issues de capteurs et systèmes industriels.', icon: '' },
          { label: 'Données temporelles (séries chronologiques).', icon: '' },
          { label: 'Données agrégées multi-échelles de temps.', icon: '' },
          { label: 'Fichiers Excel servant de support de restitution et d’archivage.', icon: '' },
        ]
      },
      tools: {
        type: 'tags',
        items: [
          { label: 'Microsoft Excel.', icon: '' },
          { label: 'VBA Editor.', icon: '' },
          { label: 'SQL Server.', icon: '' },
          { label: 'Outils de requêtage SQL (SSMS ou équivalent).', icon: '' },
          { label: 'Système de versioning simple (fichiers, sauvegardes).', icon: '' },
        ]
      },
      methods: {
        type: 'tags',
        items: [
          { label: 'Automatisation complète des chaînes de génération de rapports.', icon: '' },
          { label: 'Requêtes SQL optimisées en amont pour limiter le traitement côté VBA.', icon: '' },
          { label: 'Structuration du code VBA par modules fonctionnels.', icon: '' },
          { label: 'Documentation technique et fonctionnelle exhaustive.', icon: '' },
        ]
      }
    },

    Actemium: {
      background: '/asset/Actemium.png',
      contexte: {
        type: 'bullets-inline',
        items: [
          'Environnement industriel critique (logistique, production).',
          'Applications existantes en production chez les clients.',
          'Équipe de support/développement de taille réduite.',
          'Enjeux élevés de stabilité, continuité de service et réactivité.'
        ]
      },
      mission: {
        type: 'bullets-inline',
        items: [
          'Assurer le support applicatif de solutions logicielles industrielles.',
          'Diagnostiquer et corriger des incidents complexes en production.',
          'Développer des fonctionnalités évolutives selon les besoins clients.',
          'Maintenir la compatibilité avec des systèmes existants.',
          'Participer aux échanges directs avec les clients finaux.',
          'Déployer correctifs et mises à jour à distance.'
        ]
      },
      contraintes: {
        type: 'bullets-inline',
        items: [
          'Applications critiques en production → tolérance zéro à la régression.',
          'Base de code hétérogène (legacy + évolutions).',
          'Technologies bas niveau (C/C++ Win32) combinées à du .NET.',
          'Délais d’intervention parfois courts.',
          'Coordination nécessaire entre support, dev et client.',
          'Déploiements à distance avec risques opérationnels.'
        ]
      },

      languages: {
        type: 'tags',
        items: [
          { label: 'C / C++ Win32 pour applications natives.', icon: '' },
          { label: 'C# .NET pour modules applicatifs et outils complémentaires.', icon: '' },
          { label: 'SQL Server (T-SQL, procédures stockées).', icon: '' },
          { label: 'Connaissance des APIs Windows (threads, mémoire, I/O).', icon: '' },
          { label: 'Debug applicatif en environnement réel.', icon: '' },
        ]
      },
      data: {
        type: 'tags',
        items: [
          { label: 'Données opérationnelles industrielles.', icon: '' },
          { label: 'Bases SQL Server clients.', icon: '' },
          { label: 'Logs applicatifs et traces d’exécution.', icon: '' },
          { label: 'Données de configuration applicative.', icon: '' },
        ]
      },
      tools: {
        type: 'tags',
        items: [
          { label: 'Visual Studio (C++, C#).', icon: '' },
          { label: 'SQL Server Management Studio.', icon: '' },
          { label: 'Git pour le versioning.', icon: '' },
          { label: 'JIRA pour le suivi des tickets et évolutions.', icon: '' },
          { label: 'Jenkins pour l’intégration et le déploiement.', icon: '' }
        ]
      },
      methods: {
        type: 'tags',
        items: [
          { label: 'Analyse d’incidents basée sur logs et reproduction contrôlée.', icon: '' },
          { label: 'Debug pas à pas sur code legacy.', icon: '' },
          { label: 'Corrections ciblées pour limiter l’impact global.', icon: '' },
          { label: 'Développement incrémental de fonctionnalités.', icon: '' },
          { label: 'Respect strict des processus de livraison.', icon: '' },
          { label: 'Travail en méthodologie agile (sprints, tickets, priorisation).', icon: '' }
        ]
      }
    },

    SaintGobain: {
      background: '/asset/saint_gobain.png',
      contexte: {
        type: 'bullets-inline',
        items: [
          'Besoin de fiabiliser et sécuriser les déploiements applicatifs.',
          'Problématiques récurrentes de gestion de configuration et de sauvegarde.',
          'Environnement Windows industriel.'
        ]
      },
      mission: {
        type: 'bullets-inline',
        items: [
          'Concevoir un installeur applicatif sécurisé.',
          'Automatiser la gestion des fichiers de configuration et de sauvegarde.',
          'Simplifier le processus de déploiement pour les équipes de développement.'
        ]
      },
      contraintes: {
        type: 'bullets-inline',
        items: [
          'Besoin de flexibilité via Custom Actions.'
        ]
      },

      languages: {
        type: 'tags',
        items: [
          { label: 'C# .NET.', icon: '' },
          { label: 'Scripts Inno Setup (Pascal).', icon: '' },
          { label: 'Custom Actions Windows Installer.', icon: '' }
        ]
      },
      data: {
        type: 'tags',
        items: []
      },
      tools: {
        type: 'tags',
        items: [
          { label: 'Inno Setup.', icon: '' },
          { label: 'Visual Studio.', icon: '' }
        ]
      },
      methods: {
        type: 'tags',
        items: [
          { label: 'Développement orienté automatisation.', icon: '' },
          { label: 'Validation croisée en binôme.', icon: '' }
        ]
      }
    },

    TDF: {
      background: '/asset/tdf.jpg',
      contexte: {
        type: 'bullets-inline',
        items: [
          'Système critique de diffusion d’alarmes pour les tunnels de Fourvière.',
          'Logiciel rendu obsolète par une mise à jour Windows.',
          'Impératif de remise en service rapide et fiable.'
        ]
      },
      mission: {
        type: 'bullets-inline',
        items: [
          'Mettre à jour et remettre en production le logiciel.'
        ]
      },
      contraintes: {
        type: 'bullets-inline',
        items: [
          'Technologie existante imposée (LabVIEW).'
        ]
      },

      languages: {
        type: 'tags',
        items: [
          { label: 'LabVIEW.', icon: '' }
        ]
      },
      data: {
        type: 'tags',
        items: []
      },
      tools: {
        type: 'tags',
        items: []
      },
      methods: {
        type: 'tags',
        items: [
          { label: 'Tests fonctionnels avant remise en production.', icon: '' }
        ]
      }
    },

    Resonnance: {
      background: '/asset/resonance-2.jpg',
      contexte: {
        type: 'bullets-inline',
        items: [
          'Mission pour RESONANCE (Groupe FIRALP).',
          'Problématique de cohérence entre données de pointage et géolocalisation.',
          'Enjeu métier direct : détection d’anomalies et fraudes.',
          'Intégration attendue dans les processus existants.'
        ]
      },
      mission: {
        type: 'bullets-inline',
        items: [
          'Analyser le besoin et formaliser les spécifications fonctionnelles.',
          'Concevoir et développer une application autonome de contrôle.',
          'Implémenter la logique de détection d’incohérences.',
          'Livrer un outil fiable, exploitable'
        ]
      },
      contraintes: {
        type: 'bullets-inline',
        items: [
          'Développement en totale autonomie.',
          'Fiabilité des résultats (impact financier).',
          'Données hétérogènes (pointages / géolocalisation).'
        ]
      },

      languages: {
        type: 'tags',
        items: [
          { label: 'Python.', icon: '' },
          { label: 'PySide (interface graphique).', icon: '' },
          { label: 'Logique de contrôle et règles métier.', icon: '' }
        ]
      },
      data: {
        type: 'tags',
        items: [
          { label: 'Données de pointage.', icon: '' },
          { label: 'Données de géolocalisation.', icon: '' },
          { label: 'Données utilisateurs et périodes.', icon: '' },
          { label: 'Résultats d’analyses et rapports d’anomalies.', icon: '' },
        ]
      },
      tools: {
        type: 'tags',
        items: [
          { label: 'Visual Studio Code.', icon: '' }
        ]
      },
      methods: {
        type: 'tags',
        items: [
          { label: 'Approche full-stack orientée besoin métier.', icon: '' },
          { label: 'Définition de règles de cohérence explicites.', icon: '' },
          { label: 'Tests fonctionnels et recette utilisateur.', icon: '' }
        ]
      }
    },

    Volvo_data_science: {
      background: '/asset/volvo_data.jpg',
      contexte: {
        type: 'bullets-inline',
        items: [
          'Mission longue chez Volvo Trucks en environnement industriel.',
          'Stations de test de fuite utilisées en production.',
          'Problématique majeure de faux défauts impactant disponibilité et maintenance.',
          'Données capteurs complexes, bruitées et dépendantes du contexte machine.',
          'Volonté d’industrialiser une approche data-driven de maintenance prédictive.'
        ]
      },
      mission: {
        type: 'bullets-inline',
        items: [
          'Définir et déployer une stratégie de maintenance prédictive.',
          'Analyser le fonctionnement réel des stations de test et leurs contraintes physiques.',
          'Exploiter les données capteurs pour distinguer faux défauts et défaillances réelles.',
          'Implémenter des algorithmes de détection d’anomalies robustes.',
          'Fournir des outils de monitoring et d’aide à la décision pour la maintenance.',
          'Préparer le déploiement de la solution sur d’autres équipements.'
        ]
      },
      contraintes: {
        type: 'bullets-inline',
        items: [
          'Systèmes industriels en production → aucune perturbation possible.',
          'Données bruitées, non labellisées, avec dérives temporelles.',
          'Faux positifs historiquement élevés.',
          'Intégration obligatoire dans l’écosystème existant (ThingWorx).',
          'Collaboration avec équipes internationales (alignement méthodologique).'
        ]
      },

      languages: {
        type: 'tags',
        items: [
          { label: 'Python pour l’analyse de données et le machine learning.', icon: '' },
          { label: 'Algorithmes d’anomaly detection (Local Outlier Factor).', icon: '' },
          { label: 'Notions avancées de machine learning non supervisé.', icon: '' },
          { label: 'Compréhension des systèmes industriels et capteurs.', icon: '' },
          { label: 'Java / C++ pour intégration et interaction avec systèmes existants.', icon: '' }
        ]
      },
      data: {
        type: 'tags',
        items: [
          { label: 'Données capteurs industrielles (pression, débit, temps, cycles).', icon: '' },
          { label: 'Données de production non labellisées.', icon: '' },
          { label: 'Indicateurs de performance machine.', icon: '' },
          { label: 'Résultats de détection et scores d’anomalies.', icon: '' },
        ]
      },
      tools: {
        type: 'tags',
        items: [
          { label: 'ThingWorx (dashboards, monitoring industriel).', icon: '' },
          { label: 'Environnements industriels Volvo.', icon: '' },
          { label: 'Outils de visualisation et d’analyse exploratoire.', icon: '' },
          { label: 'Systèmes de versioning et partage inter-équipes.', icon: '' },
        ]
      },
      methods: {
        type: 'tags',
        items: [
          { label: 'Nettoyage, normalisation et sélection de features.', icon: '' },
          { label: 'Validation métier des résultats avec les équipes terrain.', icon: '' },
          { label: 'Intégration progressive des indicateurs dans les dashboards.', icon: '' },
          { label: 'Itérations continues pour réduire les faux positifs.', icon: '' },
        ]
      }
    },

    Volvo_robotics: {
      background: '/asset/Dosan.png',
      contexte: {
        type: 'bullets-inline',
        items: [
          'Mission longue chez Volvo Trucks, site de Vénissieux.',
          'Programme de transformation vers une usine connectée (Industrie 4.0).',
          'Volonté d’automatiser le contrôle qualité moteur en fin de ligne.',
          'Enjeux forts de fiabilité, traçabilité et intégration aux systèmes groupe.',
          'Environnement industriel sécurisé, normé et réglementé.'
        ]
      },
      mission: {
        type: 'bullets-inline',
        items: [
          'Concevoir et intégrer une cellule robotisée de contrôle qualité moteur.',
          'Automatiser la détection de défauts via vision industrielle et machine learning.',
          'Développer les outils nécessaires à l’exploitation industrielle de la cellule.',
          'Assurer l’intégration complète dans les systèmes qualité Volvo.',
          'Participer à la validation technique et fonctionnelle du concept.'
        ]
      },
      contraintes: {
        type: 'bullets-inline',
        items: [
          'Environnement industriel critique en production.',
          'Contraintes réglementaires strictes (sécurité homme–robot).',
          'Intégration obligatoire aux systèmes existants (Volvo Vision System).',
          'Fiabilité exigée pour un usage en fin de ligne.',
          'Travail multi-métiers (robotique, vision, qualité).'
        ]
      },

      languages: {
        type: 'tags',
        items: [
          { label: 'Python pour la vision industrielle et le machine learning.', icon: '/asset/python.png' },
          { label: 'Algorithmes de traitement d’image et de détection de défauts.', icon: '/asset/volvo_robot/languages/algo_defaut.png' },
          { label: 'Robotique industrielle et cobots.', icon: '/asset/volvo_robot/languages/robot_cobot.png' },
          { label: 'Calcul et optimisation de trajectoires robotiques.', icon: '/asset/volvo_robot/methods/Detection_défauts.png' },
          { label: 'Intégration logicielle industrielle.', icon: '/asset/volvo_robot/languages/inte_indus_soft.png' }
        ]
      },
      data: {
        type: 'tags',
        items: [
          { label: 'Images issues de systèmes de vision industrielle.', icon: '/asset/volvo_robot/datas/img_from_vision_indus.png' },
          { label: 'Données de production moteur.', icon: '/asset/volvo_robot/datas/traca_moteur.png' },
          { label: 'Données de traçabilité qualité.', icon: '/asset/volvo_robot/datas/traca_quali.png' },
          { label: 'Paramètres dynamiques de points de contrôle.', icon: '/asset/volvo_robot/methods/Opti_trajectoires.png' },
          { label: 'Résultats de détection et indicateurs qualité.', icon: '/asset/volvo_robot/datas/result_quali.png' },
        ]
      },
      tools: {
        type: 'tags',
        items: [
          { label: 'Cobots et contrôleurs robotiques.', icon: '/asset/volvo_robot/outils/cobot_controleur.png' },
          { label: 'Systèmes de vision industrielle.', icon: '/asset/volvo_robot/outils/vision_indus.png' },
          { label: 'Volvo Vision System.', icon: '/asset/volvo_robot/outils/vvs.png' },
          { label: 'Environnements Python.', icon: '/asset/volvo_robot/outils/env_python.png' },
          { label: 'Outils d’intégration industrielle et qualité.', icon: '/asset/volvo_robot/outils/inte_indus_quali.png' },
        ]
      },
      methods: {
        type: 'tags',
        items: [
          { label: 'Conception modulaire de la cellule robotisée.', icon: '/asset/volvo_robot/methods/Conception_modulaire_robot.png' },
          { label: 'Définition dynamique des points de contrôle.', icon: '/asset/volvo_robot/methods/Control_points_defninition.png' },
          { label: 'Développement et entraînement de modèles de détection de défauts.', icon: '/asset/volvo_robot/methods/Detection_défauts.png' },
          { label: 'Optimisation des trajectoires pour fiabilité et temps de cycle.', icon: '/asset/volvo_robot/methods/Opti_trajectoires.png' },
          { label: 'Tests progressifs en conditions industrielles.', icon: '/asset/volvo_robot/methods/Test_progressifs.png' },
          { label: 'Validation croisée avec équipes robotique, vision et qualité.', icon: '/asset/volvo_robot/methods/Validation_croisées.png' },
          { label: 'Capitalisation technique pour évolutions futures malgré les contraintes réglementaires.', icon: '/asset/volvo_robot/methods/Evo_vs_contraintes.png' },
        ]
      }
    },
  };

  const [selectedKey, setSelectedKey] = useState('projetJeuVideo');
  const selectedData = DATA[selectedKey];
  const backgroundStyle = selectedData?.background ? { backgroundImage: `url(${selectedData.background})` } : {};

  const scrollToRef = (ref, duration = 500) => {
    if (!ref.current) return;
    const start = window.scrollY;
    const end = ref.current.getBoundingClientRect().top + start;
    const distance = end - start;
    let startTime = null;

    const easeInOutQuad = (t) => t < 0.5 
      ? 2 * t * t 
      : -1 + (4 - 2 * t) * t;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      window.scrollTo(0, start + distance * easeInOutQuad(progress));
      if (timeElapsed < duration) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  const rightContainerRef = useRef(null);
  useEffect(() => {
    if (!rightContainerRef.current) return;
    scrollToRef(rightContainerRef, 700);
  }, [selectedKey]);
  
  return (
    <div className="experiences-wrapper" style={backgroundStyle}>
      <div className="second-page-container">
        <div className="block-left">
          <div className="sub-block-top">
            <img src="/asset/Exp_pro.png" alt="Illustration" className="sub-block-top-image" />
            <div className="sub-block-top-text">
              <h3>Expériences profesionnels et projet personnel</h3>
            </div>
          </div>
          <div className="sub-block-bottom">
            <div className="timeline">
              <div className="timeline-item">
                <span className="timeline-point"></span>
                <div className="timeline-content" onClick={() => setSelectedKey('projetJeuVideo')}>
                  <img src="/asset/unity_logo.png" alt="Illustration"/>
                  <div className="timeline-content-text">
                    <h4>Projet Personnel - 4 mois</h4>
                    <p>Septembre 2025 - Decembre 2025</p>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-point"></span>
                <div className="timeline-content" onClick={() => setSelectedKey('ABB')}>
                  <img src="/asset/abb-logo.png" alt="Illustration"/>
                  <div className="timeline-content-text">
                    <h4>ABB - 2 mois</h4>
                    <p>Juillet 2025 - Aout 2025</p>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-point"></span>
                <div className="timeline-content" onClick={() => setSelectedKey('Actemium')}>
                  <img src="/asset/logo-actemium.jpg" alt="Illustration"/>
                  <div className="timeline-content-text">
                    <h4>Actemium Lyon Logistics - VINCI ENERGIES - 1 an</h4>
                    <p>Juin 2024 - Juin 2025</p>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-point"></span>
                <div className="timeline-content" onClick={() => setSelectedKey('SaintGobain')}>
                  <img src="/asset/saint_gobain_logo.png" alt="Illustration"/>
                  <div className="timeline-content-text">
                    <h4>Saint-Gobain - 1 mois</h4>
                    <p>Mai 2024</p>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-point"></span>
                <div className="timeline-content" onClick={() => setSelectedKey('TDF')}>
                  <img src="/asset/grand_lyon_logo.png" alt="Illustration"/>
                  <div className="timeline-content-text">
                    <h4>TDF – Tunnels de Fourvière - 1 mois</h4>
                    <p>Avril 2024</p>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-point"></span>
                <div className="timeline-content" onClick={() => setSelectedKey('Resonnance')}>
                  <img src="/asset/Resonance.png" alt="Illustration"/>
                  <div className="timeline-content-text">
                    <h4>RESONANCE – Groupe FIRALP - 1 mois</h4>
                    <p>Mars 2024</p>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-point"></span>
                <div className="timeline-content" onClick={() => setSelectedKey('Volvo_data_science')}>
                  <img src="/asset/volvo_trucks_logo.jpg" alt="Illustration"/>
                  <div className="timeline-content-text">
                    <h4>Ingénieur Data Scientist – Volvo Trucks - 4 mois</h4>
                    <p>Septembre 2023 - Decembre 2023</p>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-point"></span>
                <div className="timeline-content" onClick={() => setSelectedKey('Volvo_robotics')}>
                  <img src="/asset/volvo_trucks_logo.jpg" alt="Illustration"/>
                  <div className="timeline-content-text">
                    <h4>Ingénieur Robotique – Volvo Trucks - 1 an</h4>
                    <p>Aout 2022 - Aout 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block-right" ref={rightContainerRef}>
          <div className="right-subblock top">
            <VerticalBlock title="Contexte" block={selectedData.contexte} />
            <VerticalBlock title="Mission" block={selectedData.mission} />
            <VerticalBlock title="Contraintes / Résultats" block={selectedData.contraintes} />
          </div>

          <div className="right-subblock bottom">
            <VerticalBlock title="Langages & Frameworks" block={selectedData.languages} />
            <VerticalBlock title="Datas" block={selectedData.data} />
            <VerticalBlock title="Outils" block={selectedData.tools} />
            <VerticalBlock title="Méthodologies" block={selectedData.methods} />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Experiences;