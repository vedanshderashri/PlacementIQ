import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Inject hide cursor style globally when this component mounts
    document.body.style.cursor = 'none';
    
    // Add css block to head to hide cursor on hoverable elements
    const styleBlock = document.createElement('style');
    styleBlock.innerHTML = `
      * { cursor: none !important; }
    `;
    document.head.appendChild(styleBlock);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(e.target.tagName) || e.target.closest('button, a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.style.cursor = 'auto';
      document.head.removeChild(styleBlock);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-primary rounded-full pointer-events-none z-[10000]"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 28, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-primary/40 rounded-full pointer-events-none z-[9999] bg-primary/5"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'rgba(159, 10, 250, 0.8)' : 'rgba(159, 10, 250, 0.4)',
          backgroundColor: isHovering ? 'rgba(159, 10, 250, 0.15)' : 'rgba(159, 10, 250, 0.05)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25, mass: 0.4 }}
      />
    </>
  );
}
