import React, { useState, useRef, useEffect } from 'react';
import './parcours.css';

const Parcours = ({
  photo,
  title,
  date,
  lieu,
  contexte = [],
  taches = [],
  environnement = [],
  side = 'left',
}) => {
  const [hoverIdx, setHoverIdx] = useState(null);
  const [heights, setHeights] = useState([]);
  const blockRefs = useRef([]);

  const offset = 10;
  const isRight = side === 'right';

  useEffect(() => {
    const newHeights = blockRefs.current.map(ref => ref?.offsetHeight || 0);
    // Évite les updates inutiles
    const isDifferent = newHeights.some((h, i) => h !== heights[i]);
    if (isDifferent) {
      setHeights(newHeights);
    }
  }, [contexte.length, taches.length, environnement.length]);

  return (
    <div className={`parcours-container ${isRight ? 'right' : 'left'}`}>
      <div className={`parcours-header ${isRight ? 'right' : ''}`}>
        <img src={photo} alt="Avatar" className="parcours-photo" />
        <div>
          <h2 className="parcours-title">{title}</h2>
          <div className="parcours-date-lieu">
            {date && <span className="parcours-date">{date}</span>}
            {lieu && <span className="parcours-lieu">{lieu}</span>}
          </div>
        </div>
      </div>

      <div className="parcours-steps">
        {contexte.map((ctx, idx) => (
          <div
            className="parcours-step"
            key={idx}
            onMouseEnter={() => setHoverIdx(idx)}
            onMouseLeave={() => setHoverIdx(null)}
          >
            <div className="parcours-line-part">
              <div className={`parcours-point ${hoverIdx === idx ? 'hovered' : ''}`} />
              {idx < contexte.length - 1 && (
                <div
                  className={`parcours-segment ${hoverIdx === idx ? 'hovered' : ''}`}
                  style={{
                    height: `${heights[idx] - 12 - offset}px`, // 12 = point size
                  }}
                />
              )}
            </div>

            <div
              className={`parcours-big-zone ${hoverIdx === idx ? 'hovered' : ''}`}
              ref={el => (blockRefs.current[idx] = el)}
            >
              {/* Contexte */}
              <div className="parcours-text parcours-text-1">{ctx}</div>

              {/* Tâches */}
              <ul className={`parcours-text parcours-text-2 ${isRight ? 'right' : 'left'}`}>
                {(taches[idx] || []).map((tache, i) => (
                  <li key={i}>{tache}</li>
                ))}
              </ul>
              {/* <div className="parcours-text parcours-text-2">{taches[idx]}</div> */}

              {/* Environnements */}
              <ul className={`parcours-text parcours-text-3 ${isRight ? 'right' : 'left'}`}>
                {(environnement[idx] || []).map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              {/* <div className="parcours-text parcours-text-3">{environnement[idx]}</div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parcours;
