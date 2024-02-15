import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.navitem} href="/">
        About
      </Link>
    </nav>
  );
}