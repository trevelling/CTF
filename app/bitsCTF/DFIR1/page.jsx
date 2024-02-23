import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function DFIR1() {
  return (
    <div className={styles.dfirContainer}>
      <div className={styles.dfirTitle}>
        <a
          href="https://blog.yes-but-no.org/ybn-ctf-2023/ctf"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          Intro to DFIR
        </a>
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
          The authors provided us a memory dump, AD1 image and a pcap file for
          further analysis. The flag is given directly in the challenge
          description.
        </p>
      </div>
      <div className={styles.dfirEvidence}>
        <Image src="/DFIR1.png" width={700} height={250} alt="picture" />
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
