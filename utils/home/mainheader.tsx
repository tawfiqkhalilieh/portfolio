import React from "react";
import styles from "./mainheader.module.scss";
import { useTypedText } from "../typingtext";

export function VMainHeader() {
  return (
    <div className={styles.aboutInfo}>
      <h1 className={styles.header}>
        {useTypedText("Hello everyone!", 50)}
        <br />
        {useTypedText("I'm Tawfiq Khalilieh.", 50, 200)}
      </h1>
      <h2>
        {useTypedText(
          "Welcome to my portfolio page! I'm a Full-Stack Developer and automation lover, currently working as a software development intern at Altooro.",
          30,
          350
        )}
      </h2>
    </div>
  );
}
