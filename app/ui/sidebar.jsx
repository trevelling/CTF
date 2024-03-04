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
    icon: (
      <svg
        fill="#ffffff"
        height="16px"
        width="16px"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 -50 320 320"
        xmlSpace="preserve"
      >
        <path
          id="XMLID_222_"
          d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"
        />
      </svg>
    ),
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

