"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLaptopCode, FaCogs, FaFileAlt, FaExternalLinkAlt, FaPenFancy, FaCalendarAlt } from "react-icons/fa";
import { useI18n } from "@/lib/i18n-context";
import { translations, t, Locale } from "@/lib/translations";

const getTabs = (locale: Locale) => [
  { id: "programming", label: t(translations.portfolio.tabProgramming, locale), icon: FaLaptopCode },
  { id: "design", label: t(translations.portfolio.tabEngineering, locale), icon: FaCogs },
  { id: "reports", label: t(translations.portfolio.tabReports, locale), icon: FaFileAlt },
  { id: "blogs", label: locale === "de" ? "Blogs & Gedanken" : locale === "fr" ? "Blogs & Réflexions" : "Blogs & Thoughts", icon: FaPenFancy },
];

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

const getBlogPosts = (locale: Locale): BlogPost[] => [
  // Blog posts will be added later. This is a placeholder structure.
];

const getProjects = (locale: Locale) => ({
  programming: [
    {
      title: t(translations.portfolio.projects.b2b.title, locale),
      subtitle: "SS 2020",
      description: t(translations.portfolio.projects.b2b.description, locale),
      image: "/images/project-1.jpg",
      link: "/projects/b2b",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
      title: t(translations.portfolio.projects.mechashop.title, locale),
      subtitle: "SS 2020",
      description: t(translations.portfolio.projects.mechashop.description, locale),
      image: "/images/project-2.jpg",
      link: "/projects/php",
      tags: ["PHP", "MySQL", "CSS", "Bootstrap"],
    },
    {
      title: t(translations.portfolio.projects.mindstorms.title, locale),
      subtitle: "WS 2019/20",
      description: t(translations.portfolio.projects.mindstorms.description, locale),
      image: "/images/project-3.jpg",
      link: "/projects/java",
      tags: ["Java", "Robotics", "Automation"],
    },
  ],
  design: [
    {
      title: t(translations.portfolio.projects.zapfanlage.title, locale),
      subtitle: "SS 2019",
      description: t(translations.portfolio.projects.zapfanlage.description, locale),
      image: "/images/project-4.jpg",
      link: "/projects/nx",
      tags: ["NX Siemens", "CAD", "Mechanical Design"],
    },
    {
      title: t(translations.portfolio.projects.printer3d.title, locale),
      subtitle: "SS 2021",
      description: t(translations.portfolio.projects.printer3d.description, locale),
      image: "/images/project-5.jpg",
      link: "/projects/3dprint",
      tags: ["Additive Manufacturing", "5-Axis", "Research"],
    },
    {
      title: t(translations.portfolio.projects.fahrzeug.title, locale),
      subtitle: "FH Dortmund",
      description: t(translations.portfolio.projects.fahrzeug.description, locale),
      image: "/images/explosion.png",
      link: "/projects/fahrzeug",
      tags: ["SolidWorks", "3D Printing", "Prototype"],
    },
  ],
  reports: [
    {
      title: t(translations.portfolio.projects.report3m.title, locale),
      subtitle: "2021",
      description: t(translations.portfolio.projects.report3m.description, locale),
      image: "/report/werkstudentreport.jpg",
      link: "/projects/reports",
      tags: ["Internship", "3M", "Engineering"],
    },
    {
      title: t(translations.portfolio.projects.certifications.title, locale),
      subtitle: locale === "de" ? "Verschiedene" : locale === "fr" ? "Divers" : "Various",
      description: t(translations.portfolio.projects.certifications.description, locale),
      image: "/certificates/Certification.png",
      link: "/projects/certificates",
      tags: ["IIoT", "Industry 4.0", "GMP"],
    },
  ],
});

export default function Portfolio() {
  const { locale } = useI18n();
  const [activeTab, setActiveTab] = useState("programming");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const tabs = getTabs(locale);
  const projects = getProjects(locale);
  const blogPosts = getBlogPosts(locale);

  return (
    <section id="portfolio" className="section-padding relative bg-section-gradient-3" ref={ref}>
      <div className="glow-orb w-80 h-80 left-10 top-1/3" />
      <div className="glow-orb w-96 h-96 -right-40 bottom-20" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3 block">{t(translations.portfolio.sectionTag, locale)}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {t(translations.portfolio.sectionTitle1, locale)} <span className="gradient-text">{t(translations.portfolio.sectionTitle2, locale)}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto rounded-full" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 ${activeTab === tab.id ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/25" : "bg-blue-500/5 text-blue-200/60 hover:text-white hover:bg-blue-500/10 border border-blue-500/10"}`}>
              <tab.icon size={14} />{tab.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === "blogs" ? (
            <motion.div key="blogs" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              {blogPosts.length === 0 ? (
                <div className="glass-card p-12 text-center">
                  <FaPenFancy size={40} className="text-blue-400/30 mx-auto mb-4" />
                  <h3 className="text-xl font-display font-semibold text-white mb-2">
                    {locale === "de" ? "Beiträge kommen bald..." : locale === "fr" ? "Articles à venir..." : "Posts coming soon..."}
                  </h3>
                </div>
              ) : (
                <div className="space-y-4">
                  {blogPosts.map((post, i) => (
                    <motion.a
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ x: 8 }}
                      className="glass-card-hover p-6 flex items-center justify-between group block"
                    >
                      <div>
                        <h3 className="text-lg font-display font-semibold text-white group-hover:text-blue-300 transition-colors">{post.title}</h3>
                        <p className="text-blue-200/50 text-sm mt-1">{post.excerpt}</p>
                      </div>
                      <div className="flex items-center gap-2 text-blue-300/40 text-xs font-mono flex-shrink-0 ml-4">
                        <FaCalendarAlt size={12} />
                        {post.date}
                      </div>
                    </motion.a>
                  ))}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {projects[activeTab as keyof typeof projects]?.map((project, i) => (
                <motion.a key={project.title} href={project.link} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="group glass-card overflow-hidden glow-border block">
                  <div className="relative h-48 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent" />
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-blue-500/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaExternalLinkAlt size={14} />
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="text-xs font-mono text-blue-200 bg-blue-500/20 px-3 py-1 rounded-full backdrop-blur-sm">{project.subtitle}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-display font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">{project.title}</h3>
                    <p className="text-blue-100/50 text-sm leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-300/70 border border-blue-500/10">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
