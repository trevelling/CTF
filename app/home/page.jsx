"use client";

import React from "react";
import styles from "./page.module.css";

const About = () => {

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.CTFheader}>
        <span aria-hidden="true">CTF </span>
        <span>CTF </span>
        <span aria-hidden="true">CTF</span>
      </div>
      <div className={styles.about}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>
            {" "}
            ~# cat Introduction
          </strong>
          <br />
        </p>
        <p>
          Hi! i'm Tev, a CTF player 🚩 in SG!
          <br />
        </p>
        <p>
          A blog documenting writeup's and tools of various ctf's I
          participate in 🙂!
          <br />
          <br />
        </p>
      </div>
      <div className={styles.aboutCTF}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# man CTFs</strong>
          <br />
        </p>
        <p>
          A capture the flag (CTF) contest is a special kind of cybersecurity
          competition designed to challenge its participants to solve computer
          security problems and/or capture and defend computer systems.
        </p>
      </div>
      <div className={styles.date2023}>
        ~# ls -la 2023
      </div>
      <table className={styles.table2023}>
        <thead>
          <tr>
            <th>CTF Name</th>
            <th>Type</th>
            <th>Ranking</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a
                href="/picoCTF2023"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                picoCTF 
              </a>
            </td>
            <td>Jeporady</td>
            <td>🏆 NIL points</td>
          </tr>
          <tr>
            <td>       
                BrainHack CDDC
            </td>
            <td>Jeporady</td>
            <td>19th (poly-category)</td>
          </tr>
          <tr>
            <td>  
                TISC             
            </td>
            <td>Jeporady</td>
            <td>Level 2</td>
          </tr>
          <tr>
            <td>
              <a
                href="/ybnCTF"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                YBN
              </a>
            </td>
            <td>Jeporady</td>
            <td>8th</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.date2024}>
        ~# ls -la 2024
      </div>
      <table className={styles.table2024}>
        <thead>
          <tr>
            <th>CTF Name</th>
            <th>Type</th>
            <th>Ranking</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a
                href="/bitsCTF"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                Bits CTF
              </a>
            </td>
            <td>Jeporady</td>
            <td>Participant</td>
          </tr>
          <tr>
            <td>
              <a
                href="/HACK@AC"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                HACK@AC
              </a>
            </td>
            <td>Jeporady</td>
            <td>30th</td>
          </tr>
          <tr>
            <td>
                Pearl CTF
            </td>
            <td>Jeporady</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
                HACKBASH x A.YCEP
            </td>
            <td>Jeporady</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
                Lag and Crash
            </td>
            <td>Jeporady</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
                BrainHack CDDC
            </td>
            <td>Jeporady</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.license}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat LICENSE</strong>
          <br />
        </p>
        <p>All original code is licensed under the MIT license.</p>
      </div>
      <footer className={styles.footer}>    
          &copy; 2024 Tev
      </footer>
    </div>
  );
};

export default About;


