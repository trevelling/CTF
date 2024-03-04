"use client";

import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";


export default function Potato() {
  const router = useRouter();
  const handlePrevious = () => {
    router.push("/HACK@AC/RSA");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    router.push("/bitsCTF");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isZoomed1, setIsZoomed1] = useState(false);
  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };
  
  const [copied1, setCopied1] = useState(false);

  const copyCode1 = () => {
    navigator.clipboard.writeText(`
┌──(tev㉿kali)-[~/HACK@AC]
└─$ exiftool Grass_Final.png
ExifTool Version Number         : 12.67
File Name                       : Grass_Final.png
Directory                       : .
File Size                       : 15 MB
File Modification Date/Time     : 2023:05:15 15:42:42-04:00
File Access Date/Time           : 2023:05:15 15:42:42-04:00
File Inode Change Date/Time     : 2024:02:27 05:29:42-05:00
File Permissions                : -rw-r--r--
Error                           : File format error
    `);
    setCopied1(true);
    setTimeout(() => setCopied1(false), 1500);
  };
  return (
    <div className={styles.potatoContainer}>
      <div className={styles.potatoTitle} style={{ color: "white"}}>
          Potato
        <br />
      </div>
      <div className={styles.potatoQuestion}>
        <p>
          <strong className={styles.command} style={{ color: "rgb(255, 255, 255)" }}>~# cat Question</strong>
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
            href="/HACK@AC/enc"
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
         <code>enc</code>
        </p>
      </div>
      <div className={styles.potatoEvidence}>
        <button onClick={copyCode1} className={styles.copyButton}>
          {copied1 ? <IoCopyOutline /> : <IoCopyOutline />}
        </button>
        <SyntaxHighlighter language="bash" style={dracula}>
          {`add564b5920b7f9ee6e97a5e836040a73f5efb3d`}
        </SyntaxHighlighter>
      </div>
      <div className={styles.potatoSolved}>
        <p>
          This was a very simple cryptography challenge, we just needed
          to decrypt the cipher text. The cipher text was not only 40 characters long but one of the most
          common encryption that is not secure/broken is{" "}
          <a
            href="https://en.wikipedia.org/wiki/SHA-1"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>SHA-1</code>
          </a>
          . We can use a{" "}
          <a
            href="https://md5decrypt.net/en/Sha1/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>SHA-1 decoder</code>
          </a>{" "}
          to decrypt the cipher text to obtain the flag.
        </p>
      </div>
      <div
        className={`${styles.potatoEvidencePic} ${isZoomed1 ? styles.zoomed : ""}`}
        onClick={toggleZoom1}
      >
        <Image src="/HACK@AC/potato1.png" width={900} height={600} alt="logo" className={styles.potatoImage} />
      </div>

      <div className={styles.potatoFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>ACSI{"{pandas}"}</span>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button1} onClick={handlePrevious}>
          <div className={styles.buttonPrevious}>Previous</div>
          <div className={styles.buttonText}>RandomlySelectedAlgorithm</div>
          <span className={styles.arrow}></span>
        </button>
        <button className={styles.button2} onClick={handleNext}>
          <div className={styles.buttonNext}>Next</div>
          <div className={styles.buttonText}>Bits CTF 2024</div>
          <span className={styles.arrow}></span>
        </button>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}
