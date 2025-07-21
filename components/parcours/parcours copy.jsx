import React, { useState, useRef, useEffect } from 'react';
import './parcours.css';

const Parcours = ({ photo, title, texts, side = 'left' }) => {
  const chunkedTexts = [];
  for (let i = 0; i < texts.length; i += 3) {
    chunkedTexts.push(texts.slice(i, i + 3));
  }

  const [hoverIdx, setHoverIdx] = useState(null);
  const [heights, setHeights] = useState([]);
  const blockRefs = useRef([]);

  const offset = 10;

  const isRight = side === 'right';

  useEffect(() => {
    const newHeights = blockRefs.current.map(ref => ref?.offsetHeight || 0);
    setHeights(newHeights);
  }, [texts]);

  return (
    <div className={`parcours-container ${isRight ? 'right' : 'left'}`}>
      <div className={`parcours-header ${isRight ? 'right' : ''}`}>
        <img src={photo} alt="Avatar" className="parcours-photo" />
        <h2 className="parcours-title">{title}</h2>
      </div>

      <div className="parcours-steps">
        {chunkedTexts.map((group, idx) => (
          <div
            className="parcours-step"
            key={idx}
            onMouseEnter={() => setHoverIdx(idx)}
            onMouseLeave={() => setHoverIdx(null)}
          >
            <div className="parcours-line-part">
              <div className={`parcours-point ${hoverIdx === idx ? 'hovered' : ''}`} />
              {idx < chunkedTexts.length - 1 && (
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
              <div className="parcours-text parcours-text-1">{group[0]}</div>
              <div className="parcours-text parcours-text-2">{group[1]}</div>
              <div className="parcours-text parcours-text-3">{group[2]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parcours;
