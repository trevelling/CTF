"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

export default function Stream() {
  const router = useRouter();
  const handlePrevious = () => {
    router.push("/HACK@AC/OOP");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    router.push("/HACK@AC/RSA");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [isZoomed1, setIsZoomed1] = useState(false);
  const [isZoomed2, setIsZoomed2] = useState(false);

  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };

  const toggleZoom2 = () => {
    setIsZoomed2(!isZoomed2);
  };
  return (
    <div className={styles.streamContainer}>
      <div className={styles.streamTitle} style={{ color: "white"}}>
          Stream of Consciousness
        <br />
      </div>
      <div className={styles.streamQuestion}>
        <p>
          <strong className={styles.command} style={{ color: "rgb(255, 255, 255)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          The flag lies somewhere in my stream of consciousness.
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILE: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/HACK@AC/stream.pcap"
            download
          >
            stream.pcap
          </a>
          <br />
          <br />
        </p>
      </div>
      <div className={styles.streamSolved}>
        <p>
          Another simple forensics challenge using{" "}
          <a
            href="https://www.wireshark.org/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>Wireshark</code>
          </a>{" "}
          which we can use to view the packets.
          <br />
          <br /> The first packet in the hex dump was an encoded message. This
          was recognisable through the <code>=</code> sign at the back, it
          was encoded with{" "}
          <a
            href="https://en.wikipedia.org/wiki/Base64"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>base64</code>
          </a>
          .
        </p>
      </div>
      <div
        className={`${styles.streamEvidencePic} ${isZoomed1 ? styles.zoomed : ""}`}
        onClick={toggleZoom1}
      >
        <Image src="/HACK@AC/stream1.png" width={900} height={500} alt="logo" className={styles.streamImage} />
      </div>

      <div className={styles.streamSolved}>
        <p>
          I took the encoded text and put it through a{" "}
          <a
            href="https://www.base64decode.org/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>base64 decoder</code>
          </a>
          .
        </p>
      </div>
      <div
        className={`${styles.streamEvidencePic} ${isZoomed2 ? styles.zoomed : ""}`}
        onClick={toggleZoom2}
      >
        <Image src="/stream2.png" width={900} height={500} alt="logo" className={styles.streamImage}  />
      </div>
      <div className={styles.streamFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          ACSI{"{str34m_0f_th0ugh+}"}
        </span>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button1} onClick={handlePrevious}>
          <div className={styles.buttonPrevious}>Previous</div>
          <div className={styles.buttonText}>Object Orientated Programming</div>
          <span className={styles.arrow}><BsArrowLeft /></span>
        </button>
        <button className={styles.button2} onClick={handleNext}>
          <div className={styles.buttonNext}>Next</div>
          <div className={styles.buttonText}>RandomlySelectedAlgorithm</div>
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
