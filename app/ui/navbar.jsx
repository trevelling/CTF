import React from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.sideBarTop}>
        <span className={styles.sideBarLogo}>👨‍💻</span>
        <span className={styles.sideBarLogoName}>CTFs</span>
      </div>
      <div className={styles.navLinks}>
        <a
          className={styles.navitem}
          href="https://trevelling.github.io/tev/"
          target="blank"
        >
          Home
        </a>
        <a
          className={styles.navitem}
          href="https://github.com/trevelling"
          target="blank"
        >
          Github 😺
        </a>
      </div>
    </nav>
  );
}

