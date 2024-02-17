"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { GiMagnifyingGlass } from "react-icons/gi";
import { FaUserSecret } from "react-icons/fa6";
import { SiAudiomack } from "react-icons/si";
import { TbBinary } from "react-icons/tb";
import { IoCogOutline } from "react-icons/io5";
import { IoIosGlobe } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";

const forensics = [
  { name: 'Autopsy [Disk]' },
  { name: 'Binwalk [Files]' },
  { name: 'Foremost [Files]' },
  { name: 'WireShark [Network]' },
  { name: 'Tcpdump [Network]' },
  { name: 'Volatility [Memory]' },
  { name: 'Slueth Kit' },
];

const cryptography = [
  { name: 'test' },
];

const steganography = [
  { name: 'test' },
];

const revEngineering = [
  { name: 'test' },
];

const webExploitation = [
  { name: 'test' },
];

const binaryExploitation = [
  { name: 'test' },
];

const OSINT = [
  { name: 'test' },
];


export default function Tools() {
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
        <button className={styles.button} onClick={() => setIsOpenForensics(!isOpenForensics)}>
          <GiMagnifyingGlass className="h-8" />
          {' '}FORENSICS
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
          {' '}CRYPTOGRAPHY
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
          {' '}STEGANOGRAPHY
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
          {' '}REVERSE
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
          {' '}WEB 
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
          {' '}BINARY
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
          {' '}OSINT
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

