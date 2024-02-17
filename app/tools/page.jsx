"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { IoFlagOutline } from "react-icons/io5";
import { GiMagnifyingGlass } from "react-icons/gi";
import { FaUserSecret } from "react-icons/fa6";
import { SiAudiomack } from "react-icons/si";
import { TbBinary } from "react-icons/tb";
import { IoCogOutline } from "react-icons/io5";
import { IoIosGlobe } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";

const general = [
  { name: '' },
];


const forensics = [
  { name: 'Autopsy [Disk]' },
  { name: 'Binwalk [Files]' },
  { name: 'Foremost [Files]' },
  { name: 'WireShark [Network]' },
  { name: 'TcpDump [Network]' },
  { name: 'Volatility [Memory]' },
  { name: 'SluethKit' },
];

const cryptography = [
  { name: 'dCrypto [Crypto heaven]' },
  { name: 'Hash Cat' },
  { name: 'QuipQuip [Frequency hints]' },
  { name: 'RSA Calculator' },
  { name: 'FactorDB [Inter factorization]' },
  { name: 'Crack Station' },
  { name: 'Substituition Solver [Brute force]' },
  { name: 'Vignere Solver' },
  { name: 'Hash Identifier [Hash identification]' },
  { name: 'John The Ripper [Password Cracker]' },
  { name: 'GnuPG [OpenPGP encryption]' },
];

const steganography = [
  { name: "Aperi'Solve [Static analysis]" },
  { name: 'Steg Online [Modify/extract data from images]' },
  { name: 'Steg Solve [View hidden text in images]' },
  { name: 'Steg Hide [Hiding sensitive data]' },
  { name: 'Steganographic Decoder [Encoder/Decoder of files in images]' },
  { name: 'Image Colour Picker' },
];

const revEngineering = [
  { name: 'Online Decomplier [Decompile Java classes, APKs]' },
  { name: 'MobSF [Decomplie and reverse APK files]' },
  { name: 'JADX [Producing Java source code from Andriod Dex and APK files]' },
  { name: 'Ghidra [Analyzing and decompling binary code]' },
  { name: 'IDA Pro [Disassembler and debugger]' },
  { name: 'Radare2 [CLI]' },
  { name: 'Cutter [GUI for Radare2]' },
  { name: 'OllyDbg [Analyzing and reversing engineered binary code]' },
  { name: 'Binary Ninja [Advanced analysis and debugging]' },
  { name: 'Immunity Debugger' },
  { name: 'x64dbg' },
  { name: 'Jeb Decomplier [Transforms machine code to higher-level programming language]' },
];

const webExploitation = [
  { name: 'BurpSuite [Scanning, intercepting and exploiting vul]' },
  { name: 'OWASP ZAP [Scanner]' },
  { name: 'SQLMap [Detecting and exploting SQL]' },
  { name: 'Nikto [Checks for common vulnerabilties]' },
  { name: 'Nmap [Network Scanner]' },
  { name: 'XSSer [Detecting and exploting XSS]' },
  { name: 'Subdomain Finder [Find subdomains of URLs including hidden ones]' },
  { name: 'Traversal Archives' },
  { name: 'JSONP Endpoints [Well known endpoints]' },
  { name: 'Web Payloads [Well known Payloads]' },
];

const binaryExploitation = [
  { name: '' },
];

const OSINT = [
  { name: 'Wayback Machine [Webpage archive at a certain time]' },
  { name: 'Sherlock [Search social media accounts by name]' },
  { name: 'Email lookup [Retrieve information linked to an email]' },
  { name: 'Google image reverse search' },
];


