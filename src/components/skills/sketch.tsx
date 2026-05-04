import "./styles.css";
import ReactFlow, { Controls, Handle, ReactFlowProvider, useReactFlow } from "reactflow";
import "reactflow/dist/style.css";
import React, { useState, useEffect, useRef, KeyboardEvent, MouseEvent } from 'react';
import { Search, X } from 'lucide-react';
import '@xyflow/react/dist/style.css';
import SearchableItem from '@/interfaces/SearchableData';

const nodeDefaults = {
  style: {
    background: "transparent",
    color: "rgb(126 34 206)",
    border: "2px solid rgb(126 34 206)",
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
    minWidth: 120,
  },
};

const NodeLabel = ({ src, alt, label, handleSide, type = 'target' }: { src?: string; alt?: string; label: string; handleSide?: 'left' | 'right' | 'top' | 'bottom'; type?: 'target' | 'source' }) => (
  <div className="flex flex-col items-center justify-center text-center">
    {src && (
      <img
        src={src}
        alt={alt}
        className="w-10 h-10 object-contain mb-2 rounded"
        onError={(e) => {
           (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${label}&background=7e22ce&color=fff`;
        }}
      />
    )}
    <div className="text-sm font-medium">{label}</div>
    {handleSide && (
      /* @ts-ignore */
      <Handle type={type} position={handleSide} id={handleSide} />
    )}
  </div>
);

const nodes = [
  {
    id: "1",
    position: { x: 250, y: 0 },
    data: { label: <NodeLabel label="My Tech Landscape" /> },
    style: { ...nodeDefaults.style, fontWeight: 'bold', border: '3px solid rgb(126 34 206)' },
    draggable: false,
  },
  {
    id: "2",
    position: { x: 250, y: 300 },
    data: { label: <NodeLabel label="Technologies" /> },
    style: nodeDefaults.style,
    draggable: false,
  },
  {
    id: "3",
    position: { x: -250, y: 150 },
    data: { label: <NodeLabel label="Dataflow" /> },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "4",
    position: { x: 950, y: 150 },
    data: { label: <NodeLabel label="System Architecture" /> },
    style: nodeDefaults.style,
    draggable: false,
  },
  {
    id: "18",
    position: { x: 1650, y: 480 },
    data: { label: <NodeLabel label="Languages" /> },
    style: nodeDefaults.style,
    draggable: false,
  }
];

const systemArchitectureNodes = [
  {
    id: "5",
    position: { x: 700, y: 300 },
    data: { label: <NodeLabel label="Event Driven" /> },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "6",
    position: { x: 950, y: 300 },
    data: { label: <NodeLabel label="Monolith" /> },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "7",
    position: { x: 1200, y: 300 },
    data: { label: <NodeLabel label="Microservices" /> },
    style: nodeDefaults.style,
    draggable: false,
  },
]

const technologyNodes = [
  {
    id: "8",
    position: { x: -150, y: 450 },
    data: { label: <NodeLabel label="Backend" /> },
    style: nodeDefaults.style,
    draggable: false,
  },
  {
    id: "9",
    position: { x: 450, y: 450 },
    data: { label: <NodeLabel label="Frontend" /> },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "10",
    position: { x: -800, y: 450 },
    data: { label: <NodeLabel label="Databases" /> },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "11",
    position: { x: -1000, y: 450 },
    data: { label: <NodeLabel label="DevOps & Tools" /> },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "12",
    position: { x: 950, y: 450 },
    data: { label: <NodeLabel label="Machine Learning" /> },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "13",
    position: { x: 1200, y: 450 },
    data: { label: <NodeLabel label="Automation" /> },
    style: nodeDefaults.style,
    draggable: false,
  },
]

const dataflowNodes = [
  {
    id: "14",
    position: { x: -550, y: 250 },
    data: { label: <NodeLabel label="ML Pipelines" /> },
    style: nodeDefaults.style,
    draggable: false,
  },
  {
    id: "15",
    position: { x: -350, y: 250 },
    data: { label: <NodeLabel label="Data Migrations" /> },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "16",
    position: { x: -150, y: 250 },
    data: { label: <NodeLabel label="MVC" /> },
    style: nodeDefaults.style,
    draggable: false,
  },
  {
    id: "17",
    position: { x: 50, y: 250 },
    data: { label: <NodeLabel label="Microservices" /> },
    style: nodeDefaults.style,
    draggable: false,
  }
];

const languagesNodes = [
  {
    id: "19",
    position: { x: 1500, y: 150 },
    data: {
      label: <NodeLabel label="Python" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python Logo" />
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "20",
    position: { x: 1800, y: 150 },
    data: {
      label: <NodeLabel label="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript Logo" handleSide="left" />
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "21",
    position: { x: 1800, y: 350 },
    data: {
      label: <NodeLabel label="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript Logo" handleSide="left" />
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "22",
    position: { x: 1500, y: 350 },
    data: {
      label: <NodeLabel label="Go" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" alt="GoLang Logo" handleSide="right" />
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "23",
    position: { x: 1500, y: 550 },
    data: {
      label: <NodeLabel label="Lua" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg" alt="Lua Logo" handleSide="right" />
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "24",
    position: { x: 1500, y: 750 },
    data: {
      label: <NodeLabel label="C++" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++ Logo" handleSide="right" />
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "25",
    position: { x: 1800, y: 550 },
    data: {
      label: <NodeLabel label="C#" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C# Logo" handleSide="left" />
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "26",
    position: { x: 1800, y: 750 },
    data: {
      label: <NodeLabel label="Java" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java Logo" handleSide="left" />
    },
    style: nodeDefaults.style,
    draggable: false,
  }
]

const DevOpsAndToolsNodes = [
  {
    id: "27",
    position: { x: -1250, y: 600 },
    data: {
      label: <NodeLabel label="Docker" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker Logo" handleSide="right" />
    },
    style: nodeDefaults.style,
    draggable: false,
  },
  {
    id: "28",
    position: { x: -1250, y: 800 },
    data: {
      label: <NodeLabel label="Github" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub Logo" handleSide="right" />
    },
    style: nodeDefaults.style,
    draggable: false,
  },
  {
    id: "29",
    position: { x: -1250, y: 1000 },
    data: {
      label: <NodeLabel label="Neovim" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neovim/neovim-original.svg" alt="NeoVim Logo" handleSide="right" />
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "30",
    position: { x: -1250, y: 1200 },
    data: {
      label: <NodeLabel label="VS Code" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VScode Logo" handleSide="right" />
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "55",
    position: { x: -1250, y: 1400 },
    data: {
      label: <NodeLabel label="Linux" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux Logo" handleSide="right" />
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "56",
    position: { x: -1250, y: 1600 },
    data: {
      label: <NodeLabel label="Terraform" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" alt="Terraform Logo" handleSide="right" />
    },
    style: nodeDefaults.style,
    draggable: false,
  }
];

const databasesNodes = [
  {
    id: "47",
    position: { x: -550, y: 600 },
    data: {
      label: <NodeLabel label="DynamoDB" src="https://cdn.simpleicons.org/amazondynamodb" alt="DynamoDB Logo" />
    },
    style: nodeDefaults.style,
    draggable: false,
  },
  {
    id: "48",
    position: { x: -550, y: 800 },
    data: {
      label: <NodeLabel label="MongoDB" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB Logo" handleSide="left" />
    },
    style: nodeDefaults.style,
    draggable: false,
  },
  {
    id: "49",
    position: { x: -550, y: 1000 },
    data: {
      label: <NodeLabel label="Redis" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis Logo" handleSide="left" />
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "50",
    position: { x: -550, y: 1200 },
    data: {
      label: <NodeLabel label="PostgreSQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL Logo" handleSide="left" />
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "51",
    position: { x: -550, y: 1400 },
    data: {
      label: <NodeLabel label="Firebase" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase Logo" handleSide="left" />
    },
    style: nodeDefaults.style,
    draggable: false,
  },
  {
    id: "52",
    position: { x: -550, y: 1600 },
    data: {
      label: <NodeLabel label="MySQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL Logo" handleSide="left" />
    },
    style: nodeDefaults.style,
    draggable: false,
  },
];

const automationNodes = [
  {
    id: "31",
    position: { x: 1300, y: 600 },
    data: {
      label: <NodeLabel label="Selenium" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" alt="Selenium Logo" />
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "32",
    position: { x: 1125, y: 600 },
    data: {
      label: <NodeLabel label="Cypress" src="https://cdn.simpleicons.org/cypress" alt="Cypress Logo" />
    },
    style: nodeDefaults.style,
    draggable: false,
  }
]

const MachineLearningNodes = [
  {
    id: "33",
    position: { x: 950, y: 800 },
    data: {
      label: <NodeLabel label="Scikit-Learn" src="https://cdn.simpleicons.org/scikitlearn" alt="Scikit-Learn Logo" />
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "34",
    position: { x: 1150, y: 800 },
    data: {
      label: <NodeLabel label="Tensorflow" src="https://cdn.simpleicons.org/tensorflow" alt="Tensorflow Logo" />
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "35",
    position: { x: 750, y: 800 },
    data: {
      label: <NodeLabel label="Numpy" src="https://cdn.simpleicons.org/numpy" alt="Numpy Logo" />
    },
    style: nodeDefaults.style,
    draggable: false,
  }
]

const frontendNodes = [
  {
    id: "36",
    position: { x: 450, y: 600 },
    data: {
      label: <NodeLabel label="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Logo" />
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "38",
    position: { x: 250, y: 600 },
    data: {
      label: <NodeLabel label="HTMX" src="https://cdn.simpleicons.org/htmx" alt="HTMX Logo" />
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "39",
    position: { x: 550, y: 800 },
    data: {
      label: <NodeLabel label="Next.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js Logo" />
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "40",
    position: { x: 650, y: 600 },
    data: {
      label: <NodeLabel label="Electron" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" alt="Electron.js Logo" />
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "41",
    position: { x: 350, y: 800 },
    data: {
      label: <NodeLabel label="Tailwind" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS Logo" />
    },
    style: nodeDefaults.style,
    draggable: false,
  },
];

const backendNodes = [
  {
    id: "42",
    position: { x: -150, y: 600 },
    data: {
      label: <NodeLabel label="FastAPI" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" alt="FastAPI Logo" />
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "43",
    position: { x: -240, y: 800 },
    data: {
      label: <NodeLabel label="Flask" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask Logo" />
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "44",
    position: { x: -40, y: 800 },
    data: {
      label: <NodeLabel label="Express" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express Logo" />
    },
    style: nodeDefaults.style,
    draggable: false,
  },
  {
    id: "45",
    position: { x: -350, y: 600 },
    data: {
      label: <NodeLabel label="Gin" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" alt="Gin Logo" />
    },
    style: nodeDefaults.style,
    draggable: false,
  },
  {
    id: "46",
    position: { x: 50, y: 600 },
    data: {
      label: <NodeLabel label="Fastify" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastify/fastify-original.svg" alt="Fastify Logo" />
    },
    style: nodeDefaults.style,
    draggable: false,
  }
]

nodes.push(...systemArchitectureNodes);
nodes.push(...technologyNodes);
nodes.push(...dataflowNodes);
// @ts-ignore
nodes.push(...languagesNodes);
// @ts-ignore
nodes.push(...DevOpsAndToolsNodes);
// @ts-ignore
nodes.push(...automationNodes);
// @ts-ignore
nodes.push(...MachineLearningNodes);
// @ts-ignore
nodes.push(...frontendNodes);
// @ts-ignore
nodes.push(...backendNodes);
// @ts-ignore
nodes.push(...databasesNodes);

const edges = [
  { id: "e1-2", source: "1", target: "2", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e1-3", source: "1", target: "3", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e1-4", source: "1", target: "4", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e4-5", source: "4", target: "5", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e4-6", source: "4", target: "6", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e4-7", source: "4", target: "7", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e2-8", source: "2", target: "8", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e2-9", source: "2", target: "9", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e2-10", source: "2", target: "10", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e2-11", source: "2", target: "11", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e2-12", source: "2", target: "12", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e2-13", source: "2", target: "13", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e3-14", source: "3", target: "14", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e3-15", source: "3", target: "15", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e3-16", source: "3", target: "16", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e3-17", source: "3", target: "17", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e18-19", source: "19", target: "18", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e18-20", source: "20", target: "18", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e18-21", source: "21", target: "18", sourceHandle: "left", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e18-22", source: "22", sourceHandle: "right", target: "18", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e18-23", source: "18", target: "23", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e18-24", source: "18", target: "24", targetHandle: "right", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e18-25", source: "18", target: "25", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e18-26", source: "18", sourceHandle: "right", targetHandle: "left", target: "26", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e11-27", source: "11", target: "27", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e11-28", source: "11", target: "28", targetHandle: "right", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e11-29", source: "11", target: "29", targetHandle: "right", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e11-30", source: "11", target: "30", targetHandle: "right", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e13-31", source: "13", target: "31", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e13-32", source: "13", target: "32", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e12-33", source: "12", target: "33", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e12-34", source: "12", target: "34", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e12-35", source: "12", target: "35", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e9-35", source: "9", target: "36", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e9-38", source: "9", target: "38", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e9-39", source: "9", target: "39", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e9-40", source: "9", target: "40", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e9-41", source: "9", target: "41", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e8-42", source: "8", target: "42", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e8-43", source: "8", target: "43", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e8-44", source: "8", target: "44", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e8-45", source: "8", target: "45", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e8-46", source: "8", target: "46", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e10-47", source: "10", target: "47", targetHandle: "left", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e10-48", source: "10", target: "48", targetHandle: "left", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e10-49", source: "10", target: "49", targetHandle: "left", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e10-50", source: "10", target: "50", targetHandle: "left", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e10-51", source: "10", target: "51", targetHandle: "left", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e10-52", source: "10", target: "52", targetHandle: "left", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e11-55", source: "11", target: "55", targetHandle: "right", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e10-56", source: "10", target: "56", targetHandle: "right", style: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
];

const FuzzyFinderModal = ({ isOpen, onClose, onNavigate, searchableData }: { isOpen: boolean, onClose: Function, onNavigate: Function, searchableData: SearchableItem[] }) => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<SearchableItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setQuery('');
      setResults(searchableData);
    }
  }, [isOpen, searchableData]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults(searchableData);
      return;
    }

    const calculateScore = (item: any, query: any) => {
      const lowerQuery = query.toLowerCase();
      const lowerName = item.name.toLowerCase();
      const lowerDesc = item.description.toLowerCase();
      let score = 0;

      const nameIndex = lowerName.indexOf(lowerQuery);
      if (nameIndex !== -1) {
        score += 100;
        if (nameIndex === 0) score += 50;
        score -= Math.abs(lowerName.length - lowerQuery.length);
      }
      if (lowerDesc.includes(lowerQuery)) score += 10;
      return score;
    };

    const scoredResults = searchableData
      .map(item => ({ ...item, score: calculateScore(item, query) }))
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score);

    setResults(scoredResults);
  }, [query, searchableData]);

  const handleItemClick = (e: any, item: any) => {
    onNavigate(e, item.href);
    setQuery('');
    onClose();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [modalRef, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-[100] flex justify-center items-start pt-20 transition-opacity duration-300">
      <div ref={modalRef} className="bg-white rounded-lg shadow-xl w-full max-w-xl transform transition-all duration-300">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for skills"
            className="w-full bg-transparent p-4 pl-12 text-gray-800 focus:outline-none border-b border-gray-200"
          />
          <button onClick={() => onClose()} className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="max-h-96 overflow-y-auto p-2">
          {results.length === 0 && (
            <div className="p-4 text-center text-gray-500">No results found.</div>
          )}
          {results.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => handleItemClick(e, item)}
              className="block p-3 rounded-lg hover:bg-purple-50 cursor-pointer"
            >
              <div className="font-semibold text-gray-800">{item.name}</div>
              <div className="text-sm text-gray-500">{item.description}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const CenterView = () => {
  const { setCenter } = useReactFlow();
  
  useEffect(() => {
    // Zoom out and shift view down (by centering on a point closer to the top)
    // Node 1 is at (250, 0), centering on (250, 300) brings it clearly into view
    setCenter(250, 300, { zoom: 0.5 });
  }, [setCenter]);

  return null;
};

function SkillsSketchContent() {
  const headerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const searchableData: SearchableItem[] = [
    { name: 'System Architecture', description: 'Overview of system designs and paradigms.', href: '#' },
    { name: 'Event Driven', description: 'Building reactive systems that respond to events.', href: '#' },
    { name: 'Monolithic', description: 'Traditional single-tiered application design.', href: '#' },
    { name: 'Microservices', description: 'Breaking apps into independent, scalable services.', href: '#' },
    { name: 'Dataflow', description: 'How data moves and transforms through systems.', href: '#' },
    { name: 'ML Pipelines', description: 'Building structured pipelines for machine learning workflows.', href: '#' },
    { name: 'Data Migrations', description: 'Moving and transforming data across systems.', href: '#' },
    { name: 'Backend', description: 'Server-side development and APIs.', href: '#' },
    { name: 'FastAPI', description: 'Python framework for fast API development.', href: '#' },
    { name: 'Flask', description: 'Lightweight Python web framework.', href: '#' },
    { name: 'Express.js', description: 'Node.js framework for building backend services.', href: '#' },
    { name: 'Fastify.js', description: 'High-performance Node.js web framework.', href: '#' },
    { name: 'Node.js', description: 'JavaScript runtime for backend development.', href: '#' },
    { name: 'Goroutines', description: 'Concurrent programming in Go.', href: '#' },
    { name: 'Gin', description: 'Go web framework for building REST APIs.', href: '#' },
    { name: 'Frontend', description: 'Client-side web development.', href: '#' },
    { name: 'React', description: 'Building interactive UI components.', href: '#' },
    { name: 'HTMX', description: 'Enabling dynamic HTML without heavy JS.', href: '#' },
    { name: 'Tailwind', description: 'Utility-first CSS framework for styling.', href: '#' },
    { name: 'Next.js', description: 'React framework for server-side rendering.', href: '#' },
    { name: 'Electron.js', description: 'Building cross-platform desktop apps with JS.', href: '#' },
    { name: 'Databases', description: 'Storing and retrieving data efficiently.', href: '#' },
    { name: 'PostgreSQL', description: 'Advanced relational database.', href: '#' },
    { name: 'MySQL', description: 'Popular relational database system.', href: '#' },
    { name: 'MongoDB', description: 'Flexible NoSQL database.', href: '#' },
    { name: 'Redis', description: 'In-memory data structure store.', href: '#' },
    { name: 'Firebase', description: 'Realtime database and backend services.', href: '#' },
    { name: 'DynamoDB', description: 'Serverless NoSQL database from AWS.', href: '#' },
    { name: 'DevOps & Tools', description: 'Infrastructure, automation, and CI/CD.', href: '#' },
    { name: 'Docker', description: 'Containerizing applications for consistent environments.', href: '#' },
    { name: 'Docker Compose', description: 'Managing multi-container Docker apps.', href: '#' },
    { name: 'GitHub Actions', description: 'Automating workflows and deployments.', href: '#' },
    { name: 'AI/ML', description: 'Machine learning and AI development.', href: '#' },
    { name: 'scikit-learn', description: 'Python library for classical ML algorithms.', href: '#' },
    { name: 'TensorFlow', description: 'Framework for building neural networks.', href: '#' },
    { name: 'Gemini API', description: 'AI API for various advanced ML tasks.', href: '#' },
    { name: 'OpenAI API', description: 'Interfacing with OpenAI LLMs for projects.', href: '#' },
    { name: 'Pandas', description: 'Python library for data manipulation and analysis.', href: '#' },
    { name: 'NumPy', description: 'Python library for numerical computing.', href: '#' },
    { name: 'Automation', description: 'Automating tasks and browser interactions.', href: '#' },
    { name: 'Selenium', description: 'Browser automation for testing and tasks.', href: '#' },
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setIsModalOpen(true);
      }
      if (event.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown as any);
    return () => window.removeEventListener('keydown', handleKeyDown as any);
  }, []);

  const handleNavLinkClick = (e: MouseEvent, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = headerRef.current ? (headerRef.current as any).offsetHeight : 0;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      <FuzzyFinderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onNavigate={handleNavLinkClick}
        searchableData={searchableData}
      />
      <div id="skills" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Skills and Techlandscape </h2>
            <p className="mt-4 text-lg text-gray-600">You can navigate the graph or fuzzy find from the skill set</p>
            <div className="mt-8 flex justify-center gap-4">
              <a href="#skill-sketch" onClick={(e) => handleNavLinkClick(e as any, '#skill-sketch')} className="bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors shadow-sm cursor-pointer">Navigate!</a>
              <a onClick={() => setIsModalOpen(true)} className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm cursor-pointer">Fuzzy Find</a>
            </div>
          </div>
        </div>
        <div id="skill-sketch" className="mt-16 w-full h-[75vh] border-y border-gray-100 bg-gray-50/30">
          <ReactFlow 
            proOptions={{ hideAttribution: true }} 
            nodes={nodes} 
            edges={edges}
            minZoom={0.2}
            maxZoom={1.5}
          >
            <CenterView />
            <Controls showInteractive={false} style={{ color: "white" }} />
          </ReactFlow>
        </div>
      </div>
    </>
  )
}

const skillsSketch = () => (
  <ReactFlowProvider>
    <SkillsSketchContent />
  </ReactFlowProvider>
);

export default skillsSketch;
