"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaDownload, FaPlay, FaTimes } from "react-icons/fa";
import { useI18n } from "@/lib/i18n-context";
import { translations, t } from "@/lib/translations";

interface MediaItem {
  type: "image" | "video" | "pdf" | "link";
  src: string;
  label: string;
}

interface ProjectLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  media: MediaItem[];
  backHref?: string;
}

export default function ProjectLayout({ title, subtitle, description, tags, media, backHref = "/" }: ProjectLayoutProps) {
  const { locale } = useI18n();
  const tr = translations.projectPages;
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <main className="relative min-h-screen bg-navy-900 noise-bg">
      {/* Lightbox modal */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={() => setLightboxSrc(null)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={lightboxSrc}
              alt="Enlarged view"
              onClick={(e) => e.stopPropagation()}
              style={{ cursor: "default" }}
            />
            <button
              onClick={() => setLightboxSrc(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-white hover:bg-blue-500/40 transition-colors"
            >
              <FaTimes size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-navy-900/80 to-navy-900" />
        <div className="glow-orb w-96 h-96 -top-48 -right-48" />
        <div className="glow-orb w-72 h-72 top-20 -left-36" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-16">
          <motion.a href={backHref} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="inline-flex items-center gap-2 text-blue-300/60 hover:text-blue-300 transition-colors mb-8 text-sm font-medium">
            <FaArrowLeft size={12} /> {t(tr.backToPortfolio, locale)}
          </motion.a>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-blue-400 font-mono text-sm tracking-widest uppercase">{subtitle}</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mt-2 mb-4">{title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <span key={tag} className="text-xs px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-200/70 border border-blue-500/10">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-8 mb-10">
          <h2 className="text-xl font-display font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-500 rounded-full" />{t(tr.description, locale)}
          </h2>
          <p className="text-blue-100/70 leading-relaxed whitespace-pre-line">{description}</p>
        </motion.div>

        {media.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <h2 className="text-xl font-display font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-400 rounded-full" />{t(tr.resources, locale)}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {media.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }}>
                  {item.type === "video" && (
                    <div className="glass-card overflow-hidden">
                      <video controls className="w-full" preload="metadata"><source src={item.src} type="video/mp4" /></video>
                      <div className="p-4"><p className="text-white text-sm flex items-center gap-2"><FaPlay size={10} className="text-blue-400" />{item.label}</p></div>
                    </div>
                  )}
                  {item.type === "image" && (
                    <div
                      className="glass-card overflow-hidden group cursor-zoom-in"
                      onClick={() => setLightboxSrc(item.src)}
                    >
                      <img src={item.src} alt={item.label} className="w-full h-64 object-contain bg-blue-500/5 group-hover:scale-105 transition-transform duration-500" />
                      <div className="p-4">
                        <p className="text-white text-sm">{item.label}</p>
                        <p className="text-blue-300/40 text-xs mt-1">{locale === "de" ? "Klicken zum Vergrößern" : locale === "fr" ? "Cliquer pour agrandir" : "Click to enlarge"}</p>
                      </div>
                    </div>
                  )}
                  {item.type === "pdf" && (
                    <a href={item.src} target="_blank" rel="noopener noreferrer" className="glass-card-hover p-6 flex items-center gap-4 block">
                      <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0"><FaDownload className="text-blue-400" size={20} /></div>
                      <div><p className="text-white font-medium">{item.label}</p><p className="text-blue-300/40 text-xs mt-1">{t(tr.clickToDownload, locale)}</p></div>
                    </a>
                  )}
                  {item.type === "link" && (
                    <a href={item.src} target="_blank" rel="noopener noreferrer" className="glass-card-hover p-6 flex items-center gap-4 block">
                      <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </div>
                      <div><p className="text-white font-medium">{item.label}</p><p className="text-blue-300/40 text-xs mt-1">{t(tr.openLink, locale)}</p></div>
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
