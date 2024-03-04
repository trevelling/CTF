"use client";

import React from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function HACKAC() {
  const router = useRouter();
  const handlePrevious = () => {
    router.push("/tools")
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    router.push("/HACK@AC/ASCII");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={styles.brainHackContainer}>
      <div className={styles.brainHackTitle}>
        <a
          href="https://www.dsta.gov.sg/brainhack"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          BrainHack CDDC 🛡️
        </a>
        <br />
      </div>
      <div className={styles.brainHack}>
        <p>
          Hosted by DSTA, it is a 30 hour qualifier with a 2 day final
          cybersecurity competition.
        </p>
      </div>
      <table className={styles.brainHackCategories}>
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
          <div className={styles.buttonText}>Tools</div>
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

