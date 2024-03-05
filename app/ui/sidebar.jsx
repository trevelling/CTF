"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./sidebar.module.css";
import { RxExternalLink } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";

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
    name: "🏳️\u00A0\u00A0\u00A0Tev's CTF Writeups",
    href: "/",
    isLink: true,
  },
  {
    name: "Home",
    href: "https://trevelling.github.io/tev/",
    isLink: true,
    icon: <RxExternalLink className={styles.icon}/>,
  },
  {
    name: "Github",
    href: "https://github.com/trevelling",
    isLink: true,
    icon:  <RxExternalLink className={styles.icon}/>,
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
    icon: <IoIosArrowForward className={styles.icon2} />,
  },
  {
    name: "Lag and Crash",
    href: "/LNC",
    isLink: true,
    icon: <IoIosArrowForward className={styles.icon2} />,
  },
  {
    name: "HACK@AC",
    href: "/HACK@AC",
    isLink: true,
    icon: <IoIosArrowForward className={styles.icon2} />,
  },
  {
    name: "Bits CTF",
    href: "/bitsCTF",
    isLink: true,
    icon: <IoIosArrowForward className={styles.icon2} />,
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
    icon: <IoIosArrowForward className={styles.icon2} />,
  },
  {
    name: "YBN CTF",
    href: "/ybnCTF",
    isLink: true,
  },
];

