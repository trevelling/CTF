"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./sidebar.module.css";

const sideBarItems = [
    {
        name: "About",
        href: "/", 
    },
    {
        name: "Tools",
        href: "/tools",
    },
    {
        name: "CTF",
        href: "/ctf",
    }
];

export default function Sidebar() {
    return (
        <div className={styles.sideBarContainer}>
            <aside className={styles.sideBar}>

                <div className={styles.sideBarTop}>
                    <Image 
                        src="/guy.png" 
                        width={80} 
                        height={80} 
                        className={styles.sideBarLogo}
                        alt="logo"
                    />
                    <p className={styles.sideBarLogoName}>MENU</p>
                </div>
                <div className={styles.sideBarList}>
                    {sideBarItems.map(({ name, href }) => (
                        <li className={styles.sideBarItem} key={name}>
                            <Link href={href}>
                                <span className={styles.sideBarLink}>
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


