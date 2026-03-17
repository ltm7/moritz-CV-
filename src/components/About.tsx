"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLanguage, FaBirthdayCake } from "react-icons/fa";
import { useI18n } from "@/lib/i18n-context";
import { translations, t } from "@/lib/translations";

export default function About() {
  const { locale } = useI18n();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const tr = translations.about;

  const infoItems = [
    { icon: FaBirthdayCake, label: t(tr.age, locale), value: "27", color: "text-blue-400" },
    { icon: FaEnvelope, label: t(tr.email, locale), value: "moritzleter@gmail.com", color: "text-blue-300" },
    { icon: FaPhone, label: t(tr.phone, locale), value: "+4917658818002", color: "text-blue-400" },
    { icon: FaMapMarkerAlt, label: t(tr.address, locale), value: "Emdenstrasse 26, 42697 Solingen, Germany", color: "text-blue-300" },
    { icon: FaLanguage, label: t(tr.languages, locale), value: t(tr.languagesValue, locale), color: "text-blue-400" },
  ];

  return (
    <section id="about" className="section-padding relative bg-section-gradient-1" ref={ref}>
      <div className="glow-orb w-80 h-80 -left-40 top-1/4" />
      <div className="glow-orb w-60 h-60 right-0 bottom-20" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3 block">{t(tr.sectionTag, locale)}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {t(tr.sectionTitle1, locale)} <span className="gradient-text">{t(tr.sectionTitle2, locale)}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto rounded-full" />
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="glass-card p-8">
            <h3 className="text-2xl font-display font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/></svg>
              </span>
              {t(tr.hello, locale)}
            </h3>
            <p className="text-blue-100/80 leading-relaxed text-base">{t(tr.paragraph1, locale)}</p>
            <p className="text-blue-100/80 leading-relaxed text-base mt-4">{t(tr.paragraph2, locale)}</p>
            <p className="text-blue-100/80 leading-relaxed text-base mt-4">{t(tr.paragraph3, locale)}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="glass-card p-8">
            <h3 className="text-2xl font-display font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/></svg>
              </span>
              {t(tr.basicInfo, locale)}
            </h3>
            <div className="space-y-5">
              {infoItems.map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.5 + i * 0.1 }} className="flex items-start gap-4 p-3 rounded-xl hover:bg-blue-500/5 transition-colors duration-300 group">
                  <span className={`w-10 h-10 rounded-lg bg-blue-500/10 flex-shrink-0 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon size={18} />
                  </span>
                  <div>
                    <span className="text-blue-300/50 text-xs font-mono uppercase tracking-wider">{item.label}</span>
                    <p className="text-white text-sm mt-0.5">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
