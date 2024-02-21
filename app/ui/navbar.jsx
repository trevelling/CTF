import React from "react";
import Image from "next/image";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.sideBarTop}>
        <p className={styles.sideBarLogoName}>👨‍💻 CTFs</p>
      </div>
      <a className={styles.navitem} href="https://trevelling.github.io/tev/">
        Portfolio Website
      </a>
    </nav>
  );
}