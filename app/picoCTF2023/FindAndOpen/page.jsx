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

export default function FindAndOpen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1);

    return () => clearTimeout(timeout);
  }, []);

  const router = useRouter();
  const handlePrevious = () => {
    router.push("/picoCTF2023/whoisit");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    router.push("/picoCTF2023/MSB");
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
└─$ echo "VGhpcyBpcyB0aGUgc2VjcmV0OiBwaWNvQ1RGe1IzNERJTkdfTE9LZF8=" | base64 -d
This is the secret: picoCTF{R34DING_LOKd_
    `);
    setCopied1(true);
    setTimeout(() => setCopied1(false), 50);
  };

  const copyCode2 = () => {
    navigator.clipboard.writeText(`
┌──(tev㉿kali)-[~/pico]
└─$ unzip flag.zip
Archive:  flag.zip
[flag.zip] flag password: picoCTF{R34DING_LOKd_
  extracting: flag 
    
┌──(tev㉿kali)-[~/pico]
└─$ cat flag
picoCTF{R34DING_LOKd_fil56_succ3ss_419835ef}
    `);
    setCopied2(true);
    setTimeout(() => setCopied2(false), 50);
  };
  return (
    <div className={styles.findAndOpenContainer}>
      {loading && <Preloader />}
      <div className={styles.findAndOpenTitle} style={{ color: "white"}}>
        FindAndOpen
        <br />
      </div>
      <div className={styles.findAndOpenQuestion}>
        <p>
          <strong className={styles.command} style={{ color: "rgb(255, 255, 255)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
        Someone might have hidden the password in the trace file. Find the key to unlock <code>this file</code>. This <code>tracefile</code> might be good to analyze.
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILES: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/pico2023/flag.zip"
            download
          >
            flag.zip
          </a>,{" "}
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/pico2023/dump.pcap"
            download
          >
            dump.pcap
          </a>
          <br />
          <br />
        </p>
      </div>
      <div className={styles.findAndOpenSolved}>
        <p>
          Trying to unzip <code>flag.zip</code>, we will be prompted for a password to unzip it. For this challanege, I assumed that the password would be hidden in the <code>hexdump</code> of
          the <code>dump.pcap</code> file. When we open <code>dump.pacp</code> in{" "}
          <a
            href="https://www.wireshark.org/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>Wireshark</code>
          </a>
          , and scroll through the packets, there are a lot of{" "}
          <a
            href="https://www.wireshark.org/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>base64 encoded text</code>
          </a>
          {" "}in the hex dump. However in <code>packet 48</code>, there is one fully encoded base64 text while the rest was halfway encoded.
        </p>
      </div>
      <div
        className={`${styles.findAndOpenEvidencePic} ${
          isZoomed1 ? styles.zoomed : ""
        }`}
        onClick={toggleZoom1}
      >
        <Image src="/pico2023/FindAndOpen1.png" width={900} height={450} alt="logo" className={styles.findAndOpenImage} />
      </div>
      <div className={styles.findAndOpenSolved}>
        <p>
         We can put the <code>base64 encoded text</code> into a{" "}
         <a
            href="https://www.base64decode.org/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>base64 decoder</code>
          </a>
          {" "}to get the password for the file. However, I just used the <code>CLI decoder</code>
        </p>
      </div>
      <div className={styles.findAndOpenEvidence}>
        <button onClick={copyCode1} className={styles.copyButton}>
          {copied1 ? <IoCopyOutline /> : <IoCopy />}
        </button>
        <SyntaxHighlighter language="bash" style={dracula}>
          {`┌──(tev㉿kali)-[~/pico]
└─$ echo "VGhpcyBpcyB0aGUgc2VjcmV0OiBwaWNvQ1RGe1IzNERJTkdfTE9LZF8=" | base64 -d
This is the secret: picoCTF{R34DING_LOKd_`}
        </SyntaxHighlighter>
      </div>
      <div className={styles.findAndOpenSolved}>
        <p>
          Inputting this as the password of the zipped <code>flag.zip</code> will give us the flag.
        </p>
      </div>
      <div className={styles.findAndOpenEvidence}>
        <button onClick={copyCode2} className={styles.copyButton}>
          {copied2 ? <IoCopyOutline /> : <IoCopy />}
        </button>
        <SyntaxHighlighter language="bash" style={dracula}>
          {`┌──(tev㉿kali)-[~/pico]
└─$ unzip flag.zip
Archive:  flag.zip
[flag.zip] flag password: picoCTF{R34DING_LOKd_
 extracting: flag 

┌──(tev㉿kali)-[~/pico]
└─$ cat flag
picoCTF{R34DING_LOKd_fil56_succ3ss_419835ef}`}
        </SyntaxHighlighter>
      </div>
      <div className={styles.findAndOpenFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          picoCTF{"{R34DING_LOKd_fil56_succ3ss_419835ef}"}
        </span>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button1} onClick={handlePrevious}>
          <div className={styles.buttonPrevious}>Previous</div>
          <div className={styles.buttonText}>who is it</div>
          <span className={styles.arrow}><BsArrowLeft /></span>
        </button>
        <button className={styles.button2} onClick={handleNext}>
          <div className={styles.buttonNext}>Next</div>
          <div className={styles.buttonText}>MSB</div>
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