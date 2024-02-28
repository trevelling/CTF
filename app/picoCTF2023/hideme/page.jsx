"use client";

import React from "react";
import styles from "./page.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Hideme() {
  return (
    <div className={styles.hideMeContainer}>
      <div className={styles.hideMeTitle} style={{ color: "white"}}>
          hideme
        <br />
      </div>
      <div className={styles.hideMeQuestion}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          Every file gets a flag. The SOC analyst saw one image been sent back
          and forth between two people. They decided to investigate and found
          out that there was more than what meets the eye here.
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILE: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/pico_flag.png"
            download
          >
            flag.png
          </a>
        </p>
      </div>
      <div className={styles.hideMeSolved}>
        <p>
          Since this file was a png file, I used{" "}
          <a
            href="https://exiftool.org/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>exiftool</code>
          </a>{" "}
          to carve out any other files that are hidden. Using the{" "}
          <code>-e</code> to extract, low and behold we have extracted
          different hidden files.
        </p>
      </div>
      <div className={styles.hideMeEvidence}>
        <SyntaxHighlighter language="bash" style={gruvboxDark}>
  {`
┌──(tev㉿kali)-[~/pico]
└─$ binwalk -e flag.png        

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             PNG image, 512 x 504, 8-bit/color RGBA, non-interlaced
41            0x29            Zlib compressed data, compressed
39739         0x9B3B          Zip archive data, at least v1.0 to extract, name: secret/
39804         0x9B7C          Zip archive data, at least v2.0 to extract, compressed size: 2858, uncompressed size: 3015, name: secret/flag.png
42897         0xA791          End of Zip archive, footer length: 22
  `}
</SyntaxHighlighter>
      </div>
      <div className={styles.hideMeSolved}>
        <p>
          Upon extracting I got <code>_flag.png.extracted</code>, and
          discovered a <code>secret</code> directory in it. The{" "}
          <code>secret</code> directory contains yet another intriguing file{" "}
          <code>flag.png</code>.
        </p>
      </div>
      <div className={styles.hideMeEvidence}>
        <SyntaxHighlighter language="bash" style={gruvboxDark}>
  {`
┌──(tev㉿kali)-[~/pico]
└─$ cd _flag.png.extracted       
                                                                                   
┌──(tev㉿kali)-[~/pico/_flag.png.extracted]
└─$ ls
29  29.zlib  9B3B.zip  secret
                                                                                   
┌──(tev㉿kali)-[~/pico/_flag.png.extracted]
└─$ cd secret             
                                                                                   
┌──(tev㉿kali)-[~/pico/_flag.png.extracted/secret]
└─$ ls
flag.png
  `}
</SyntaxHighlighter>
      </div>
      <div className={styles.hideMeSolved}>
        <p>
          To see what is inside <code>flag.png</code>, we can use{" "}
          <a
            href="https://help.gnome.org/users/eog/stable/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>eog</code>
          </a>
          , to view the <code>flag.png</code>. This will
          give us the flag.
        </p>
      </div>
      <div className={styles.hideMeEvidence}>
        <SyntaxHighlighter language="bash" style={gruvboxDark}>
  {`                                                                       
┌──(tev㉿kali)-[~/pico/_flag.png.extracted/secret]
└─$ eog flag.png
  `}
</SyntaxHighlighter>
      </div>
      <div className={styles.hideMeFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          picoCTF{"{Hiddinng_An_imag3_within_@n_ima9e_96539bea}"}
        </span>
      </div>
    </div>
  );
}


