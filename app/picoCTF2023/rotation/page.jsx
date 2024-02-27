"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Rotation() {
  const [isZoomed1, setIsZoomed1] = useState(false);

  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };
  return (
    <div className={styles.rotationContainer}>
      <div className={styles.rotationTitle}>
        <a
          href="https://blog.yes-but-no.org/ybn-ctf-2023/ctf"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          rotation
        </a>
        <br />
      </div>
      <div className={styles.rotationQuestion}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          You will find the flag after decrypting this file.
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILE: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/pico_encrypted.txt"
            download
          >
            encrypted.txt
          </a>
        </p>
      </div>
      <div className={styles.rotationSolved}>
        <p>
          This challenge provided with a plain ASCII file. Catting it out would
          result in a flag-like format. Pico challenges like this are very
          similar, where it looks like a flag. The clue would be in the
          challenge name "<strong>rotation</strong>".
        </p>
      </div>
      <div className={styles.rotationEvidence}>
        <SyntaxHighlighter language="bash" style={gruvboxDark}>
          {`
┌──(tev㉿kali)-[~/pico]
└─$ cat encrypted.txt
xqkwKBN{z0bib1wv_l3kzgxb3l_429in00n}  
  `}
        </SyntaxHighlighter>
      </div>
      <div className={styles.rotationSolved}>
        <p>
          We can use{" "}
          <a
            href="https://www.dcode.fr/en"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            dcode
          </a>
          , and search for <strong>rotation</strong> to find the "
          <strong>ROT Cipher</strong>". By inputting the plain text, the program
          brute-forced all possible ROT Ciphers. From there I used CTRL-F to
          quickly find the pico flag.
        </p>
      </div>
      <div
        className={`${styles.rotationEvidence} ${
          isZoomed1 ? styles.zoomed : ""
        }`}
        onClick={toggleZoom1}
      >
        <Image src="/rotation2.png" width={850} height={500} alt="logo" />
      </div>
      <div className={styles.rotationFlag}>
        <span>Flag: </span>

        <span style={{ color: "rgb(137, 207, 240)" }}>
          picoCTF{"{r0tat1on_d3crypt3d_429af00f}"}
        </span>
      </div>
    </div>
  );
}
