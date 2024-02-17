import React from "react";
import styles from "./info.module.css";

export default function Info() {
  return (
    <footer>
      <a className={styles.info} href="https://github.com/trevelling" target="_blank" rel="noopener noreferrer" >
      &copy; {new Date().getFullYear()} made w 💕 by tev 
      </a>
    </footer>
  );
}