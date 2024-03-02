"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function Moneyware() {
  const [isZoomed1, setIsZoomed1] = useState(false);

  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };
  return (
    <div className={styles.moneywareContainer}>
      <div className={styles.moneywareTitle} style={{ color: "white"}}>
          money-ware
        <br />
      </div>
      <div className={styles.moneywareQuestion}>
        <p>
          <strong className={styles.command} style={{ color: "rgb(255, 255, 255)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          The first letter of the malware name should be capitalized and the
          rest lowercase.
          <br />
          <br /> Your friend just got hacked and has been asked to pay some
          bitcoins to 1Mz7153HMuxXTuR2R1t78mGSdzaAtNbBWX. He doesn’t seem to
          understand what is going on and asks you for advice. Can you identify
          what malware he’s being a victim of?
        </p>
      </div>
      <div className={styles.moneywareSolved}>
        <p>
          The question gave us a clue about bitcoins and the title of the
          challenge name money-<code>ware</code><br /> Googling{" "}
          <code>1Mz7153HMuxXTuR2R1t78mGSdzaAtNbBWX</code> bring us to{" "}
          <a
            href="https://www.cnbc.com/2017/06/28/ransomware-cyberattack-petya-bitcoin-payment.html"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>this website</code>
          </a>
          .<br />
          <br /> Looking for a malware-type, we can see that it is{" "}
          <code>petya</code>
        </p>
      </div>
      <div
        className={`${styles.moneywareEvidence} ${
          isZoomed1 ? styles.zoomed : ""
        }`}
        onClick={toggleZoom1}
      >
        <Image src="/pico2023/moneyware.png" width={500} height={80} alt="logo" className={styles.moenywareImage} />
      </div>
      <div className={styles.moneywareFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>picoCTF{"{Petya}"}</span>
      </div>
    </div>
  );
}
