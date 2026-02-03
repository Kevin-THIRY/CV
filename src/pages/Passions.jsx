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
    x: 442,
    y: 230,
    title: "🤖 Robotique",
    description: "Automatisation, systèmes embarqués, vision industrielle."
  },
  {
    id: 2,
    x: 415,
    y: 400,
    title: "🎮 Jeux vidéo",
    description: "Souls-like, game design, création interactive."
  },
  {
    id: 3,
    x: 240,
    y: 300,
    title: "🇯🇵 Japon",
    description: "Langue, culture, rigueur, esthétique minimaliste."
  },
  {
    id: 4,
    x: 600,
    y: 300,
    title: "🇯🇵 Japon",
    description: "Langue, culture, rigueur, esthétique minimaliste."
  }
];

export default function Passions() {
  const canvasRef = useRef(null);
  const lastTimeRef = useRef(0);

  const playerRef = useRef({
    x: 450,
    y: 300,
    targetX: 450,
    targetY: 300,

    direction: "down",
    moving: false,
    walkPhase: 0
  });

  // const activePoiRef = useRef(null);
  const [activePoi, setActivePoi] = useState(null);

  const mapImgRef = useRef(null);
  const playerImgRef = useRef(null);
  const playerImgsRef = useRef({
    up: null,
    down: null,
    left: null,
    right: null
  });
  const poiImgRef = useRef(null);

  useEffect(() => {
    const mapImg = new Image();
    mapImg.src = "/asset/Game/map.png";
    mapImgRef.current = mapImg;

    const load = (src) => {
      const img = new Image();
      img.src = src;
      return img;
    };

    playerImgsRef.current = {
      up: load("/asset/Game/player_up.png"),
      down: load("/asset/Game/player_down.png"),
      left: load("/asset/Game/player_left.png"),
      right: load("/asset/Game/player_right.png")
    };

    const playerImg = new Image();
    playerImg.src = "/asset/Game/player.png";
    playerImgRef.current = playerImg;

    const poiImg = new Image();
    poiImg.src = "";
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
        const nx = dx / dist;
        const ny = dy / dist;

        p.x += nx * SPEED * dt;
        p.y += ny * SPEED * dt;

        p.moving = true;

        if (Math.abs(nx) > Math.abs(ny)) {
          p.direction = nx > 0 ? "right" : "left";
        } else {
          p.direction = ny > 0 ? "down" : "up";
        }

        p.walkPhase += dt * 10;
      } else {
        p.moving = false;
        p.walkPhase = 0;
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

      setActivePoi(prev =>
        hit?.id !== prev?.id ? hit || null : prev
      );
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
    const img = playerImgsRef.current[p.direction];

    if (!img || !img.complete) return;

    const bob = p.moving ? Math.sin(p.walkPhase) * 3 : 0;

    if (playerImgsRef.current[p.direction] && playerImgsRef.current[p.direction].complete && playerImgsRef.current[p.direction].naturalWidth > 0) {
      drawShadow(ctx, p);
      ctx.drawImage(img, p.x - PLAYER_SIZE / 2, p.y - PLAYER_SIZE / 2 + bob, PLAYER_SIZE, PLAYER_SIZE);
    } else {
      ctx.fillStyle = "#6366f1";
      ctx.beginPath();
      ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const drawShadow = (ctx, p) => {
    ctx.fillStyle = "rgba(0,0,0,0.35)";
    ctx.beginPath();
    ctx.ellipse(p.x, p.y + PLAYER_SIZE / 2 - 25, 18, 6, 0, 0, Math.PI * 2);
    ctx.fill();
  };

  const drawPois = (ctx) => {
    POIS.forEach(poi => {
      if (poiImgRef.current && poiImgRef.current.complete && poiImgRef.current.naturalWidth > 0) {
        ctx.drawImage(poiImgRef.current, poi.x - POI_SIZE / 2, poi.y - POI_SIZE / 2, POI_SIZE, POI_SIZE);
      } else {
        ctx.fillStyle = "rgba(0, 0, 0, 0)";
        ctx.beginPath();
        ctx.arc(poi.x, poi.y, 6, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  };

  const getScreenPosition = (poi) => {
    if (!canvasRef.current) return null;

    const rect = canvasRef.current.getBoundingClientRect();

    return {
      left: rect.left + (poi.x / WIDTH) * rect.width,
      top: rect.top + (poi.y / HEIGHT) * rect.height
    };
  };

  return (
    <div className="passion-game-wrapper">
      <canvas
        ref={canvasRef}
        width={WIDTH}
        height={HEIGHT}
        onClick={handleClick}
      />
      {activePoi && (() => {
        const pos = getScreenPosition(activePoi);
        if (!pos) return null;

        return (
          <div
            className="poi-ui"
            style={{
              left: pos.left,
              top: pos.top
            }}
          >
            <span className="poi-title">{activePoi.title}</span>
            <span className="poi-desc">{activePoi.description}</span>
          </div>
        );
      })()}

      <div className="hint">
        Clique pour te déplacer. Approche un point.
      </div>
    </div>
  );
}
