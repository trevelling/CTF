"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function Grass() {
  const [isZoomed1, setIsZoomed1] = useState(false);
  const [isZoomed2, setIsZoomed2] = useState(false);
  const [isZoomed3, setIsZoomed3] = useState(false);
  const [isZoomed4, setIsZoomed4] = useState(false);
  const [isZoomed5, setIsZoomed5] = useState(false);
  const [isZoomed6, setIsZoomed6] = useState(false);
  const [isZoomed7, setIsZoomed7] = useState(false);

  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };

  const toggleZoom2 = () => {
    setIsZoomed2(!isZoomed2);
  };
  const toggleZoom3 = () => {
    setIsZoomed3(!isZoomed3);
  };
  const toggleZoom4 = () => {
    setIsZoomed4(!isZoomed4);
  };
  const toggleZoom5 = () => {
    setIsZoomed5(!isZoomed5);
  };
  const toggleZoom6 = () => {
    setIsZoomed6(!isZoomed6);
  };
  const toggleZoom7 = () => {
    setIsZoomed7(!isZoomed7);
  };
  return (
    <div className={styles.grassContainer}>
      <div className={styles.grassTitle}>
        <a
          href="https://blog.yes-but-no.org/ybn-ctf-2023/ctf"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          Grass is Greener
        </a>
        <br />
      </div>
      <div className={styles.grassQuestion}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          the Leaves Shades the Branches
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILE: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/Grass_Final.zip"
            download
          >
            Grass_Final.zip
          </a>
          <br />
          <br />
        </p>
      </div>
      <div className={styles.grassSolved}>
        <p>
          Unzipping <strong>Grass_Final.zip</strong>, gives us <strong>Grass_Final.png</strong>.
          Immediately, I tried viewing the png using{" "}
          <a
            href="https://help.gnome.org/users/eog/stable/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            eog
          </a>
          . However, it gave me a file format error. Thus, I
          tried using{" "}
          <a
            href="https://help.gnome.org/users/eog/stable/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            exiftool
          </a>{" "}
          to see any metadata of the file. Once again, it showed a file format
          error.
          <br />
        </p>
      </div>
      <div
        className={`${styles.grassEvidence} ${isZoomed1 ? styles.zoomed : ""}`}
        onClick={toggleZoom1}
      >
        <Image src="/Grass1.png" width={700} height={250} alt="logo" />
      </div>
      <div
        className={`${styles.grassEvidence} ${isZoomed2 ? styles.zoomed : ""}`}
        onClick={toggleZoom2}
      >
        <Image src="/Grass2.png" width={700} height={150} alt="logo" />
      </div>
      <div className={styles.grassSolved}>
        <p>
          After some googling, I came across this{" "}
          <a
            href="https://github.com/blinils/CTF/blob/master/CTF-Jeopardy/2016-icectf/challenges/corrupt-transmission-50/README.md"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            github repo
          </a>{" "}
          talking about{" "}
          <a
            href="https://medium.com/@d.harish008/what-is-a-magic-byte-and-how-to-exploit-1e286da1c198"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            magic bytes
          </a>
          . Basically, we can now exploit this the same way. Seeing that is a
          png image, we can change to magic bytes of the corrupted
          <strong> Grass_Final.png</strong> file.<br /><br /> Here's the list of{" "}
          <a
            href="https://en.wikipedia.org/wiki/List_of_file_signatures"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            file signatures
          </a>{" "}
          for their respecitive magic bytes.
          <br />
          <br />I used{" "}
          <a
            href="https://www.hackingarticles.in/linux-for-pentester-xxd-privilege-escalation/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            xxd
          </a>{" "}
          on the file to see its hexadecimal format. However, based on the png
          file signaures, it has been altered and is no longer a png despite the
          file extension.
        </p>
      </div>
      <div
        className={`${styles.grassEvidence} ${isZoomed3 ? styles.zoomed : ""}`}
        onClick={toggleZoom3}
      >
        <Image src="/Grass3.png" width={700} height={90} alt="logo" />
      </div>
      <div className={styles.grassSolved}>
        <p>
          We can alter the magic bytes of the corrupted png to match the magic bytes of a
          real png file.
        </p>
      </div>
      <div
        className={`${styles.grassEvidence} ${isZoomed4 ? styles.zoomed : ""}`}
        onClick={toggleZoom4}
      >
        <Image src="/Grass4.png" width={700} height={100} alt="logo" />
      </div>
      <div className={styles.grassSolved}>
        <p>
          The file is now an actual png file. I
          ran{" "}
          <a
            href="https://help.gnome.org/users/eog/stable/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            eog
          </a>
           {" "}on the file and it revealed an area of ACS(I).
        </p>
      </div>
      <div
        className={`${styles.grassEvidence} ${isZoomed5 ? styles.zoomed : ""}`}
        onClick={toggleZoom5}
      >
        <Image src="/Grass5.png" width={700} height={120} alt="logo" />
      </div>
      <div
        className={`${styles.grassEvidence} ${isZoomed6 ? styles.zoomed : ""}`}
        onClick={toggleZoom6}
      >
        <Image src="/Grass6.png" width={700} height={400} alt="logo" />
      </div>
      <div className={styles.grassSolved}>
        <p>
          At this point, I got really stuck as I thought it had something to do
          with the image. Thus I tried looking hard at the image to see if the
          flag was hidden in the photo 🤣.
          <br />
          <br />I re-looked at the challenge and realised the description gave
          us a hint. Reading the capital letters of the description "<strong>the Leaves
          Shades the Branches</strong>" gives us "
          <a
            href="https://www.analog.com/en/resources/glossary/lsb.html"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            LSB
          </a>
          ". Then I knew I had to run{" "}
          <a
            href="https://wiki.bi0s.in/steganography/zsteg/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            Zsteg
          </a>{" "}
          on the image. There is the flag!
        </p>
      </div>
      <div
        className={`${styles.grassEvidence} ${isZoomed7 ? styles.zoomed : ""}`}
        onClick={toggleZoom7}
      >
        <Image src="/Grass7.png" width={700} height={400} alt="logo" />
      </div>
      <div className={styles.grassFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          ACSI{"{t0uch_gr@55}"}
        </span>
      </div>
    </div>
  );
}
