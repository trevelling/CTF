import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function BabyRev() {
  return (
    <div className={styles.babyRevContainer}>
      <div className={styles.babyRevTitle}>
        <a
          href="https://blog.yes-but-no.org/ybn-ctf-2023/ctf"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          baby-rev
        </a>
        <br />
      </div>
      <div className={styles.babyRevQuestion}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          anita max wyinn
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILE: </strong>baby-rev.elf 
        </p>
      </div>
      <div className={styles.babyRevSolved}>
        <p>
          Since it was a reverse engineering challenge, I opened the elf file in{" "}
          <a
            href="https://ghidra-sre.org/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            Ghidra
          </a>
          . This code computes if the input string length is 18 characters long and if it is will call <strong>myfunc(local_38)</strong> else, it outpits <strong>:P</strong>
          <br />
        </p>
      </div>
      <div className={styles.babyRevEvidence}>
        <Image src="/baby-rev1.png" width={600} height={380} alt="picture" />
      </div>

      <div className={styles.babyRevSolved}>
        <p>
          In this function, it compares character by character, if every character is correct it outputs <strong>Yippee :3</strong>.
          <br/>
          This indicated to me that inputting the same string will result in the flag by rearranging it.
        </p>
      </div>
      <div className={styles.babyRevEvidence}>
        <Image src="/baby-rev2.png" width={900} height={500} alt="picture" />
      </div>
      <div className={styles.babyRevFlag}>
        <span>Flag: </span>

        <span style={{ color: "rgb(93, 63, 211)" }}>BITSCTF{"{w3lc0me_t0_r3v}"}</span>
      </div>
    </div>
  );
}
