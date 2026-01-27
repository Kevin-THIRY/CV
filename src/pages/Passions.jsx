import { useEffect, useRef, useState } from "react";
import React from "react";
import "./Passions.css";

const WIDTH = 900;
const HEIGHT = 520;
const SPEED = 120;

const PLAYER_SIZE = 100;

const POI_SIZE = 40;

const POIS = [
  {
    id: 1,
    x: 120,
    y: 90,
    title: "🤖 Robotique",
    description: "Automatisation, systèmes embarqués, vision industrielle."
  },
  {
    id: 2,
    x: 360,
    y: 70,
    title: "🎮 Jeux vidéo",
    description: "Souls-like, game design, création interactive."
  },
  {
    id: 3,
    x: 260,
    y: 220,
    title: "🇯🇵 Japon",
    description: "Langue, culture, rigueur, esthétique minimaliste."
  }
];

export default function Passions() {
  const canvasRef = useRef(null);
  const lastTimeRef = useRef(0);

  const playerRef = useRef({
    x: 80,
    y: 160,
    targetX: 80,
    targetY: 160
  });

  const activePoiRef = useRef(null);

  const mapImgRef = useRef(null);
  const playerImgRef = useRef(null);
  const poiImgRef = useRef(null);

  useEffect(() => {
    const mapImg = new Image();
    mapImg.src = "/asset/Game/map.png";
    mapImgRef.current = mapImg;

    const playerImg = new Image();
    playerImg.src = "/asset/Game/player.png";
    playerImgRef.current = playerImg;

    const poiImg = new Image();
    poiImg.src = "/asset/Game/poi.png";
    poiImgRef.current = poiImg;
  }, []);

  // --- Click déplacement ---
  const handleClick = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const scaleX = canvasRef.current.width / rect.width;
    const scaleY = canvasRef.current.height / rect.height;

    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    const p = playerRef.current;
    p.targetX = x;
    p.targetY = y;
  };

  // --- Game Loop ---
  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    const loop = (time) => {
      const dt = (time - lastTimeRef.current) / 1000 || 0;
      lastTimeRef.current = time;

      const p = playerRef.current;

      const dx = p.targetX - p.x;
      const dy = p.targetY - p.y;
      const dist = Math.hypot(dx, dy);

      if (dist > 0.5) {
        const vx = (dx / dist) * SPEED * dt;
        const vy = (dy / dist) * SPEED * dt;

        p.x += vx;
        p.y += vy;
      }

      draw(ctx);
      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }, []);

  // --- Collision POI ---
  useEffect(() => {
    const interval = setInterval(() => {
      const p = playerRef.current;

      const HIT_RADIUS = PLAYER_SIZE / 2 + POI_SIZE / 2; // 12 + 9 = 21
      const hit = POIS.find(poi => {
        const d = Math.hypot(p.x - poi.x, p.y - poi.y);
        return d < HIT_RADIUS;
      });

      activePoiRef.current = hit || null;
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const draw = (ctx) => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    if (mapImgRef.current.complete) {
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(mapImgRef.current, 0, 0, WIDTH, HEIGHT);
    } else {
      ctx.fillStyle = "#1e293b";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
    }
    drawGrid(ctx);
    drawPois(ctx);
    drawPlayer(ctx);

    drawPoiPanel(ctx, activePoiRef.current);
  };

  const drawGrid = (ctx) => {
    ctx.strokeStyle = "rgba(255,255,255,0.05)";
    for (let x = 0; x < WIDTH; x += 32) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, HEIGHT);
      ctx.stroke();
    }
    for (let y = 0; y < HEIGHT; y += 32) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(WIDTH, y);
      ctx.stroke();
    }
  };

  const drawPlayer = (ctx) => {
    const p = playerRef.current;
    if (playerImgRef.current && playerImgRef.current.complete && playerImgRef.current.naturalWidth > 0) {
      ctx.drawImage(playerImgRef.current, p.x - PLAYER_SIZE / 2, p.y - PLAYER_SIZE / 2, PLAYER_SIZE, PLAYER_SIZE);
    } else {
      ctx.fillStyle = "#6366f1";
      ctx.beginPath();
      ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const drawPois = (ctx) => {
    POIS.forEach(poi => {
      if (poiImgRef.current && poiImgRef.current.complete && poiImgRef.current.naturalWidth > 0) {
        ctx.drawImage(poiImgRef.current, poi.x - POI_SIZE / 2, poi.y - POI_SIZE / 2, POI_SIZE, POI_SIZE);
      } else {
        ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
        ctx.beginPath();
        ctx.arc(poi.x, poi.y, 6, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  };

  const drawPoiPanel = (ctx, poi) => {
    if (!poi) return;

    const panelWidth = 140;
    const panelHeight = 50;
    const padding = 6;

    // Position du panneau au-dessus du POI
    const x = poi.x - panelWidth / 2;
    const y = poi.y - panelHeight - 12;

    // Fond du panneau
    ctx.fillStyle = "rgba(0,0,0,0.7)";
    ctx.fillRect(x, y, panelWidth, panelHeight);

    // Bord arrondi pixelisé
    ctx.strokeStyle = "#22c55e";
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, panelWidth, panelHeight);

    // Texte
    ctx.fillStyle = "#fff";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText(poi.title, x + panelWidth / 2, y + padding);
    ctx.fillText(poi.description, x + panelWidth / 2, y + padding + 16);
  };

  return (
    <div className="passion-game-wrapper">
      <canvas
        ref={canvasRef}
        width={WIDTH}
        height={HEIGHT}
        onClick={handleClick}
      />

      <div className="hint">
        Clique pour te déplacer. Approche un point.
      </div>
    </div>
  );
}
