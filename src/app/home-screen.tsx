"use client";

import SkillsSketch from "@/components/skills/sketch"
import React, { useRef } from 'react';
import Header from '@/components/sections/header';
import About from '@/components/sections/about';
import Hero from '@/components/sections/hero';
import Experience from '@/components/sections/experience';
import Contact from '@/components/sections/contacts';
import Footer from '@/components/sections/footer';
import Projects from '@/components/sections/projects';

const HomeScreen = () => {

  const headerRef = useRef(null);

  const handleNavLinkClick = (e: any, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // @ts-ignore
      const headerOffset = headerRef.current ? headerRef.current.offsetHeight : 0;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <React.Fragment>
      <div className="text-gray-700">
        <Header onNavLinkClick={handleNavLinkClick} headerRef={headerRef} />
        <main className="pt-16">
          <Hero onNavLinkClick={handleNavLinkClick} />
          <About />
          <Experience />
          <SkillsSketch />

          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
};



export default HomeScreen;
