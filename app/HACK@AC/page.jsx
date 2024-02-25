"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function HACKAC() {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className={styles.acsContainer}>
      <div className={styles.acsTitle}>
        <a
          href="https://8059blank.github.io/hackac/HACK@AC-Information"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          HACK@AC 🦅
        </a>
        <br />
      </div>
      <div className={styles.acs}>
        <p>
          Hosted by ACS(I), it is a 12 hour cybersecurity competition designed
          for beginners to enter the realm of cybersecurity.
          <br /><br />
          Due to time constraints, we weren't able to play the full 12 hours.
        </p>
      </div>
      <table className={styles.acsCategories}>
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
                href="../HACK@AC/ASCII"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                ASCII Me Anything 
              </a>
            </td>
            <td>Reverse Engineering</td>
          </tr>
          <tr>
            <td>
              <a
                href="../HACK@AC/VVS"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                Very Vulnerable Site
              </a>
            </td>
            <td>Web Exploitation</td>
          </tr>
          <tr>
            <td>
              <a
                href="../HACK@AC/Grass"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                Grass is Greener
              </a>
            </td>
            <td>Forensics</td>
          </tr>
          <tr>
            <td>
              <a
                href="../HACK@AC/OOP"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                Object Oritentated Programming
              </a>
            </td>
            <td>Forensics</td>
          </tr>
          <tr>
            <td>
              <a
                href="../HACK@AC/Stream"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                Stream of Consciousness
              </a>
            </td>
            <td>Forensics</td>
          </tr>
          <tr>
            <td>
              <a
                href="../HACK@AC/RSA"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
               RandomlySelectedAlgorithm
              </a>
            </td>
            <td>Cryptography</td>
          </tr>
          <tr>
            <td>
              <a
                href="../HACK@AC/Potato"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
               Potato
              </a>
            </td>
            <td>Cryptography</td>
          </tr>
        </tbody>
      </table>
      <div
        className={`${styles.acsCertification} ${isZoomed ? styles.zoomed : ""}`}
        onClick={toggleZoom}
      >
        <Image src="/acsctf.png" width={650} height={350} alt="logo" />
      </div>
    </div>
  );
}
