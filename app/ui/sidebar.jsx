"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./sidebar.module.css";
import { FiHome } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { GoTools } from "react-icons/go";
import { IoFlagOutline } from "react-icons/io5";

const sideBarItems = [
    {
        name: "About",
        href: "/",
        icon: <FiHome />,
    },
    {
        name: "Tools",
        href: "/tools",
        icon: <GoTools />,
    },
    {
        name: "CTF",
        href: "/ctf",
        icon: <IoFlagOutline />,
    }
];

export default function Sidebar() {

    const [isCollapsedSideBar, settoggleSideBarCollapase] = useState(false);

    const toggleSideBarCollapaseHandler = () =>{
        settoggleSideBarCollapase((prev) => !prev )
    }

    return (
        <div  className={styles.sideBarContainer}>
            <button className={styles.button} onClick={toggleSideBarCollapaseHandler}>
                <IoIosArrowBack />
            </button>
            <aside className={`${styles.sideBar} ${isCollapsedSideBar ? styles.collapsed : ""}`} data-collapsed={isCollapsedSideBar}>

                <div className={styles.sideBarTop}>
                    <Image 
                        src="/terminal.png" 
                        width={80} height={80} 
                        className={styles.sideBarLogo}
                        alt="logo"
                     />
                     <p className={styles.sideBarLogoName}>MENU</p>
                </div>
                <div className={styles.sideBarList}>
                    {sideBarItems.map(({ name, href, icon: Icon }) => (
                        <li className={styles.sideBarItem} key={name}>
                            <Link href={href}>
                                <span className={styles.sideBarLink}>
                                    <span className={styles.sideBarIcon}>
                                        {Icon}
                                    </span>
                                    <span className={styles.sideBarName}>
                                        {name}
                                    </span>
                                </span>
                            </Link>
                        </li>
                    ))}
                </div>
            </aside>
        </div>
    );
}

