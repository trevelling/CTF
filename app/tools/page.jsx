"use client";

import React, { useState, useEffect } from "react";
import Preloader from "@/app/ui/preloader";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

export default function Tools() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1);

    return () => clearTimeout(timeout);
  }, []);
  const router = useRouter();
  const handlePrevious = () => {
    router.push("/home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    router.push("/BrainHack2024");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={styles.toolsContainer}>
      {loading && <Preloader />}
          <div className={styles.intro} style={{ color: "white" }}>~# cat Tools</div>
      <div className={styles.tools}>
          Different open-source tools recommended and used during CTFs are
          documented here 🛠️.
      </div>
      <div className={styles.forensicsTitle} style={{ color: "rgb(255, 255, 255)" }}>
       ~# ls -la Forensics
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
            <td>Nmap</td>
            <td>Open-source tool</td>
            <td>Network exploration, host discovery, and security auditing</td>
          </tr>
          <tr>
            <td>Autopsy</td>
            <td>Open-source tool</td>
            <td>Recovery tool with data carving</td>
          </tr>
          <tr>
            <td>Binwalk</td>
            <td>Open-source tool</td>
            <td>
              Analysing binary files for embeded files and executable code
            </td>
          </tr>
          <tr>
            <td>Foremost</td>
            <td>Open-source tool</td>
            <td>
              Forensic program to recover lost files based on their headers,
              search for (doc,jpg,pdf,xls) in files
            </td>
          </tr>
          <tr>
            <td>Wireshark</td>
            <td>Open-source tool</td>
            <td>
              Network protocol analyzer to look at recorded network traffic
            </td>
          </tr>
          <tr>
            <td>TcpDump</td>
            <td>CLI tool</td>
            <td>
              Displays the TCP/IP and other packets being received and
              transmitted over the network
            </td>
          </tr>
          <tr>
            <td>Volatility</td>
            <td>CLI tool</td>
            <td>
              Analyses volatile data in memory dump - includes the browsing
              history, clipboard contents, and chat messages presented in the
              short-term memory storage.
            </td>
          </tr>
          <tr>
            <td>EOG</td>
            <td>CLI tool</td>
            <td>
              An image view that can display pictures in a wide range of image
              formats (PNG, JPEG, TIFF etc.).
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.cryptographyTitle}  style={{ color: "rgb(255, 255, 255)" }}>
        ~# ls -la Cryptography
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
              Decryption, ciphertexts, cheating at letter games, solve riddles,
              treasure hunts, etc.
            </td>
          </tr>
          <tr>
            <td>Hash Cat</td>
            <td>CLI tool</td>
            <td>
              Powerful password recovery tool that supports various hash types
              and attack modes.
            </td>
          </tr>
          <tr>
            <td>John The Ripper</td>
            <td>Open-source tool</td>
            <td>
              Fast password cracker that can detect weak passwords and perform
              dictionary attacks
            </td>
          </tr>
          <tr>
            <td>GnuPG</td>
            <td>Open-source tool</td>
            <td>Implementation of the OpenPGP encryption standard.</td>
          </tr>
          <tr>
            <td>Quipquip</td>
            <td>Open-source tool</td>
            <td>Fast and automated cryptogram solver. It can solve simple substitution ciphers.</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.steganographyTitle} style={{ color: "rgb(255, 255, 255)" }}>
        ~# ls -la Steganography
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
            <td>Online platform which performs layer analysis on image.</td>
          </tr>
          <tr>
            <td>StegOnline</td>
            <td>Website</td>
            <td>Embedding and extracting data through LSB techniques.</td>
          </tr>
          <tr>
            <td>StegHide</td>
            <td>CLI tool</td>
            <td>
              Hide and extract data in various kinds of images and audio-files.
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.revEngineeringTitle} style={{ color: "rgb(255, 255, 255)" }}>
          ~# ls -la Reverse-Engineering
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
            <td>Decompile Java classes and APKs etc.</td>
          </tr>
          <tr>
            <td>MobSF</td>
            <td>Open-source tool</td>
            <td>
              Decompile and reverse APK files, IPA, APPX and source codes.
            </td>
          </tr>
          <tr>
            <td>JADX</td>
            <td>Open-source tool</td>
            <td>Decompiler for the Java programming language</td>
          </tr>
          <tr>
            <td>Ghidra</td>
            <td>Open-source tool</td>
            <td>
              Software reverse engineering suite of tools - analyzing and
              decompling binary code.
            </td>
          </tr>
          <tr>
            <td>IDA Pro</td>
            <td>Open-source tool</td>
            <td>
              Generates assembly language source code from machine-executable
              code.
            </td>
          </tr>
          <tr>
            <td>Radare2/Cutter</td>
            <td>Open-source tool</td>
            <td>Framework for reverse-engineering and analyzing binaries.</td>
          </tr>
          <tr>
            <td>OllyDbg</td>
            <td>Open-source tool</td>
            <td>Debugger that emphasizes binary code analysis,</td>
          </tr>
          <tr>
            <td>Binary Ninja</td>
            <td>Open-source tool</td>
            <td>
              Disassemble a binary and display the disassembly in linear or
              graph views.
            </td>
          </tr>
          <tr>
            <td>x64dbg</td>
            <td>Open-source tool</td>
            <td>Debugger for windows.</td>
          </tr>
          <tr>
            <td>Jeb decomplier</td>
            <td>Open-source tool</td>
            <td>
              For android applications and native machine code. It decompiles
              Dalvik bytecode to Java source code, and x86, ARM, MIPS, RISC-V
              machine code to C source code.
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.webExploitationTitle} style={{ color: "rgb(255, 255, 255)" }}>
          ~# ls -la Web-Exploitation
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
            <td>Burpsuite</td>
            <td>Open-source tool</td>
            <td>
              Web crawling, web application testing, analysis, vulnerability
              detection, intercept HTTP messages, launch an attack.
            </td>
          </tr>
          <tr>
            <td>OWASP ZAP</td>
            <td>Open-source tool</td>
            <td>
              Active and passive scan, websocket testing, jax spidering etc.
            </td>
          </tr>
          <tr>
            <td>SQLMap</td>
            <td>Open-source tool</td>
            <td>Detecting and exploiting SQL.</td>
          </tr>
          <tr>
            <td>Nikto</td>
            <td>Open-source tool</td>
            <td>
              Performs vulnerability scanning against web servers for multiple
              items, including dangerous files and programs.
            </td>
          </tr>
          <tr>
            <td>XSSer</td>
            <td>Open-source tool</td>
            <td>
              Detect, exploit, and report XSS vulnerabilities in web-based
              applications.
            </td>
          </tr>
          <tr>
            <td>Subdomain Finder</td>
            <td>Open-source tool</td>
            <td>
              Scanner that scans an entire domain to find as many subdomains as
              possible.
            </td>
          </tr>
          <tr>
            <td>Traversal Archive</td>
            <td>Open-source tool</td>
            <td>
              To access files and directories that are stored outside the web
              root folder.
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.binaryExploitationTitle} style={{ color: "rgb(255, 255, 255)" }}>
          ~# ls -la Binary-Exploitation
      </div>
      <table className={styles.toolstable}>
        <thead>
          <tr>
            <th>Tool Name</th>
            <th>Type</th>
            <th>Use</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <div className={styles.osintTitle} style={{ color: "rgb(255, 255, 255)" }}>
        ~# ls -la OSINT
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
            <td>Wayback Machine</td>
            <td>Website</td>
            <td>Digital archive of the webpage at a certain time.</td>
          </tr>
          <tr>
            <td>Sherlock</td>
            <td>Open-source tool</td>
            <td>
              Gather information about a specific username or online identity
              -search for a specific username across multiple social media
              platforms and websites.
            </td>
          </tr>
          <tr>
            <td>Email Lookup</td>
            <td>Open-source tool</td>
            <td>
              Find verified email addresses of professionals by their name.
            </td>
          </tr>
          <tr>
            <td>Google Image Reverse Search</td>
            <td>Website</td>
            <td>Reverse image search an image or file of its originality.</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.buttonContainer}>
        <button className={styles.button1} onClick={handlePrevious}>
          <div className={styles.buttonPrevious}>Previous</div>
          <div className={styles.buttonText}>Home</div>
          <span className={styles.arrow}><BsArrowLeft /></span>
        </button>
        <button className={styles.button2} onClick={handleNext}>
          <div className={styles.buttonNext}>Next</div>
          <div className={styles.buttonText}>BrainHack CDDC 2024</div>
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


