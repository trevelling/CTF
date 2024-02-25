"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function YBNCTF() {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };
  return (
    <div className={styles.ybnContainer}>
      <div className={styles.ybnTitle}>
        <a
          href="https://blog.yes-but-no.org/ybn-ctf-2023/ctf"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          YBNCTF ❌
        </a>
        <br />
      </div>
      <div className={styles.ybn}>
        <p>
          We got 8th place! One of the first serious CTFs that I played and
          learnt a lot of new tools from it!
          <br />
          Though, I do not have a write up for this as it was quite some time
          ago 😔.
        </p>
      </div>
      <div
        className={`${styles.ybnCertification} ${isZoomed ? styles.zoomed : ""}`}
        onClick={toggleZoom}
      >
        <Image src="/ybnctf.jpg" width={500} height={350} alt="logo" />
      </div>
    </div>
  );
}
