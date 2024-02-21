import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function Moneyware() {
  return (
    <div className={styles.moneywareContainer}>
      <div className={styles.moneywareTitle}>
        <a
          href="https://blog.yes-but-no.org/ybn-ctf-2023/ctf"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          money-ware
        </a>
        <br />
      </div>
      <div className={styles.moneywareQuestion}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          The first letter of the malware name should be capitalized and the
          rest lowercase.
          <br />
          <br /> Your friend just got hacked and has been asked to pay some
          bitcoins to 1Mz7153HMuxXTuR2R1t78mGSdzaAtNbBWX. He doesn’t seem to
          understand what is going on and asks you for advice. Can you identify
          what malware he’s being a victim of?
        </p>
      </div>
      <div className={styles.moneywareSolved}>
        <p>
          Since this is an OSINT question, it got me thinking about research.
          The question gave us a clue about <strong>bitcoins</strong> and the
          title of the challenge name 'money-<strong>ware</strong>'<br />{" "}
          Googling '<strong>1Mz7153HMuxXTuR2R1t78mGSdzaAtNbBWX</strong>' bring
          us to{" "}
          <a
            href="https://www.cnbc.com/2017/06/28/ransomware-cyberattack-petya-bitcoin-payment.html"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            this website
          </a>
          .<br />
          <br /> Looking for a malware-type, we can see that it is '<strong style={{ color: "rgb(93, 63, 211)" }}>petya</strong>'
        </p>
      </div>
      <div className={styles.moneywareEvidence}>
        <Image src="/moneyware.png" width={500} height={80} alt="logo" />
      </div>
      <div className={styles.moneywareFlag}>
        <p>picoCTF{"{Petya}"}</p>
      </div>
    </div>
  );
}
