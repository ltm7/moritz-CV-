"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGoodreads, FaTimes } from "react-icons/fa";
import { useI18n } from "@/lib/i18n-context";
import { translations, t } from "@/lib/translations";

const socialLinks = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/moritz-l-11551014b/", label: "LinkedIn" },
  { icon: FaGoodreads, href: "https://www.goodreads.com/user/show/81548351-moritz", label: "Goodreads" },
];

type ParticleData = {
  left: number;
  top: number;
  width: number;
  height: number;
  animationDuration: number;
  animationDelay: number;
};

function Particles() {
  const [particles, setParticles] = useState<ParticleData[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 40 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        width: Math.random() * 3 + 1,
        height: Math.random() * 3 + 1,
        animationDuration: Math.random() * 15 + 10,
        animationDelay: Math.random() * 10,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.width}px`,
            height: `${p.height}px`,
            animationDuration: `${p.animationDuration}s`,
            animationDelay: `${p.animationDelay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const { locale } = useI18n();
  const [photoEnlarged, setPhotoEnlarged] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Animated background elements */}
      <Particles />
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <div className="bg-blob bg-blob-3" />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"
      />
      <motion.div
        animate={{ y: [15, -15, 15], x: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-[10%] w-80 h-80 rounded-full bg-blue-400/5 blur-3xl"
      />
      <motion.div
        animate={{ y: [-10, 15, -10], x: [-15, 5, -15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60%] left-[30%] w-48 h-48 rounded-full bg-blue-600/5 blur-3xl"
      />

      {/* Photo lightbox */}
      <AnimatePresence>
        {photoEnlarged && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy-950/95 backdrop-blur-xl flex items-center justify-center cursor-zoom-out"
            onClick={() => setPhotoEnlarged(false)}
          >
            <motion.img
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              src="/images/moritz2.png"
              alt="Moritz Leter Tchapder"
              className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-2xl shadow-blue-500/30 border-4 border-blue-500/30"
            />
            <button
              onClick={() => setPhotoEnlarged(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-white hover:bg-blue-500/40 transition-colors"
            >
              <FaTimes size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Profile picture — fills frame, clickable to enlarge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="mb-8 inline-block cursor-pointer"
          onClick={() => setPhotoEnlarged(true)}
        >
          <div className="relative group">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-300 opacity-80"
            />
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-navy-900 shadow-2xl shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <img src="/images/moritz2.png" alt="Moritz Leter Tchapder" className="w-full h-full object-cover scale-110" />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4"
        >
          <span className="text-white">Moritz </span>
          <span className="gradient-text">Leter Tchapder</span>
        </motion.h1>

        {/* Title badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <span className="inline-block px-4 sm:px-6 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-100 font-medium text-base sm:text-lg">
            {t(translations.hero.title, locale)}
          </span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-12 px-4 sm:px-0"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            {t(translations.hero.hireMe, locale)}
          </motion.a>
          <motion.a
            href="/docs/CV%20Moritz-Leter.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline"
          >
            {t(translations.hero.downloadCV, locale)}
          </motion.a>
        </motion.div>

        {/* Social links — only LinkedIn and Goodreads */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex gap-4 justify-center"
        >
          {socialLinks.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-xl bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 flex items-center justify-center text-blue-300/70 hover:text-blue-300 transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/20"
              title={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
