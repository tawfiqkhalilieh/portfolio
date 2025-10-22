import "./styles.css";
import ReactFlow, { Controls, Handle, } from "reactflow";
import "reactflow/dist/style.css";
import React, { useState, useEffect, useRef, KeyboardEvent, MouseEvent } from 'react';
import { Search, X } from 'lucide-react';
import '@xyflow/react/dist/style.css';
import { 
  SearchableItem 
} from '@/interfaces/SearchableData';



const nodeDefaults = {
  style: {
    background: "transparent",
    color: "rgb(126 34 206)",
    border: "2px solid rgb(126 34 206)",
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
  },
};

const nodes = [
  {
    id: "1",
    position: { x: 250, y: 0 },
    data: { label: "My Tech Landscape" },
    style: nodeDefaults.style,
    draggable: false,
  },
  {
    id: "2",
    position: { x: 250, y: 300 },
    data: { label: "Technologies" },
    style: nodeDefaults.style,
    draggable: false,
  },
  {
    id: "3",
    position: { x: -250, y: 150 },
    data: { label: "Dataflow" },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "4",
    position: { x: 950, y: 150 },
    data: { label: "System Architicture" },
    style: nodeDefaults.style,
    draggable: false,
  },
  {
    id: "18",
    position: { x: 1650, y: 480 },
    data: { label: "languages" },
    style: nodeDefaults.style,
    draggable: false,
  }
];


const systemArchitectureNodes = [
  {
    id: "5",
    position: { x: 700, y: 300 },
    data: { label: "Event Driven" },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "6",
    position: { x: 950, y: 300 },
    data: { label: "Monolith" },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "7",
    position: { x: 1200, y: 300 },
    data: { label: "Microservices" },
    style: nodeDefaults.style,
    draggable: false,
  },
]


const technologyNodes = [
  {
    id: "8",
    position: { x: -150, y: 450 },
    data: { label: "Backend" },
    style: nodeDefaults.style,
    draggable: false,
  },
  {
    id: "9",
    position: { x: 450, y: 450 },
    data: { label: "Frontend" },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "10",
    position: { x: -800, y: 450 },
    data: { label: "Databases" },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "11",
    position: { x: -1000, y: 450 },
    data: { label: "DevOps & Tools" },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "12",
    position: { x: 950, y: 450 },
    data: { label: "Machine Learning" },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "13",
    position: { x: 1200, y: 450 },
    data: { label: "Automation" },
    style: nodeDefaults.style,
    draggable: false,
  },
]

const dataflowNodes = [
  {
    id: "14",
    position: { x: -550, y: 250 },
    data: { label: "ML Pipelines" },
    style: nodeDefaults.style,
    draggable: false,
  },
  {
    id: "15",
    position: { x: -350, y: 250 },
    data: { label: "Data Migrations" },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "16",
    position: { x: -150, y: 250 },
    data: { label: "MCV" },
    style: nodeDefaults.style,
    draggable: false,
  },
  {
    id: "17",
    position: { x: 50, y: 250 },
    data: { label: "Microservices" },
    style: nodeDefaults.style,
    draggable: false,
  }
];

