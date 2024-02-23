import React from "react";
import styles from "./page.module.css";

export default function HACKAC() {
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
    </div>
  );
}
