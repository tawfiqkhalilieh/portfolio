import styles from "./showcase.module.scss";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
interface cardInfo {
  url: string;
  header: string;
  paragraph: string;
  img: any;
  alt: string;
}

const Card: React.FC<cardInfo> = ({ url, header, paragraph, img, alt }) => {
  return (
    <Fade>
      <div
        className={styles.cardContent}
        onClick={() => (window.location.href = url)}
      >
        <div className={styles.cardContentHeader}>
          <b>{header}</b>
        </div>
        <p className={styles.cardContentDescription}>{paragraph}</p>
        <Image
          src={img}
          className={styles.image}
          alt={alt}
          height="250px"
          width="500px"
        />
      </div>
    </Fade>
  );
};

export default Card;
