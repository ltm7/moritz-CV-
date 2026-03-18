"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type ParticleData = {
  duration: number;
  delay: number;
  width: number;
  height: number;
  top: number;
  left: number;
};

export default function BackgroundAnimations() {
  const [particles, setParticles] = useState<ParticleData[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 15 }).map(() => ({
        duration: 6 + Math.random() * 8,
        delay: Math.random() * 5,
        width: 2 + Math.random() * 4,
        height: 2 + Math.random() * 4,
        top: Math.random() * 100,
        left: Math.random() * 100,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large slow-moving glow blobs */}
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-[250px] h-[250px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px] rounded-full bg-blue-600/5 blur-[80px] md:blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 40, -20, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -right-20 w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-blue-500/4 blur-[80px] md:blur-[140px]"
      />
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 40, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-1/4 w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-blue-400/5 blur-[60px] md:blur-[100px]"
      />

      {/* Small floating particles scattered across the page */}
      {particles.map((p, i) => (
        <motion.div
          key={`bg-particle-${i}`}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
          className="absolute rounded-full bg-blue-400/20"
          style={{
            width: `${p.width}px`,
            height: `${p.height}px`,
            top: `${p.top}%`,
            left: `${p.left}%`,
          }}
        />
      ))}

      {/* Horizontal moving lines (subtle) — kept within viewport via overflow-hidden on parent */}
      <motion.div
        animate={{ x: ["-20%", "120%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] w-32 md:w-40 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
      />
      <motion.div
        animate={{ x: ["120%", "-20%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[60%] w-40 md:w-60 h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent"
      />
      <motion.div
        animate={{ x: ["-20%", "120%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 5 }}
        className="absolute top-[80%] w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
      />
    </div>
  );
}
