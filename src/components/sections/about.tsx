
import { Linkedin, Github } from 'lucide-react';
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



export default About;
