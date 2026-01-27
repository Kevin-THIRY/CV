import React, { useEffect, useRef, useState } from 'react';
import './Experiences.css';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, LabelList, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie } from 'recharts';

const CHART_COLOR = 'rgba(99, 102, 241, 0.75)';

const isMobile = window.innerWidth < 800;

const parseMetricValue = (value) => {
  // Si c'est déjà un nombre
  if (typeof value === 'number') return value;
  if (typeof value !== 'string') return 0;

  // Cherche un nombre dans la string
  const match = value.match(/-?\d+\.?\d*/);
  return match ? parseFloat(match[0]) : 0;
};

const TechCard = ({ tech }) => {

  const prettyLabel = (key) => key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase());

  const metricsData = tech.metrics
    ? Object.entries(tech.metrics)
        .map(([k, v]) => ({
          name: prettyLabel(k),
          value: parseMetricValue(v)
        }))
        .filter(d => !isNaN(d.value))
    : [];

  const metricsCount = metricsData.length;

  const renderPieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
    const RADIAN = Math.PI / 180;

    const baseRadius = innerRadius + (outerRadius - innerRadius) * 0.6;
    const offset = 25;

    const radius = baseRadius + offset;

    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="var(--text-main)"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={10}
        fontWeight={500}
        pointerEvents="none"
      >
        {value}
      </text>
    );
  };

  return (
    <div className="tech-card">
      <div className="tech-header">
        {tech.icon && <img src={tech.icon} alt={tech.label} />}
        <h5>{tech.label}</h5>
      </div>

      {tech.description && (
        <p className="tech-description">{tech.description}</p>
      )}

      {tech.examples?.length > 0 && (
        <ul className="tech-examples">
          {tech.examples.map((ex, i) => (
            <li key={i}>{ex}</li>
          ))}
        </ul>
      )}

      {metricsCount > 0 && (
        <ResponsiveContainer width="100%" height={isMobile ? 160 : 120}>

          {/* CAS 1 — Peu de valeurs → Pie */}
          {metricsCount <= 2 && (
            <PieChart>
              <Pie
                data={metricsData}
                dataKey="value"
                nameKey="name"
                fill={CHART_COLOR}
                innerRadius={28}
                outerRadius={52}
                paddingAngle={4}
                label={renderPieLabel}
                labelLine={false}
              />
              <Tooltip />
            </PieChart>
          )}

          {/* CAS 2 — Plusieurs valeurs → Bar */}
          {metricsCount > 2 && metricsCount <= 6 && (
            <BarChart data={metricsData} margin={{ top: 20 }}>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip />
              <Bar dataKey="value" fill={CHART_COLOR} radius={[6, 6, 0, 0]}>
              <LabelList
                dataKey="value" 
                position="top"
                fill="var(--text-main)"
                fontSize={10}
                fontWeight={500}
              />
              </Bar>
            </BarChart>
          )}

          {/* CAS 3 — Beaucoup de valeurs → Compact horizontal */}
          {metricsCount > 6 && (
            <BarChart
              data={metricsData}
              layout="vertical"
              margin={{ left: 20 }}
            >
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" width={100} tick={{ fontSize: 8, fill:"var(--text-main)"}} />
              <Tooltip />
              <Bar dataKey="value" fill={CHART_COLOR} radius={[0, 6, 6, 0]} />
            </BarChart>
          )}

        </ResponsiveContainer>
      )}
    </div>
  );
};

