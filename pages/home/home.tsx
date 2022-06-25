import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Fade } from "react-awesome-reveal"
import {
  VFooter,
  VMainHeader,
  VMenuBar,
  VToolsTech
} from '../../utils'
import {
  chevronDown,
} from '../../assets'

import { profilePicture } from '../../assets'
import styles from './home.module.scss'

export default function VHome() {
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Tawfiq Khalilieh</title>
        <link rel="icon" href="{profilePicture}" />
      </Head>
      <VMenuBar activeTab="Home"/>
      <div className={styles.content}>
        <div className={styles.intro}>
          <div className={styles.introduction}>
            <VMainHeader/>
            <div className={styles.profilePicture}>
              <Image
                alt="Profile picture of Tawfiq Kh."
                src={profilePicture}/>
            </div>
          </div>
          <div className={styles.swipeDownIcon}>
            <Image
              alt="Chevron down icon."
              src={chevronDown}
              width="40px"
              height="15px"/>
          </div>
        </div>
        <div className={styles.workHistory}>
          <div className={styles.linkBox}>
            <Fade>
              <h1 className={styles.linkBoxTitle}>Work<br/>History</h1>
              <h2 className={styles.linkBoxTextContent}>
                Here, you can learn more about the companies I&apos;ve collaborated with, projects I&apos;ve been part of, and the technologies I use every day.</h2>
              <Link href={`/work`}>
                <a className={styles.linkBoxButton}>
                  Check out my work history
                </a>
              </Link>
            </Fade>
          </div>
          <div className={styles.workHistoryBackground}/>
        </div>
        <div className={styles.technologiesAndTools}>
          <Fade>
            <h1>Technologies & Tools I work with</h1>
            <VToolsTech/>
          </Fade>
        </div>
      </div>
      <VFooter/>
    </div>
  )
}