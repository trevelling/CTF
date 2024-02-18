"use client";

import React from "react";
import styles from "./page.module.css";

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
          <tr>
            <td>Binwalk</td>
            <td>Open-source tool</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>Files</strong>;
              analysing binary files for embeded files and executable code
            </td>
          </tr>
          <tr>
            <td>Foremost</td>
            <td>Open-source tool</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>Files</strong>;
              forensic program to recover lost files based on their headers,
              search for (doc,jpg,pdf,xls) in files
            </td>
          </tr>
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
              ; decryption, ciphertexts, cheating at letter games, solve
              riddles, treasure hunts, etc.
            </td>
          </tr>
          <tr>
            <td>Hash Cat</td>
            <td>CLI tool</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>
                Password cracking
              </strong>
              ; powerful password recovery tool that supports various hash types
              and attack modes.
            </td>
          </tr>
          <tr>
            <td>John The Ripper</td>
            <td>Open-source tool</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>
                Password cracking
              </strong>
              ; fast password cracker that can detect weak passwords and perform
              dictionary attacks
            </td>
          </tr>
          <tr>
            <td>GnuPG</td>
            <td>Open-source tool</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>Files</strong>;
              implementation of the OpenPGP encryption standard.
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
            <td>Aperi'Solve</td>
            <td>Website</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>
                Image analyzer
              </strong>
              ; online platform which performs layer analysis on image.
            </td>
          </tr>
          <tr>
            <td>StegOnline</td>
            <td>Website</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>
                Image analyzer
              </strong>
              ; embedding and extracting data through LSB techniques.
            </td>
          </tr>
          <tr>
            <td>StegHide</td>
            <td>CLI tool</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>
                Image and audio analyzer
              </strong>
              ; hide and extract data in various kinds of images and
              audio-files.
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.revEngineeringTitle}>
        <div style={{ color: "rgb(76, 211, 76)" }}>
          ~# ls -la Reverse-Engineering
        </div>
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
            <td>Online Decomplier</td>
            <td>Website</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>Decomplier</strong>;
              decompile Java classes and APKs etc.
            </td>
          </tr>
          <tr>
            <td>MobSF</td>
            <td>Open-source tool</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>Decomplier</strong>;
              decompile and reverse APK files, IPA, APPX and source codes.
            </td>
          </tr>
          <tr>
            <td>JADX</td>
            <td>Open-source tool</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>Decomplier</strong>;
              decompiler for the Java programming language
            </td>
          </tr>
          <tr>
            <td>Ghidra</td>
            <td>Open-source tool</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>Decomplier</strong>;
              software reverse engineering suite of tools - analyzing and
              decompling binary code.
            </td>
          </tr>
          <tr>
            <td>IDA Pro</td>
            <td>Open-source tool</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>
                Disassembler
              </strong>
              ; generates assembly language source code from machine-executable
              code.
            </td>
          </tr>
          <tr>
            <td>Radare2/Cutter</td>
            <td>Open-source tool</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>Analyzer</strong>;
              framework for reverse-engineering and analyzing binaries.
            </td>
          </tr>
          <tr>
            <td>OllyDbg</td>
            <td>Open-source tool</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>Analyzer</strong>;
              debugger that emphasizes binary code analysis,
            </td>
          </tr>
          <tr>
            <td>Binary Ninja</td>
            <td>Open-source tool</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>
                Disassembler
              </strong>
              ; disassemble a binary and display the disassembly in linear or
              graph views.
            </td>
          </tr>
          <tr>
            <td>x64dbg</td>
            <td>Open-source tool</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>Debugger</strong>;
              debugger for windows.
            </td>
          </tr>
          <tr>
            <td>Jeb decomplier</td>
            <td>Open-source tool</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>
                Disassembler and decompiler
              </strong>
              ; for android applications and native machine code. It decompiles
              Dalvik bytecode to Java source code, and x86, ARM, MIPS, RISC-V
              machine code to C source code.
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.webExploitationTitle}>
        <div style={{ color: "rgb(76, 211, 76)" }}>
          ~# ls -la Web-Exploitation
        </div>
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
            <td>-----</td>
            <td>Website</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>Decomplier</strong>;
              decompile Java classes and APKs etc.
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.binaryExploitationTitle}>
        <div style={{ color: "rgb(76, 211, 76)" }}>
          ~# ls -la Binary-Exploitation
        </div>
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
            <td>-----</td>
            <td>Website</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>Decomplier</strong>;
              decompile Java classes and APKs etc.
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.osintTitle}>
        <div style={{ color: "rgb(76, 211, 76)" }}>~# ls -la OSINT</div>
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
            <td>-----</td>
            <td>Website</td>
            <td>
              <strong style={{ color: "rgb(93, 63, 211)" }}>Decomplier</strong>;
              decompile Java classes and APKs etc.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