const languagesNodes = [
  {
    id: "19",
    position: { x: 1500, y: 150 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
              alt="Python Logo"
              style={{ borderRadius: 8, width: "2.5vw", height: "2.5vw" }}
            />


          </center>
          <br />
          <div>Python</div>
        </div>
      )
    },

    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "20",
    position: { x: 1800, y: 150 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://imgs.search.brave.com/MBa2DUYxfNmPfckU4KfOP1mui9pBWQggsglZZ8wDeSw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2phdmFzY3JpcHQt/cG5nL2phdmFzY3Jp/cHQtdmVjdG9yLWxv/Z28teWVsbG93LXBu/Zy10cmFuc3BhcmVu/dC1qYXZhc2NyaXB0/LXZlY3Rvci0xMi5w/bmc"
              alt="JavaScript Logo"
              style={{ borderRadius: 8, width: "2.5vw", height: "2.5vw" }}
            />


          </center>

          {/* @ts-ignore  */}
          <Handle type="target" position={"left"} id="left" />

          <br />
          <div>JavaScript</div>
        </div>
      )
    },

    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "21",
    position: { x: 1800, y: 350 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
              alt="TypeScript Logo"
              style={{ borderRadius: 8, width: "2.5vw", height: "2.5vw" }}
            />


          </center>
          {/* @ts-ignore  */}
          <Handle type="target" position={"left"} id="left" />

          <br />
          <div>TypeScript</div>

        </div>
      )
    },

    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "22",
    position: { x: 1500, y: 350 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png"
              alt="GoLang Logo"
              style={{ borderRadius: 8, width: "2.5vw", height: "2.5vw" }}
            />


          </center>

          <br />
          <div>Go</div>
          {/* @ts-ignore  */}
          <Handle id="right" type="target" position="right" />
        </div>
      )
    },

    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "23",
    position: { x: 1500, y: 550 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/2048px-Lua-Logo.svg.png"
              alt="Lua Logo"
              style={{ borderRadius: 8, width: "2.5vw", height: "2.5vw" }}
            />


          </center>

          <br />
          <div>Lua</div>
          {/* @ts-ignore  */}
          <Handle type="target" position="right" id="right" />
        </div>
      )
    },

    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "24",
    position: { x: 1500, y: 750 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
              alt="C++ Logo"
              style={{ borderRadius: 8, width: "2.5vw", height: "2.5vw" }}
            />


          </center>

          <br />
          <div>C++</div>
          {/* @ts-ignore  */}
          <Handle type="target" position="right" id="right" />
        </div>
      )
    },

    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "25",
    position: { x: 1800, y: 550 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png"
              alt="C# Logo"
              style={{ borderRadius: 8, width: "2.5vw", height: "2.5vw" }}
            />


          </center>

          <br />
          <div>C#</div>
          {/* @ts-ignore  */}
          <Handle type="target" position="left" id="left" />
        </div>
      )
    },

    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "26",
    position: { x: 1800, y: 750 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://img.icons8.com/color/512/java-coffee-cup-logo--v2.png"
              alt="Java Logo"
              style={{ borderRadius: 8, width: "2.5vw", height: "2.5vw" }}
            />


          </center>

          <br />
          <div>Java</div>
          {/* @ts-ignore  */}
          <Handle type="target" position="left" id="left" />
        </div>
      )
    },

    style: nodeDefaults.style,
    draggable: false,
  }, {

    id: "26",
    position: { x: 1800, y: 750 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://img.icons8.com/color/512/java-coffee-cup-logo--v2.png"
              alt="Java Logo"
              style={{ borderRadius: 8, width: "2.5vw", height: "2.5vw" }}
            />


          </center>

          <br />
          <div>Java</div>
          {/* @ts-ignore  */}
          <Handle type="target" position="left" id="left" />
        </div>
      )
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
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://1000logos.net/wp-content/uploads/2021/11/Docker-Logo.png"
              alt="Docker Logo"
              style={{ borderRadius: 8, width: "auto", height: "2.5vw" }}
            />


          </center>

          <br />
          <div>Docker & Docker Compose</div>
          {/* @ts-ignore  */}
          <Handle type="target" position="right" id="right" />
        </div>
      )
    },
    style: nodeDefaults.style,
    draggable: false,
  },
  {
    id: "28",
    position: { x: -1250, y: 800 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://simplelocalize.io/blog/github-app/github-actions-for-localization.jpg"
              alt="GitHub Actions Logo"
              style={{ borderRadius: 8, width: "auto", height: "2.5vw" }}
            />


          </center>
          {/* @ts-ignore  */}
          <Handle type="target" position="right" id="right" />

          <br />
          <div>Github & Github Actions</div>
        </div>
      )
    },
    style: nodeDefaults.style,
    draggable: false,
  },
  {
    id: "29",
    position: { x: -1250, y: 1000 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Neovim-mark.svg/1680px-Neovim-mark.svg.png"
              alt="NeoVim Logo"
              style={{ borderRadius: 8, width: "auto", height: "2.5vw" }}
            />


          </center>
          {/* @ts-ignore  */}
          <Handle type="target" position="right" id="right" />

          <br />
          <div>Vim / NeoVim</div>
        </div>
      )
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "30",
    position: { x: -1250, y: 1200 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
              alt="VScode Logo"
              style={{ borderRadius: 8, width: "2.5vw", height: "2.5vw" }}
            />


          </center>
          {/* @ts-ignore  */}
          <Handle type="target" position="right" id="right" />

          <br />
          <div>VScode / Cursor</div>
        </div>
      )
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "55",
    position: { x: -1250, y: 1400 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1727px-Tux.svg.png"
              alt="Linux Logo"
              style={{ borderRadius: 8, width: "auto", height: "2.5vw" }}
            />


          </center>
          {/* @ts-ignore  */}
          <Handle type="target" position="right" id="right" />

          <br />
          <div>Linux</div>
        </div>
      )
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "56",
    position: { x: -1250, y: 1600 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://www.freelogovectors.net/wp-content/uploads/2022/01/terra-form-logo-freelogovectors.net_.png"
              alt="Terraform Logo"
              style={{ borderRadius: 8, width: "auto", height: "2.5vw" }}
            />


          </center>
          {/* @ts-ignore  */}
          <Handle type="target" position="right" id="right" />

          <br />
          <div>Terraform</div>
        </div>
      )
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
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fd/DynamoDB.png"
              alt="DynamoDB Logo"
              style={{ borderRadius: 8, width: "2.5vw", height: "2.5vw" }}
            />


          </center>

          <br />
          <div>DynamoDB</div>
        </div>
      )
    },
    style: nodeDefaults.style,
    draggable: false,
  },
  {
    id: "48",
    position: { x: -550, y: 800 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"
              alt="MongoDB Logo"
              style={{ borderRadius: 8, width: "10vw", height: "2.5vw" }}
            />


          </center>
          {/* @ts-ignore  */}
          <Handle type="target" position="left" id="left" />

          <br />
          <div>MongoDB</div>
        </div>
      )
    },
    style: nodeDefaults.style,
    draggable: false,
  },
  {
    id: "49",
    position: { x: -550, y: 1000 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Logo-redis.svg/2560px-Logo-redis.svg.png"
              alt="Redis Logo"
              style={{ borderRadius: 8, width: "auto", height: "2.5vw" }}
            />


          </center>
          {/* @ts-ignore  */}
          <Handle type="target" position="left" id="left" />

          <br />
          <div>Redis</div>
        </div>
      )
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "50",
    position: { x: -550, y: 1200 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1163px-Postgresql_elephant.svg.png"
              alt="PostgreSQL Logo"
              style={{ borderRadius: 8, width: "2.5vw", height: "2.5vw" }}
            />


          </center>
          {/* @ts-ignore  */}
          <Handle type="target" position="left" id="left" />

          <br />
          <div>PostgreSQL</div>
        </div>
      )
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "51",
    position: { x: -550, y: 1400 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQso1MRyBlMe_JxzvKJ3F_odihlatDRoLkwpg&s"
              alt="Firebase Logo"
              style={{ borderRadius: 8, width: "auto", height: "2.5vw" }}
            />


          </center>
          {/* @ts-ignore  */}
          <Handle type="target" position="left" id="left" />

          <br />
          <div>Firebase</div>
        </div>
      )
    },
    style: nodeDefaults.style,
    draggable: false,
  },
  {
    id: "52",
    position: { x: -550, y: 1600 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png"
              alt="MySQL Logo"
              style={{ borderRadius: 8, width: "auto", height: "2.5vw" }}
            />
          </center>
          <br />

          {/* @ts-ignore  */}
          <Handle type="target" position="left" id="left" />


          <div>MySQL</div>
        </div>
      )

    }
  },
];

