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
        <p>Playing for fun to learn and improve my skills 😃!</p>
        <p></p>
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
          <tr>
            <td>
              <a
                href="../picoCTF2023/hideme"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                hideme
              </a>
            </td>
            <td>Forensics</td>
          </tr>

          <tr>
            <td>
              <a
                href="../picoCTF2023/HideToSee"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                HideToSee
              </a>
            </td>
            <td>Steganography</td>
          </tr>

          <tr>
            <td>
              <a
                href="../picoCTF2023/rotation"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                rotation
              </a>
            </td>
            <td>Cryptography</td>
          </tr>
          <tr>
            <td>
              <a
                href="../picoCTF2023/Reverse"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                Reverse
              </a>
            </td>
            <td>Reverse Engineering</td>
          </tr>
          <tr>
            <td>
              <a
                href="../picoCTF2023/SafeOpener2"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                Safe Opener 2
              </a>
            </td>
            <td>Reverse Engineering</td>
          </tr>

          <tr>
            <td>
              <a
                href="../picoCTF2023/timer"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                timer
              </a>
            </td>
            <td>Reverse Engineering</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
