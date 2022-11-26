import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { VFooter, VMainHeader, VMenuBar } from "../../utils";
import VToolsTech from "../../utils/home/toolstech";
import { chevronDown } from "../../assets";
import { profilePicture } from "../../assets";
import styles from "./home.module.scss";
import Head from "next/head";
import techs from "../../utils/techs";

export default function VHome() {
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Tawfiq Khalilieh</title>
        <meta
          name="google-site-verification"
          content="fy6zfD6E-AoN4w1yBFveWzoCyEMDZOhrW8zOR3ufX6E"
        />
      </Head>
      <VMenuBar activeTab="Home" />
      <div className={styles.content}>
        <div className={styles.intro}>
          <div className={styles.introduction}>
            <VMainHeader />
            <div className={styles.profilePicture}>
              <Image alt="Profile picture of Tawfiq Kh." src={profilePicture} />
            </div>
          </div>
          <div className={styles.swipeDownIcon}>
            <a href="#WorkHistory">
              <Image
                alt="Chevron down icon."
                src={chevronDown}
                width="40px"
                height="15px"
              />
            </a>
          </div>
        </div>
        <></>
        <div className={styles.linkBoxes}>
          <div className={styles.workHistoryBackground} />
          <div className={styles.boxesContaier}>
            <div className={styles.linkBox}>
              <Fade>
                <h1 className={styles.linkBoxTitle} id="WorkHistory">
                  Work
                  <br />
                  History
                </h1>
                <h2 className={styles.linkBoxTextContent}>
                  Here, you can learn more about the companies I&apos;ve
                  collaborated with, projects I&apos;ve been part of, and the
                  technologies I use every day.
                </h2>
                <Link href={`/work`}>
                  <a className={styles.linkBoxButton}>
                    Check out my work history
                  </a>
                </Link>
              </Fade>
            </div>

            <div className={styles.linkBox}>
              <Fade>
                <h1 className={styles.linkBoxTitle} id="showcase">
                  Showcase
                </h1>
                <h2 className={styles.linkBoxTextContent}>
                  Here, you can see a couple of the projects I&apos;ve been
                  working on last two years.
                </h2>
                <Link href={`/showcase`}>
                  <a className={styles.linkBoxButton}>Check out my showcase</a>
                </Link>
              </Fade>
            </div>
          </div>
        </div>

        <div className={styles.technologiesAndTools}>
          <Fade>
            <h1>Technologies & Tools I work with</h1>
            <h2 className={styles.tool_tech_header}>
              - Backend : <VToolsTech tech={techs.backend} />
            </h2>
            <h2 className={styles.tool_tech_header}>
              - Frontend : <VToolsTech tech={techs.frontend} />
            </h2>
            <h2 className={styles.tool_tech_header}>
              - Automation : <VToolsTech tech={techs.automation} />
            </h2>
            <h2 className={styles.tool_tech_header}>
              - Tools : <VToolsTech tech={techs.tools} />
            </h2>
          </Fade>
        </div>
      </div>
      <VFooter />
    </div>
  );
}
