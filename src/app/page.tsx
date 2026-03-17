"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import BackgroundAnimations from "@/components/BackgroundAnimations";

export default function Home() {
  return (
    <main className="relative">
      <CustomCursor />
      <BackgroundAnimations />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
