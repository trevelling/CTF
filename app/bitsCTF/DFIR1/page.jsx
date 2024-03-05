"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import Preloader from "@/app/ui/preloader";

export default function DFIR1() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1);

    return () => clearTimeout(timeout);
  }, []);

  const router = useRouter();
  const handlePrevious = () => {
    router.push("/bitsCTF");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    router.push("/bitsCTF/DFIR2");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [isZoomed1, setIsZoomed1] = useState(false);
  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };
  return (
    <div className={styles.dfirContainer}>
      {loading && <Preloader />}
      <div className={styles.dfirTitle} style={{ color: "white"}}>
          Intro to DFIR
        <br />
      </div>
      <div className={styles.dfirQuestion}>
        <p>
          <strong className={styles.command} style={{ color: "rgb(255, 255, 255)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          DFIR or Digital Forensics and Incident Response is a field within
          cybersecurity that focuses on the identification, investigation, and
          remediation of cyberattacks. Here are the types of analysis you can
          expect throughout these sequence of challenges!
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILES: </strong>
          artifacts.ad1, memdump.mem, trace.pcap
        </p>
      </div>
      <div className={styles.dfirSolved}>
        <p>
          The authors provided us with a <code>memory dump</code>, <code>AD1 image</code> and a <code>pcap</code> file
          for further analysis. The flag is given directly in the challenge
          description.
        </p>
      </div>
      <div
        className={`${styles.dfirEvidencePic} ${isZoomed1 ? styles.zoomed : ""}`}
        onClick={toggleZoom1}
      >
        <Image src="/BitsCTF/DFIR1.png" width={900} height={300} alt="logo" className={styles.dfirImage}/>
      </div>
      <div className={styles.dfirFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          BITSCTF{"{DFIR_r0ck55}"}
        </span>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button1} onClick={handlePrevious}>
          <div className={styles.buttonPrevious}>Previous</div>
          <div className={styles.buttonText}>Bits CTF 2024</div>
          <span className={styles.arrow}><BsArrowLeft /></span>
        </button>
        <button className={styles.button2} onClick={handleNext}>
          <div className={styles.buttonNext}>Next</div>
          <div className={styles.buttonText}>Access Granted!</div>
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

