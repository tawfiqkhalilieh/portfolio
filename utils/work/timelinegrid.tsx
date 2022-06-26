import Image from 'next/image'
import {
  usLogo,
  altooroLogo,
  discordLogo,
  discord_avatar,
} from '../../assets'
import { getDate } from '../date'
import styles from './timelinegrid.module.scss'

export function VTimelineGrid() {
  return (
    <div className={styles.timelineGrid}>
      <div className={styles.timelineGridItemWide}>
        <h1>2018</h1>
        <div className={styles.timelinePoint}/>
      </div>
      <div className={styles.timelineGridItemCard}>
        <h2 className={styles.hoverTip}>
          Hover to zoom.
        </h2>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
              <Image
                alt="Loop logo."
                src={usLogo}
                height={50}
                width={50}/>
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}><a href='https://www.loop.org.il/'>Loop</a></h1>
              <h2 className={styles.cardContentDetails}><a href='https://www.google.com/maps/d/u/0/embed?mid=1GeJgZmyu_rQZIAZl0bD6o7QFzcY&ll=41.878208750464474%2C-87.62698259999999&z=20'>Loop Campus</a></h2>
              <h2 className={styles.cardContentDetails}>10.2018 - {getDate()}</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Loop:<br/><br/>
            1st Year: Some HTML and Basic of c# Programming Language.<br/><br/>
            2nd Year: Operating Systems, Computer Networks and got more advanced in c# and bash.<br/><br/>
            3nd Year: Mentoring as a Looper Mentor.
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItemWide}>
        <h1>3.2020 - 5.2021</h1>
        <h2>Working as a freelancer</h2>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItemCard}>
      <div className={styles.cardContent}>
        <div className={styles.cardContentHeader}>
              <Image
                alt="discord freelancer"
                src={discordLogo}
                height={2}
                width={45}/>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}><a href='/'>freelancing</a></h1>
              <h2 className={styles.cardContentDetails}> </h2>
              <h2 className={styles.cardContentDetails}>08.2020 - 10.2020</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Building discord bots & websites, for small medium size discord servers.<br/>
            <br/>
            Main responsibilities:<br/>
            - designing the frontend,<br/>
            - creating discord bots,<br/>
            <br/>
            Languages: <b><a href='https://discord.js.org/#/'>discord.js</a></b>, <b><a href='https://discordpy.readthedocs.io/en/stable/'>discord.py</a></b>.<br/>
            Styling: <b> HTML + CSS (bootstrap) </b>.<br/>
            Version Control System: <b><a href='https://github.com'>GitHub</a>.</b><br/>
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItemWide}>
        <h1>11.2021</h1>
        <h2>Working & learning Backend Web Development at Altooro</h2>
      </div>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItemCard}>
      <div className={styles.cardContent}>
        <div className={styles.cardContentHeader}>
          <div className={styles.companyLogo}>

              <Image
                alt="Altooro logo."
                src={altooroLogo}
                height={50}
                width={50}/>
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}><a href="https://altooro.com">Altooro</a></h1>
              <h2 className={styles.cardContentDetails}>Haifa</h2>
              <h2 className={styles.cardContentDetails}>11.2021 - {getDate()}</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Building Backend , API's, web servers and do some automation and testing.<br/>
            <br/>
            Main responsibilities:<br/>
            - Building <b>Backend APIs</b> and web servers.<br/>
            - setting up server with <b>database</b>.
            <br/>
            Languages and FrameWorks: <b><a href='https://www.python.org/'>Python</a></b> , <b><a href='https://www.javascript.com/'>JavaScript</a></b> , <b><a href='https://fastapi.tiangolo.com/'>FastAPI</a></b> , <b><a href='https://expressjs.com/'>express.js</a> <b> , <a href='https://www.cypress.io/'>cypress</a></b> </b> and<b> <a href='https://www.docker.com/'>Docker</a></b>  .<br/>
            Database: <b><a href='https://aws.amazon.com/dynamodb/?trk=a7cabc8b-ddad-4be2-9025-9779fd9ebec6&sc_channel=ps&sc_campaign=acquisition&sc_medium=ACQ-P|PS-GO|Brand|Desktop|SU|Database|DynamoDB|IL|EN|Text&s_kwcid=AL!4422!3!494855355025!e!!g!!dynamodb&ef_id=CjwKCAjwu_mSBhAYEiwA5BBmfy6rfAo3DQRWdurIywYoYG690AmYktKU9pEZv1_VqRTKf7QnojwVBRoCDnAQAvD_BwE:G:s&s_kwcid=AL!4422!3!494855355025!e!!g!!dynamodb'>Dynamodb</a> and <a href="https://redis.io/">redis</a></b>.<br/>
            Version Control System: <b><a href='https://github.com'>GitHub</a>.</b><br/>
          </p>
        </div>
      </div>

      <div className={styles.timelineGridItemAdjoiningCard}/>

      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItemWide}>
        <div className={styles.timelinePoint}/>
        <h1>{getDate()}</h1>
      </div>
    </div>
  )
}