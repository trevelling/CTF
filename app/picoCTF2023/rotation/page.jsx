"use client";

import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Rotation() {
  const router = useRouter();
  const handlePrevious = () => {
    router.push("/picoCTF2023/HideToSee");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    router.push("/picoCTF2023/Reverse");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [isZoomed1, setIsZoomed1] = useState(false);

  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };

  const [copied1, setCopied1] = useState(false);

  const copyCode1 = () => {
    navigator.clipboard.writeText(`
┌──(tev㉿kali)-[~/pico]
└─$ cat encrypted.txt
xqkwKBN{z0bib1wv_l3kzgxb3l_429in00n}
    `);
    setCopied1(true);
    setTimeout(() => setCopied1(false), 1500);
  };

  return (
    <div className={styles.rotationContainer}>
      <div className={styles.rotationTitle} style={{ color: "white"}}>
          rotation
        <br />
      </div>
      <div className={styles.rotationQuestion}>
        <p>
          <strong className={styles.command} style={{ color: "rgb(255, 255, 255)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          You will find the flag after decrypting this file.
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILE: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/pico2023/encrypted.txt"
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
          challenge name <code>rotation</code>.
        </p>
      </div>
      <div className={styles.rotationEvidence}>
        <button onClick={copyCode1} className={styles.copyButton}>
          {copied1 ? <IoCopyOutline /> : <IoCopyOutline />}
        </button>
        <SyntaxHighlighter language="bash" style={dracula}>
          {`┌──(tev㉿kali)-[~/pico]
└─$ cat encrypted.txt
xqkwKBN{z0bib1wv_l3kzgxb3l_429in00n}`}
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
            <code>dcode</code>
          </a>
          , and search for <code>rotation</code> to find the 
          <code>ROT Cipher</code>. By inputting the plain text, the program
          brute-forced all possible ROT Ciphers. From there I used <code>CTRL-F</code>CTRL-F to
          quickly find the pico flag.
        </p>
      </div>
      <div
        className={`${styles.rotationEvidencePic} ${
          isZoomed1 ? styles.zoomed : ""
        }`}
        onClick={toggleZoom1}
      >
        <Image src="/pico2023/rotation1.png" width={900} height={550} alt="logo" className={styles.rotationImage} />
      </div>
      <div className={styles.rotationFlag}>
        <span>Flag: </span>

        <span style={{ color: "rgb(137, 207, 240)" }}>
          picoCTF{"{r0tat1on_d3crypt3d_429af00f}"}
        </span>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button1} onClick={handlePrevious}>
          <div className={styles.buttonPrevious}>Previous</div>
          <div className={styles.buttonText}>HideToSee</div>
          <span className={styles.arrow}></span>
        </button>
        <button className={styles.button2} onClick={handleNext}>
          <div className={styles.buttonNext}>Next</div>
          <div className={styles.buttonText}>Reverse</div>
          <span className={styles.arrow}></span>
        </button>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}
