import React from "react";
import Head from "next/head";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
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
} from "../../assets";
import styles from "./showcase.module.scss";

export default function VShowcase() {
  return (
    <div className={styles.showcaseContainer}>
      <Head>
        <title>Showcase</title>
        <link rel="icon" href="me.jpg" type="image/jpg" />
        <VMenuBar activeTab="showcase" />
      </Head>
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
            <div className={styles.card}>
              <div className={styles.cardcontent}>
                <Fade>
                  <a href="#">
                    <h2>The Other Me</h2>
                  </a>

                  <p>
                    Simple ML model I am currently working on that answers my
                    whatsapp messages
                  </p>

                  <Image
                    src={the_other_me}
                    className={styles.image}
                    alt="Simple ML model I am currently working on that answers my
                    whatsapp messages"
                    height="250px"
                    width="500px"
                  ></Image>
                </Fade>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardcontent}>
                <Fade>
                  <a href="https://pypi.org/project/long-list/">
                    <h2>Long List</h2>
                  </a>

                  <p>
                    I created this simple infinity long list because I faced a
                    little problem with the maximum list size in python which is
                    536870912 (:
                  </p>

                  <Image
                    src={pypi}
                    className={styles.image}
                    alt="LongList"
                    height="250px"
                    width="500px"
                  ></Image>
                </Fade>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardcontent}>
                <Fade>
                  <a href="https://tawfiqkhalilieh.github.io/Sorting-Algorithms-p5/">
                    <h2>Sorting Visualizer</h2>
                  </a>

                  <p>Sorting algorithm visualizer built with p5.js</p>

                  <Image
                    src={sortingvisualizer}
                    className={styles.image}
                    alt="Sorting algorithm visualizer built with p5.js"
                    height="250px"
                    width="500px"
                  ></Image>
                </Fade>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardcontent}>
                <Fade>
                  <a href="https://github.com/tawfiqkhalilieh/SocialMedia-fastapi-dynamo">
                    <h2>Social Media</h2>
                  </a>

                  <p>
                    Simple Social Media Backend built with FastAPI and dynamodb
                  </p>

                  <Image
                    src={social_media_fastapi}
                    className={styles.image}
                    alt="Simple Social Media Backend built with FastAPI and dynamodb"
                    height="250px"
                    width="500px"
                  ></Image>
                </Fade>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardcontent}>
                <Fade>
                  <a href="https://github.com/tawfiqkhalilieh/SocialMedia-fastapi-dynamo">
                    <h2>Function Visualizer</h2>
                  </a>

                  <p>
                    Basic function visualizer built with FastAPI and matplolib
                  </p>

                  <Image
                    src={functionvisualizer}
                    className={styles.image}
                    alt="Basic function visualizer built with FastAPI and matplolib"
                    height="250px"
                    width="500px"
                  ></Image>
                </Fade>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardcontent}>
                <Fade>
                  <a href="https://react-kaboom.netlify.app/">
                    <h2>Mario Game</h2>
                  </a>

                  <p>Basic mario game built with react and kaboom.js</p>

                  <Image
                    src={mario_game}
                    className={styles.image}
                    alt="Basic mario game built with react and kaboom.js"
                    height="250px"
                    width="500px"
                  ></Image>
                </Fade>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardcontent}>
                <Fade>
                  <a href="https://mywordlee.herokuapp.com/">
                    <h2>Wordle Game</h2>
                  </a>

                  <p>Wordle game copy built with vanilia-js and express</p>

                  <Image
                    src={wordle_game}
                    className={styles.image}
                    alt="Wordle game copy built with vanilia-js and express"
                    height="250px"
                    width="500px"
                  ></Image>
                </Fade>
              </div>
            </div>

            {/*  HERE */}

            <div className={styles.card}>
              <div className={styles.cardcontent}>
                <Fade>
                  <a href="https://github.com/tawfiqkhalilieh/Simple-Discord-Bot">
                    <h2>Simple Discord Bot</h2>
                  </a>

                  <p>
                    A Bot I was Created Since I Was Working With Discord Bots (
                    2 years ago)
                  </p>

                  <Image
                    src={discord_bot}
                    className={styles.image}
                    alt="I Was Working With Discord Bots"
                    height="250px"
                    width="500px"
                  ></Image>
                </Fade>
              </div>
            </div>
          </div>
        </section>
      </div>
      <VFooter />
    </div>
  );
}
