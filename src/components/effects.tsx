"use client";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useMotionTemplate,
} from "framer-motion";

/* Top scroll progress bar */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    mass: 0.2,
  });
  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] pointer-events-none"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, #818cf8 0%, #22d3ee 50%, #f472b6 100%)",
      }}
    />
  );
}

/* Cursor-following spotlight glow */
export function MouseSpotlight() {
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const sx = useSpring(x, { stiffness: 220, damping: 32, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 220, damping: 32, mass: 0.5 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  const bg = useMotionTemplate`radial-gradient(380px circle at ${sx}px ${sy}px, rgba(165, 180, 252, 0.13), transparent 60%)`;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[40] hidden md:block"
      style={{ background: bg, mixBlendMode: "screen" }}
    />
  );
}

/* Slow-drifting blurred color orbs in the background */
export function FloatingOrbs() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden"
    >
      <motion.div
        className="absolute h-[420px] w-[420px] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(129,140,248,0.30), transparent 65%)",
          left: "5%",
          top: "8%",
        }}
        animate={{ x: [0, 80, -50, 0], y: [0, -60, 50, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute h-[380px] w-[380px] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(244,114,182,0.22), transparent 65%)",
          right: "4%",
          top: "32%",
        }}
        animate={{ x: [0, -70, 40, 0], y: [0, 70, -30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute h-[400px] w-[400px] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.20), transparent 65%)",
          left: "22%",
          bottom: "6%",
        }}
        animate={{ x: [0, 70, -30, 0], y: [0, -50, 60, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* Magnetic wrapper — child translates toward cursor while hovered */
export function Magnetic({
  children,
  strength = 0.25,
}: {
  children: React.ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.12 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.12 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

/* Letter-by-letter reveal, preserves parent text styling (e.g. gradient text-clip) */
export function StaggerLetters({
  text,
  baseDelay = 0.05,
  perChar = 0.04,
}: {
  text: string;
  baseDelay?: number;
  perChar?: number;
}) {
  return (
    <span className="inline-block">
      {text.split("").map((c, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: "0.55em" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
            delay: baseDelay + i * perChar,
          }}
        >
          {c === " " ? " " : c}
        </motion.span>
      ))}
    </span>
  );
}
