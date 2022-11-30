import Head from "next/head";
import { useTypedText, VMenuBar, VFooter } from "../../utils";
import styles from "./404.module.scss";
export function VMainHeader() {
  return (
    <div className={styles.aboutInfo}>
      <h2 className={styles.animated404}>
        {useTypedText("I don't think you're on the right page.", 30, 350)}
        <br /> <br />
        {useTypedText("Nothing will make you impressed here 😅", 30, 500)}
      </h2>
    </div>
  );
}

export default function Custom404() {
  return (
    <div className={styles.Container}>
      <Head>
        <title>Page Not Found</title>
        <VMenuBar activeTab={undefined} />
      </Head>
      <div className={styles.content}>
        <div className={styles.intro}>
          <div className={styles.introduction}>
            <VMainHeader />
          </div>
        </div>
      </div>
    </div>
  );
}
