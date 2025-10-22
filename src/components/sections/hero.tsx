
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

export default Hero;