export default function Tools() {
  const [isOpenGeneral, setIsOpenGeneral] = useState(false);
  const [isOpenForensics, setIsOpenForensics] = useState(false);
  const [isOpenCryptography, setIsOpenCryptography] = useState(false);
  const [isOpenSteganography, setIsOpenSteganography] = useState(false);
  const [isOpenRevEngineering, setIsOpenRevEngineering] = useState(false);
  const [isOpenWebExpolitation, setIsOpenWebExpolitation] = useState(false);
  const [isOpenBinaryExploitation, setIsOpenBinaryExploitation] = useState(false);
  const [isOpenOSINT, setIsOpenOSINT] = useState(false);

  return (
    <div className={styles.container}>

      <div className={styles.dropdownWrapper}>
        <button className={styles.button} onClick={() => setIsOpenGeneral(!isOpenGeneral)}>
          <IoFlagOutline className="h-8" />
          <div className={styles.generalName}>GENERAL</div>
        </button>

        <div className={`${styles.dropdownContent} ${isOpenGeneral ? styles.showDropdown : ''}`}>
          {general.map((item, i) => (
            <div key={i} className={styles.dropdownItem}>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dropdownWrapper}>
        <button className={styles.button} onClick={() => setIsOpenForensics(!isOpenForensics)}>
          <GiMagnifyingGlass className="h-8" />
          <div className={styles.forensicsName}>FORENSICS</div>
        </button>

        <div className={`${styles.dropdownContent} ${isOpenForensics ? styles.showDropdown : ''}`}>
          {forensics.map((item, i) => (
            <div key={i} className={styles.dropdownItem}>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.dropdownWrapper}>
        <button className={styles.button} onClick={() => setIsOpenCryptography(!isOpenCryptography)}>
          <FaUserSecret className="h-8" />
          <div className={styles.cryptoName}>CRYPTOGRAPHY</div>
        </button>

        <div className={`${styles.dropdownContent} ${isOpenCryptography ? styles.showDropdown : ''}`}>
          {cryptography.map((item, i) => (
            <div key={i} className={styles.dropdownItem}>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.dropdownWrapper}>
        <button className={styles.button} onClick={() => setIsOpenSteganography(!isOpenSteganography)}>
          <SiAudiomack className="h-8" />
          <div className={styles.stegName}>STEGANOGRAPHY</div>
        </button>

        <div className={`${styles.dropdownContent} ${isOpenSteganography ? styles.showDropdown : ''}`}>
          {steganography.map((item, i) => (
            <div key={i} className={styles.dropdownItem}>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dropdownWrapper}>
        <button className={styles.button} onClick={() => setIsOpenRevEngineering(!isOpenRevEngineering)}>
          <IoCogOutline className="h-8" />
          <div className={styles.revName}>REVERSE ENGINEERING</div>
        </button>

        <div className={`${styles.dropdownContent} ${isOpenRevEngineering ? styles.showDropdown : ''}`}>
          {revEngineering.map((item, i) => (
            <div key={i} className={styles.dropdownItem}>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dropdownWrapper}>
        <button className={styles.button} onClick={() => setIsOpenWebExpolitation(!isOpenWebExpolitation)}>
          <IoIosGlobe className="h-8" />
          <div className={styles.webName}>WEB EXPLOITATION</div>
        </button>

        <div className={`${styles.dropdownContent} ${isOpenWebExpolitation ? styles.showDropdown : ''}`}>
          {webExploitation.map((item, i) => (
            <div key={i} className={styles.dropdownItem}>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dropdownWrapper}>
        <button className={styles.button} onClick={() => setIsOpenBinaryExploitation(!isOpenBinaryExploitation)}>
          <TbBinary className="h-8" />
          <div className={styles.binaryName}>BINARY EXPLOITATION</div>
        </button>

        <div className={`${styles.dropdownContent} ${isOpenBinaryExploitation ? styles.showDropdown : ''}`}>
          {binaryExploitation.map((item, i) => (
            <div key={i} className={styles.dropdownItem}>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dropdownWrapper}>
        <button className={styles.button} onClick={() => setIsOpenOSINT(!isOpenOSINT)}>
          <FaGoogle className="h-8" />
          <div className={styles.osintName}>OSINT</div>
        </button>

        <div className={`${styles.dropdownContent} ${isOpenOSINT ? styles.showDropdown : ''}`}>
          {OSINT.map((item, i) => (
            <div key={i} className={styles.dropdownItem}>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

