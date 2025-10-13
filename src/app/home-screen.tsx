"use client";

import SkillsSketch from "@/components/skills/sketch"
import React, { useState, useRef } from 'react';
import { Menu, Linkedin, Github, ArrowRight } from 'lucide-react';
import { MouseEvent } from "react";


const GlobalStyles = () => (
  <style>{`
    body {
        font-family: 'Inter', sans-serif;
        background-color: #F9FAFB; /* A very light gray for the body background */
        scroll-behavior: smooth;
    }
    .text-purple-700 { color: #6941C6; }
    .bg-purple-700 { background-color: #6941C6; }
    .hover\\:bg-purple-800:hover { background-color: #53389E; }
    .border-purple-700 { border-color: #6941C6; }
    .ring-purple-200 { --tw-ring-color: #E9D7FE; }
    .bg-purple-50 { background-color: #F9F5FF; }
    .bg-purple-100 { background-color: #F4EBFF; }
    .text-purple-600 { color: #7F56D9; }
    .shadow-custom { box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10); }
  `}</style>
);

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

const Hero = ({ onNavLinkClick }: { onNavLinkClick: Function }) => (
  <section id="hero" className="py-20 md:py-32">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-700">Full Stack Engineer & Machine Learning enthusiast</span>
      <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-gray-900">Tawfiq Khalilieh</h1>
      <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">Full-stack developer, Automation & Machine Learning enthusiast. Have been coding since 12</p>
      <div className="mt-8 flex justify-center gap-4">
        <a href="#contact" onClick={(e) => onNavLinkClick(e, '#contact')} className="bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors shadow-sm">Get in Touch</a>
        <a href="#projects" onClick={(e) => onNavLinkClick(e, '#projects')} className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm">View My Work</a>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="https://avatars.githubusercontent.com/u/87164562" alt="A professional headshot of Your Name" className="rounded-2xl shadow-lg w-full max-w-md mx-auto" />
        </div>
        <div className="text-left">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">About Me</h2>
          <p className="mt-4 text-lg text-gray-600">Hello! I’m Tawfiq Khalilieh, I can go by taw 😄.</p>
          <p className="mt-4 text-lg text-gray-600">I am a software engineer passionate about building scalable systems, ML pipelines, and interactive applications. </p>
          <p className="mt-4 text-lg text-gray-600">Beyond coding, I enjoy chess, ricing , and exploring elegant problem-solving approaches.</p>
          <p className="mt-4 text-lg text-gray-600">You may find me in developer and tech communities, where I enjoy helping others, sharing ideas, and learning. If you come by, don’t hesitate to say hi!</p>
          <div className="mt-6 flex items-center gap-4">
            <a href="https://www.linkedin.com/in/tawfiq-khalilieh/" className="text-gray-500 hover:text-purple-700 transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="https://github.com/tawfiqkhalilieh" className="text-gray-500 hover:text-purple-700 transition-colors"><Github className="w-6 h-6" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experiences" className="py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Full Stack Engineer</h2>
        <p className="mt-4 text-lg text-gray-600">I'm passionate about building scalable systems, ML pipelines, and interactive applications.</p>
      </div>
      <div className="mt-16 max-w-3xl mx-auto">
        <div className="space-y-12 relative border-l-2 border-gray-200 ml-4 pl-8">
          <div className="relative">
            <div className="absolute -left-[3.0rem] top-1.5 h-5 w-5 rounded-full bg-purple-700 border-4 border-[#F9FAFB]"></div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Founder | Tech Lead</h3>
                <p className="text-gray-600">COBE iHelp</p>
              </div>
              <div className="mt-1 sm:mt-0 sm:text-right">
                <p className="font-medium text-purple-700">2025 - Present</p>
                <p className="text-sm text-gray-500">Remote</p>
              </div>
            </div>
            <p className="mt-2 text-gray-600">iHelp is an agentic platform designed to streamline the preparation and practice of oral exams, including COBE (Computerized Oral Bargut Exam) and its upcoming Hebrew counterpart. The platform enables students to practice, record, and track their oral responses, providing an interactive and data-driven approach to exam readiness.
            </p>
            <br />
            <p className="mt-2 text-gray-600">
              Key Highlights:

            </p>  <p className="mt-2 text-gray-600">
              - AI-Powered Exam Proxy: iHelp uses AI to simulate examiners and analyze student responses for preparation feedback.

            </p>
            <p className="mt-2 text-gray-600">
              - Full-Stack Architecture: Backend powered by Express.js and Fastify (AI proxy), with a lightweight, responsive frontend using Vanilla JS and HTMX for seamless interactions.

            </p>
            <p className="mt-2 text-gray-600">
              - Recording & Analytics: Supports recording, playback, and structured performance tracking for oral exams.
            </p>
            <p className="mt-2 text-gray-600">
              - Scalable & Extensible: Modular design allows easy integration with additional exam types and languages.
            </p>
          </div>
          {/* Experience Item 1 */}
          <div className="relative">
            <div className="absolute -left-[3.0rem] top-1.5 h-5 w-5 rounded-full bg-purple-700 border-4 border-[#F9FAFB]"></div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Backend Developer</h3>
                <p className="text-gray-600">Infinity Psychometry</p>
              </div>
              <div className="mt-1 sm:mt-0 sm:text-right">
                <p className="font-medium text-purple-700">2024 - 2025</p>
                <p className="text-sm text-gray-500">Remote</p>
              </div>
            </div>
            <p className="mt-2 text-gray-600">Developed a production-grade calculation and data-fetching microservice that remains operational. The parent project was scaled back and eventually discontinued due resource constraints.</p>
          </div>
          {/* Experience Item 2 */}
          <div className="relative">
            <div className="absolute -left-[3.0rem] top-1.5 h-5 w-5 rounded-full bg-purple-700 border-4 border-[#F9FAFB]"></div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Software Development Intern</h3>

                <p className="text-gray-600">Altooro</p>
              </div>
              <div className="mt-1 sm:mt-0 sm:text-right">
                <p className="font-medium text-purple-700">2021 - 2024</p>
                <p className="text-sm text-gray-500">Nazareth & Haifa, IL</p>
              </div>
            </div>
            <p className="mt-2 text-gray-600">During my internship at Altooro, I started with backend development, gaining experience in HTTP, CRUD operations, and databases. Over time, my responsibilities expanded to include:</p>
            <p className="mt-2 text-gray-600">- Managing coding challenges featured in the app.</p>

            <p className="mt-2 text-gray-600">- Leading a full data migration of submission testing and validation code, with reporting functionality.</p>
            <p className="mt-2 text-gray-600">- Contributing to QA and automation tasks to improve product reliability.</p>
            <p className="mt-2 text-gray-600">- I accomplished all of this while still in high school, which sharpened my technical skills and adaptability in a fast-paced environment.</p>
          </div>
          {/* Experience Item 3 */}
          <div className="relative">
            <div className="absolute -left-[3.0rem] top-1.5 h-5 w-5 rounded-full bg-purple-700 border-4 border-[#F9FAFB]"></div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Looper Mentor</h3>
                <p className="text-gray-600">Loop</p>
              </div>
              <div className="mt-1 sm:mt-0 sm:text-right">
                <p className="font-medium text-purple-700">2021 - 2024</p>
                <p className="text-sm text-gray-500">Nazareth & Haifa, IL</p>
              </div>
            </div>
            <p className="mt-2 text-gray-600">Mentored kids and teenagers to code their future, fostering technical and problem-solving skills.</p>
            <p className="mt-2 text-gray-600">Took ownership of two key projects:</p>
            <p className="mt-2 text-gray-600">- Upgraded all campus hardware to improve performance and reliability.</p>
            <p className="mt-2 text-gray-600">- Implemented a remote control system enabling mentors to manage all classroom computers from the mentor's PC.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Let's build something great together.</h2>
        <p className="mt-4 text-lg text-gray-600">Have a project in mind or just want to say hello? I'd love to hear from you. Fill out the form below or send me an email.</p>
      </div>
      <div className="mt-12 max-w-xl mx-auto">
        <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
          <div>
            <label htmlFor="full-name" className="sr-only">Full name</label>
            <input type="text" name="full-name" id="full-name" autoComplete="name" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md" placeholder="Full name" />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md" placeholder="Email address" />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea id="message" name="message" rows={4} className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500 border border-gray-300 rounded-md" placeholder="Your message..."></textarea>
          </div>
          <div>
            <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-gray-200">
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="https://www.linkedin.com/in/tawfiq-khalilieh/" className="text-gray-400 hover:text-gray-500"><span className="sr-only">LinkedIn</span><Linkedin className="w-6 h-6" /></a>
          <a href="https://github.com/tawfiqkhalilieh" className="text-gray-400 hover:text-gray-500"><span className="sr-only">GitHub</span><Github className="w-6 h-6" /></a>
        </div>
      </div>
    </div>
  </footer>
);

