"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useI18n } from "@/lib/i18n-context";
import { translations, t } from "@/lib/translations";

const skillCategories = (locale: "de" | "fr" | "en") => [
  {
    title: t(translations.skills.programming, locale),
    icon: "\u{1F4BB}",
    skills: [
      { name: "HTML, CSS, JS, Bootstrap", level: 80, color: "from-blue-500 to-blue-400" },
      { name: "Python", level: 80, color: "from-blue-600 to-blue-400" },
      { name: "Java", level: 60, color: "from-blue-400 to-blue-300" },
      { name: "PHP", level: 70, color: "from-blue-500 to-blue-300" },
      { name: "SQL und PostgreSQL", level: 75, color: "from-blue-600 to-blue-500" },
      { name: "VBA Excel", level: 75, color: "from-blue-400 to-blue-200" },
    ],
  },
  {
    title: t(translations.skills.engineering, locale),
    icon: "\u{2699}\u{FE0F}",
    skills: [
      { name: "SolidWorks / NX Siemens", level: 75, color: "from-blue-500 to-blue-400" },
      { name: "SAP PP, SAP CRM", level: 80, color: "from-blue-600 to-blue-400" },
      { name: "Adobe InDesign", level: 70, color: "from-blue-400 to-blue-300" },
      { name: "MS Office Word, Powerpoint, Excel und VBA", level: 75, color: "from-blue-500 to-blue-300" },
    ],
  },
];

export default function Skills() {
  const { locale } = useI18n();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const categories = skillCategories(locale);

  return (
    <section id="skills" className="section-padding relative bg-section-gradient-2" ref={ref}>
      <div className="glow-orb w-96 h-96 -right-48 top-20" />
      <div className="glow-orb w-64 h-64 left-20 bottom-20" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3 block">{t(translations.skills.sectionTag, locale)}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {t(translations.skills.sectionTitle1, locale)} <span className="gradient-text">{t(translations.skills.sectionTitle2, locale)}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto rounded-full" />
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8">
          {categories.map((category, catIdx) => (
            <motion.div key={category.title} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: catIdx * 0.2 }} className="glass-card p-8">
              <h3 className="text-xl font-display font-semibold text-white mb-8 flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>{category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white text-sm font-medium">{skill.name}</span>
                      <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 + catIdx * 0.2 + i * 0.1 }} className="text-xs font-mono text-blue-300/60">{skill.level}%</motion.span>
                    </div>
                    <div className="h-2.5 bg-blue-900/30 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={inView ? { width: `${skill.level}%` } : {}} transition={{ duration: 1.2, delay: 0.3 + catIdx * 0.2 + i * 0.1, ease: "easeOut" }} className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}>
                        <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse-slow" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
