import React from "react";
import styles from "./info.module.css";

export default function Info() {
  return (
    <a className={styles.info} href="https://github.com/trevelling" target="_blank" rel="noopener noreferrer" >
      made w 💕 by tev | last updated: 16/2/2024
    </a>
  );
}