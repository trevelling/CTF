"use client";

import React, { useState, useEffect } from "react";
import Preloader from "@/app/ui/preloader";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

export default function PicoCTF() {
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
    <div className={styles.pico2023Container}>
      {loading && <Preloader />}
      <div className={styles.pico2023Title}>
        <a
          href="https://play.picoctf.org/practice?originalEvent=72&page=1"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          picoCTF 2023 🚩
        </a>
        <br />
      </div>
      <div className={styles.pico2023}>
        <p>All the challenges I solved during the 2023 competition😃!</p>
        <p></p>
      </div>
      <table className={styles.pico2023Categories}>
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
                money-ware
              </a>
            </td>
            <td>OSINT</td>
          </tr>
          <tr>
            <td>
              <a
                href="../picoCTF2023/PcapPoisoning"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                PcapPoisoning
              </a>
            </td>
            <td>Forensics</td>
          </tr>
          <tr>
            <td>
              <a
                href="../picoCTF2023/hideme"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                hideme
              </a>
            </td>
            <td>Forensics</td>
          </tr>
          <tr>
            <td>
              <a
                href="../picoCTF2023/whoisit"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                who is it
              </a>
            </td>
            <td>Forensics</td>
          </tr>
          <tr>
            <td>
              <a
                href="../picoCTF2023/FindAndOpen"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                FindAndOpen
              </a>
            </td>
            <td>Forensics</td>
          </tr>
          <tr>
            <td>
              <a
                href="../picoCTF2023/MSB"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                MSB
              </a>
            </td>
            <td>Forensics</td>
          </tr>

          <tr>
            <td>
              <a
                href="../picoCTF2023/HideToSee"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                HideToSee
              </a>
            </td>
            <td>Steganography</td>
          </tr>

          <tr>
            <td>
              <a
                href="../picoCTF2023/rotation"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                rotation
              </a>
            </td>
            <td>Cryptography</td>
          </tr>
          <tr>
            <td>
              <a
                href="../picoCTF2023/Reverse"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                Reverse
              </a>
            </td>
            <td>Reverse Engineering</td>
          </tr>
          <tr>
            <td>
              <a
                href="../picoCTF2023/Nowayout"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                No way out
              </a>
            </td>
            <td>Reverse Engineering</td>
          </tr>
          <tr>
            <td>
              <a
                href="../picoCTF2023/SafeOpener2"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                Safe Opener 2
              </a>
            </td>
            <td>Reverse Engineering</td>
          </tr>

          <tr>
            <td>
              <a
                href="../picoCTF2023/timer"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                timer
              </a>
            </td>
            <td>Reverse Engineering</td>
          </tr>
          <tr>
            <td>
              <a
                href="../picoCTF2023/VirtualMachine0"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                Virtual Machine 0
              </a>
            </td>
            <td>Reverse Engineering</td>
          </tr>
          <tr>
            <td>
              <a
                href="../picoCTF2023/InvisibleWORDs"
                style={{ color: "rgb(76, 211, 76)", textDecoration: "none" }}
              >
                Invisible WORDs
              </a>
            </td>
            <td>Forensics</td>
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
