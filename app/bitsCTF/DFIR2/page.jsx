"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function DFIR2() {
  const [isZoomed1, setIsZoomed1] = useState(false);
  const [isZoomed2, setIsZoomed2] = useState(false);

  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };

  const toggleZoom2 = () => {
    setIsZoomed2(!isZoomed2);
  };
  return (
    <div className={styles.dfirContainer}>
      <div className={styles.dfirTitle}>
        <a
          href="https://blog.yes-but-no.org/ybn-ctf-2023/ctf"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          Access Granted!
        </a>
        <br />
      </div>
      <div className={styles.dfirQuestion}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          First things first. MogamBro is so dumb that he might be using the
          same set of passwords everywhere, so lets try cracking his PC's
          password for some luck.
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILES: </strong>
          artifacts.ad1, memdump.mem, trace.pcap
        </p>
      </div>
      <div className={styles.dfirSolved}>
        <p>
          I started the search with the memory dump first. Since we are looking
          for a password, we can use the windows.hashdump plugin in Vol3 to
          extract the NTLM hashes and crack MogamBro's password hash.
        </p>
      </div>
      <div
        className={`${styles.dfirEvidence} ${
          isZoomed1 ? styles.zoomed : ""
        }`}
        onClick={toggleZoom1}
      >
        <Image src="/DFIR2.png" width={750} height={250} alt="logo" />
      </div>
      <div className={styles.dfirSolved}>
        <p>
          Taking a look at <strong>MogamBro</strong>, we can put the hash inside
          a{" "}
          <a
            href="https://crackstation.net/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            password hash cracker
          </a>
          .
        </p>
      </div>
      <div
        className={`${styles.dfirEvidence} ${
          isZoomed2 ? styles.zoomed : ""
        }`}
        onClick={toggleZoom2}
      >
        <Image src="/DFIR3.png" width={750} height={320} alt="logo" />
      </div>
      <div className={styles.dfirFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          BITSCTF{"{adolfhitlerrulesallthepeople}"}
        </span>
      </div>
    </div>
  );
}
