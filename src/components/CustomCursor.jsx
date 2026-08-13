import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      try {
        const isInteractive =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          (typeof target.closest === 'function' && (target.closest('button') || target.closest('a'))) ||
          (typeof target.getAttribute === 'function' && target.getAttribute('role') === 'button');

        setIsHovered(!!isInteractive);
      } catch (err) {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 rounded-full transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        width: isHovered ? '42px' : '10px',
        height: isHovered ? '42px' : '10px',
        backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.15)' : '#d4af37',
        border: isHovered ? '1.5px solid #d4af37' : 'none',
        boxShadow: '0 0 15px rgba(212, 175, 55, 0.6)',
      }}
    />
  );
}
