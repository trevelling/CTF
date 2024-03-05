"use client";

import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Reverse() {
  const router = useRouter();
  const handlePrevious = () => {
    router.push("/picoCTF2023/rotation");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    router.push("/picoCTF2023/Nowayout");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [copied1, setCopied1] = useState(false);

  const copyCode1 = () => {
    navigator.clipboard.writeText(`
┌──(tev㉿kali)-[~/pico]
└─$ chmod _x ret
    
┌──(tev㉿kali)-[~/pico]
└─$ ./ret
Enter the password to unlock this file: password
You entered: password
Access denied
    
┌──(tev㉿kali)-[~/pico]
└─$ strings ret | grep pico
picoCTF{h
Password correct, please see flag: picoCTF{3lf_r4v4r5ing_succe55ful_1de05085}
    `);
    setCopied1(true);
    setTimeout(() => setCopied1(false), 1500);
  };

  return (
    <div className={styles.reverseContainer}>
      <div className={styles.reverseTitle} style={{ color: "white"}}>
          Reverse
        <br />
      </div>
      <div className={styles.reverseQuestion}>
        <p>
          <strong className={styles.command} style={{ color: "rgb(255, 255, 255)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          Try reversing this file? Can ya? I forgot the password to this file.
          Please find it for me?
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILE: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/pico2023/ret"
            download
          >
            ret.elf
          </a>
        </p>
      </div>
      <div className={styles.reverseSolved}>
        <p>
          This challenge was a straight forward reverse engineering task. Upon
          opening the <code>ret</code> file, it displayed numerous
          unreadable symbols. Thus, I utilized <code>strings</code> on the
          file to extract readable strings and <code>grep</code> to search
          for the string
          <code>pico</code> within the extracted strings, which got me the
          flag.
        </p>
      </div>
      <div className={styles.reverseEvidence}>
        <button onClick={copyCode1} className={styles.copyButton}>
          {copied1 ? <IoCopyOutline /> : <IoCopyOutline />}
        </button>
        <SyntaxHighlighter language="bash" style={dracula}>
          {`┌──(tev㉿kali)-[~/pico]
└─$ chmod _x ret

┌──(tev㉿kali)-[~/pico]
└─$ ./ret
Enter the password to unlock this file: password
You entered: password
Access denied

┌──(tev㉿kali)-[~/pico]
└─$ strings ret | grep pico
picoCTF{h
Password correct, please see flag: picoCTF{3lf_r4v4r5ing_succe55ful_1de05085}`}
        </SyntaxHighlighter>
      </div>
      <div className={styles.reverseFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          picoCTF{"{3lf_r4v4r5ing_succe55ful_1de05085}"}
        </span>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button1} onClick={handlePrevious}>
          <div className={styles.buttonPrevious}>Previous</div>
          <div className={styles.buttonText}>rotation</div>
          <span className={styles.arrow}></span>
        </button>
        <button className={styles.button2} onClick={handleNext}>
          <div className={styles.buttonNext}>Next</div>
          <div className={styles.buttonText}>No way out</div>
          <span className={styles.arrow}></span>
        </button>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}