const ProjectCard = ({ imgSrc, title, description, tags }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-custom transition-transform hover:-translate-y-1">
        <img src={imgSrc} alt={`Screenshot of ${title}`} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map(tag => (
                    <span key={tag} className="bg-purple-50 text-purple-700 text-xs font-medium px-2.5 py-0.5 rounded-full">{tag}</span>
                ))}
            </div>
            <a href="#" className="mt-6 inline-flex items-center font-semibold text-purple-700 hover:text-purple-800">
                View Source Code on Github <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a href="#" className="mx-3 mt-6 inline-flex items-center font-semibold text-purple-700 hover:text-purple-800">
                View Project Live <ArrowRight className="ml-2 w-4 h-4" />
            </a>
        </div>
    </div>
);

const Projects = () => (
  <section id="projects" className="py-24 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Featured Projects</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Here are some of the projects I'm proud to have worked on. Each one represents a unique challenge and a story of growth.</p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Project Cards */}
        <ProjectCard
          imgSrc="https://avatars.githubusercontent.com/u/229956830?s=200"
          title="iHelp - AI-Powered Oral Exam Practice Platform"
          description="iHelp is an agentic platform designed to streamline the preparation and practice of oral exams, including COBE (Computerized Oral Bargut Exam) and its upcoming Hebrew counterpart. The platform enables students to practice, record, and track their oral responses, providing an interactive and data-driven approach to exam readiness."
          tags={['React', 'Node.js', 'Figma']}
        />
        <ProjectCard
          imgSrc="https://raw.githubusercontent.com/tawfiqkhalilieh/chess_smart_thinking/dev/images/drawio.png"
          title="Project Title Two"
          description="Another project description, highlighting different skills and challenges overcome."
          tags={['Vue.js', 'UI/UX Design', 'Webflow']}
        />
        <ProjectCard
          imgSrc="https://imgs.search.brave.com/l42OpUhOtuL7bwWAwGL_z2nQ0nCF4n7BVS5fN72LGTA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI3/MjYxMzUyMC92ZWN0/b3IvZmxhdC12ZWN0/b3ItaWxsdXN0cmF0/aW9uLXlvdW5nLXBy/b2dyYW1tZXJzLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz14/MDM3d3NjRnN0Zy1q/MW1GRDU1SnZqZmRX/MzlfZDZmQkNWYzBT/NldkS1prPQ"
          title="Project Title Three"
          description="A third project, showing breadth of experience in another domain or technology."
          tags={['Next.js', 'Tailwind CSS', 'Firebase']}
        />
      </div>
    </div>
  </section>
);


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
      <GlobalStyles />
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
