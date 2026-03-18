"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGoodreads, FaHeart } from "react-icons/fa";

const socials = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/moritz-l-11551014b/" },
  { icon: FaGoodreads, href: "https://www.goodreads.com/user/show/81548351-moritz" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-blue-500/10 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-6">
          <motion.div whileHover={{ scale: 1.05 }} className="text-center">
            <span className="text-3xl font-display font-bold">
              <span className="text-white">L</span><span className="text-blue-400">T</span><span className="text-blue-300">M</span>
            </span>
            <p className="text-blue-300/40 text-sm mt-2">Moritz Leter Tchapder</p>
            <p className="text-blue-300/30 text-xs mt-1">Emdenstrasse 26, 42697 Solingen</p>
          </motion.div>
          <div className="flex gap-3">
            {socials.map((social, i) => (
              <motion.a key={i} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.15, y: -2 }} className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/10 flex items-center justify-center text-blue-300/50 hover:text-blue-300 hover:border-blue-500/30 hover:bg-blue-500/20 transition-all">
                <social.icon size={16} />
              </motion.a>
            ))}
          </div>
          <p className="text-blue-300/30 text-xs flex items-center gap-1">
            &copy; {new Date().getFullYear()} LTM <FaHeart className="text-blue-400 text-[10px]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
