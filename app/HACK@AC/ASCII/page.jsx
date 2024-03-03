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
          <strong className={styles.command} style={{ color: "rgb(255, 255, 255)" }}>~# cat Question</strong>
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
            href="/HACK@AC/output.txt"
            download
          >
            output.txt
          </a>
          ,{" "}
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/HACK@AC/source.js"
            download
          >
            source.js
          </a>
        </p>
      </div>
      <div className={styles.asciiSolved}>
        <p>
          <code>Output.txt</code>
        </p>
      </div>
      <div className={styles.asciiEvidence}>
        <SyntaxHighlighter language="text" style={gruvboxDark}>
          {`
ECSM{j³v³scµtx_m¹_sxr¸eng³
          `}
        </SyntaxHighlighter>
      </div>
      <div className={styles.asciiSolved}>
        <p>
          <code>Source.js</code>
        </p>
      </div>
      <div className={styles.asciiEvidence}>
        <SyntaxHighlighter language="javascript" style={gruvboxDark}>
          {`
var _0xb3e0 = [
  "",
  "\x6A\x6F\x69\x6E",
  "\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74",
  "\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65",
  "\x6D\x61\x70",
  "\x66\x72\x6F\x6D",
  "\x45\x6E\x63\x72\x79\x70\x74\x65\x64\x20\x73\x74\x72\x69\x6E\x67\x3A\x20",
  "\x6C\x6F\x67",
];
function yes(_0x6c57x2) {
  const _0x6c57x3 = Array[_0xb3e0[5]](_0x6c57x2)
    [_0xb3e0[4]]((_0x6c57x4) => {
      return String[_0xb3e0[3]](_0x6c57x4[_0xb3e0[2]](0) ^ 0x42);
    })
    [_0xb3e0[1]](_0xb3e0[0]);
  const _0x6c57x5 = Array[_0xb3e0[5]](_0x6c57x3)
    [_0xb3e0[4]]((_0x6c57x4) => {
      return String[_0xb3e0[3]](_0x6c57x4[_0xb3e0[2]](0) + 0x42);
    })
    [_0xb3e0[1]](_0xb3e0[0]);
  return _0x6c57x5;
}
const possibly = yes(flag);
          `}
        </SyntaxHighlighter>
      </div>

      <div className={styles.asciiSolved}>
        <p>
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
