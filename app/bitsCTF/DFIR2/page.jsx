"use client";

import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { IoCopy } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

export default function DFIR2() {
  const router = useRouter();
  const handlePrevious = () => {
    router.push("/bitsCTF/DFIR1");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    router.push("/bitsCTF/LadyLove");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [isZoomed1, setIsZoomed1] = useState(false);

  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };

  const [copied1, setCopied1] = useState(false);

  const copyCode1 = () => {
    navigator.clipboard.writeText(`
┌──(tev㉿kali)-[~/AccessGranted]
└─$ python3 vo.py -f ~/Downloads/memdump-001.mem windows.hashdump
Volatility 3 Framework 2.5.2
Progress 100.00                   PDB scanning finished
User     rid    lmhash   nthash
    
Administrator   500     aad3b435b51404eeaad3b435b51404ee        8a320467c7c22e321c3173e757194bb3
Guest   502     aad3b435b51404eeaad3b435b51404ee        31d6cfe0d16ae931b73c59d7e0c089c0
DefaultAccount  503     aad3b435b51404eeaad3b435b51404ee        31d6cfe0d16ae931b73c59d7e0c089c0
WDAGUtilityAccount      504     aad3b435b51404eeaad3b435b51404ee        74d0db3c3f38778476a44ff9ce0aefe2
MogamBro        1000    aad3b435b51404eeaad3b435b51404ee        8a320467c7c22e321c3173e757194bb3
    `);
    setCopied1(true);
    setTimeout(() => setCopied1(false), 50);
  };

  return (
    <div className={styles.dfirContainer}>
      <div className={styles.dfirTitle} style={{ color: "white"}}>
          Access Granted!
        <br />
      </div>
      <div className={styles.dfirQuestion}>
        <p>
          <strong className={styles.command} style={{ color: "rgb(255, 255, 255)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          First things first. MogamBro is so dumb that he might be using the
          same set of passwords everywhere, so lets try cracking his PC's
          password for some luck.
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILES: </strong>
          artifacts.ad1, memdump.mem, trace.pcap
        </p>
      </div>
      <div className={styles.dfirSolved}>
        <p>
          I started with searching the memory dump first. Since we are looking
          for a password, we can use the windows.hashdump plugin in Vol3 to
          extract the{" "}
          <a
            href="https://www.tarlogic.com/cybersecurity-glossary/ntlm-hash/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>NTLM hashes</code>
          </a>{" "}and crack MogamBro's password hash.
        </p>
      </div>
      <div className={styles.dfirEvidence}>
        <button onClick={copyCode1} className={styles.copyButton}>
          {copied1 ? <IoCopyOutline /> : <IoCopy />}
        </button>
        <SyntaxHighlighter language="bash" style={dracula}>
          {`┌──(tev㉿kali)-[~/AccessGranted]
└─$ python3 vo.py -f ~/Downloads/memdump-001.mem windows.hashdump
Volatility 3 Framework 2.5.2
Progress 100.00                   PDB scanning finished
User     rid    lmhash   nthash

Administrator   500     aad3b435b51404eeaad3b435b51404ee        8a320467c7c22e321c3173e757194bb3
Guest   502     aad3b435b51404eeaad3b435b51404ee        31d6cfe0d16ae931b73c59d7e0c089c0
DefaultAccount  503     aad3b435b51404eeaad3b435b51404ee        31d6cfe0d16ae931b73c59d7e0c089c0
WDAGUtilityAccount      504     aad3b435b51404eeaad3b435b51404ee        74d0db3c3f38778476a44ff9ce0aefe2
MogamBro        1000    aad3b435b51404eeaad3b435b51404ee        8a320467c7c22e321c3173e757194bb3`}
        </SyntaxHighlighter>
      </div>
      <div className={styles.dfirSolved}>
        <p>
          Taking a look at <code>MogamBro</code>, we can put the hash inside
          a{" "}
          <a
            href="https://crackstation.net/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>password hash cracker</code>
          </a>
          {" "}to retrieve the flag.
        </p>
      </div>
      <div
        className={`${styles.dfirEvidencePic} ${
          isZoomed1 ? styles.zoomed : ""
        }`}
        onClick={toggleZoom1}
      >
        <Image src="/BitsCTF/DFIR2.png" width={900} height={400} alt="logo" className={styles.dfirImage} />
      </div>
      <div className={styles.dfirFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          BITSCTF{"{adolfhitlerrulesallthepeople}"}
        </span>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button1} onClick={handlePrevious}>
          <div className={styles.buttonPrevious}>Previous</div>
          <div className={styles.buttonText}>Intro to DFIR</div>
          <span className={styles.arrow}><BsArrowLeft /></span>
        </button>
        <button className={styles.button2} onClick={handleNext}>
          <div className={styles.buttonNext}>Next</div>
          <div className={styles.buttonText}>LadyLove</div>
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