const automationNodes = [
  {
    id: "31",
    position: { x: 1300, y: 600 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/selenium-automation-icon.png"
              alt="Selenium Logo"
              style={{ borderRadius: 8, width: "2.5vw", height: "2.5vw" }}
            />
          </center>
          <br />
          <div>Selenium</div>
        </div>
      )
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "32",
    position: { x: 1125, y: 600 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://images.icon-icons.com/3911/PNG/512/cypress_logo_icon_247239.png"
              alt="Cypress Logo"
              style={{ borderRadius: 8, width: "2.5vw", height: "2.5vw" }}
            />
          </center>
          <br />
          <div>Cypress</div>
        </div>
      )
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
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
              alt="Scikit-Learn Logo"
              style={{ borderRadius: 8, width: "2.5vw", height: "2.5vw" }}
            />
          </center>
          <br />
          <div>Scikit-Learn</div>

        </div>
      )
    },


    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "34",
    position: { x: 1150, y: 800 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/TensorFlow_logo.svg/1200px-TensorFlow_logo.svg.png"
              alt="Tensorflow Logo"
              style={{ borderRadius: 8, width: "auto", height: "2.5vw" }}
            />
          </center>
          <br />
          <div>Tensorflow</div>

        </div>
      )
    },


    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "35",
    position: { x: 750, y: 800 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>
          <center>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/NumPy_logo_2020.svg/2560px-NumPy_logo_2020.svg.png"
              alt="Numpy Logo"
              style={{ borderRadius: 8, width: "auto", height: "2.5vw" }}
            />
          </center>
          <br />
          <div>Numpy</div>

        </div>
      )
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
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React Logo"
              style={{ borderRadius: 8, width: "2.5vw", height: "2.5vw" }}
            />
          </center>
          <br />
          <div>React</div>
        </div>
      )
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "38",
    position: { x: 250, y: 600 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>
          <center>

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/Htmx_Logo.png"
              alt="HTMX Logo"
              style={{ borderRadius: 8, width: "auto", height: "2.5vw" }}
            />
          </center>
          <br />
          <div>HTMX</div>
        </div>

      )
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "39",
    position: { x: 550, y: 800 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>
          <center>

            <img
              src="https://13m4fjyuavya.b-cdn.net/w_1950/5sgp74utg9y6-next-blue-main.png"
              alt="Next.js Logo"
              style={{ borderRadius: 8, width: "2.5vw", height: "2.5vw" }}
            />
          </center>
          <br />
          <div>Next</div>
        </div>

      )
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "40",
    position: { x: 650, y: 600 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>
          <center>

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/1200px-Electron_Software_Framework_Logo.svg.png"
              alt="Electron.js Logo"
              style={{ borderRadius: 8, width: "2.5vw", height: "2.5vw" }}
            />
          </center>
          <br />
          <div>Electron</div>
        </div>

      )
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "41",
    position: { x: 350, y: 800 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>
          <center>

            <img
              src="https://avatars.githubusercontent.com/u/67109815?s=280&v=4"
              alt="Tailwind CSS Logo"
              style={{ borderRadius: 8, width: "2.5vw", height: "2.5vw" }}
            />
          </center>
          <br />
          <div>Tailwind</div>
        </div>

      )
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
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png"
              alt="FastAPI Logo"
              style={{ borderRadius: 8, width: "auto", height: "2.5vw" }}
            />
          </center>
          <br />
          <div>FastAPI</div>
        </div>
      )
    },
    style: nodeDefaults.style,
    draggable: false,
  }, {
    id: "43",
    position: { x: -240, y: 800 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>
          <center>
            <img
              src="https://p7.hiclipart.com/preview/166/342/413/flask-python-bottle-web-framework-web-application-flask.jpg"
              alt="Flask Logo"
              style={{ borderRadius: 8, width: "auto", height: "2.5vw" }}
            />
          </center>
          <br />
          <div>Flask</div>
        </div>
      )

    }
  }, {
    id: "44",
    position: { x: -40, y: 800 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
              alt="Express Logo"
              style={{ borderRadius: 8, width: "auto", height: "2.5vw" }}
            />
          </center>
          <br />
          <div>Express</div>
        </div>
      )

    }
  },
  {
    id: "45",
    position: { x: -350, y: 600 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F1fly0uc0pv0dhjs3sy0w.png"
              alt="Gin Logo"
              style={{ borderRadius: 8, width: "auto", height: "2.5vw" }}
            />
          </center>
          <br />
          <div>Gin</div>
        </div>
      )

    }
  },
  {
    id: "46",
    position: { x: 50, y: 600 },
    data: {
      label: (
        <div style={{ textAlign: "center" }}>

          <center>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Fastify.png"
              alt="Fastify Logo"
              style={{ borderRadius: 8, width: "auto", height: "2.5vw" }}
            />
          </center>
          <br />
          <div>Express</div>
        </div>
      )

    }
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
  { id: "e10-49", source: "10", target: "49", targetHandle: "left", tyle: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
  { id: "e10-50", source: "10", target: "50", targetHandle: "left", tyle: { strokeWidth: 3, stroke: "rgb(126 34 206)" } },
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
      setQuery(''); // Reset query on open
      setResults(searchableData); // Set initial results to all data
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
        score += 100; // High base score for name match
        if (nameIndex === 0) {
          score += 50; // Bonus for starting match
        }
        // Bonus for being a closer match in length
        score -= Math.abs(lowerName.length - lowerQuery.length);
      }

      if (lowerDesc.includes(lowerQuery)) {
        score += 10; // Lower score for description match
      }

      return score;
    };

    const scoredResults = searchableData
      .map(item => ({
        ...item,
        score: calculateScore(item, query),
      }))
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score);

    setResults(scoredResults);
  }, [query, searchableData]);

  const handleItemClick = (e: any, item: any) => {
    onNavigate(e, item.href);
    setQuery('');
    onClose();
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current &&
        !modalRef.current.contains(
          // @ts-ignore
          event.target
        )) {
        onClose();
      }
    }
    // @ts-ignore
    document.addEventListener("mousedown", handleClickOutside);

    // @ts-ignore
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
          <button onClick={() => onClose} className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-700">
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


