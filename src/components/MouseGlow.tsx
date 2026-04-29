"use client";
import { useEffect, useState } from 'react';

export function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(520px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 210, 255, 0.14), transparent 60%), radial-gradient(760px at ${mousePosition.x}px ${mousePosition.y}px, rgba(253, 200, 48, 0.09), transparent 76%)`,
      }}
    />
  );
}
