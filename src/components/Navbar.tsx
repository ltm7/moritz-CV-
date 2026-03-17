"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";
import { translations, t, Locale } from "@/lib/translations";

const localeLabels: Record<Locale, { flag: string; short: string }> = {
  de: { flag: "\u{1F1E9}\u{1F1EA}", short: "DE" },
  fr: { flag: "\u{1F1EB}\u{1F1F7}", short: "FR" },
  en: { flag: "\u{1F1EC}\u{1F1E7}", short: "EN" },
};

export default function Navbar() {
  const { locale, setLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { name: t(translations.nav.about, locale), href: "#about" },
    { name: t(translations.nav.skills, locale), href: "#skills" },
    { name: t(translations.nav.portfolio, locale), href: "#portfolio" },
    { name: t(translations.nav.education, locale), href: "#education" },
    { name: t(translations.nav.contact, locale), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const close = () => setLangOpen(false);
    if (langOpen) document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [langOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy-900/90 backdrop-blur-xl border-b border-blue-500/10 shadow-2xl shadow-blue-900/20" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a href="#" className="relative group" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <span className="text-2xl font-display font-bold">
            <span className="text-white">L</span><span className="text-blue-400">T</span><span className="text-blue-300">M</span>
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 group-hover:w-full transition-all duration-300" />
        </motion.a>

        <div className="hidden md:flex items-center gap-1">
          <ul className="flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.li key={link.href} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i, duration: 0.4 }}>
                <a href={link.href} className="relative px-4 py-2 text-sm font-medium text-blue-100/70 hover:text-white transition-colors duration-300 group">
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-400 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Language Switcher */}
          <div className="relative ml-3">
            <button
              onClick={(e) => { e.stopPropagation(); setLangOpen(!langOpen); }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-sm text-blue-200 hover:bg-blue-500/20 hover:text-white transition-all"
            >
              <span>{localeLabels[locale].flag}</span>
              <span className="font-medium">{localeLabels[locale].short}</span>
              <svg className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -5, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-36 rounded-xl bg-navy-800/95 backdrop-blur-xl border border-blue-500/20 shadow-2xl shadow-blue-900/30 overflow-hidden z-50"
                >
                  {(["de", "fr", "en"] as Locale[]).map((l) => (
                    <button
                      key={l}
                      onClick={(e) => { e.stopPropagation(); setLocale(l); setLangOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                        locale === l ? "bg-blue-500/20 text-blue-300" : "text-blue-200/60 hover:bg-blue-500/10 hover:text-white"
                      }`}
                    >
                      <span className="text-base">{localeLabels[l].flag}</span>
                      <span className="font-medium">{l === "de" ? "Deutsch" : l === "fr" ? "Français" : "English"}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.a href="/docs/CV%20Moritz-Leter.pdf" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="btn-primary text-sm !py-2 !px-5 ml-2 inline-block">
            {t(translations.nav.downloadCV, locale)}
          </motion.a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5" aria-label="Menu">
          <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-white block" />
          <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-white block" />
          <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-white block" />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-navy-900/95 backdrop-blur-xl border-b border-blue-500/10 overflow-hidden">
            <ul className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.li key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>
                  <a href={link.href} onClick={() => setMobileOpen(false)} className="block py-3 text-blue-100/70 hover:text-blue-300 transition-colors font-medium">{link.name}</a>
                </motion.li>
              ))}
              <li className="pt-2 flex gap-2">
                {(["de", "fr", "en"] as Locale[]).map((l) => (
                  <button key={l} onClick={() => { setLocale(l); setMobileOpen(false); }} className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all ${locale === l ? "bg-blue-500/20 text-blue-300 border border-blue-500/30" : "bg-white/5 text-blue-200/60 border border-white/5"}`}>
                    {localeLabels[l].flag} {localeLabels[l].short}
                  </button>
                ))}
              </li>
              <li className="pt-2">
                <a href="/docs/CV%20Moritz-Leter.pdf" className="btn-primary text-sm text-center block">{t(translations.nav.downloadCV, locale)}</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
