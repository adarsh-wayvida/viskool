"use client";
import React, { useState, useRef, useCallback } from 'react';

export default function MagicCursorContainer({ children }) {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [glitters, setGlitters] = useState([]);
  const containerRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // Spawn glitter magic occasionally when moving
    if (Math.random() > 0.2) {
      const id = Date.now() + Math.random();
      setGlitters((prev) => [...prev.slice(-15), { 
        id, 
        x: x + (Math.random() * 20 - 10), 
        y: y + (Math.random() * 20 - 10),
        size: Math.random() * 8 + 10
      }]);
      
      setTimeout(() => {
        setGlitters((prev) => prev.filter(g => g.id !== id));
      }, 600);
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-none rounded-[32px] border border-[#8B1538]/5 bg-[#FFFDFD] px-6 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-10 lg:py-12 overflow-hidden cursor-none hover:shadow-md transition-shadow duration-300 group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setGlitters([]);
      }}
      onMouseMove={handleMouseMove}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatGlitter {
          0% { opacity: 1; transform: scale(1) translateY(0); }
          100% { opacity: 0; transform: scale(0.2) translateY(20px); }
        }
        .glitter-particle {
          animation: floatGlitter 0.6s ease-out forwards;
        }
        .cursor-none * {
          cursor: none !important;
        }
      `}} />

      {isHovering && (
        <div 
          className="pointer-events-none absolute z-[100] text-3xl drop-shadow-md"
          style={{ 
            left: mousePos.x, 
            top: mousePos.y, 
            transform: 'translate(-50%, -50%)' 
          }}
        >
          😊
        </div>
      )}
      
      {glitters.map((g) => (
        <div
          key={g.id}
          className="pointer-events-none absolute z-[90] glitter-particle"
          style={{ 
            left: g.x, 
            top: g.y,
            fontSize: g.size + 'px',
            transform: 'translate(-50%, -50%)'
          }}
        >
          ✨
        </div>
      ))}

      {/* Actual Content Wrapper */}
      <div className="relative z-10 pointer-events-auto">
        {children}
      </div>
    </div>
  );
}