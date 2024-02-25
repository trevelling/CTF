"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function Stream() {
  const [isZoomed1, setIsZoomed1] = useState(false);
  const [isZoomed2, setIsZoomed2] = useState(false);

  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };

  const toggleZoom2 = () => {
    setIsZoomed2(!isZoomed2);
  };
  return (
    <div className={styles.streamContainer}>
      <div className={styles.streamTitle}>
        <a
          href="https://blog.yes-but-no.org/ybn-ctf-2023/ctf"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          Stream of Consciousness
        </a>
        <br />
      </div>
      <div className={styles.oopQuestion}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          The flag lies somewhere in my stream of consciousness.
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILES: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/stream_stream.pcap"
            download
          >
            stream.pcap
          </a>
          <br />
          <br />
        </p>
      </div>
      <div className={styles.oopSolved}>
        <p>
          Another simple forensics challenge using{" "}
          <a
            href="https://www.wireshark.org/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            Wireshark
          </a>
          {" "}which I used to view the packets. Immediately the first packet in the hex dump I saw an encoded message.
          This was recognisable through the "<strong>=</strong>" sign at the back, it was encoded with{" "}
          <a
            href="https://en.wikipedia.org/wiki/Base64"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
           base64
          </a>
          .
        </p>
      </div>
      <div
        className={`${styles.oopEvidence} ${isZoomed1 ? styles.zoomed : ""}`}
        onClick={toggleZoom1}
      >
        <Image src="/stream1.png" width={800} height={500} alt="logo" />
      </div>
      
      <div className={styles.oopSolved}>
        <p>
        I took the encoded text as put it through a{" "}
        <a
            href="https://www.base64decode.org/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
           base64 decoder
          </a>
          .
        </p>
      </div>
      <div
        className={`${styles.oopEvidence} ${isZoomed2 ? styles.zoomed : ""}`}
        onClick={toggleZoom2}
      >
        <Image src="/stream2.png" width={800} height={400} alt="logo" />
      </div>
      <div className={styles.oopFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          ACSI{"{str34m_0f_th0ugh+}"}
        </span>
      </div>
    </div>
  );
}
