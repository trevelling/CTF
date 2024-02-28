"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function VM0() {
  const [isZoomed1, setIsZoomed1] = useState(false);

  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };
  return (
    <div className={styles.vm0Container}>
      <div className={styles.vm0Title} style={{ color: "white"}}>
          Virtual Machine 0
        <br />
      </div>
      <div className={styles.vm0Question}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
        Can you crack this black box? We grabbed this design doc from enemy servers: <code>Download</code>. We know that the rotation of the red axle is input and the rotation of the blue axle is output. The following input gives the flag as output: <code>Download</code>.
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILES: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/pico_Virtual-Machine-0.zip"
            download
          >
            Virtual-Machine-0.zip
          </a>
          ,{" "}
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/pico_input.txt"
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
          {" "} type file using{" "}
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
        className={`${styles.vm0Evidence} ${isZoomed1 ? styles.zoomed : ""}`}
        onClick={toggleZoom1}
      >
        <Image src="/pico_vm0.png" width={800} height={400} alt="logo" />
      </div>
      <div className={styles.vm0Solved}>
        <p>
          The challenge description told us how to get the flag. We need to see how many times the <code>red gear</code> goes around the <code>blue gear</code>
          . The driver gear (the bigger one) has 40 teeths, while the driven gear (the smaller one) has 8 teeths. So, if the driver gear makes 1 rotation, the driven gear will make <code>5</code> rotations. Multiplying this number in python with <code>input.txt</code>, converting the value to hex and then ASCII yields the flag.
        </p>
      </div>
      <div className={styles.vm0Evidence}>
        <SyntaxHighlighter language="python" style={gruvboxDark}>
          {`
x = 39722847074734820757600524178581224432297292490103995916782275668358702105
x = x * 5
hex_x = hex(x)
flag = bytes.fromhex(hex_x[2:]).decode('ascii')
print(flag)
  `}
        </SyntaxHighlighter>
      </div>
      <div className={styles.vm0Flag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          ACSI{"{g34r5_0f_m0r3_5ca97824}"}
        </span>
      </div>
    </div>
  );
}