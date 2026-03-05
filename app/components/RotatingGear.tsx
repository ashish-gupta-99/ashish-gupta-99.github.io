"use client";

import { useEffect, useRef, useState } from "react";

interface RotatingGearProps {
  position: "left" | "right";
  opposite?: boolean;
}

export default function RotatingGear({ position, opposite = false }: RotatingGearProps) {
  const gearRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const lastScrollY = useRef(0);
  const lastTimestamp = useRef(0);

  useEffect(() => {
    lastTimestamp.current = Date.now();
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      
      // Calculate scroll velocity
      const scrollDelta = currentScrollY - lastScrollY.current;
      const timeDelta = currentTime - lastTimestamp.current;
      const velocity = scrollDelta / (timeDelta || 1);
      
      // Update rotation based on scroll direction and velocity
      // Multiply by velocity to make rotation speed depend on scroll speed
      // If opposite is true, invert the rotation direction
      const rotationSpeed = velocity * 2 * (opposite ? -1 : 1);
      
      setRotation((prev) => prev + rotationSpeed);
      
      lastScrollY.current = currentScrollY;
      lastTimestamp.current = currentTime;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [opposite]);

  return (
    <div
      ref={gearRef}
      className={`fixed top-20 ${position === "left" ? "left-8" : "right-8"} z-30 pointer-events-none text-6xl opacity-60`}
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: "transform 0.1s linear",
      }}
    >
      ⚙️
    </div>
  );
}
