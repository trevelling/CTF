"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function Reverse() {
  const [isZoomed1, setIsZoomed1] = useState(false);
  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };
  return (
    <div className={styles.reverseContainer}>
      <div className={styles.reverseTitle}>
        <a
          href="https://blog.yes-but-no.org/ybn-ctf-2023/ctf"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          Reverse
        </a>
        <br />
      </div>
      <div className={styles.reverseQuestion}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          Try reversing this file? Can ya? I forgot the password to this file.
          Please find it for me?
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILE: </strong>
          ret.elf
        </p>
      </div>
      <div className={styles.reverseSolved}>
        <p>
          This challenge involved a straightforward reverse engineering task.
          Upon opening the ELF file, it displayed numerous unreadable symbols.
          Thus, I utilized <strong>strings</strong> on the file to extract
          readable strings and <strong>grep</strong> to search for the string
          <strong>"pico"</strong> within the extracted strings, which got me the
          flag.
        </p>
      </div>
      <div
        className={`${styles.reverseEvidence} ${
          isZoomed1 ? styles.zoomed : ""
        }`}
        onClick={toggleZoom1}
      >
        <Image src="/reverse.png" width={800} height={305} alt="logo" />
      </div>
      <div className={styles.reverseFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          picoCTF{"{3lf_r4v4r5ing_succe55ful_1de05085}"}
        </span>
      </div>
    </div>
  );
}
