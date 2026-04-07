"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; // I'll need to create this utility file

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={cn("grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4", className)}>
      {children}
    </div>
  );
}

interface BentoCardProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

export function BentoCard({ children, className, title, description }: BentoCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        "bg-[--glass-bg] backdrop-blur-[--glass-blur] border-2 border-[--glass-border-color] transition-all duration-300 ease-in-out hover:border-[--accent-cyan]",
        className
      )}
      style={{
        transform: isHovered ? 'scale(1.02) perspective(1000px) rotateX(2deg) rotateY(-2deg)' : 'scale(1) perspective(1000px) rotateX(0) rotateY(0)',
        transition: 'transform 0.2s ease-in-out',
      }}
    >
      <div className="flex flex-col gap-4 p-4">
        <h3 className="text-2xl font-bold text-neutral-700 dark:text-neutral-300 font-heading">
          {title}
        </h3>
        <p className="max-w-lg text-neutral-500 dark:text-neutral-400">
          {description}
        </p>
      </div>
      {children}
    </motion.div>
  );
}
