"use client";

import React, { useState, useEffect } from "react";
import Preloader from "@/app/ui/preloader";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <nav className={styles.navbar}>
      {loading && <Preloader />}
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