function skillsSketch() {
  const headerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const searchableData: SearchableItem[] = [
    // System Architecture
    { name: 'System Architecture', description: 'Overview of system designs and paradigms.', href: '#' },
    { name: 'Event Driven', description: 'Building reactive systems that respond to events.', href: '#' },
    { name: 'Monolithic', description: 'Traditional single-tiered application design.', href: '#' },
    { name: 'Microservices', description: 'Breaking apps into independent, scalable services.', href: '#' },

    // Dataflow
    { name: 'Dataflow', description: 'How data moves and transforms through systems.', href: '#' },
    { name: 'ML Pipelines', description: 'Building structured pipelines for machine learning workflows.', href: '#' },
    { name: 'Data Migrations', description: 'Moving and transforming data across systems.', href: '#' },

    // Backend
    { name: 'Backend', description: 'Server-side development and APIs.', href: '#' },
    { name: 'FastAPI', description: 'Python framework for fast API development.', href: '#' },
    { name: 'Flask', description: 'Lightweight Python web framework.', href: '#' },
    { name: 'Express.js', description: 'Node.js framework for building backend services.', href: '#' },
    { name: 'Fastify.js', description: 'High-performance Node.js web framework.', href: '#' },
    { name: 'Node.js', description: 'JavaScript runtime for backend development.', href: '#' },
    { name: 'Goroutines', description: 'Concurrent programming in Go.', href: '#' },
    { name: 'Gin', description: 'Go web framework for building REST APIs.', href: '#' },

    // Frontend
    { name: 'Frontend', description: 'Client-side web development.', href: '#' },
    { name: 'React', description: 'Building interactive UI components.', href: '#' },
    { name: 'HTMX', description: 'Enabling dynamic HTML without heavy JS.', href: '#' },
    { name: 'Tailwind', description: 'Utility-first CSS framework for styling.', href: '#' },
    { name: 'Next.js', description: 'React framework for server-side rendering.', href: '#' },
    { name: 'Electron.js', description: 'Building cross-platform desktop apps with JS.', href: '#' },

    // Databases
    { name: 'Databases', description: 'Storing and retrieving data efficiently.', href: '#' },
    { name: 'PostgreSQL', description: 'Advanced relational database.', href: '#' },
    { name: 'MySQL', description: 'Popular relational database system.', href: '#' },
    { name: 'MongoDB', description: 'Flexible NoSQL database.', href: '#' },
    { name: 'Redis', description: 'In-memory data structure store.', href: '#' },
    { name: 'Firebase', description: 'Realtime database and backend services.', href: '#' },
    { name: 'DynamoDB', description: 'Serverless NoSQL database from AWS.', href: '#' },

    // DevOps & Tools
    { name: 'DevOps & Tools', description: 'Infrastructure, automation, and CI/CD.', href: '#' },
    { name: 'Docker', description: 'Containerizing applications for consistent environments.', href: '#' },
    { name: 'Docker Compose', description: 'Managing multi-container Docker apps.', href: '#' },
    { name: 'GitHub Actions', description: 'Automating workflows and deployments.', href: '#' },

    // AI/ML
    { name: 'AI/ML', description: 'Machine learning and AI development.', href: '#' },
    { name: 'scikit-learn', description: 'Python library for classical ML algorithms.', href: '#' },
    { name: 'TensorFlow', description: 'Framework for building neural networks.', href: '#' },
    { name: 'Gemini API', description: 'AI API for various advanced ML tasks.', href: '#' },
    { name: 'OpenAI API', description: 'Interfacing with OpenAI LLMs for projects.', href: '#' },
    { name: 'Pandas', description: 'Python library for data manipulation and analysis.', href: '#' },
    { name: 'NumPy', description: 'Python library for numerical computing.', href: '#' },

    // Automation
    { name: 'Automation', description: 'Automating tasks and browser interactions.', href: '#' },
    { name: 'Selenium', description: 'Browser automation for testing and tasks.', href: '#' },
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setIsModalOpen(true);
      }
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    // @ts-ignore
    window.addEventListener('keydown', handleKeyDown);

    // @ts-ignore
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavLinkClick = (e: MouseEvent, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = headerRef.current ?
        // @ts-ignore
        headerRef.current.offsetHeight :
        0;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  //   const { setViewport, getNode } = useReactFlow();

  //   useEffect(() => {
  //     const nodeId = "2"; // 👈 your target node
  //     const node = getNode(nodeId);

  //     if (node) {
  //       const x = node.position.x + node.width! / 2;
  //       const y = node.position.y + node.height! / 2;
  //       setViewport({ x: x - window.innerWidth / 2, y: y - window.innerHeight / 2, zoom: 1.5 });
  //     }
  //   }, [setViewport, getNode]);
  return (
    <>
      <FuzzyFinderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onNavigate={handleNavLinkClick}
        searchableData={searchableData}
      />
      <div id="skills" className="my-8" style={{ width: "100vw", }}>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Skills and Techlandscape </h2>
          <p className="mt-4 text-lg text-gray-600">You can navigate the graph or fuzzy find from the skill set</p>


          <div className="mt-8 flex justify-center gap-4">
            <a href="#skill-sketch" onClick={(e) => handleNavLinkClick(e, '#skill-sketch')} className="bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors shadow-sm">Navigate!</a>
            {/* Show modal for fuzzy finding */}
            <a onClick={() => setIsModalOpen(true)} className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm">Fuzzy Find</a>
          </div>
        </div>


      </div>
      <div id="skill-sketch" style={{ width: "100vw", height: "75vh", }}>

        <div className="my-16" style={{ width: "100vw", height: "75vh", }}>
          {/* onClick={() => focusNode("2")} */}
          {/*   */}
          <ReactFlow defaultViewport={{ x: 350, y: 0, zoom: 0.44 }} proOptions={{ hideAttribution: true }} nodes={nodes} edges={edges}>

            {/* <Flow /> */}
            <Controls
              showInteractive={false}
              style={{
                color: "white",
              }} />
          </ReactFlow>
        </div>
      </div>

    </>
  )
}

export default skillsSketch;
