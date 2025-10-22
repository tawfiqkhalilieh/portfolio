
import { Linkedin, Github, ArrowRight } from 'lucide-react';

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

export default Footer;
