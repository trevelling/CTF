import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function DFIR2() {
  return (
    <div className={styles.dfirContainer}>
      <div className={styles.dfirTitle}>
        <a
          href="https://blog.yes-but-no.org/ybn-ctf-2023/ctf"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          Intro to DFIR
        </a>
        <br />
      </div>
      <div className={styles.dfirQuestion}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
        First things first.
        MogamBro is so dumb that he might be using the 
        same set of passwords everywhere, 
        so lets try cracking his PC's password for some luck.
        </p>
      </div>
      <div className={styles.dfirSolved}>
        <p>
        I started the search with the memory dump first. Since we are looking for a password, we can use the windows.hashdump plugin in Vol3 to extract the NTLM hashes and crack MogamBro's password hash.
        </p>
      </div>
      <div className={styles.dfirEvidence}>
        <Image src="/DFIR2.png" width={750} height={250} alt="picture" />
      </div>

      <div className={styles.dfirSolved}>
        <p>
        Taking a look at <strong>MogamBro</strong>. We can put the hash inside a password hash cracker.
        </p>
      </div>
      <div className={styles.dfirEvidence}>
        <Image src="/DFIR3.png" width={750} height={250} alt="picture" />
      </div>
      <div className={styles.dfirFlag}>
        <span>Flag: </span>
        
        <span style={{ color: "rgb(93, 63, 211)" }}>BITSCTF{"{adolfhitlerrulesallthepeople}"}</span>
      </div>
    </div>
  );
}
