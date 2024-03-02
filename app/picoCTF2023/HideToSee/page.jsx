"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Hidetosee() {
  const [isZoomed1, setIsZoomed1] = useState(false);

  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };
  return (
    <div className={styles.hideToSeeContainer}>
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
        <SyntaxHighlighter language="bash" style={gruvboxDark}>
  {`
┌──(tev㉿kali)-[~/pico]
└─$ eog atbash.jpg    
  `}
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
        <SyntaxHighlighter language="bash" style={gruvboxDark}>
{`
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
`}
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
        className={`${styles.hideToSeeEvidence} ${
          isZoomed1 ? styles.zoomed : ""
        }`}
        onClick={toggleZoom1}
      >
        <Image src="/pico2023/HideToSee1.png" width={700} height={320} alt="logo" className={styles.hideToSeeImage} />
      </div>
      <div className={styles.hideToSeeFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          picoCTF{"{atbash_crack_ca00558b}"}
        </span>
      </div>
    </div>
  );
}
