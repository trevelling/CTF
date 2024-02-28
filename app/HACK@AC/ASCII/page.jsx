import React from "react";
import styles from "./page.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function ASCII() {
  return (
    <div className={styles.asciiContainer}>
      <div className={styles.asciiTitle} style={{ color: "white"}}>
          ASCII Me Anything
        <br />
      </div>
      <div className={styles.asciiQuestion}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          I got this weird output from this program, can you help me figure out
          the input?
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILES: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/ascii_output.txt"
            download
          >
            output.txt
          </a>
          ,{" "}
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/ascii_source.js"
            download
          >
            source.js
          </a>
        </p>
      </div>
      <div className={styles.asciiSolved}>
        <p>
          <code>Output.txt</code> showed a cryptic like-flag, while{" "}
          <code>source.js</code> had code that returns the flag to us.
          <br />
          <br />
          The provided JS code defines a function (yes) that takes a string{" "}
          <code>_0x6c57x2</code>{" "}
          as input and performs XOR and addition operations on its characters to
          transform it into a new string <code>_0x6c57x5</code>. Then, it
          logs the result to the console with a prefix.
          <br />
          <br />
          To solve this challenge, we can inverse the operation that is getting
          applied to retrieve the flag.
        </p>
      </div>
      <div className={styles.asciiEvidence}>
        <SyntaxHighlighter language="python" style={gruvboxDark}>
          {`
# Original text
output_text = "ECSM{j³v³scµtx_m¹_sxr¸eng³"

def reverse_yes(input):
  # Subtract 0x42 from each character
  step1 = ''.join([chr(ord(char) - 0x42) for char in input])
        
  # XOR each character with 0x42
  original_input = ''.join([chr(ord(char) ^ 0x42) for char in step1])
        
  return original_input
        
# Reverse the transformation to get the original input
original_input = reverse_yes(output_text)
        
print(original_input)
          `}
        </SyntaxHighlighter>
      </div>
      <div className={styles.asciiFlag}>
        <span>Flag: </span>

        <span style={{ color: "rgb(137, 207, 240)" }}>
          ACSI{"{j3v3sc1pt_i5_str4ang3}"}
        </span>
      </div>
    </div>
  );
}
