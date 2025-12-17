import React, { useState } from 'react';
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
    experience1: {
      contexte: {
        type: 'bullets-inline',
        items: [
          '1Refonte application métier',
          'Client grand compte',
          'Équipe de 6',
          'Deadline courte'
        ]
      },
      mission: {
        type: 'bullets-inline',
        items: ['Frontend React', 'Architecture UI']
      },
      contraintes: {
        type: 'bullets-inline',
        items: ['Performance', 'Accessibilité', 'Délais']
      },

      languages: {
        type: 'tags',
        items: [
          { label: 'React', icon: '/icons/react.svg' },
          { label: 'JavaScript', icon: '/icons/js.svg' },
          { label: 'CSS', icon: '/icons/css.svg' }
        ]
      },
      data: {
        type: 'tags',
        items: [{ label: 'REST API', icon: '/icons/api.svg' }]
      },
      tools: {
        type: 'tags',
        items: [{ label: 'Git', icon: '/icons/git.svg' }]
      },
      methods: {
        type: 'tags',
        items: [{ label: 'Agile', icon: '/icons/agile.svg' }]
      }
    },

    experience2: {
      contexte: {
        type: 'bullets-inline',
        items: [
          '2Refonte application métier',
          'Client grand compte',
          'Équipe de 6',
          'Deadline courte'
        ]
      },
      mission: {
        type: 'bullets-inline',
        items: ['Frontend React', 'Architecture UI']
      },
      contraintes: {
        type: 'bullets-inline',
        items: ['Performance', 'Accessibilité', 'Délais']
      },

      languages: {
        type: 'tags',
        items: [
          { label: 'React', icon: '/icons/react.svg' },
          { label: 'JavaScript', icon: '/icons/js.svg' },
          { label: 'CSS', icon: '/icons/css.svg' }
        ]
      },
      data: {
        type: 'tags',
        items: [{ label: 'REST API', icon: '/icons/api.svg' }]
      },
      tools: {
        type: 'tags',
        items: [{ label: 'Git', icon: '/icons/git.svg' }]
      },
      methods: {
        type: 'tags',
        items: [{ label: 'Agile', icon: '/icons/agile.svg' }]
      }
    },

    experience3: {
      contexte: {
        type: 'bullets-inline',
        items: [
          '3Refonte application métier',
          'Client grand compte',
          'Équipe de 6',
          'Deadline courte'
        ]
      },
      mission: {
        type: 'bullets-inline',
        items: ['Frontend React', 'Architecture UI']
      },
      contraintes: {
        type: 'bullets-inline',
        items: ['Performance', 'Accessibilité', 'Délais']
      },

      languages: {
        type: 'tags',
        items: [
          { label: 'React', icon: '/icons/react.svg' },
          { label: 'JavaScript', icon: '/icons/js.svg' },
          { label: 'CSS', icon: '/icons/css.svg' }
        ]
      },
      data: {
        type: 'tags',
        items: [{ label: 'REST API', icon: '/icons/api.svg' }]
      },
      tools: {
        type: 'tags',
        items: [{ label: 'Git', icon: '/icons/git.svg' }]
      },
      methods: {
        type: 'tags',
        items: [{ label: 'Agile', icon: '/icons/agile.svg' }]
      }
    },

    experience4: {
      contexte: {
        type: 'bullets-inline',
        items: [
          '4Refonte application métier',
          'Client grand compte',
          'Équipe de 6',
          'Deadline courte'
        ]
      },
      mission: {
        type: 'bullets-inline',
        items: ['Frontend React', 'Architecture UI']
      },
      contraintes: {
        type: 'bullets-inline',
        items: ['Performance', 'Accessibilité', 'Délais']
      },

      languages: {
        type: 'tags',
        items: [
          { label: 'React', icon: '/icons/react.svg' },
          { label: 'JavaScript', icon: '/icons/js.svg' },
          { label: 'CSS', icon: '/icons/css.svg' }
        ]
      },
      data: {
        type: 'tags',
        items: [{ label: 'REST API', icon: '/icons/api.svg' }]
      },
      tools: {
        type: 'tags',
        items: [{ label: 'Git', icon: '/icons/git.svg' }]
      },
      methods: {
        type: 'tags',
        items: [{ label: 'Agile', icon: '/icons/agile.svg' }]
      }
    },

    experience5: {
      contexte: {
        type: 'bullets-inline',
        items: [
          '5Refonte application métier',
          'Client grand compte',
          'Équipe de 6',
          'Deadline courte'
        ]
      },
      mission: {
        type: 'bullets-inline',
        items: ['Frontend React', 'Architecture UI']
      },
      contraintes: {
        type: 'bullets-inline',
        items: ['Performance', 'Accessibilité', 'Délais']
      },

      languages: {
        type: 'tags',
        items: [
          { label: 'React', icon: '/icons/react.svg' },
          { label: 'JavaScript', icon: '/icons/js.svg' },
          { label: 'CSS', icon: '/icons/css.svg' }
        ]
      },
      data: {
        type: 'tags',
        items: [{ label: 'REST API', icon: '/icons/api.svg' }]
      },
      tools: {
        type: 'tags',
        items: [{ label: 'Git', icon: '/icons/git.svg' }]
      },
      methods: {
        type: 'tags',
        items: [{ label: 'Agile', icon: '/icons/agile.svg' }]
      }
    },

    experience6: {
      contexte: {
        type: 'bullets-inline',
        items: [
          '6Refonte application métier',
          'Client grand compte',
          'Équipe de 6',
          'Deadline courte'
        ]
      },
      mission: {
        type: 'bullets-inline',
        items: ['Frontend React', 'Architecture UI']
      },
      contraintes: {
        type: 'bullets-inline',
        items: ['Performance', 'Accessibilité', 'Délais']
      },

      languages: {
        type: 'tags',
        items: [
          { label: 'React', icon: '/icons/react.svg' },
          { label: 'JavaScript', icon: '/icons/js.svg' },
          { label: 'CSS', icon: '/icons/css.svg' }
        ]
      },
      data: {
        type: 'tags',
        items: [{ label: 'REST API', icon: '/icons/api.svg' }]
      },
      tools: {
        type: 'tags',
        items: [{ label: 'Git', icon: '/icons/git.svg' }]
      },
      methods: {
        type: 'tags',
        items: [{ label: 'Agile', icon: '/icons/agile.svg' }]
      }
    },

    experience7: {
      contexte: {
        type: 'bullets-inline',
        items: [
          '7Refonte application métier',
          'Client grand compte',
          'Équipe de 6',
          'Deadline courte'
        ]
      },
      mission: {
        type: 'bullets-inline',
        items: ['Frontend React', 'Architecture UI']
      },
      contraintes: {
        type: 'bullets-inline',
        items: ['Performance', 'Accessibilité', 'Délais']
      },

      languages: {
        type: 'tags',
        items: [
          { label: 'React', icon: '/icons/react.svg' },
          { label: 'JavaScript', icon: '/icons/js.svg' },
          { label: 'CSS', icon: '/icons/css.svg' }
        ]
      },
      data: {
        type: 'tags',
        items: [{ label: 'REST API', icon: '/icons/api.svg' }]
      },
      tools: {
        type: 'tags',
        items: [{ label: 'Git', icon: '/icons/git.svg' }]
      },
      methods: {
        type: 'tags',
        items: [{ label: 'Agile', icon: '/icons/agile.svg' }]
      }
    }
  };

  const [selectedKey, setSelectedKey] = useState('experience1');
  const selectedData = DATA[selectedKey];
  
  return (
    <div className="second-page-container">
      <div className="block-left">
        <div className="sub-block-top">
          <img src="/asset/Exp_pro.png" alt="Illustration" className="sub-block-top-image" />
          <div className="sub-block-top-text">
            <h3>Expériences profesionnels</h3>
          </div>
        </div>
        <div className="sub-block-bottom">
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-point"></span>
              <div className="timeline-content" onClick={() => setSelectedKey('experience1')}>
                <img src="/asset/photo.png" alt="Illustration"/>
                <div className="timeline-content-text">
                  <h4>Projet Personnel - 4 mois</h4>
                  <p>Septembre 2025 - Decembre 2025</p>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-point"></span>
              <div className="timeline-content" onClick={() => setSelectedKey('experience1')}>
                <img src="/asset/photo.png" alt="Illustration"/>
                <div className="timeline-content-text">
                  <h4>ABB - 2 mois</h4>
                  <p>Juillet 2025 - Aout 2025</p>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-point"></span>
              <div className="timeline-content" onClick={() => setSelectedKey('experience2')}>
                <img src="/asset/photo.png" alt="Illustration"/>
                <div className="timeline-content-text">
                  <h4>Actemium Lyon Logistics - VINCI ENERGIES - 1 an</h4>
                  <p>Juin 2024 - Juin 2025</p>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-point"></span>
              <div className="timeline-content" onClick={() => setSelectedKey('experience3')}>
                <img src="/asset/photo.png" alt="Illustration"/>
                <div className="timeline-content-text">
                  <h4>Saint-Gobain - 1 mois</h4>
                  <p>Mai 2024</p>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-point"></span>
              <div className="timeline-content" onClick={() => setSelectedKey('experience4')}>
                <img src="/asset/photo.png" alt="Illustration"/>
                <div className="timeline-content-text">
                  <h4>TDF – Tunnels de Fourvière - 1 mois</h4>
                  <p>Avril 2024</p>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-point"></span>
              <div className="timeline-content" onClick={() => setSelectedKey('experience5')}>
                <img src="/asset/photo.png" alt="Illustration"/>
                <div className="timeline-content-text">
                  <h4>RESONANCE – Groupe FIRALP - 1 mois</h4>
                  <p>Mars 2024</p>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-point"></span>
              <div className="timeline-content" onClick={() => setSelectedKey('experience6')}>
                <img src="/asset/photo.png" alt="Illustration"/>
                <div className="timeline-content-text">
                  <h4>Ingénieur Data Scientist – Volvo Trucks - 4 mois</h4>
                  <p>Septembre 2023 - Decembre 2023</p>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-point"></span>
              <div className="timeline-content" onClick={() => setSelectedKey('experience7')}>
                <img src="/asset/photo.png" alt="Illustration"/>
                <div className="timeline-content-text">
                  <h4>Ingénieur Robotique – Volvo Trucks - 1 an</h4>
                  <p>Aout 2022 - Aout 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-right">
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
  );
};


export default Experiences;