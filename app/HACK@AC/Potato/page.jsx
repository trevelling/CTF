"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function Potato() {
  const [isZoomed1, setIsZoomed1] = useState(false);
  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };
  return (
    <div className={styles.potatoContainer}>
      <div className={styles.potatoTitle}>
        <a
          href="https://blog.yes-but-no.org/ybn-ctf-2023/ctf"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          Potato
        </a>
        <br />
      </div>
      <div className={styles.potatoQuestion}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          i encrypted this with a potato
          <br />
          <br />
          wrap the cracked plaintext with ASCI{}
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILE: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/potato_enc.pcap"
            download
          >
            enc
          </a>
          <br />
          <br />
        </p>
      </div>
      <div className={styles.potatoSolved}>
        <p>
          This was a very simple cryptography challenge. The <strong>enc</strong> file given to us was just cipher text that needed to be decrypted.
          <br />
          <br />
          The cipher text was not only 40 characters long but one of the most common encryption that is not secure/broken is{" "}
          <a
            href="https://en.wikipedia.org/wiki/SHA-1"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            SHA-1
          </a>
          . We can use a{" "}
          <a
            href="https://md5decrypt.net/en/Sha1/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            SHA-1 decoder
          </a>
          {" "}to decrypt the cipher text to obtain the flag.
        </p>
      </div>
      <div
        className={`${styles.potatoEvidence} ${isZoomed1 ? styles.zoomed : ""}`}
        onClick={toggleZoom1}
      >
        <Image src="/potato1.png" width={800} height={500} alt="logo" />
      </div>
      
      <div className={styles.potatoFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          ACSI{"{pandas}"}
        </span>
      </div>
    </div>
  );
}
