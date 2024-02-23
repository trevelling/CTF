"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./sidebar.module.css";

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (href, isLink) => {
    if (isLink) {
      setActiveLink(href);
    }
  };

  return (
    <div className={styles.sideBarContainer}>
      <aside className={styles.sideBar}>
        <div className={styles.sideBarList}>
          {sideBarItems.map(({ name, href, isLink, className }) => (
            <li
              key={name}
              className={`${styles.sideBarItem} ${
                className ? styles[className] : ""
              }`}
            >
              {isLink ? (
                <span style={{ textDecoration: "none" }}>
                  <Link href={href}>
                    <span
                      className={`${styles.sideBarLink} ${
                        activeLink === href ? styles.activeLink : ""
                      }`}
                      onClick={() => handleLinkClick(href, isLink)}
                    >
                      <span
                        className={styles.sideBarName}
                        style={{ textDecoration: "none" }}
                      >
                        {name}
                      </span>
                    </span>
                  </Link>
                </span>
              ) : (
                <span
                  className={styles.sideBarName}
                  style={{ textDecoration: "none" }}
                >
                  {name}
                </span>
              )}
            </li>
          ))}
        </div>
      </aside>
    </div>
  );
}

const sideBarItems = [
  {
    name: "🚩 Home ",
    href: "/",
    isLink: true,
  },
  {
    name: "🛠️ Tools",
    href: "/tools",
    isLink: true,
  },
  {
    name: "2024",
    isLink: false,
    className: "ctf",
  },
  {
    name: "📁 BrainHack CDDC",
    href: "/BrainHack2024",
    isLink: true,
  },
  {
    name: "📁 Lag and Crash",
    href: "/LNC",
    isLink: true,
  },
  {
    name: "📁 ACS(I) Hack",
    href: "/HACK@AC",
    isLink: true,
  },
  {
    name: "📁 Bits CTF",
    href: "/bitsCTF",
    isLink: true,
  },
  {
    name: "2023",
    isLink: false,
    className: "ctf",
  },
  {
    name: "📁 picoCTF",
    href: "/picoCTF2023",
    isLink: true,
  },
  {
    name: "📁 YBN CTF",
    href: "/ybnCTF",
    isLink: true,
  },
];
