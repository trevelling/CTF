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
import { MdMiscellaneousServices } from "react-icons/md";

/*
Categories:
- Cryptography <FaUserSecret />
- Binary exploitation <TbBinary />
- Steganography <SiAudiomack />
- Reverse engineering <IoCogOutline />
- Forensics <GiMagnifyingGlass />
- Web exploitaiton <IoIosGlobe />
- Misc <MdMiscellaneousServices />
- OSINT <FaGoogle />
*/

const list = [
  { name: 'Item 1' },
  { name: 'Item 2' },
  { name: 'Item 3' }
];

export default function Tools() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
        <GiMagnifyingGlass className="h-8" />
         {' '}| Forensics
      </button>

      <div className={`${styles.dropdownContent} ${isOpen ? styles.showDropdown : ''}`}>
        {list.map((item, i) => (
          <div key={i} className={styles.dropdownItem}>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}