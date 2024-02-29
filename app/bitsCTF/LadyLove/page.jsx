"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function LadyLove() {
  const [isZoomed1, setIsZoomed1] = useState(false);
  const [isZoomed2, setIsZoomed2] = useState(false);
  const [isZoomed3, setIsZoomed3] = useState(false);

  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };

  const toggleZoom2 = () => {
    setIsZoomed2(!isZoomed2);
  };
  const toggleZoom3 = () => {
    setIsZoomed3(!isZoomed3);
  };
  return (
    <div className={styles.ladyLoveContainer}>
      <div className={styles.ladyLoveTitle} style={{ color: "white"}}>
          LadyLove
        <br />
      </div>
      <div className={styles.ladyLoveQuestion}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          Sir-Steals-A-Lot is a world famous art thief. Lately he stole this
          painting. When he was caught he claimed to have done it because the
          painting commemorates the location of the crowned glory of his lady
          love. They fell in love in her hometown but her grandfather wouldn't
          let her marry a thief like him.! Answer is the meaning of his
          LadyLove's last name. Wrap the answer in the flag.
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILE: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/bitsCTF/stolenpainting.jpeg"
            download
          >
            stolenpainting.jpeg
          </a>
          <br />
          <br />
          <strong style={{ color: "rgb(255, 106, 61)" }}>HINT: </strong>16th
          February 2024 is his LadyLove's 111th birthday.
        </p>
      </div>
      <div className={styles.ladyLoveSolved}>
        <p>
          They gave us a picture of a painting. Immediately, I did a{" "}
          <a
            href="https://www.duplichecker.com/reverse-image-search.php"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>reverse image search</code>
          </a>{" "}
          on the painting to find more information on it. Going through the
          first website, it seems that the painter's name is Peter Adolf Hall.
          <br />
        </p>
      </div>
      <div
        className={`${styles.ladyLoveEvidence} ${
          isZoomed1 ? styles.zoomed : ""
        }`}
        onClick={toggleZoom1}
      >
        <Image src="/BitsCTF/LadyLove1.png" width={800} height={400} alt="logo" />
      </div>
      <div className={styles.ladyLoveSolved}>
        <p>
          Reading his history on{" "}
          <a
            href="https://en.wikipedia.org/wiki/Peter_Adolf_Hall"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>Wikipedia</code>
          </a>
          , it seems that he was born in Sweden but died in Belgium, suggesting
          that his LadyLove was also from Belgium. Due to low solves and after
          some time, the authors provided us a hint which was the birthdate of
          LadyLove.
          <br />
        </p>
      </div>
      <div
        className={`${styles.ladyLoveEvidence} ${
          isZoomed2 ? styles.zoomed : ""
        }`}
        onClick={toggleZoom2}
      >
        <Image src="/BitsCTF/LadyLove2.png" width={800} height={650} alt="logo" />
      </div>
      <div className={styles.ladyLoveSolved}>
        <p>
          Googling for Belgium ladies born on 1918, I founded a specific woman
          named Keriman Halis Ece. Reading her{" "}
          <a
            href="https://en.wikipedia.org/wiki/Keriman_Halis_Ece"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>Wikipedia</code>
          </a>
          , the meaning of her last name can be found where 
          <code>Ece</code> means <code>queen</code>.
          <br />
        </p>
      </div>
      <div
        className={`${styles.ladyLoveEvidence} ${
          isZoomed3 ? styles.zoomed : ""
        }`}
        onClick={toggleZoom3}
      >
        <Image src="/BitsCTF/LadyLove3.png" width={800} height={650} alt="logo" />
      </div>
      <div className={styles.ladyLoveFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>BITSCTF{"{queen}"}</span>
      </div>
    </div>
  );
}
