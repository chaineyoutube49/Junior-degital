
import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
    >
      <motion.div
        animate={{
          scale: isHovering ? 1.5 : 1,
          rotate: isHovering ? 180 : 0,
        }}
        className="relative w-8 h-8 flex items-center justify-center"
      >
        {/* The Smiley Face */}
        <div className="absolute inset-0 border-2 border-red-500 rounded-full bg-red-500/10 backdrop-blur-sm shadow-[0_0_15px_rgba(255,0,0,0.5)]" />
        
        {/* Eyes */}
        <div className="absolute top-2.5 left-2 w-1 h-1 bg-red-500 rounded-full" />
        <div className="absolute top-2.5 right-2 w-1 h-1 bg-red-500 rounded-full" />
        
        {/* Smile */}
        <motion.div 
          animate={{
            height: isHovering ? '4px' : '2px',
            borderRadius: isHovering ? '0 0 10px 10px' : '0 0 10px 10px'
          }}
          className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-4 border-b-2 border-red-500" 
        />
      </motion.div>
    </motion.div>
  );
}
