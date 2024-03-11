"use client";

import React, { useState, useEffect } from "react";
import Preloader from "@/app/ui/preloader";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

export default function HACKBASH() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1);

    return () => clearTimeout(timeout);
  }, []);
  const router = useRouter();
  const handlePrevious = () => {
    router.push("/BrainHack2024")
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    router.push("/HACK@AC/ASCII");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={styles.hackbashContainer}>
      {loading && <Preloader />}
      <div className={styles.hackbashTitle}>
        <a
          href="https://8059blank.github.io/hackac/HACK@AC-Information"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          HACKBASH x A.YCEP 🕵🏼‍♂️
        </a>
        <br />
      </div>
      <div className={styles.hackbash}>
        <p>
          HACKBASH x A.YCEP is a 2 day workshop that included a final physical CTF (selected participants). These are my writeups for the challenges I completed.
        </p>
      </div>
      <table className={styles.hackbashCategories}>
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
                href="../bitsCTF/DFIR1"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                ----
              </a>
            </td>
            <td>----</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.buttonContainer}>
        <button className={styles.button1} onClick={handlePrevious}>
          <div className={styles.buttonPrevious}>Previous</div>
          <div className={styles.buttonText}>BrainHack CDDC 2024</div>
          <span className={styles.arrow}><BsArrowLeft /></span>
        </button>
        <button className={styles.button2} onClick={handleNext}>
          <div className={styles.buttonNext}>Next</div>
          <div className={styles.buttonText}>ASCII Me Anything</div>
          <span className={styles.arrow}><BsArrowRight /></span>
        </button>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}