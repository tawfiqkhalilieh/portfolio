
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ imgSrc, title, description, tags, source, live }: { imgSrc: string, title: string, description: string[], tags: string[], source: string | undefined, live: string | undefined }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-custom transition-transform hover:-translate-y-1">
    <img src={imgSrc} alt={`Screenshot of ${title}`} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      {description.map((desc, i) => (<p key={i} className="mt-2 text-gray-600">{desc}</p>))}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="bg-purple-50 text-purple-700 text-xs font-medium px-2.5 py-0.5 rounded-full">{tag}</span>
        ))}
      </div>

      {source ?
        (<a href={source} className="mt-6 inline-flex items-center font-semibold text-purple-700 hover:text-purple-800">
          View Source Code on Github <ArrowRight className="ml-2 w-4 h-4" />
        </a>) : <></>}
      {live ?
        (<a href={live} className="mx-3 mt-6 inline-flex items-center font-semibold text-purple-700 hover:text-purple-800">
          View Project Live <ArrowRight className="ml-2 w-4 h-4" />
        </a>) : <></>}
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
          description={["iHelp is an agentic platform designed to streamline the preparation and practice of oral exams, including COBE (Computerized Oral Bargut Exam) and its upcoming Hebrew counterpart.", "The platform enables students to practice, record, and track their oral responses, providing an interactive and data-driven approach to exam readiness."]}
          tags={['Express', 'Fastify', 'Gemini', 'HTMX', 'React.js', 'Electron.js', 'TypeScript']}
          live="https://cobe-ihelp.vercel.app"
          source={undefined}
        />
        <ProjectCard
          imgSrc="https://raw.githubusercontent.com/tawfiqkhalilieh/chess_smart_thinking/dev/images/drawio.png"
          title="Chess Smart Thinking"
          description={["Chess Smart Thinking is a multi-service, event-driven machine learning pipeline that scrapes chess.com data, analyzes it, trains a model to predict human thinking time, and provides a frontend for gameplay against the trained model."]}
          tags={['Go', 'Gin', 'Chess.com APi', 'Stockfish', 'tensorflow', 'React', 'Tailwind', 'C++', 'OkAPI', 'numpy', 'Next', 'FastAPI', 'MongoDB', 'Redis', 'Docker', "docker-compose",]}
          source="https://github.com/tawfiqkhalilieh/chess_smart_thinking"
          live="https://tawfiqkhalilieh.github.io/chess_smart_thinking_frontend/"
        />
        <ProjectCard
          imgSrc="https://raw.githubusercontent.com/tawfiqkhalilieh/ProjectStructurePreview/refs/heads/development/usage.png"
          title="Project File Preview"
          description={['Project Structure Preview is a simple and lightweight CLI tool written in Go that displays the directory structure of any project in a clean, tree-like format — similar to the output of the Unix tree command, but fast, minimal, and dependency-free, and compatable with the git projects.', "I love using LLM tools to help me write the README.md files, but they often struggle to generate accurate project structure diagrams. This tool aims to fill that gap by providing a quick and easy way to visualize your project's file hierarchy."
          ]}
          tags={['Go', 'Stacks', 'git']}
          live="https://github.com/tawfiqkhalilieh/ProjectStructurePreview/releases/tag/0.0"
          source="https://github.com/tawfiqkhalilieh/ProjectStructurePreview"

        />
        <ProjectCard
          imgSrc="https://media.discordapp.net/attachments/926499772146286613/1426607745880162429/PXL_20251011_162109310.jpg?ex=68f317bf&is=68f1c63f&hm=39fbf1c653b9fbc1f8da0f1d8ce819cd9b7f53000c75939cced7eb7cb02f8786&=&format=webp&width=1038&height=779"
          title="Ubarchy"
          description={["I'm a university student, despite tiling window managers being great, I'd also love to have my own regular windows-like ubuntu system.", "DHH while on the standup said that it cannot be built upon ubuntu, and I'm here to prove him wrong!", "You can check my website for the iso image, the following tutorial is gonnabe to upgrade your current uperating system", "I use it on my desktop and laptop btw, and yes I still use arch btw"
          ]}
          tags={['Linux', 'Hyprland', 'Arch', "Ubuntu", "Omarchy"]}
          live="https://github.com/tawfiqkhalilieh/ProjectStructurePreview/releases/tag/0.0"
          source="https://github.com/tawfiqkhalilieh/ProjectStructurePreview"

        />


        <ProjectCard
          imgSrc="https://media.discordapp.net/attachments/1115324664726691870/1428761773779193926/content.png?ex=68f3ad97&is=68f25c17&hm=56ecbfe7da54fa4234ca9d67cd1e5f39a7fe5ab8d3ca905adf267fbea69c84dc&=&format=webp&quality=lossless&width=1067&height=711"
          title="chessCheaterPlus"
          description={['An automation that simulates entire player activity in chess.com, starting from playing basic games to solving puzzles or playingg 960 chess games.', 'Powered by automations and chess engines', 'I Built when I was 16 years old', 'The plus/advanced version was shutdown by a request from a chess.com community manager after sharing the code with them', 'I still do have some accounts that weren\'t closed on the project shutdown date'
          ]}
          tags={['Selenium', 'Python', 'Google Teachable Machine', 'Stockfish', 'LC0', 'Chess', 'tkinter']}
          live={undefined}
          source="https://github.com/tawfiqkhalilieh/chessCheater"

        />
        <ProjectCard
          imgSrc="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/Ognian_Mikov/phplGwPHq.png"
          title="Chess Hinter"
          description={['A client that monitors games while being played. Once it detects that you\'re stuck, it gives you a hint on the board', 'It still works on the chess.com board!', "It is 100% undetectable"]}
          tags={['Selenium', 'Python', 'Stockfish', 'Chess']}
          live={undefined}
          source="https://github.com/tawfiqkhalilieh/chessCheater"

        />
      </div>
    </div>
  </section>
);


export default Projects;
