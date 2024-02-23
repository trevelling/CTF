import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function Hidetosee() {
  return (
    <div className={styles.hideToSeeContainer}>
      <div className={styles.hideToSeeTitle}>
        <a
          href="https://blog.yes-but-no.org/ybn-ctf-2023/ctf"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          HideToSee
        </a>
        <br />
      </div>
      <div className={styles.hideToSeeQuestion}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
          <br />
          </p>
        <p>
        How about some hide and seek heh? Look at this image here.
            <br />
            <br />
            <strong style={{ color: "rgb(137, 207, 240)" }}>FILE: </strong>atbash.jpeg
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
            eog
          </a>
          , we can see that the image is an image of a cipher, mainly <strong>Atbash</strong>. Which will be an important information later on.
        </p>
      </div>
      <div className={styles.hideToSeeEvidence}>
        <Image src="/HideToSee1.png" width={600} height={350} alt="logo" />
      </div>
      <div className={styles.hideToSeeSolved}>
        <p>
        I utilized{" "}
        <a
            href="https://steghide.sourceforge.net/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            steghide
          </a>
          {" "}in order to reveal any concealed files within the image. This showed a file <strong>encrypted.txt</strong>. Cat-ting the file out will return what looks like a encrypted flag.
        </p>
      </div>
      <div className={styles.hideToSeeEvidence}>
        <Image src="/HideToSee2.png" width={800} height={350} alt="logo" />
      </div>

      <div className={styles.hideToSeeSolved}>
        <p>
        Recalling that the file and image were encrypted with the <strong>Atbash Cipher</strong>, I assumed this was the encryption method used. Navigating to{" "}
        <a
            href="https://gchq.github.io/CyberChef/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            cyberchef
          </a>
          , I searched for rhw <strong>Atbash Cipher</strong>, derypted it, and obtained the flag.
        </p>
      </div>
      <div className={styles.hideToSeeEvidence}>
        <Image src="/HideToSee3.png" width={800} height={320} alt="logo" />
      </div>
      <div className={styles.hideToSeeFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(93, 63, 211)" }}>picoCTF{"{atbash_crack_ca00558b}"}</span>
      </div>
    </div>
  );
}
