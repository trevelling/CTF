"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function OOP() {
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
      <div className={styles.oopTitle}>
        <a
          href="https://blog.yes-but-no.org/ybn-ctf-2023/ctf"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          Object Orientated Programming
        </a>
        <br />
      </div>
      <div className={styles.oopQuestion}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          Objects are everywhere, even in the most unlikely of places.
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILE: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/oop_objects.pcap"
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
          Since this is a forensics challenge with a <strong>pcap</strong> file
          , we can use{" "}
          <a
            href="https://www.wireshark.org/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            Wireshark
          </a>{" "}
          to view the packets.
          <br />
          <br /> I scrolled through the first few packets whilst looking at
          their hex dump and I noticed a packet that had a jpeg image in it. I
          thought at first that opening it would give me the flag but when I
          follow the HTTP stream, I saw <strong>flag.png</strong>.
        </p>
      </div>
      <div
        className={`${styles.oopEvidence} ${isZoomed1 ? styles.zoomed : ""}`}
        onClick={toggleZoom1}
      >
        <Image src="/oop1.png" width={800} height={500} alt="logo" />
      </div>

      <div className={styles.oopSolved}>
        <p>
          To see it clearer, we can extract the 3 files shown. We can do this by
          going to
          <strong> View</strong> 🡢 <strong>Apply as Filter</strong> 🡢{" "}
          <strong>ASCII</strong>.
        </p>
      </div>
      <div
        className={`${styles.oopEvidence} ${isZoomed2 ? styles.zoomed : ""}`}
        onClick={toggleZoom2}
      >
        <Image src="/oop2.png" width={800} height={140} alt="logo" />
      </div>
      <div className={styles.oopSolved}>
        <p>
          From there, the file of interest is <strong>flag.png</strong>. I saved
          and opened the file, giving us the flag.
        </p>
      </div>
      <div
        className={`${styles.oopEvidence} ${isZoomed3 ? styles.zoomed : ""}`}
        onClick={toggleZoom3}
      >
        <Image src="/oop3.png" width={800} height={400} alt="logo" />
      </div>
      <div className={styles.oopFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          ACSI{"{s0_m4ny_0bj4c+5}"}
        </span>
      </div>
    </div>
  );
}
