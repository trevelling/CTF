"use client";

import React, { useState, useEffect } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { IoCopy } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import Preloader from "@/app/ui/preloader";

export default function ASCII() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1);

    return () => clearTimeout(timeout);
  }, []);

  const router = useRouter();
  const handlePrevious = () => {
    router.push("/HACK@AC");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    router.push("/HACK@AC/VVS");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const [copied3, setCopied3] = useState(false);

  const copyCode1 = () => {
    navigator.clipboard.writeText(`
ECSM{j³v³scµtx_m¹_sxr¸eng³
    `);
    setCopied1(true);
    setTimeout(() => setCopied1(false), 50);
  };

  const copyCode2 = () => {
    navigator.clipboard.writeText(`
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
    `);
    setCopied2(true);
    setTimeout(() => setCopied2(false), 50);
  };

  const copyCode3 = () => {
    navigator.clipboard.writeText(`
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
    `);
    setCopied3(true);
    setTimeout(() => setCopied3(false), 50);
  };
  return (
    <div className={styles.asciiContainer}>
      {loading && <Preloader />}
      <div className={styles.asciiTitle} style={{ color: "white" }}>
        ASCII Me Anything
        <br />
      </div>
      <div className={styles.asciiQuestion}>
        <p>
          <strong
            className={styles.command}
            style={{ color: "rgb(255, 255, 255)" }}
          >
            ~# cat Question
          </strong>
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
        <button onClick={copyCode1} className={styles.copyButton}>
          {copied1 ? <IoCopyOutline /> : <IoCopy />}
        </button>
        <SyntaxHighlighter language="text" style={dracula}>
          {`ECSM{j³v³scµtx_m¹_sxr¸eng³`}
        </SyntaxHighlighter>
      </div>
      <div className={styles.asciiSolved}>
        <p>
          <code>Source.js</code>
        </p>
      </div>
      <div className={styles.asciiEvidence}>
        <button onClick={copyCode2} className={styles.copyButton}>
          {copied2 ? <IoCopyOutline /> : <IoCopy />}
        </button>
        <SyntaxHighlighter language="javascript" style={dracula}>
          {`var _0xb3e0 = [
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
const possibly = yes(flag);`}
        </SyntaxHighlighter>
      </div>
      <div className={styles.asciiSolved}>
        <p>
          The provided JS code defines a function (yes) that takes a string{" "}
          <code>_0x6c57x2</code> as input and performs XOR and addition
          operations on its characters to transform it into a new string{" "}
          <code>_0x6c57x5</code>. Then, it logs the result to the console with a
          prefix.
          <br />
          <br />
          To solve this challenge, we can inverse the operation that is getting
          applied to retrieve the flag.
        </p>
      </div>
      <div className={styles.asciiEvidence}>
        <button onClick={copyCode3} className={styles.copyButton}>
          {copied3 ? <IoCopyOutline /> : <IoCopy />}
        </button>
        <SyntaxHighlighter language="python" style={dracula}>
          {`# Original text
output_text = "ECSM{j³v³scµtx_m¹_sxr¸eng³"

def reverse_yes(input):
  # Subtract 0x42 from each character
  reverse = ''.join([chr(ord(char) - 0x42) for char in input])
        
  # XOR each character with 0x42
  original_input = ''.join([chr(ord(char) ^ 0x42) for char in reverse])
        
  return original_input
        
# Reverse the transformation to get the original input
original_input = reverse_yes(output_text)
        
print(original_input)`}
        </SyntaxHighlighter>
      </div>
      <div className={styles.asciiFlag}>
        <span>Flag: </span>

        <span style={{ color: "rgb(137, 207, 240)" }}>
          ACSI{"{j3v3sc1pt_i5_str4ang3}"}
        </span>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button1} onClick={handlePrevious}>
          <div className={styles.buttonPrevious}>Previous</div>
          <div className={styles.buttonText}>HACK@AC</div>
          <span className={styles.arrow}><BsArrowLeft /></span>
        </button>
        <button className={styles.button2} onClick={handleNext}>
          <div className={styles.buttonNext}>Next</div>
          <div className={styles.buttonText}>Very Vulnerable Site</div>
          <span className={styles.arrow}><BsArrowRight /></span>
        </button>
      </div>
      <div className={styles.line}></div>
      <footer className={styles.footer}>    
          &copy; 2024 Tev
      </footer>
    </div>
  );
}
