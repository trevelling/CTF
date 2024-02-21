import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function LadyLove() {
  return (
    <div className={styles.ladyLoveContainer}>
      <div className={styles.ladyLoveTitle}>
        <a
          href="https://blog.yes-but-no.org/ybn-ctf-2023/ctf"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          LadyLove
        </a>
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
          Given hint: <strong>16th February 2024</strong> is his LadyLove's 111th birthday.
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
            reverse image search
          </a>{" "}
          on the painting to find more information on it. Going through the
          first website, it seems that the painter's name is Peter Adolf Hall.
          <br />
        </p>
      </div>
      <div className={styles.ladyLoveEvidence}>
        <Image src="/LadyLove1.png" width={800} height={400} alt="picture" />
      </div>

      <div className={styles.ladyLoveSolved}>
        <p>
          Reading his history{" "}
          <a
            href="https://en.wikipedia.org/wiki/Peter_Adolf_Hall"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
          Wikipedia
          </a>
          , it seems that he was born in Sweden
          but died in Belgium, suggesting that his LadyLove was also from
          Belgium. Due to low solves and after some time, the authors provided
          us a hint which was the birthdate of LadyLove.
          <br />
          
          
          
    
        </p>
      </div>
      <div className={styles.ladyLoveEvidence}>
        <Image src="/LadyLove2.png" width={800} height={650} alt="picture" />
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
          Wikipedia
          </a>
          , the meaning of her last name can be found where <strong>Ece means queen.</strong>
          <br />

        </p>
      </div>
      <div className={styles.ladyLoveEvidence}>
        <Image src="/LadyLove3.png" width={800} height={650} alt="picture" />
      </div>
      <div className={styles.ladyLoveFlag}>
        <span>Flag: </span>

        <span style={{ color: "rgb(93, 63, 211)" }}>BITSCTF{"{queen}"}</span>
      </div>
    </div>
  );
}
