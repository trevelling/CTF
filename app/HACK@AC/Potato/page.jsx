"use client";

import React, { useState, useEffect } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { IoCopy } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import Preloader from "@/app/ui/preloader";

export default function Potato() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1);

    return () => clearTimeout(timeout);
  }, []);

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
add564b5920b7f9ee6e97a5e836040a73f5efb3d
    `);
    setCopied1(true);
    setTimeout(() => setCopied1(false), 50);
  };
  return (
    <div className={styles.potatoContainer}>
      {loading && <Preloader />}
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
          {copied1 ? <IoCopyOutline /> : <IoCopy />}
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
          <span className={styles.arrow}><BsArrowLeft /></span>
        </button>
        <button className={styles.button2} onClick={handleNext}>
          <div className={styles.buttonNext}>Next</div>
          <div className={styles.buttonText}>Bits CTF 2024</div>
          <span className={styles.arrow}><BsArrowRight /></span>
        </button>
      </div>
      <div className={styles.line}></div>
      <footer className={styles.footer}>    
          &copy; 2024 Tev
      </footer>
    </div>
  );
}