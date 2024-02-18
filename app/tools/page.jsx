"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

const steganography = [
  { name: "Aperi'Solve [Static analysis]" },
  { name: "Steg Online [Modify/extract data from images]" },
  { name: "Steg Solve [View hidden text in images]" },
  { name: "Steg Hide [Hiding sensitive data]" },
  { name: "Steganographic Decoder [Encoder/Decoder of files in images]" },
  { name: "Image Colour Picker" },
];

const revEngineering = [
  { name: "Online Decomplier [Decompile Java classes, APKs]" },
  { name: "MobSF [Decomplie and reverse APK files]" },
  { name: "JADX [Producing Java source code from Andriod Dex and APK files]" },
  { name: "Ghidra [Analyzing and decompling binary code]" },
  { name: "IDA Pro [Disassembler and debugger]" },
  { name: "Radare2 [CLI]" },
  { name: "Cutter [GUI for Radare2]" },
  { name: "OllyDbg [Analyzing and reversing engineered binary code]" },
  { name: "Binary Ninja [Advanced analysis and debugging]" },
  { name: "Immunity Debugger" },
  { name: "x64dbg" },
  {
    name: "Jeb Decomplier [Transforms machine code to higher-level programming language]",
  },
];

const webExploitation = [
  { name: "BurpSuite [Scanning, intercepting and exploiting vul]" },
  { name: "OWASP ZAP [Scanner]" },
  { name: "SQLMap [Detecting and exploting SQL]" },
  { name: "Nikto [Checks for common vulnerabilties]" },
  { name: "Nmap [Network Scanner]" },
  { name: "XSSer [Detecting and exploting XSS]" },
  { name: "Subdomain Finder [Find subdomains of URLs including hidden ones]" },
  { name: "Traversal Archives" },
  { name: "JSONP Endpoints [Well known endpoints]" },
  { name: "Web Payloads [Well known Payloads]" },
];

const binaryExploitation = [{ name: "" }];

const OSINT = [
  { name: "Wayback Machine [Webpage archive at a certain time]" },
  { name: "Sherlock [Search social media accounts by name]" },
  { name: "Email lookup [Retrieve information linked to an email]" },
  { name: "Google image reverse search" },
];

export default function Tools() {
  return (
    <div className={styles.toolsContainer}>
      <div className={styles.tools}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}> ~# cat Tools</strong>
          <br />
        </p>
        <p>
          Different open-source tools recommended and used during CTFs are
          documented here 🔨.
        </p>
      </div>
      <div className={styles.forensicsTitle}>
        <div style={{ color: "rgb(76, 211, 76)" }}>~# ls -la Forensics</div>
      </div>
      <table className={styles.toolstable}>
        <thead>
          <tr>
            <th>Tool Name</th>
            <th>Type</th>
            <th>Use</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Autopsy</td>
            <td>Open-source tool</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>Disk</strong>;
              recovery tool with data carving{" "}
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Binwalk</td>
            <td>Open-source tool</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>Files</strong>;
              analysing binary files for embeded files and executable code
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Foremost</td>
            <td>Open-source tool</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>Files</strong>;
              forensic program to recover lost files based on their headers,
              search for (doc,jpg,pdf,xls) in files
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Wireshark</td>
            <td>Open-source tool</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>
                Network packet analyzer
              </strong>
              ; network protocol analyzer to look at recorded network traffic
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>TcpDump</td>
            <td>CLI tool</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>
                Network packet analyzer
              </strong>
              ; displays the TCP/IP and other packets being received and
              transmitted over the network
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Volatility</td>
            <td>CLI tool</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>
                Memory analyzer
              </strong>
              ; analyses volatile data in memory dump - includes the browsing
              history, clipboard contents, and chat messages presented in the
              short-term memory storage.
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.cryptographyTitle}>
        <div style={{ color: "rgb(76, 211, 76)" }}>~# ls -la Cryptography</div>
      </div>
      <table className={styles.toolstable}>
        <thead>
          <tr>
            <th>Tool Name</th>
            <th>Type</th>
            <th>Use</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>dCode</td>
            <td>Website</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>
                Crypto functions
              </strong>
              ; decryption, ciphertexts, cheating at letter games, solve riddles, treasure hunts, etc.
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Hash Cat</td>
            <td>CLI tool</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>
                Password cracking
              </strong>
              ; powerful password recovery tool that supports various hash types and attack modes.
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>John The Ripper</td>
            <td>Open-source tool</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>
                Password cracking
              </strong>
              ; fast password cracker that can detect weak passwords and perform dictionary attacks
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>GnuPG</td>
            <td>Open-source tool</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>
                Files 
              </strong>
              ; implementation of the OpenPGP encryption standard.
            </td>
          </tr>
        </tbody>
      </table>

      <div className={styles.steganographyTitle}>
        <div style={{ color: "rgb(76, 211, 76)" }}>~# ls -la Steganography</div>
      </div>
      <table className={styles.toolstable}>
        <thead>
          <tr>
            <th>Tool Name</th>
            <th>Type</th>
            <th>Use</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>----</td>
            <td>Website</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>
                Crypto functions
              </strong>
              ; decryption, ciphertexts, cheating at letter games, solve riddles, treasure hunts, etc.
            </td>
          </tr>
        </tbody>

  
  
      </table>
    </div>
  );
}
