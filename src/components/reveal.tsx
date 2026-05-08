"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  y?: number;
}

export const Reveal = ({
  children,
  width = "fit-content",
  delay = 0.1,
  y = 24,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
