'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface HoloCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  enableTilt?: boolean;
}

export default function HoloCard({
  children,
  className = '',
  glowColor = 'rgba(3, 40, 238, 0.35)',
  enableTilt = true,
}: HoloCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotX = ((y - centerY) / centerY) * -6; // subtle max 6deg
      const rotY = ((x - centerX) / centerX) * 6;
      setRotateX(rotX);
      setRotateY(rotY);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformPerspective: 1000,
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      className={`relative overflow-hidden ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Dynamic cursor-following spotlight glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 60%)`,
          }}
        />
      )}

      {/* Subtle sweeping border shine */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
