import React, { useEffect, useRef, useState } from 'react';

/**
 * CursorGlow - High performance subtle cursor specular light and card highlight driver.
 * Extremely restrained, respects reduced motion, and adds subtle physical depth.
 */
export default function CursorGlow() {
  const glowRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Respect user's motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let targetX = mouseX;
    let targetY = mouseY;
    let glowX = mouseX;
    let glowY = mouseY;
    let animationFrameId;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Card specular coordinate updates
      const target = e.target;
      if (target) {
        const card = target.closest('.spotlight-card');
        if (card) {
          const rect = card.getBoundingClientRect();
          card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
          card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const updateMotion = () => {
      glowX += (targetX - glowX) * 0.12;
      glowY += (targetY - glowY) * 0.12;

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
    <div className={`pointer-events-none fixed inset-0 z-30 overflow-hidden transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'} hidden md:block`}>
      {/* Soft, calm specular atmosphere (barely perceptible, adds depth) */}
      <div
        ref={glowRef}
        className="absolute top-0 left-0 w-[420px] h-[420px] rounded-full blur-[100px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(168, 85, 247, 0.05) 50%, transparent 75%)',
          willChange: 'transform',
        }}
      />
    </div>
  );
}
