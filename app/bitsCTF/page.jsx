import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function Tools() {
  return (
    <div className={styles.pico2023Container}>
      <div className={styles.pico2023Title}>
        <a
          href="https://ctf.bitskrieg.org/"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          Bits CTF 
        </a>
        <br />
      </div>
      <div className={styles.pico2023}>
        <p>hosted by bitskrieg, a cybersecurity club of BITS Pilani Goa Campus 👾!</p>
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
                --------
              </a>
            </td>
            <td>----</td>
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