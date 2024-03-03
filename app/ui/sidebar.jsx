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
          {sideBarItems.map(({ name, href, isLink, icon, className }) => (
            <li
              key={name}
              className={`${styles.sideBarItem} ${
                className ? styles[className] : ""
              }`}
            >
              {isLink ? (
                <span style={{ textDecoration: "none" }}>
                  <Link href={href} style={{ textDecoration: "none" }}>
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
                      <span>{icon}</span>
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
                  <span>{icon}</span>
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
    name: "🚩   Tev's CTF Writeups",
    href: "/",
    isLink: true,
  },
  {
    name: "Home",
    href: "https://trevelling.github.io/tev/",
    isLink: true,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 5H8.2C7.08 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Github",
    href: "https://github.com/trevelling",
    isLink: true,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 5H8.2C7.08 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Tools",
    href: "/tools",
    isLink: true,
  },
  {
    name: "2024",
    isLink: false,
    className: "ctfYear",
  },
  {
    name: "BrainHack CDDC ",
    href: "/BrainHack2024",
    isLink: true,

  },
  {
    name: "Lag and Crash",
    href: "/LNC",
    isLink: true,

  },
  {
    name: "HACK@AC",
    href: "/HACK@AC",
    isLink: true,
  
  },
  {
    name: "Bits CTF",
    href: "/bitsCTF",
    isLink: true,
  
  },
  {
    name: "2023",
    isLink: false,
    className: "ctfYear",
  },
  {
    name: "picoCTF",
    href: "/picoCTF2023",
    isLink: true,
  },
  {
    name: "YBN CTF",
    href: "/ybnCTF",
    isLink: true,
  },
];

