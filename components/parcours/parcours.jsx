import React, { useEffect, useRef, useState } from 'react';
import './parcours.css';

const Parcours = ({ photo, title, texts, side = 'left' }) => {
  const chunkedTexts = [];
  for (let i = 0; i < texts.length; i += 3) {
    chunkedTexts.push(texts.slice(i, i + 3));
  }

  const refs = useRef([]);
  const [positions, setPositions] = useState([]);
  const [hoverIdx, setHoverIdx] = useState(null);

  useEffect(() => {
    const newPositions = refs.current.map(ref => ref?.offsetTop ?? 0);
    setPositions(newPositions);
  }, [texts]);

  const isRight = side === 'right';

  return (
    <div className={`parcours-container ${isRight ? 'right' : 'left'}`}>
      <div className={`parcours-header ${isRight ? 'right' : ''}`}>
        <img src={photo} alt="Avatar" className="parcours-photo" />
        <h2 className="parcours-title">{title}</h2>
      </div>
      <div className="parcours-texts">
        {isRight && (
          <div className="parcours-groups">
            {chunkedTexts.map((group, idx) => (
              <div
                className={`parcours-big-zone ${hoverIdx === idx ? 'hovered' : ''}`}
                key={idx}
                ref={el => refs.current[idx] = el}
                onMouseEnter={() => setHoverIdx(idx)}
                onMouseLeave={() => setHoverIdx(null)}
              >
                <div className="parcours-text parcours-text-1">{group[0]}</div>
                <div className="parcours-text parcours-text-2">{group[1]}</div>
                <div className="parcours-text parcours-text-3">{group[2]}</div>
              </div>
            ))}
          </div>
        )}

        <div className="parcours-line">
          {positions.map((top, idx) => (
            <React.Fragment key={idx}>
              <div
                className={`parcours-point ${hoverIdx === idx ? 'hovered' : ''}`}
                style={{ top: `${top}px` }}
                onMouseEnter={() => setHoverIdx(idx)}
                onMouseLeave={() => setHoverIdx(null)}
              />
              {idx < positions.length - 1 && (() => {
                const nextTop = positions[idx + 1];
                const distance = nextTop - top;
                const margin = distance * 0.1;
                return (
                  <div
                    className={`parcours-segment ${hoverIdx === idx ? 'hovered' : ''}`}
                    style={{
                      top: `${top + margin}px`,
                      height: `${distance - 2 * margin}px`,
                    }}
                    onMouseEnter={() => setHoverIdx(idx)}
                    onMouseLeave={() => setHoverIdx(null)}
                  />
                );
              })()}
            </React.Fragment>
          ))}
        </div>

        {!isRight && (
          <div className="parcours-groups">
            {chunkedTexts.map((group, idx) => (
              <div
                className={`parcours-big-zone ${hoverIdx === idx ? 'hovered' : ''}`}
                key={idx}
                ref={el => refs.current[idx] = el}
                onMouseEnter={() => setHoverIdx(idx)}
                onMouseLeave={() => setHoverIdx(null)}
              >
                <div className="parcours-text parcours-text-1">{group[0]}</div>
                <div className="parcours-text parcours-text-2">{group[1]}</div>
                <div className="parcours-text parcours-text-3">{group[2]}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Parcours;
