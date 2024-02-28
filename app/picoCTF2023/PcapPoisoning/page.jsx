"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function PcapPoisoning() {
  const [isZoomed1, setIsZoomed1] = useState(false);
  const [isZoomed2, setIsZoomed2] = useState(false);

  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };

  const toggleZoom2 = () => {
    setIsZoomed2(!isZoomed2);
  };
  return (
    <div className={styles.pcapPoisoningContainer}>
      <div className={styles.pcapPoisoningTitle} style={{ color: "white"}}>
          PcapPoisoning
        <br />
      </div>
      <div className={styles.pcapPoisoningQuestion}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          How about some hide and seek heh? Download this file and find the
          flag.
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILE: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/pico_trace.pcap"
            download
          >
            trace.pcap
          </a>
        </p>
      </div>
      <div className={styles.pcapPoisoningSolved}>
        <p>
          This is a simple forensics challenge. Since there was a <code>pcap</code> file, I used{" "}
          <a
            href="https://www.wireshark.org/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>Wireshark</code>
          </a>{" "}
          to view the packets.
          <br />
          <br />
          We can observe the most common protocol being used by going to{" "}
          <code>Statistics</code> 🡢 <code>Protocol Hierarchy </code>. We can see that the
          most exchanged packets is <code>TCP</code>.
        </p>
      </div>
      <div
        className={`${styles.pcapPoisoningEvidence} ${
          isZoomed1 ? styles.zoomed : ""
        }`}
        onClick={toggleZoom1}
      >
        <Image src="/PcapPoisoning1.png" width={800} height={325} alt="logo" />
      </div>
      <div className={styles.pcapPoisoningSolved}>
        <p>
          Using the filter feature in Wireshark and inputting this filter,{" "}
          <code>tcp contains "pico"</code> we will get the flag located in
          the Hex Dump.
          <br />
          <br />
          Use this{" "}
          <a
            href="https://cdn.comparitech.com/wp-content/uploads/2019/06/Wireshark-Cheat-Sheet-1.jpg.webp"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>Wireshark Cheat Sheet</code>
          </a>
          .
        </p>
      </div>
      <div
        className={`${styles.pcapPoisoningEvidence} ${
          isZoomed2 ? styles.zoomed : ""
        }`}
        onClick={toggleZoom2}
      >
        <Image src="/PcapPoisoning2.png" width={800} height={400} alt="logo" />
      </div>
      <div className={styles.pcapPoisoningFlag}>
        <span>Flag: </span>

        <span style={{ color: "rgb(137, 207, 240)" }}>
          picoCTF{"{P64P_4N4L7S1S_SU55355FUL_f621fa37}"}
        </span>
      </div>
    </div>
  );
}
