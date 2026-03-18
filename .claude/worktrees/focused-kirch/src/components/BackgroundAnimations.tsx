"use client";
import { motion } from "framer-motion";

export default function BackgroundAnimations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large slow-moving glow blobs */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -60, 40, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 50, -30, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -right-60 w-[600px] h-[600px] rounded-full bg-blue-500/4 blur-[140px]"
      />
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -40, 60, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-400/5 blur-[100px]"
      />

      {/* Small floating particles scattered across the page */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`bg-particle-${i}`}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6 + Math.random() * 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
          className="absolute rounded-full bg-blue-400/20"
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Horizontal moving lines (subtle) */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] w-40 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
      />
      <motion.div
        animate={{ x: ["200%", "-100%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[60%] w-60 h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent"
      />
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 5 }}
        className="absolute top-[80%] w-32 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
      />
    </div>
  );
}
