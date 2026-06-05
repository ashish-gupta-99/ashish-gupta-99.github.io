"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  twinkleDelay: number;
  twinkleDuration: number;
}

interface ShootingStar {
  x: number;
  y: number;
  dx: number;
  dy: number;
  length: number;
  speed: number;
  opacity: number;
  decay: number;
}

const STAR_DENSITY_MODE: 'light' | 'medium' = 'medium';

const STAR_COUNTS = {
  light: 100,
  medium: 250,
};

const STAR_COLORS = [
  "rgba(255, 255, 255, ",   // Pure White
  "rgba(224, 238, 255, ",   // Ice Blue
  "rgba(255, 244, 214, ",   // Warm Yellow/White
  "rgba(255, 222, 200, ",   // Soft Orange/Red
  "rgba(235, 245, 255, ",   // Light Blue
];

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size matching the viewport exactly (fixed background)
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Regenerate star positions on resize so they fit the new window boundaries
      generateStars();
    };

    // Generate stars
    const generateStars = () => {
      const starCount = STAR_COUNTS[STAR_DENSITY_MODE];
      starsRef.current = Array.from({ length: starCount }, () => {
        // 85% tiny background stars, 15% larger foreground stars
        const size = Math.random() < 0.85
          ? Math.random() * 0.7 + 0.3  // 0.3px to 1.0px radius
          : Math.random() * 1.0 + 1.0; // 1.0px to 2.0px radius
        
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          opacity: Math.random() * 0.6 + 0.4,
          color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
          twinkleDelay: Math.random() * 5000,
          twinkleDuration: Math.random() * 3000 + 2000,
        };
      });
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Animation loop
    const startTime = Date.now();
    const animate = () => {
      const currentTime = Date.now() - startTime;
      
      // Clear with solid space-black background
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw all stars
      starsRef.current.forEach((star) => {
        const cycleTime = (currentTime + star.twinkleDelay) % star.twinkleDuration;
        const twinkleProgress = cycleTime / star.twinkleDuration;
        
        // Twinkle amplitude: larger stars twinkle more, tiny stars are more stable
        const amplitude = star.size > 1.0 ? 0.5 : 0.15;
        const twinkle = Math.sin(twinkleProgress * Math.PI * 2) * amplitude + (1 - amplitude);

        ctx.fillStyle = `${star.color}${star.opacity * twinkle})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Handle Shooting Stars
      // Try to spawn a shooting star (low probability per frame)
      if (shootingStarsRef.current.length < 2 && Math.random() < 0.0015) {
        const angle = Math.PI / 6 + Math.random() * (Math.PI / 12); // ~30-45 degrees diagonal sweep
        shootingStarsRef.current.push({
          x: Math.random() * canvas.width * 0.8,
          y: Math.random() * canvas.height * 0.5,
          dx: Math.cos(angle),
          dy: Math.sin(angle),
          length: Math.random() * 80 + 40,
          speed: Math.random() * 8 + 6,
          opacity: 1.0,
          decay: Math.random() * 0.015 + 0.01,
        });
      }

      // Draw and update shooting stars
      shootingStarsRef.current.forEach((star, index) => {
        // Draw trailing tail
        const grad = ctx.createLinearGradient(
          star.x,
          star.y,
          star.x - star.dx * star.length,
          star.y - star.dy * star.length
        );
        grad.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        grad.addColorStop(1, `rgba(255, 255, 255, 0)`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - star.dx * star.length, star.y - star.dy * star.length);
        ctx.stroke();

        // Update positions
        star.x += star.dx * star.speed;
        star.y += star.dy * star.speed;
        star.opacity -= star.decay;

        // Clean up decayed shooting stars
        if (star.opacity <= 0) {
          shootingStarsRef.current.splice(index, 1);
        }
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
    />
  );
}
