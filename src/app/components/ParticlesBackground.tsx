'use client';

import { useEffect } from 'react';

const SpaceCanvas = () => {
  useEffect(() => {
    let canvas = document.getElementById('space-canvas') as HTMLCanvasElement | null;
    if (!canvas) return;

    let ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawBackground = () => {
      if (!canvas || !ctx) return;

      // Dark silver background gradient
      const silverGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      silverGradient.addColorStop(0, '#3A3A3A'); // dark silver
      silverGradient.addColorStop(0.5, '#4A4A4A'); // medium dark silver
      silverGradient.addColorStop(1, '#2A2A2A'); // very dark silver
      ctx.fillStyle = silverGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Metallic shine effect (diagonal light streak)
      const shineGradient = ctx.createLinearGradient(
        0, 0,
        canvas.width, canvas.height
      );
      shineGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
      shineGradient.addColorStop(0.45, 'rgba(255, 255, 255, 0)');
      shineGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
      shineGradient.addColorStop(0.55, 'rgba(255, 255, 255, 0)');
      shineGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = shineGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Blue glow bottom right
      const blueGlow = ctx.createRadialGradient(
        canvas.width * 0.85,
        canvas.height * 0.85,
        0,
        canvas.width * 0.85,
        canvas.height * 0.85,
        canvas.width * 0.5
      );
      blueGlow.addColorStop(0, 'rgba(0, 128, 255, 0.15)');
      blueGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = blueGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Pink glow top left
      const pinkGlow = ctx.createRadialGradient(
        canvas.width * 0.15,
        canvas.height * 0.15,
        0,
        canvas.width * 0.15,
        canvas.height * 0.15,
        canvas.width * 0.4
      );
      pinkGlow.addColorStop(0, 'rgba(255, 105, 180, 0.1)');
      pinkGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = pinkGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Additional silver shine in the middle
      const silverShine = ctx.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.5,
        0,
        canvas.width * 0.5,
        canvas.height * 0.5,
        canvas.width * 0.3
      );
      silverShine.addColorStop(0, 'rgba(220, 220, 220, 0.05)');
      silverShine.addColorStop(0.5, 'rgba(192, 192, 192, 0.03)');
      silverShine.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = silverShine;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const resize = () => {
      if (!canvas || !ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawBackground();
    };

    window.addEventListener('resize', resize);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas id="space-canvas" className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none" />;
};

export default SpaceCanvas;