"use client";

import React from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function BitsCTF() {
  const router = useRouter();
  const handlePrevious = () => {
    router.push("/HACK@AC")
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    router.push("/HACK@AC/ASCII");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={styles.bitsContainer}>
      <div className={styles.bitsTitle}>
        <a
          href="https://ctf.bitskrieg.org/"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          Bits CTF 👾
        </a>
        <br />
      </div>
      <div className={styles.bits}>
        <p>
          A 2 day CTF hosted by bitskrieg, a cybersecurity club of BITS Pilani
          Goa Campus.
        </p>
      </div>
      <table className={styles.bitsCategories}>
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
                Intro to DFIR
              </a>
            </td>
            <td>Digital Forensics</td>
          </tr>
          <tr>
            <td>
              <a
                href="../bitsCTF/DFIR2"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                Access Granted!
              </a>
            </td>
            <td>Digital Forensics</td>
          </tr>
          <tr>
            <td>
              <a
                href="../bitsCTF/LadyLove"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                LadyLove
              </a>
            </td>
            <td>OSINT</td>
          </tr>
          <tr>
            <td>
              <a
                href="../bitsCTF/babyrev"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                baby-rev
              </a>
            </td>
            <td>Reverse Engineering</td>
          </tr>
          <tr>
            <td>
              <a
                href="../bitsCTF/BabyRSA"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                Baby RSA
              </a>
            </td>
            <td>Cryptography</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.buttonContainer}>
        <button className={styles.button1} onClick={handlePrevious}>
          <div className={styles.buttonPrevious}>Previous</div>
          <div className={styles.buttonText}>HACK@AC 2024</div>
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
