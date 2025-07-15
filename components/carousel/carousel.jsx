import React, { useEffect, useRef, useState } from 'react';
import './carousel.css';

const Carousel = () => {
  const images = [
    '/asset/earth.jpg',
    '/asset/neptune.jpg',
    '/asset/saturne.jpg',
  ];

  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const posRef = useRef(0);
  const speed = 0.3;

  const [displayImages, setDisplayImages] = useState([]);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;

    const handleLoad = () => {
      if (!track) return;
      const items = track.children;
      if (items.length === 0) return;

      // largeur set initial
      let setWidth = 0;
      for (let i = 0; i < images.length; i++) {
        const w = items[i].getBoundingClientRect().width;
        setWidth += w;
      }

      const containerWidth = container.offsetWidth;
      const fullSetsCount = Math.floor(containerWidth / setWidth) + 2; // +2 pour sécurité

      // On construit le tableau en répétant images
      let newImages = [];
      for (let i = 0; i < fullSetsCount; i++) {
        newImages = newImages.concat(images);
      }

      // Correction doublon entre sets
      for (let i = 1; i < fullSetsCount; i++) {
        const prevLast = newImages[i * images.length - 1];
        const currFirstIndex = i * images.length;
        const currFirst = newImages[currFirstIndex];

        if (prevLast === currFirst) {
          // Trouver une image différente dans le set courant et échanger
          for (let j = currFirstIndex + 1; j < (i + 1) * images.length; j++) {
            if (newImages[j] !== prevLast) {
              // Swap
              [newImages[currFirstIndex], newImages[j]] = [newImages[j], newImages[currFirstIndex]];
              break;
            }
          }
        }
      }

      setDisplayImages(newImages);
    };

    setTimeout(handleLoad, 100);

    const onResize = () => {
      setDisplayImages([]);
      posRef.current = 0;
      if (track) track.style.transform = `translateX(0px)`;
      setTimeout(handleLoad, 100);
    };

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [images]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || displayImages.length === 0) return;

    const animate = () => {
      posRef.current -= speed;
      const items = track.children;
      if (items.length === 0) return;

      const firstItem = items[0];
      // const firstItemWidth = firstItem.getBoundingClientRect().width;
      const style = getComputedStyle(firstItem);
      const marginRight = parseFloat(style.marginRight);
      const firstItemWidth = firstItem.getBoundingClientRect().width + marginRight;

      if (Math.abs(posRef.current) >= firstItemWidth) {
        track.appendChild(firstItem);
        posRef.current += firstItemWidth;
      }

      track.style.transform = `translateX(${posRef.current}px)`;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, [displayImages]);

  return (
    <div className="carousel-container" ref={containerRef}>
      <div className="carousel-track" ref={trackRef}>
        {displayImages.length > 0
          ? displayImages.map((src, index) => (
              <div className="carousel-item" key={index}>
                <img src={src} alt={`Slide ${index}`} />
              </div>
            ))
          : images.map((src, index) => (
              <div className="carousel-item" key={index}>
                <img src={src} alt={`Slide ${index}`} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Carousel;
