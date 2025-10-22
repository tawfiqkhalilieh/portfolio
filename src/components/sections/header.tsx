"use client";

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { MouseEvent } from "react";




const Header = ({ onNavLinkClick, headerRef }: { onNavLinkClick: Function, headerRef: any }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (e: MouseEvent, targetId: string) => {
    onNavLinkClick(e, targetId);
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <header ref={headerRef} id="header" className="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" onClick={(e) => handleLinkClick(e, '#hero')} className="text-xl font-bold text-gray-900">Tawfiq Khalilieh.</a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="text-gray-600 hover:text-purple-700 transition-colors">About</a>
            <a href="#experiences" onClick={(e) => handleLinkClick(e, '#experiences')} className="text-gray-600 hover:text-purple-700 transition-colors">Experience</a>
            <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')} className="text-gray-600 hover:text-purple-700 transition-colors">Projects</a>
            <a href="#skills" onClick={(e) => handleLinkClick(e, '#skills')} className="text-gray-600 hover:text-purple-700 transition-colors">Skills</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="text-gray-600 hover:text-purple-700 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center">
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hidden sm:inline-block bg-purple-700 text-white font-semibold px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors shadow-sm">Hire Me</a>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden ml-4 p-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-700 hover:bg-gray-50">About</a>
          <a href="#experiences" onClick={(e) => handleLinkClick(e, '#experiences')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-700 hover:bg-gray-50">Experience</a>
          <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-700 hover:bg-gray-50">Projects</a>
          <a href="#skills" onClick={(e) => handleLinkClick(e, '#skills')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-700 hover:bg-gray-50">Skills</a>
          <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-700 hover:bg-gray-50">Contact</a>
        </div>
      </div>
    </header>
  );
};


export default Header;
