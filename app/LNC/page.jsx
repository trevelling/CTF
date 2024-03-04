"use client";

import React from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function LNC() {
  const router = useRouter();
  const handlePrevious = () => {
    router.push("/BrainHack2024")
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    router.push("/HACK@AC/ASCII");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={styles.lncContainer}>
      <div className={styles.lncTitle}>
        <a
          href="https://8059blank.github.io/hackac/HACK@AC-Information"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          Lag and Crash 💥
        </a>
        <br />
      </div>
      <div className={styles.lnc}>
        <p>
          Lag and Crash is an inter-polytechnic 2 day CTF targeted at
          Polytechnic, Institute of Technical Education and Junior College
          students. The event is organised between the Polytechnic Cybersecurity
          Interest Groups.
        </p>
      </div>
      <table className={styles.lncCategories}>
        <thead>
          <tr>
            <th>Challenge Name</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a
                href="../bitsCTF/DFIR1"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                ----
              </a>
            </td>
            <td>Digital Forensics</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.buttonContainer}>
        <button className={styles.button1} onClick={handlePrevious}>
          <div className={styles.buttonPrevious}>Previous</div>
          <div className={styles.buttonText}>BrainHack CDDC 2024</div>
          <span className={styles.arrow}></span>
        </button>
        <button className={styles.button2} onClick={handleNext}>
          <div className={styles.buttonNext}>Next</div>
          <div className={styles.buttonText}>ASCII Me Anything</div>
          <span className={styles.arrow}></span>
        </button>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}
