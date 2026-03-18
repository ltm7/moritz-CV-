"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { useI18n } from "@/lib/i18n-context";
import { translations, t } from "@/lib/translations";

export default function Contact() {
  const { locale } = useI18n();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const tr = translations.contact;

  const contactInfo = [
    { icon: FaMapMarkerAlt, label: t(tr.address, locale), value: "Emdenstrasse 26, 42697 Solingen, Germany", color: "from-blue-600 to-blue-500" },
    { icon: FaPhone, label: t(tr.phone, locale), value: "+4917658818002", color: "from-blue-500 to-blue-400" },
    { icon: FaEnvelope, label: t(tr.email, locale), value: "moritzleter9@gmail.com", color: "from-blue-400 to-blue-300" },
  ];

  return (
    <section id="contact" className="section-padding relative bg-section-gradient-2" ref={ref}>
      <div className="absolute inset-0 z-0 opacity-5">
        <img src="/images/staticmap.png" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800/95 via-navy-900/98 to-navy-900 z-0" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3 block">{t(tr.sectionTag, locale)}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {t(tr.sectionTitle1, locale)} <span className="gradient-text">{t(tr.sectionTitle2, locale)}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto rounded-full" />
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((item, i) => (
            <motion.div key={item.label} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.15 }} whileHover={{ y: -5, scale: 1.02 }} className="glass-card-hover p-8 text-center group">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20`}>
                <item.icon size={24} className="text-white" />
              </div>
              <h3 className="text-white font-display font-semibold text-lg mb-2">{item.label}</h3>
              <p className="text-blue-200/60 text-sm">{item.value}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }} className="text-center mt-12">
          <motion.a
            href="mailto:moritzleter9@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-3 text-lg"
          >
            <FaPaperPlane />{t(tr.sendEmail, locale)}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
