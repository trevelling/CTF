import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function Rotation() {
  return (
    <div className={styles.rotationContainer}>
      <div className={styles.rotationTitle}>
        <a
          href="https://blog.yes-but-no.org/ybn-ctf-2023/ctf"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          rotation
        </a>
        <br />
      </div>
      <div className={styles.rotationQuestion}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
        You will find the flag after decrypting this file.
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILE: </strong>
          encrypted.txt
        </p>
      </div>
      <div className={styles.rotationSolved}>
        <p>
        This challenge provided with a plain ASCII file. Thus <strong>catting</strong> it out would result in a flag-like format. Pico challenges like this are very similar, where it looks like a flag.
        The clue would be in the challenge name <strong>"rotation"</strong>.
        </p>
      </div>
      <div className={styles.rotationEvidence}>
        <Image src="/rotation1.png" width={850} height={100} alt="logo" />
      </div>
      <div className={styles.rotationSolved}>
        <p>
        Heading over to{" "}
        <a
            href="https://www.dcode.fr/en"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            dcode
          </a>
          ,  I searched for <strong>rotation</strong> and found the <strong>"ROT Cipher"</strong>. By inputting the plain text, the program brute-forced all possible ROT Ciphers.
          From there I used <strong>CTRL-F</strong> to quickly find the pico flag.
        </p>
      </div>
      <div className={styles.rotationEvidence}>
        <Image src="/rotation2.png" width={850} height={500} alt="logo" />
      </div>
      <div className={styles.rotationFlag}>
        <span>Flag: </span>

        <span style={{ color: "rgb(137, 207, 240)" }}>
          picoCTF{"{r0tat1on_d3crypt3d_429af00f}"}
        </span>
      </div>
    </div>
  );
}