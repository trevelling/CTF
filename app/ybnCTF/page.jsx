"use client";

import React, { useState, useEffect } from "react";
import Preloader from "@/app/ui/preloader";
import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

export default function YBNCTF() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1);

    return () => clearTimeout(timeout);
  }, []);
  const router = useRouter();
  const handlePrevious = () => {
    router.push("/picoCTF2023")
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    router.push("/home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };
  return (
    <div className={styles.ybnContainer}>
      {loading && <Preloader />}
      <div className={styles.ybnTitle}>
        <a
          href="https://blog.yes-but-no.org/ybn-ctf-2023/ctf"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          YBNCTF ❌
        </a>
        <br />
      </div>
      <div className={styles.ybn}>
        <p>
          We got 8th place! One of the first serious CTFs that I played and
          learnt a lot of new tools from it!
          <br />
          Though, I do not have a write up for this as it was quite some time
          ago 😔.
        </p>
      </div>
      <div
        className={`${styles.ybnCertification} ${isZoomed ? styles.zoomed : ""}`}
        onClick={toggleZoom}
      >
        <Image src="/YBNCTF/ybnctf.jpg" width={735} height={450} alt="logo" className={styles.ybnImage}/>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button1} onClick={handlePrevious}>
          <div className={styles.buttonPrevious}>Previous</div>
          <div className={styles.buttonText}>picoCTF 2023</div>
          <span className={styles.arrow}><BsArrowLeft /></span>
        </button>
        <button className={styles.button2} onClick={handleNext}>
          <div className={styles.buttonNext}>Next</div>
          <div className={styles.buttonText}>Home</div>
          <span className={styles.arrow}><BsArrowRight /></span>
        </button>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}
