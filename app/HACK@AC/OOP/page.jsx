"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

export default function OOP() {
  const router = useRouter();
  const handlePrevious = () => {
    router.push("/HACK@AC/Grass");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    router.push("/HACK@AC/Stream");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
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
    <div className={styles.oopContainer}>
      <div className={styles.oopTitle} style={{ color: "white"}}>
          Object Orientated Programming
        <br />
      </div>
      <div className={styles.oopQuestion}>
        <p>
          <strong className={styles.command} style={{ color: "rgb(255, 255, 255)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          Objects are everywhere, even in the most unlikely of places.
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILE: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/HACK@AC/objects.pcap"
            download
          >
            objects.pcap
          </a>
          <br />
          <br />
        </p>
      </div>
      <div className={styles.oopSolved}>
        <p>
          Since this is a forensics challenge with a <code>pcap</code> file
          , we can use{" "}
          <a
            href="https://www.wireshark.org/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>Wireshark</code>
          </a>{" "}
          to view the packets.
          <br />
          <br /> I scrolled through the first few packets whilst looking at
          their hex dump and I noticed a packet that had a jpeg image in it. I
          thought at first that opening it would give me the flag but when I
          follow the HTTP stream, I saw <code>flag.png</code>.
        </p>
      </div>
      <div
        className={`${styles.oopEvidencePic} ${isZoomed1 ? styles.zoomed : ""}`}
        onClick={toggleZoom1}
      >
        <Image src="/HACK@AC/oop1.png" width={900} height={600} alt="logo" className={styles.oopImage}/>
      </div>

      <div className={styles.oopSolved}>
        <p>
          To see it clearer, we can extract the 3 files shown. We can do this by
          going to
          <code> View</code> 🡢 <code>Apply as Filter</code> 🡢{" "}
          <code>ASCII</code>.
        </p>
      </div>
      <div
        className={`${styles.oopEvidencePic} ${isZoomed2 ? styles.zoomed : ""}`}
        onClick={toggleZoom2}
      >
        <Image src="/oop2.png" width={900} height={150} alt="logo" className={styles.oopImage} />
      </div>
      <div className={styles.oopSolved}>
        <p>
          From there, the file of interest is <code>flag.png</code>. I saved
          and opened the file, giving us the flag.
        </p>
      </div>
      <div
        className={`${styles.oopEvidencePic} ${isZoomed3 ? styles.zoomed : ""}`}
        onClick={toggleZoom3}
      >
        <Image src="/oop3.png" width={900} height={500} alt="logo" className={styles.oopImage} />
      </div>
      <div className={styles.oopFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          ACSI{"{s0_m4ny_0bj4c+5}"}
        </span>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button1} onClick={handlePrevious}>
          <div className={styles.buttonPrevious}>Previous</div>
          <div className={styles.buttonText}>Grass is Greener</div>
          <span className={styles.arrow}><BsArrowLeft/></span>
        </button>
        <button className={styles.button2} onClick={handleNext}>
          <div className={styles.buttonNext}>Next</div>
          <div className={styles.buttonText}>Stream of Consciousness</div>
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