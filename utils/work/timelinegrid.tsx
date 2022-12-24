import Image from "next/image";
import { usLogo, altooroLogo, discordLogo } from "../../assets";
import { getDate } from "../date";
import styles from "./timelinegrid.module.scss";

export function VTimelineGrid() {
  return (
    <div className={styles.timelineGrid}>
      <div className={styles.timelineGridItemWide}>
        <h1>2018</h1>
        <div className={styles.timelinePoint} />
      </div>
      <div className={styles.timelineGridItemCard}>
        <h2 className={styles.hoverTip}>Hover to zoom.</h2>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
              <Image alt="Loop logo." src={usLogo} height={50} width={50} />
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>
                <a href="https://www.loop.org.il/">Loop</a>
              </h1>
              <h2 className={styles.cardContentDetails}>
                <a href="https://www.google.com/maps/d/u/0/embed?mid=1GeJgZmyu_rQZIAZl0bD6o7QFzcY&ll=41.878208750464474%2C-87.62698259999999&z=20">
                  Loop Campus
                </a>
              </h2>
              <h2 className={styles.cardContentDetails}>
                10.2018 - {getDate()}
              </h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Loop:
            <br />
            <br />
            1st Year: Some HTML and Basic of c# Programming Language.
            <br />
            <br />
            2nd Year: Operating Systems, Computer Networks and got more advanced
            in c# and bash.
            <br />
            <br />
            3nd Year: Mentoring as a Looper Mentor.
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItemWide}>
        <h1>3.2020 - 5.2021</h1>
        <h2>Working as a freelancer</h2>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <Image
              alt="discord freelancer"
              src={discordLogo}
              height={2}
              width={45}
            />
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>
                <a href={"/"}> freelancing</a>
              </h1>
              <h2 className={styles.cardContentDetails}> </h2>
              <h2 className={styles.cardContentDetails}>08.2020 - 10.2020</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Building discord bots & websites, for small medium size discord
            servers.
            <br />
            <br />
            Main responsibilities:
            <br />
            - designing the frontend,
            <br />- creating discord bots,
            <br />- manage the server activities
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItemWide}>
        <h1>11.2021</h1>
        <h2>Working & learning Backend Web Development at Altooro</h2>
      </div>
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
              <Image
                alt="Altooro logo."
                src={altooroLogo}
                height={50}
                width={50}
              />
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>
                <a href="https://altooro.com">Altooro</a>
              </h1>
              <h2 className={styles.cardContentDetails}>Haifa</h2>
              <h2 className={styles.cardContentDetails}>
                11.2021 - {getDate()}
              </h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Building Backend , API(s), web servers and do some automation and
            testing.
            <br />
            <br />
            Main responsibilities:
            <br />- Building <b>Backend APIs</b> and web servers.
            <br />- setting up server with <b>database</b>.
            <br />- managing data migrating data
          </p>
        </div>
      </div>

      <div className={styles.timelineGridItemAdjoiningCard} />

      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItemWide}>
        <div className={styles.timelinePoint} />
        <h1>{getDate()}</h1>
      </div>
    </div>
  );
}
