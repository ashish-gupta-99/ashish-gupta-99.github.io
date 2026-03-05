"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleDelay: number;
  twinkleDuration: number;
}

// Configure star density here: 'light' or 'medium'
const STAR_DENSITY_MODE: 'light' | 'medium' = 'medium';

const STAR_COUNTS = {
  light: 50,
  medium: 150,
};

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number | undefined>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Generate stars
    const starCount = STAR_COUNTS[STAR_DENSITY_MODE];
    starsRef.current = Array.from({ length: starCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2.5 + 1, // Increased from 2 + 0.5 to 2.5 + 1
      opacity: Math.random() * 0.5 + 0.5, // Increased from 0.7 + 0.3 to 0.5 + 0.5
      twinkleDelay: Math.random() * 5000,
      twinkleDuration: Math.random() * 3000 + 2000,
    }));

    // Animation loop
    const startTime = Date.now();
    const animate = () => {
      const currentTime = Date.now() - startTime;
      
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        // Twinkling effect
        const cycleTime = (currentTime + star.twinkleDelay) % star.twinkleDuration;
        const twinkleProgress = cycleTime / star.twinkleDuration;
        const twinkle = Math.sin(twinkleProgress * Math.PI * 2) * 0.35 + 0.65;

        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ minHeight: "100vh" }}
    />
  );
}
