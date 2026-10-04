import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const HeroPhotoCard: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      const magnetRadius = Math.max(rect.width, rect.height) * 1.5;
      const dist = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (dist < magnetRadius) {
        setIsHovered(true);
        setPosition({
          x: distanceX / 3,
          y: distanceY / 3,
        });
      } else {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setPosition({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10 pointer-events-none flex justify-center items-end w-[320px] sm:w-[420px] md:w-[500px] lg:w-[540px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        style={{
          transform: isHovered
            ? `translate3d(${position.x}px, ${position.y}px, 0)`
            : 'translate3d(0px, 0px, 0px)',
          transition: isHovered
            ? 'transform 0.3s ease-out'
            : 'transform 0.6s ease-in-out',
        }}
        className="w-full flex justify-center items-end"
      >
        <img
          src="/avatar.png"
          alt="Syed Hannan"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://i.postimg.cc/7hwsdT6f/avatar-png.png';
          }}
          className="w-full h-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
        />
      </motion.div>
    </div>
  );
};
