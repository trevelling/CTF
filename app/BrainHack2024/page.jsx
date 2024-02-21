import React from "react";
import styles from "./page.module.css";

export default function HACKAC() {
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
        <p>Hosted by DSTA, it is a 30 hour qualifier with a 2 day final cybersecurity competition.</p>
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
    </div>
  );
}