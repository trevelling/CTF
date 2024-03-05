"use client";

import React, { useState, useEffect } from "react";
import Preloader from "@/app/ui/preloader";
import { IoCopyOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { IoCopy } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

export default function Hidetosee() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1);

    return () => clearTimeout(timeout);
  }, []);
  const router = useRouter();
  const handlePrevious = () => {
    router.push("/picoCTF2023/MSB");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    router.push("/picoCTF2023/rotation");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isZoomed1, setIsZoomed1] = useState(false);

  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };

  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);

  const copyCode1 = () => {
    navigator.clipboard.writeText(`
┌──(tev㉿kali)-[~/pico]
└─$ eog atbash.jpg
    `);
    setCopied1(true);
    setTimeout(() => setCopied1(false), 50);
  };

  const copyCode2 = () => {
    navigator.clipboard.writeText(`
┌──(tev㉿kali)-[~/pico]
└─$ steghide extract -sf atbash.jpg  
Enter passphrase:
wrote extracted data to "encrypted.txt".
    
┌──(tev㉿kali)-[~/pico]
└─$ ls
atbash.jpg  encrypted.txt
    
┌──(tev㉿kali)-[~/pico]
└─$ cat encrypted.txt
krxlXGU{zgyzhs_xizxp_xz005577y}
    `);
    setCopied2(true);
    setTimeout(() => setCopied2(false), 50);
  };
  return (
    <div className={styles.hideToSeeContainer}>
      {loading && <Preloader />}
      <div className={styles.hideToSeeTitle} style={{ color: "white"}}>
          HideToSee
        <br />
      </div>
      <div className={styles.hideToSeeQuestion}>
        <p>
          <strong className={styles.command} style={{ color: "rgb(255, 255, 255)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          How about some hide and seek heh? Look at this image here.
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILE: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/pico2023/atbash.jpeg"
            download
          >
            atbash.jpeg
          </a>
        </p>
      </div>
      <div className={styles.hideToSeeSolved}>
        <p>
          Using{" "}
          <a
            href="https://help.gnome.org/users/eog/stable/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>eog</code>
          </a>
          , we can see that the image is an image of a cipher, mainly{" "}
          <code>Atbash</code>. Which will be an important information later
          on.
        </p>
      </div>
      <div className={styles.hideToSeeEvidence}>
        <button onClick={copyCode1} className={styles.copyButton}>
          {copied1 ? <IoCopyOutline /> : <IoCopy />}
        </button>
        <SyntaxHighlighter language="bash" style={dracula}>
          {`┌──(tev㉿kali)-[~/pico]
└─$ eog atbash.jpg`}
        </SyntaxHighlighter>
      </div>
      <div className={styles.hideToSeeSolved}>
        <p>
          I utilized{" "}
          <a
            href="https://steghide.sourceforge.net/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>steghide</code>
          </a>{" "}
          in order to reveal any concealed files within the image. This showed a
          file <code>encrypted.txt</code>. Cat-ting the file out will return
          what looks like a encrypted flag.
        </p>
      </div>
      <div className={styles.hideToSeeEvidence}>
        <button onClick={copyCode2} className={styles.copyButton}>
          {copied2 ? <IoCopyOutline /> : <IoCopy />}
        </button>
        <SyntaxHighlighter language="bash" style={dracula}>
          {`┌──(tev㉿kali)-[~/pico]
└─$ steghide extract -sf atbash.jpg  
Enter passphrase:
wrote extracted data to "encrypted.txt".

┌──(tev㉿kali)-[~/pico]
└─$ ls
atbash.jpg  encrypted.txt

┌──(tev㉿kali)-[~/pico]
└─$ cat encrypted.txt
krxlXGU{zgyzhs_xizxp_xz005577y}`}
        </SyntaxHighlighter>
      </div>
      <div className={styles.hideToSeeSolved}>
        <p>
          Recalling that the file and image were encrypted with the{" "}
          <code>Atbash Cipher</code>, I assumed this was the encryption
          method used. Navigating to{" "}
          <a
            href="https://gchq.github.io/CyberChef/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>cyberchef</code>
          </a>
          , I searched for <code>Atbash Cipher</code>, derypted it, and
          obtained the flag.
        </p>
      </div>
      <div
        className={`${styles.hideToSeeEvidencePic} ${
          isZoomed1 ? styles.zoomed : ""
        }`}
        onClick={toggleZoom1}
      >
        <Image src="/pico2023/HideToSee1.png" width={900} height={400} alt="logo" className={styles.hideToSeeImage} />
      </div>
      <div className={styles.hideToSeeFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          picoCTF{"{atbash_crack_ca00558b}"}
        </span>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button1} onClick={handlePrevious}>
          <div className={styles.buttonPrevious}>Previous</div>
          <div className={styles.buttonText}>MSB</div>
          <span className={styles.arrow}><BsArrowLeft /></span>
        </button>
        <button className={styles.button2} onClick={handleNext}>
          <div className={styles.buttonNext}>Next</div>
          <div className={styles.buttonText}>rotation</div>
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

