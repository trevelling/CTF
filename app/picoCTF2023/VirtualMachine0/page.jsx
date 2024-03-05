"use client";

import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function VM0() {
  const router = useRouter();
  const handlePrevious = () => {
    router.push("/picoCTF2023/timer");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    router.push("/ybnCTF");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isZoomed1, setIsZoomed1] = useState(false);

  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };

  const [copied1, setCopied1] = useState(false);

  const copyCode1 = () => {
    navigator.clipboard.writeText(`
x = 39722847074734820757600524178581224432297292490103995916782275668358702105
x = x * 5
hex_x = hex(x)
flag = bytes.fromhex(hex_x[2:]).decode('ascii')
print(flag)
    `);
    setCopied1(true);
    setTimeout(() => setCopied1(false), 1500);
  };
  return (
    <div className={styles.vm0Container}>
      <div className={styles.vm0Title} style={{ color: "white"}}>
          Virtual Machine 0
        <br />
      </div>
      <div className={styles.vm0Question}>
        <p>
          <strong className={styles.command} style={{ color: "rgb(255, 255, 255)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
        Can you crack this black box? We grabbed this design doc from enemy servers: <code>Download</code>. We know that the rotation of the red axle is input and the rotation of the blue axle is output. The following input gives the flag as output: <code>Download</code>.
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILES: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/pico2023/Virtual-Machine-0.zip"
            download
          >
            Virtual-Machine-0.zip
          </a>
          ,{" "}
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/pico2023/input.txt"
            download
          >
            input.txt
          </a>
          <br />
          <br />
        </p>
      </div>
      <div className={styles.vm0Solved}>
        <p>
          Unzipping <code>Virtual-Machine-0.zip</code>, gives us{" "}
          <code>Virtual-Machine-0.dae</code>. We can open a{" "}
          <a
            href="https://en.wikipedia.org/wiki/COLLADA"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>COLLADA</code>
          </a> 
          {" "}file using{" "}
          <a
            href="https://www.blender.org/download/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>blender</code>
          </a>
         . Using the tools in blender, we can dismantle the items around to reveal the two <code>red</code> and <code>blue</code> gear.
          <br />
        </p>
      </div>
      <div
        className={`${styles.vm0EvidencePic} ${isZoomed1 ? styles.zoomed : ""}`}
        onClick={toggleZoom1}
      >
        <Image src="/pico2023/vm01.png" width={900} height={500} alt="logo" className={styles.vm0Image} />
      </div>
      <div className={styles.vm0Solved}>
        <p>
          The challenge description told us how to get the flag. We need to see how many times the <code>red gear</code> goes around the <code>blue gear</code>
          . The driver gear (the bigger one) has 40 teeths, while the driven gear (the smaller one) has 8 teeths. So, if the driver gear makes 1 rotation, the driven gear will make <code>5</code> rotations. Multiplying this number in python with <code>input.txt</code>, converting the value to <code>hex</code> and then <code>ASCII</code> yields the flag.
        </p>
      </div>
      <div className={styles.vm0Evidence}>
        <button onClick={copyCode1} className={styles.copyButton}>
          {copied1 ? <IoCopyOutline /> : <IoCopyOutline />}
        </button>
        <SyntaxHighlighter language="python" style={dracula}>
          {`x = 39722847074734820757600524178581224432297292490103995916782275668358702105
x = x * 5
hex_x = hex(x)
flag = bytes.fromhex(hex_x[2:]).decode('ascii')
print(flag)`}
        </SyntaxHighlighter>
      </div>
      <div className={styles.vm0Flag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          ACSI{"{g34r5_0f_m0r3_5ca97824}"}
        </span>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button1} onClick={handlePrevious}>
          <div className={styles.buttonPrevious}>Previous</div>
          <div className={styles.buttonText}>timer</div>
          <span className={styles.arrow}></span>
        </button>
        <button className={styles.button2} onClick={handleNext}>
          <div className={styles.buttonNext}>Next</div>
          <div className={styles.buttonText}>YBN CTF 2023</div>
          <span className={styles.arrow}></span>
        </button>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}