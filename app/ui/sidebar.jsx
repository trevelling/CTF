"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./sidebar.module.css";

const sideBarItems = [
  {
    name: "Home",
    href: "/",
    isLink: true, 
  },
  {
    name: "Helpful tools",
    href: "/tools",
    isLink: true, 
  },
  {
    name: "2023",
    isLink: false,
    className: "ctf",
  },
  {
    name: "YBNCTF",
    href: "/ybnCTF",
    isLink: true,
  },
  {
    name: "2024",
    isLink: false,
    className: "ctf",
  },
  {
    name: "picoCTF",
    href: "/picoCTF",
    isLink: true,
  },
];

export default function Sidebar() {
  return (
    <div className={styles.sideBarContainer}>
      <aside className={styles.sideBar}>
        <div className={styles.sideBarTop}>
          <Image
            src="/guy.png"
            width={50}
            height={50}
            className={styles.sideBarLogo}
            alt="logo"
          />
          <p className={styles.sideBarLogoName}>Tev's CTF Writeups</p>
        </div>
        <div className={styles.sideBarList}>
          {sideBarItems.map(({ name, href, isLink, className }) => (
            <li
              key={name}
              className={`${styles.sideBarItem} ${
                className ? styles[className] : ""
              }`}
            >
              {isLink ? (
                <Link href={href}>
                  <span className={styles.sideBarLink}>
                    <span className={styles.sideBarName}>{name}</span>
                  </span>
                </Link>
              ) : (
                <span className={styles.sideBarName}>{name}</span>
              )}
            </li>
          ))}
        </div>
      </aside>
    </div>
  );
}
