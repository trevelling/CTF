"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function DFIR2() {
  const [isZoomed1, setIsZoomed1] = useState(false);

  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
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
        <SyntaxHighlighter language="bash" style={gruvboxDark}>
  {`
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
  `}
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
        className={`${styles.dfirEvidence} ${
          isZoomed1 ? styles.zoomed : ""
        }`}
        onClick={toggleZoom1}
      >
        <Image src="/BitsCTF/DFIR2.png" width={750} height={320} alt="logo" className={styles.dfirImage} />
      </div>
      <div className={styles.dfirFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          BITSCTF{"{adolfhitlerrulesallthepeople}"}
        </span>
      </div>
    </div>
  );
}
