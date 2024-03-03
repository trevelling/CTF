"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function MSB() {
  const [isZoomed1, setIsZoomed1] = useState(false);
  const [isZoomed2, setIsZoomed2] = useState(false);

  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };

  const toggleZoom2 = () => {
    setIsZoomed2(!isZoomed2);
  };
  return (
    <div className={styles.msbContainer}>
      <div className={styles.msbTitle} style={{ color: "white"}}>
          MSB
        <br />
      </div>
      <div className={styles.msbQuestion}>
        <p>
          <strong className={styles.command} style={{ color: "rgb(255, 255, 255)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
        This image passes LSB statistical analysis, but we can't help but think there must be something to the visual artifacts present in this image...
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILES: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/pico2023/Ninja-and-Prince-Genji-Ukiyoe-Utagawa-Kunisada.flag.png"
            download
          >
            Ninja-and-Prince-Genji-Ukiyoe-Utagawa-Kunisada.flag.png
          </a>
          <br />
          <br />
        </p>
      </div>
      <div className={styles.msbSolved}>
        <p>
          The image <code>Ninja-and-Prince-Genji-Ukiyoe-Utagawa-Kunisada.flag.png</code>, when opened up using{" "}
          <a
            href="https://help.gnome.org/users/eog/stable/commandline.html.en"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>eog</code>
          </a> 
         {" "}we see a distored/corrupted picture of a samurai with many different <code>RGB</code> colours.
          <br />
          <br />
          Thus, we can use{" "}
          <a
            href="https://help.gnome.org/users/eog/stable/commandline.html.en"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>stegsovle</code>
          </a> 
          {" "}to manipulate it. We can use the <code>data extract</code> feature under <code>Analyze</code>, to extract data from the image. 
          <br />
          <br />
          The challenge talks about{" "}
          <a
            href="https://www.analog.com/en/resources/glossary/lsb.html"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>LSB</code>
          </a> 
          . Selecting the bit planes for <code>red, green, and blue channels (e.g., red 7, green 7, blue 7)</code>, we are extracting the <code>LSB</code> of each color channel. 
          Each pixel in a digital image is composed of red, green, and blue color components. Each color component is represented by an <code>8-bit value (0-255)</code>, where the least significant bit is the rightmost bit <code>(bit 0) </code>and the most significant bit is the leftmost bit <code>(bit 7)</code>. 
          By selecting the bit plane 7 for each color channel, we can extract the 7th bit (counting from the right) of the red, green, and blue components of each pixel. This process reveals any hidden data that might have been encoded in the least significant bits of the image.
        </p>
      </div>
      <div
        className={`${styles.msbEvidence} ${isZoomed1 ? styles.zoomed : ""}`}
        onClick={toggleZoom1}
      >
        <Image src="/pico2023/MSB1.png" width={800} height={400} alt="logo" className={styles.vm0Image} />
      </div>
      <div className={styles.msbSolved}>
        <p>
          We can save the output of the plaintext to a file called <code>out.txt</code>. When we view the file and search for <code>pico</code>, we will get the flag.
        </p>
      </div>
      <div
        className={`${styles.msbEvidence} ${isZoomed2 ? styles.zoomed : ""}`}
        onClick={toggleZoom2}
      >
        <Image src="/pico2023/MSB2.png" width={600} height={400} alt="logo" className={styles.vm0Image} />
      </div>
      <div className={styles.msbEvidence}>
        <SyntaxHighlighter language="bash" style={gruvboxDark}>
          {`
Part of out.txt:

720a70756e697368 6d656e7420756e6c  r.punish ment unl
6573732068652063 6f6d6d6974732073  ess he c ommits s
6f6d65206e657720 6f6666656e63652e  ome new  offence.
220a7069636f4354 467b31355f793075  ".picoCT F{15_y0u
725f71756535375f 7175317830373163  r_que57_ qu1x071c
5f30725f68337230 31635f6565336362  _0r_h3r0 1c_ee3cb
3464387d0a0a2254 686f752068617374  4d8}.."T hou hast
2073616964207765 6c6c20616e642068   said we ll and h
6974207468652070 6f696e742c222061  it the p oint," a
6e73776572656420 446f6e2051756978  nswered  Don Quix

/pico (^W)
  `}
        </SyntaxHighlighter>
      </div>
      <div className={styles.msbFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          picoCTF{"{15_y0ur_que57_qu1x071c_0r_h3r01c_ee3cb4d8}"}
        </span>
      </div>
    </div>
  );
}
