"use client";

import React, { useState, useEffect } from "react";
import Preloader from "@/app/ui/preloader";
import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

export default function PcapPoisoning() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1);

    return () => clearTimeout(timeout);
  }, []);
  const router = useRouter();
  const handlePrevious = () => {
    router.push("/picoCTF2023/moneyware");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    router.push("/picoCTF2023/hideme");
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
    <div className={styles.pcapPoisoningContainer}>
      {loading && <Preloader />}
      <div className={styles.pcapPoisoningTitle} style={{ color: "white"}}>
          PcapPoisoning
        <br />
      </div>
      <div className={styles.pcapPoisoningQuestion}>
        <p>
          <strong className={styles.command} style={{ color: "rgb(255, 255, 255)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          How about some hide and seek heh? Download this file and find the
          flag.
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILE: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/pico2023/trace.pcap"
            download
          >
            trace.pcap
          </a>
        </p>
      </div>
      <div className={styles.pcapPoisoningSolved}>
        <p>
          This is a simple forensics challenge. Since there was a <code>pcap</code> file, I used{" "}
          <a
            href="https://www.wireshark.org/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>Wireshark</code>
          </a>{" "}
          to view the packets.
          <br />
          <br />
          We can observe the most common protocol being used by going to{" "}
          <code>Statistics</code> 🡢 <code>Protocol Hierarchy </code>. We can see that the
          most exchanged packets is <code>TCP</code>.
        </p>
      </div>
      <div
        className={`${styles.pcapPoisoningEvidencePic} ${
          isZoomed1 ? styles.zoomed : ""
        }`}
        onClick={toggleZoom1}
      >
        <Image src="/pico2023/PcapPoisoning1.png" width={900} height={350} alt="logo" className={styles.pcapPoisoningImage}/>
      </div>
      <div className={styles.pcapPoisoningSolved}>
        <p>
          Using the filter feature in Wireshark and inputting this filter,{" "}
          <code>tcp contains "pico"</code> we will get the flag located in
          the Hex Dump.
          <br />
          <br />
          Use this{" "}
          <a
            href="https://cdn.comparitech.com/wp-content/uploads/2019/06/Wireshark-Cheat-Sheet-1.jpg.webp"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>Wireshark Cheat Sheet</code>
          </a>
          .
        </p>
      </div>
      <div
        className={`${styles.pcapPoisoningEvidencePic} ${
          isZoomed2 ? styles.zoomed : ""
        }`}
        onClick={toggleZoom2}
      >
        <Image src="/pico2023/PcapPoisoning2.png" width={900} height={450} alt="logo" className={styles.pcapPoisoningImage} />
      </div>
      <div className={styles.pcapPoisoningFlag}>
        <span>Flag: </span>

        <span style={{ color: "rgb(137, 207, 240)" }}>
          picoCTF{"{P64P_4N4L7S1S_SU55355FUL_f621fa37}"}
        </span>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button1} onClick={handlePrevious}>
          <div className={styles.buttonPrevious}>Previous</div>
          <div className={styles.buttonText}>money-ware</div>
          <span className={styles.arrow}><BsArrowLeft /></span>
        </button>
        <button className={styles.button2} onClick={handleNext}>
          <div className={styles.buttonNext}>Next</div>
          <div className={styles.buttonText}>hideme</div>
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