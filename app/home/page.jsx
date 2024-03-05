"use client";

import React from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  const handlePrevious = () => {
    router.push("https://trevelling.github.io/tev/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    router.push("/tools");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.aboutContainer}> 
      <div className={styles.introtitle} style={{ color: "white" }}>
          Tev's CTF Writeups 🏴
      </div>
      <div className={styles.introtext} style={{paddingLeft: "16px"}}>
      Here you can find writeups from various CTFs that I've participated in.
      </div>
      <div className={styles.intro} style={{ color: "white" }} >
          ~# man CTFs
      </div>
      <div className={styles.introtext} style={{paddingLeft: "16px"}}>
      In case you don't know what CTFs are, here's a nice definition: 
      </div>
      <div className={styles.aboutCTF} >
          A capture the flag (CTF) contest is a special kind of cybersecurity
          competition designed to challenge its participants to solve computer
          security problems and/or capture and defend computer systems.
      </div>
      <div className={styles.intro}>
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
            <td>Jeporady (Individual)</td>
            <td>&lt; 5%</td>
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
            <td>Jeporady (Individual)</td>
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
      <div className={styles.intro}>
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
                href="/picoCTF2024"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                picoCTF
              </a>
            </td>
            <td>Jeporady (Individual)</td>
            <td>&lt; 5%</td>
          </tr>
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
      <div className={styles.intro} style={{ color: "white" }}>
        ~# cat LICENSE
      </div>
      <div className={styles.license}>
        <p>All original code is licensed under the MIT license.</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button1} onClick={handlePrevious}>
          <div className={styles.buttonPrevious}>Previous</div>
          <div className={styles.buttonText}>Personal Website</div>
          <span className={styles.arrow}></span>
        </button>
        <button className={styles.button2} onClick={handleNext}>
          <div className={styles.buttonNext}>Next</div>
          <div className={styles.buttonText}>Tools</div>
          <span className={styles.arrow}></span>
        </button>
      </div>
      <div className={styles.line}></div>
      <footer className={styles.footer}>    
          &copy; 2024 Tev
      </footer>
    </div>
  );
}


export default About;


