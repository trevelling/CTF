"use client";

import React, { useState, useEffect } from "react";
import Preloader from "@/app/ui/preloader";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

export default function PicoCTF2024() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1);

    return () => clearTimeout(timeout);
  }, []);
  const router = useRouter();
  const handlePrevious = () => {
    router.push("/bitsCTF")
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    router.push("/picoCTF2023/moneyware");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={styles.pico2024Container}>
      {loading && <Preloader />}
      <div className={styles.pico2024Title}>
        <a
          href="https://play.picoctf.org/practice?originalEvent=72&page=1"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          picoCTF 2024 🚩
        </a>
        <br />
      </div>
      <div className={styles.pico2024}>
        <p>All the challenges I solved during the 2024 competition😃!</p>
        <p></p>
      </div>
      <table className={styles.pico2024Categories}>
        <thead>
          <tr>
            <th>Challenge Name</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a
                href="../picoCTF2023/moneyware"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                ---
              </a>
            </td>
            <td>----</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.buttonContainer}>
        <button className={styles.button1} onClick={handlePrevious}>
          <div className={styles.buttonPrevious}>Previous</div>
          <div className={styles.buttonText}>BitsCTF 2024</div>
          <span className={styles.arrow}><BsArrowLeft /></span>
        </button>
        <button className={styles.button2} onClick={handleNext}>
          <div className={styles.buttonNext}>Next</div>
          <div className={styles.buttonText}>moneyware</div>
          <span className={styles.arrow}><BsArrowRight /></span>
        </button>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}
