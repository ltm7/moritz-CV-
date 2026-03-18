"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useI18n } from "@/lib/i18n-context";
import { translations, t } from "@/lib/translations";

const icons = ["\u{1F393}", "\u{1F4D0}", "\u{1F30D}", "\u{1F3DB}\u{FE0F}", "\u{1F680}"];
const blueShades = [
  "border-blue-500", "border-blue-400", "border-blue-300", "border-blue-600", "border-blue-500",
];
const dotColors = [
  "bg-blue-500", "bg-blue-400", "bg-blue-300", "bg-blue-600", "bg-blue-500",
];

export default function Education() {
  const { locale } = useI18n();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const timeline = translations.education.timeline;

  return (
    <section id="education" className="section-padding relative bg-section-gradient-1" ref={ref}>
      <div className="glow-orb w-96 h-96 -left-48 top-1/4" />
      <div className="glow-orb w-72 h-72 right-10 bottom-40" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3 block">{t(translations.education.sectionTag, locale)}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {t(translations.education.sectionTitle1, locale)} <span className="gradient-text">{t(translations.education.sectionTitle2, locale)}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 md:-translate-x-px" />
          {timeline.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.15 }} className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ delay: i * 0.15 + 0.3, type: "spring" }} className={`w-10 h-10 rounded-full ${dotColors[i]} flex items-center justify-center text-lg shadow-lg shadow-blue-500/20 border-4 border-navy-900`}>
                  {icons[i]}
                </motion.div>
              </div>
              <div className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                <motion.div whileHover={{ scale: 1.02 }} className={`glass-card-hover p-6 border-l-4 md:border-l-0 ${i % 2 === 0 ? `md:border-r-4 ${blueShades[i]}` : `md:border-l-4 ${blueShades[i]}`} ${blueShades[i]}`}>
                  <span className="text-xs font-mono text-blue-300/50 tracking-wider">{t(item.period, locale)}</span>
                  <h3 className="text-lg font-display font-semibold text-white mt-1">{t(item.title, locale)}</h3>
                  <p className="text-sm text-blue-400 font-medium mt-1">{t(item.subtitle, locale)}</p>
                  <p className="text-blue-100/60 text-sm mt-3 leading-relaxed">{t(item.description, locale)}</p>
                </motion.div>
              </div>
              <div className="hidden md:block md:w-[calc(50%-40px)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
