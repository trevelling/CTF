"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function FindAndOpen() {
  const [isZoomed1, setIsZoomed1] = useState(false);

  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };
  return (
    <div className={styles.findAndOpenContainer}>
      <div className={styles.findAndOpenTitle} style={{ color: "white"}}>
        FindAndOpen
        <br />
      </div>
      <div className={styles.findAndOpenQuestion}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
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
        className={`${styles.findAndOpenEvidence} ${
          isZoomed1 ? styles.zoomed : ""
        }`}
        onClick={toggleZoom1}
      >
        <Image src="/pico2023/FindAndOpen1.png" width={900} height={400} alt="logo" className={styles.findAndOpenImage} />
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
        <SyntaxHighlighter language="bash" style={gruvboxDark}>
          {`
┌──(tev㉿kali)-[~/pico]
└─$ echo "VGhpcyBpcyB0aGUgc2VjcmV0OiBwaWNvQ1RGe1IzNERJTkdfTE9LZF8=" | base64 -d
This is the secret: picoCTF{R34DING_LOKd_
  `}
        </SyntaxHighlighter>
      </div>
      <div className={styles.findAndOpenSolved}>
        <p>
          Inputting this as the password of the zipped <code>flag.zip</code> will give us the flag.
        </p>
      </div>
      <div className={styles.findAndOpenEvidence}>
        <SyntaxHighlighter language="bash" style={gruvboxDark}>
          {`
┌──(tev㉿kali)-[~/pico]
└─$ unzip flag.zip
Archive:  flag.zip
[flag.zip] flag password: picoCTF{R34DING_LOKd_
 extracting: flag 

┌──(tev㉿kali)-[~/pico]
└─$ cat flag
picoCTF{R34DING_LOKd_fil56_succ3ss_419835ef}
        `}
        </SyntaxHighlighter>
      </div>
      <div className={styles.findAndOpenFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          picoCTF{"{R34DING_LOKd_fil56_succ3ss_419835ef}"}
        </span>
      </div>
    </div>
  );
}
