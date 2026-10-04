import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [hasFinePointer, setHasFinePointer] = useState(false);

  // Slight lag spring physics
  const springX = useSpring(-50, { stiffness: 400, damping: 28 });
  const springY = useSpring(-50, { stiffness: 400, damping: 28 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(pointer: fine)');
    setHasFinePointer(media.matches);

    if (!media.matches) return;

    const onMouseMove = (e: MouseEvent) => {
      springX.set(e.clientX);
      springY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('a') ||
            target.closest('button') ||
            target.closest('[role="button"]') ||
            target.closest('[data-interactive="true"]') ||
            target.closest('.interactive-card')
        );
        setIsHoveringInteractive(isInteractive);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [springX, springY, isVisible]);

  if (!hasFinePointer || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHoveringInteractive ? 36 : 8,
          height: isHoveringInteractive ? 36 : 8,
          backgroundColor: isHoveringInteractive
            ? 'rgba(168, 85, 247, 0.08)'
            : '#F0F4F8',
          borderColor: isHoveringInteractive
            ? 'rgba(168, 85, 247, 0.6)'
            : 'transparent',
          borderWidth: isHoveringInteractive ? 1.5 : 0,
        }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        className="rounded-full border backdrop-blur-[0.5px]"
      />
    </div>
  );
};
