"use client";

import React from "react";
import styles from "./page.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Reverse() {
  return (
    <div className={styles.reverseContainer}>
      <div className={styles.reverseTitle}>
        <a
          href="https://blog.yes-but-no.org/ybn-ctf-2023/ctf"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          Reverse
        </a>
        <br />
      </div>
      <div className={styles.reverseQuestion}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          Try reversing this file? Can ya? I forgot the password to this file.
          Please find it for me?
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILE: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/pico_ret"
            download
          >
            ret.elf
          </a>
        </p>
      </div>
      <div className={styles.reverseSolved}>
        <p>
          This challenge was a straight forward reverse engineering task. Upon
          opening the <strong>ret</strong> file, it displayed numerous
          unreadable symbols. Thus, I utilized <strong>strings</strong> on the
          file to extract readable strings and <strong>grep</strong> to search
          for the string
          <strong>"pico"</strong> within the extracted strings, which got me the
          flag.
        </p>
      </div>
      <div className={styles.reverseEvidence}>
        <SyntaxHighlighter language="bash" style={gruvboxDark}>
          {`
┌──(tev㉿kali)-[~/pico]
└─$ chmod _x ret

┌──(tev㉿kali)-[~/pico]
└─$ ./ret
Enter the password to unlock this file: password
You entered: password
Access denied

┌──(tev㉿kali)-[~/pico]
└─$ strings ret | grep pico
picoCTF{h
Password correct, please see flag: picoCTF{3lf_r4v4r5ing_succe55ful_1de05085}
  `}
        </SyntaxHighlighter>
      </div>
      <div className={styles.reverseFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          picoCTF{"{3lf_r4v4r5ing_succe55ful_1de05085}"}
        </span>
      </div>
    </div>
  );
}
