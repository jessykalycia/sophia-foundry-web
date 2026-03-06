"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at 30% 50%, #a84de012 0%, transparent 60%)",
      }}
      animate={{ opacity: [0.4, 0.6, 0.4] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    />
  );
}
