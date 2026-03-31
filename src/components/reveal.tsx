"use client";
import { motion } from "framer-motion";

export const Reveal = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }} // Use 'animate' instead of just 'whileInView' for hero elements
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
};