import React from "react";
import Head from "next/head";
import { Fade } from "react-awesome-reveal";
import { VFooter, VMenuBar } from "../../utils";
import {
  sortingvisualizer,
  functionvisualizer,
  mario_game,
  wordle_game,
  discord_bot,
  the_other_me,
  pypi,
  social_media_fastapi,
  todo_app,
  number_memory_test,
  speed_typing_test,
  backend_golang,
} from "../../assets";
import styles from "./showcase.module.scss";
import Card from "./card";

const cards = [
  {
    url: "#",
    header: "The Other Me",
    paragraph:
      "Simple ML model I am currently working on that answers my whatsapp messages",
    img: the_other_me,
    alt: "ML model that answers my whatsapp messages",
  },
  {
    url: "https://pypi.org/project/long-list/",
    header: "Long List",
    paragraph:
      "I created this simple infinity long list because I faced aittle problem with the maximum list size in python which is 536870912 (:",
    img: pypi,
    alt: "Long List",
  },
  {
    url: "https://tawfiqkhalilieh.github.io/Sorting-Algorithms-p5/",
    header: "Sorting Visualizer",
    paragraph: "Sorting algorithm visualizer built with p5.js",
    img: sortingvisualizer,
    alt: "Sorting algorithm visualizer built with p5.js",
  },
  {
    url: "https://github.com/tawfiqkhalilieh/SocialMedia-fastapi-dynamo",
    header: "Social Media",
    paragraph: "Simple Social Media Backend built with FastAPI and dynamodb",
    img: social_media_fastapi,
    alt: "Simple Social Media Backend built with FastAPI and dynamodb",
  },
  {
    url: "https://github.com/tawfiqkhalilieh/function_visualizer",
    header: "Function Visualizer",
    paragraph: "Basic function visualizer built with FastAPI and matplolib",
    img: functionvisualizer,
    alt: "Basic function visualizer built with FastAPI and matplolib",
  },
  {
    url: "https://react-kaboom.netlify.app/",
    header: "Mario Game",
    paragraph: "Basic mario game built with react and kaboom.js",
    img: mario_game,
    alt: "Basic mario game built with react and kaboom.js",
  },
  {
    url: "https://mywordlee.herokuapp.com/",
    header: "Wordle Game",
    paragraph: "Wordle game copy built with vanilla-js and express",
    img: wordle_game,
    alt: "Wordle game copy built with vanilla-js and express",
  },
  {
    url: "https://github.com/tawfiqkhalilieh/Simple-Discord-Bot",
    header: "Simple Discord Bot",
    paragraph:
      "A Bot I was Created Since I Was Working With Discord Bots (2 years ago)",
    img: discord_bot,
    alt: "Discord Botsz",
  },
  {
    url: "https://looper-mentors-todo-app.vercel.app/",
    header: "TODO app",
    paragraph: "Simple todo app built with Next.js, React, Typescript",
    img: todo_app,
    alt: "todo app",
  },
  {
    url: "https://github.com/tawfiqkhalilieh/number_memory_solver",
    header: "Number Memory Solver ",
    paragraph:
      "An automation that plays number memory test built with selenium",
    img: number_memory_test,
    alt: "number memory test solver",
  },
  {
    url: "https://github.com/tawfiqkhalilieh/speed_typing_test_solver",
    header: "Speed Typing Test Solver",
    paragraph: "Speed typing test solver built with selenium",
    img: speed_typing_test,
    alt: "Speed typing test solver",
  },
  {
    url: "https://github.com/tawfiqkhalilieh/golang-gin",
    header: "Backend with GoLang",
    paragraph: "Simple backend project built with GoLang-Gin",
    img: backend_golang,
    alt: "backend with golan & gin",
  },
];

const showCards = () => {
  const cardsArr: any = [];
  cards.forEach((card) => {
    cardsArr.push(
      <Card
        url={card.url}
        header={card.header}
        paragraph={card.paragraph}
        img={card.img}
        alt={card.alt}
      />
    );
  });
  // @ts-ignore
  return Object.keys(cardsArr).map((card: number) => cardsArr[card]);
};
export default function VShowcase() {
  return (
    <div className={styles.showcaseContainer}>
      <Head>
        <title>Showcase</title>
      </Head>
      <VMenuBar activeTab="Showcase" />
      <div className={styles.content}>
        <div className={styles.summary}>
          <Fade>
            <h1>Showcase</h1>
            <h2>
              In this page I will show you a couple of proejcts I have been
              working on.
            </h2>
          </Fade>
        </div>
      </div>
      <div className={styles.container}>
        <section className={styles.example}>
          <div className={styles.containercard}>
            {showCards()}

            {/* TODO: create an object that contains all the cards data and loop on it to create every card */}
          </div>
        </section>
      </div>
      <VFooter />
    </div>
  );
}
