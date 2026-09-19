import React, { useEffect, useRef, useState } from 'react';

/**
 * CursorGlow - High performance cursor ambient lighting and spotlight controller.
 * Drives interactive cursor-based lighting, trailing luminescence, and card specular highlights.
 */
export default function CursorGlow() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);
  
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let targetX = mouseX;
    let targetY = mouseY;
    let ringX = mouseX;
    let ringY = mouseY;
    let glowX = mouseX;
    let glowY = mouseY;
    let animationFrameId;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Direct CSS variables for instant card specular lighting without React renders
      document.documentElement.style.setProperty('--cursor-x', `${targetX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${targetY}px`);

      // Check if hovering interactive element
      const target = e.target;
      if (target) {
        const isInteractive = Boolean(
          target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('[role="button"]') ||
          target.closest('.interactive-target')
        );
        setIsHoveringInteractive(isInteractive);

        // Update card-local coordinate for spotlight cards
        const card = target.closest('.spotlight-card');
        if (card) {
          const rect = card.getBoundingClientRect();
          const cardX = e.clientX - rect.left;
          const cardY = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', `${cardX}px`);
          card.style.setProperty('--mouse-y', `${cardY}px`);
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth RAF Lerp loop for fluid physics
    const updateMotion = () => {
      // Fast response for center dot
      mouseX += (targetX - mouseX) * 0.45;
      mouseY += (targetY - mouseY) * 0.45;

      // Smooth lag for outer reticle ring
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;

      // Ambient atmosphere glow lag
      glowX += (targetX - glowX) * 0.08;
      glowY += (targetY - glowY) * 0.08;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(updateMotion);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    animationFrameId = requestAnimationFrame(updateMotion);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  return (
    <div className={`pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} hidden md:block`}>
      
      {/* 1. Fluid Ambient Backlight Aura (Deep Laser Cyan & Hyper Violet glow) */}
      <div
        ref={glowRef}
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[90px] -z-10 opacity-35 transition-all duration-300 pointer-events-none"
        style={{
          background: isHoveringInteractive 
            ? 'radial-gradient(circle, rgba(0, 245, 160, 0.28) 0%, rgba(0, 229, 255, 0.18) 40%, rgba(168, 85, 247, 0.1) 70%, transparent 85%)'
            : 'radial-gradient(circle, rgba(0, 229, 255, 0.22) 0%, rgba(59, 130, 246, 0.16) 45%, rgba(139, 92, 246, 0.08) 75%, transparent 90%)',
          willChange: 'transform',
        }}
      />

      {/* 2. Micro HUD Reticle Ring */}
      <div
        ref={ringRef}
        className={`absolute top-0 left-0 rounded-full border transition-[width,height,border-color,background-color] duration-200 ease-out pointer-events-none flex items-center justify-center ${
          isHoveringInteractive
            ? 'w-10 h-10 border-[#00F5A0]/80 bg-[#00F5A0]/10 shadow-[0_0_15px_rgba(0,245,160,0.4)]'
            : 'w-7 h-7 border-white/30 bg-transparent shadow-[0_0_10px_rgba(0,229,255,0.2)]'
        }`}
        style={{ willChange: 'transform' }}
      >
        {/* Subtle crosshair micro-notches */}
        <div className={`w-1 h-1 rounded-full transition-all ${isHoveringInteractive ? 'bg-[#00F5A0] scale-150' : 'bg-transparent'}`} />
      </div>

      {/* 3. High-Precision Center Laser Dot */}
      <div
        ref={dotRef}
        className={`absolute top-0 left-0 rounded-full transition-all duration-150 pointer-events-none ${
          isHoveringInteractive
            ? 'w-1.5 h-1.5 bg-[#00F5A0] shadow-[0_0_8px_#00F5A0]'
            : 'w-1 h-1 bg-[#00E5FF] shadow-[0_0_6px_#00E5FF]'
        }`}
        style={{ willChange: 'transform' }}
      />

    </div>
  );
}
