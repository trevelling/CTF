"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function Hideme() {
  const [isZoomed1, setIsZoomed1] = useState(false);
  const [isZoomed2, setIsZoomed2] = useState(false);
  const [isZoomed3, setIsZoomed3] = useState(false);

  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };

  const toggleZoom2 = () => {
    setIsZoomed2(!isZoomed2);
  };
  const toggleZoom3 = () => {
    setIsZoomed3(!isZoomed3);
  };
  return (
    <div className={styles.hideMeContainer}>
      <div className={styles.hideMeTitle}>
        <a
          href="https://blog.yes-but-no.org/ybn-ctf-2023/ctf"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          hideme
        </a>
        <br />
      </div>
      <div className={styles.hideMeQuestion}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          Every file gets a flag. The SOC analyst saw one image been sent back
          and forth between two people. They decided to investigate and found
          out that there was more than what meets the eye here.
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILE: </strong>
          flag.png
        </p>
      </div>
      <div className={styles.hideMeSolved}>
        <p>
          Since this file was a png file, I used{" "}
          <a
            href="https://exiftool.org/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            exiftool
          </a>{" "}
          to carve out any other files that are hidden. Using the{" "}
          <strong>-e</strong> to extract, low nad behold we have extracted
          different hidden files.
        </p>
      </div>
      <div
        className={`${styles.hideMeEvidence} ${
          isZoomed1 ? styles.zoomed : ""
        }`}
        onClick={toggleZoom1}
      >
        <Image src="/hideme1.png" width={800} height={300} alt="logo" />
      </div>
      <div className={styles.hideMeSolved}>
        <p>
          Upon extracting I got <strong>_flag.png.extracted</strong>, and
          discovered a <strong>secret</strong> directory in it. The{" "}
          <strong>secret</strong> directory contains yet another intriguing file{" "}
          <strong>flag.png</strong>.
        </p>
      </div>
      <div
        className={`${styles.hideMeEvidence} ${
          isZoomed2 ? styles.zoomed : ""
        }`}
        onClick={toggleZoom2}
      >
        <Image src="/hideme2.png" width={800} height={260} alt="logo" />
      </div>
      <div className={styles.hideMeSolved}>
        <p>
          To see what is inside <strong>flag.png</strong>, we can use{" "}
          <a
            href="https://help.gnome.org/users/eog/stable/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            eog
          </a>
          , an image viewer to view the <strong>flag.png</strong>. This will
          give us the flag.
        </p>
      </div>
      <div
        className={`${styles.hideMeEvidence} ${
          isZoomed3 ? styles.zoomed : ""
        }`}
        onClick={toggleZoom3}
      >
        <Image src="/hideme3.png" width={800} height={320} alt="logo" />
      </div>
      <div className={styles.hideMeFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          picoCTF{"{Hiddinng_An_imag3_within_@n_ima9e_96539bea}"}
        </span>
      </div>
    </div>
  );
}