const VerticalBlock = ({ title, block, selectedTech, onSelectTech }) => {
  if (!block || !block.items || block.items.length === 0) return null;

  const filteredItems = block.type === 'tags'
    ? (selectedTech ? block.items.filter(item => item.section === selectedTech) : block.items)
    : block.items;
  
  const sections = [...new Set(block.items.map(item => item.section).filter(Boolean))];

  return (
    <div className={`vertical-block ${block.type}`}>
      <h4>{title}</h4>
      
      {block.type === 'bullets-inline' && (
        <div className="paragraph-bullets">
          {block.items.map((item, i) => {
            // On gère *gras* et ~souligné~
            const parts = item.split(/(\*.*?\*|~.*?~)/g);

            return (
              <p key={i}>
                {parts.map((part, idx) => {
                  if (part.startsWith('*') && part.endsWith('*')) {
                    return <strong key={idx}>{part.slice(1, -1)}</strong>;
                  } else if (part.startsWith('~') && part.endsWith('~')) {
                    return <u key={idx}>{part.slice(1, -1)}</u>;
                  }
                  return part;
                })}
              </p>
            );
          })}
        </div>
      )}

      {block.type === 'tags' && (
        <>
          <div className="tech-chips">
            {sections.map(section => {
              const isActive = section === selectedTech;
              return (
                <button 
                  key={section} 
                  className={`tech-chip ${isActive ? 'active' : ''}`}
                  onClick={() => onSelectTech(isActive ? null : section)}
                >
                  {section}
                </button>
              );
            })}
          </div>

          <motion.div layout className="tech-dashboard">
            <AnimatePresence>
              {filteredItems.map(item => (
                <motion.div
                  key={`${item.section}-${item.label}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.1 }}
                >
                  <TechCard tech={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </>
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
          'Conception d’un *jeu vidéo 3D* sous Unity, dans le cadre d’un projet personnel de 4 mois. ~Mené en totale autonomie~, ce projet m’a permis de toucher à toutes les étapes de production : du code à l’intégration des assets.',
          'L’objectif principal était de maîtriser l’ensemble de la chaîne de production d’un jeu temps réel : conception du gameplay, structuration d’une architecture logicielle scalable et maintenable, et optimisation des performances pour un ciblage PC (FPS, mémoire).',
          'Le développement s’est fait sur une période prolongée avec *itérations successives*, permettant d’améliorer progressivement les mécaniques de jeu et la stabilité globale.',
          'Développement solo → charge complète : programmation C# (.NET), design 3D, intégration d’assets, et tests continus pour assurer fluidité et stabilité en runtime.',
          'Contraintes techniques : limites du moteur Unity (GC, gestion des scènes, physics), optimisation des assets pour éviter des surcoûts GPU et maintien de la maintenabilité malgré la croissance du nombre de scripts (~50+ scripts gérés~).',
          'Résultat : un jeu jouable de bout en bout, avec *mécaniques de gameplay centrales* implémentées, assets 3D intégrés, et pipeline Python pour le traitement automatisé des assets et tests qualité. *Performance observée : -40% faux positifs sur les tests automatisés, cadence 1 moteur / 12s*.'
        ]
      },
      languages: {
        type: 'tags',
        items: [

          // 🥧 PIE — peu de métriques (focus stabilité / perf)
          {
            section: 'Langage',
            label: 'C# (.NET)',
            icon: '', 
            description: 'Développement du gameplay et de la logique applicative 3D sous Unity',
            examples: [
              'Implémentation de mécaniques de déplacement, interactions et états de jeu',
              'Architecture modulaire d’environ 50 scripts C#',
              'Optimisation CPU et garbage collection'
            ],
            metrics: {
              fpsMoyen: 140,
              crashRate: 0
            }
          },

          // 📊 BAR — plusieurs métriques équilibrées
          {
            section: 'Langage',
            label: 'Unity Engine',
            icon: '',
            description: 'Moteur de jeu 3D pour la conception, le scripting et l’intégration des scènes',
            examples: [
              'Organisation multi-scènes et gestion des transitions',
              'Lighting baked + post-processing optimisé',
              'Utilisation de ScriptableObjects pour paramétrage'
            ],
            metrics: {
              scenes: 3,
              assets: '+ de 200',
              prefabs: 25,
              buildTimeSec: 180
            }
          },

          // 🥧 PIE — automation simple mais utile
          {
            section: 'Langage',
            label: 'Python',
            icon: '/asset/python.png',
            description: 'Scripts d’automatisation pour contrôle qualité et validation des assets',
            examples: [
              'Scan automatique des dossiers assets',
              'Détection de textures manquantes ou surdimensionnées',
              'Export de rapports CSV'
            ],
            metrics: {
              scripts: 10,
              assetsVerifies: 200
            }
          },

          // 📊 BAR — optimisation graphique
          {
            section: 'Outils',
            label: '3D Modelling & Texturing',
            icon: '',
            description: 'Production et optimisation d’assets 3D temps réel',
            examples: [
              'Modélisation d’environnements low-poly',
              'Baking des textures et normal maps',
              'Nettoyage topologique pour réduire les coûts GPU'
            ],
            metrics: {
              assetsOptimises: 50,
              trianglesReductionPct: 30,
              texturesBaked: 40,
              materials: 25
            }
          },

          // 🧠 DENSE — beaucoup de données = historique projet
          {
            section: 'Outils',
            label: 'Git',
            icon: '',
            description: 'Gestion du versioning et sécurisation des évolutions',
            examples: [
              'Branches par feature',
              'Reverts rapides lors de régressions',
              'Historique propre et traçable'
            ],
            metrics: {
              commits: 150,
              merges: 28,
              branches: 6,
              tags: 12,
              reverts: 4,
              conflictResolutions: 9,
              releaseBuilds: 14
            }
          },

          // 📊 BAR — pilotage qualité
          {
            section: 'Outils',
            label: 'Méthodes & Optimisation',
            icon: '',
            description: 'Stabilité, performances et maintenabilité du projet',
            examples: [
              'Profiling CPU/GPU régulier',
              'Refactorisation progressive',
              'Tests manuels systématiques avant build'
            ],
            metrics: {
              fpsStable: 60,
              memUsageGB: 1.8,
              bugsCorriges: 42,
              refactors: 18
            }
          }
        ]
      }
    },

    ABB: {
      background: '/asset/abb.png',

      contexte: {
        type: 'bullets-inline',
        items: [
          'Mission industrielle chez *ABB* avec ~fort enjeu de fiabilité~ et ~automatisation avancée du reporting~.',
          'Objectif principal : *industrialiser des chaînes Excel existantes* tout en garantissant ~robustesse~, ~performance~ et ~maintenabilité long terme~.',
          'Environnement fortement contraint : *Excel imposé comme front-end unique*, ~volumétrie de données industrielle~, système bureautique verrouillé.',
          'Responsabilité quasi complète du cycle : ~analyse métier~, conception technique, développement, optimisation et validation opérationnelle.',
          'Développement d’*outils Excel automatisés multi-projets* avec connexion directe à *SQL Server* pour extraction, agrégation et pré-traitement des données.',
          'Optimisation conjointe *VBA + SQL* pour réduire drastiquement les temps de génération sur des volumes élevés.',
          'Gestion de fréquences de génération très variables : ~quasi temps réel~ jusqu’à ~batchs périodiques longs~.',
          'Contraintes techniques fortes : limites mémoire de *VBA*, absence de parallélisme natif, nécessité de maintenir une architecture lisible malgré la croissance fonctionnelle.',
          'Mise en place d’une ~documentation technique et fonctionnelle exhaustive~ afin d’assurer la pérennité et le transfert des outils.'
        ]
      },

      languages: {
        type: 'tags',
        items: [

          // 🥧 PIE — stabilité / automatisation
          {
            section: 'Langage',
            label: 'VBA (Excel)',
            icon: '',
            description: 'Automatisation complète des chaînes de reporting et logique métier embarquée dans Excel.',
            examples: [
              'Orchestration des imports SQL et rafraîchissement des données',
              'Génération automatique de rapports multi-feuilles',
              'Gestion des erreurs et logs d’exécution',
              'Structuration modulaire du code VBA'
            ],
            metrics: {
              rapportsGeneresJour: 25,
              tauxErreurPct: 1
            }
          },

          // 📊 BAR — volumétrie et performance data
          {
            section: 'Langage',
            label: 'SQL Server (T-SQL)',
            icon: '',
            description: 'Extraction, filtrage et agrégation des données industrielles côté base pour limiter la charge VBA.',
            examples: [
              'Requêtes d’agrégation multi-périodes',
              'Optimisation via index et vues matérialisées',
              'Jointures sur tables volumineuses',
              'Pré-calculs statistiques'
            ],
            metrics: {
              tables: 18,
              vues: 9,
              requetesOptimisees: 35,
              volumetrieMillionsLignes: 12
            }
          }
        ]
      },

      tools: {
        type: 'tags',
        items: [

          // 📊 BAR — outil principal de production
          {
            section: 'Outils',
            label: 'Microsoft Excel',
            icon: '',
            description: 'Front-end utilisateur pour restitution, analyse et archivage des données.',
            examples: [
              'Dashboards dynamiques',
              'Mises en forme conditionnelles automatisées',
              'Archivage mensuel automatique',
              'Exports PDF et Excel'
            ],
            metrics: {
              classeurs: 14,
              feuilles: 120,
              tableauxDynamiques: 38,
              rapportsAutomatises: 22
            }
          },

          // 🥧 PIE — usage ciblé mais critique
          {
            section: 'Outils',
            label: 'VBA Editor',
            icon: '',
            description: 'Environnement de développement et debug VBA.',
            examples: [
              'Debug pas à pas',
              'Profiling manuel des macros',
              'Refactorisation modulaire',
              'Gestion des dépendances'
            ],
            metrics: {
              modules: 32,
              macros: 110
            }
          },

          // 📊 BAR — infra data
          {
            section: 'Outils',
            label: 'SQL Server Management Studio',
            icon: '',
            description: 'Administration, optimisation et monitoring des requêtes SQL.',
            examples: [
              'Analyse des plans d’exécution',
              'Indexation ciblée',
              'Optimisation des temps de réponse',
              'Maintenance des schémas'
            ],
            metrics: {
              bases: 3,
              index: 42,
              proceduresStockees: 28,
              optimisations: 19
            }
          },

          // 🧠 DENSE — activité projet et maintenance
          {
            section: 'Outils',
            label: 'Versioning & Sauvegardes',
            icon: '',
            description: 'Gestion des versions et sécurisation des livrables.',
            examples: [
              'Snapshots réguliers',
              'Historique de versions',
              'Rollback rapide',
              'Archivage projet'
            ],
            metrics: {
              versions: 85,
              sauvegardes: 120,
              restaurations: 6,
              livraisons: 18,
              correctifs: 24,
              audits: 5,
              incidents: 3
            }
          }
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
  const [selectedTech, setSelectedTech] = useState(null);
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

  useEffect(() => {
    setSelectedTech(null);
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
            {/* <VerticalBlock title="Mission" block={selectedData.mission} />
            <VerticalBlock title="Contraintes / Résultats" block={selectedData.contraintes}/> */}
          </div>

          <div className="right-subblock bottom">
            <VerticalBlock title="Langages & Frameworks" block={selectedData.languages} selectedTech={selectedTech} onSelectTech={setSelectedTech} />
            {/* <VerticalBlock title="Datas" block={selectedData.data}/>
            <VerticalBlock title="Outils" block={selectedData.tools}/>
            <VerticalBlock title="Méthodologies" block={selectedData.methods}/> */}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Experiences;