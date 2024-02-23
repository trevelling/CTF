import React from "react";
import styles from "./page.module.css";

export default function PicoCTF() {
  return (
    <div className={styles.pico2023Container}>
      <div className={styles.pico2023Title}>
        <a
          href="https://play.picoctf.org/practice?originalEvent=72&page=1"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          PICO CTF 🚩
        </a>
        <br />
      </div>
      <div className={styles.pico2023}>
        <p>playing to learn and improve my skills 😃!</p>
      </div>
      <table className={styles.pico2023Categories}>
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
                href="../picoCTF2023/moneyware"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                money-ware
              </a>
            </td>
            <td>OSINT</td>
          </tr>

          <tr>
            <td>
              <a
                href="../picoCTF2023/PcapPoisoning"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                PcapPoisoning
              </a>
            </td>
            <td>Forensics</td>
          </tr>
        </tbody>
      </table>

      {/*
        <div className={styles.--Certification}>
            <Image
            src="/ybnctf.jpg"
            width={400}
            height={200}
            alt="logo"
            />
        </div>
        */}
    </div>
  );
}
