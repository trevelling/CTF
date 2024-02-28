"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function DFIR1() {
  const [isZoomed1, setIsZoomed1] = useState(false);
  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };
  return (
    <div className={styles.dfirContainer}>
      <div className={styles.dfirTitle} style={{ color: "white"}}>
          Intro to DFIR
        <br />
      </div>
      <div className={styles.dfirQuestion}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          DFIR or Digital Forensics and Incident Response is a field within
          cybersecurity that focuses on the identification, investigation, and
          remediation of cyberattacks. Here are the types of analysis you can
          expect throughout these sequence of challenges!
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILES: </strong>
          artifacts.ad1, memdump.mem, trace.pcap
        </p>
      </div>
      <div className={styles.dfirSolved}>
        <p>
          The authors provided us with a <code>memory dump</code>, <code>AD1 image</code> and a <code>pcap</code> file
          for further analysis. The flag is given directly in the challenge
          description.
        </p>
      </div>
      <div
        className={`${styles.dfirEvidence} ${isZoomed1 ? styles.zoomed : ""}`}
        onClick={toggleZoom1}
      >
        <Image src="/DFIR1.png" width={700} height={255} alt="logo" />
      </div>
      <div className={styles.dfirFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          BITSCTF{"{DFIR_r0ck55}"}
        </span>
      </div>
    </div>
  );
}
