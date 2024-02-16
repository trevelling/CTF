"use client";

import React, { useState } from 'react';
import styles from "./about.module.css";

function About(){

    const [showDropdown, setShowDropdown] = useState(false);

    // Function for button click
    const buttonClick = () =>{
        setShowDropdown(!showDropdown);
    }

    return(
        <div className={styles.aboutContainer}>
            <div className={styles.CTFheader} >
                <span aria-hidden="true">CTF</span>
                <span>CTF</span>
                <span aria-hidden="true">CTF</span>
            </div>
            <div className={styles.about}>
                <p>
                    hi! i'm a CTF player in SG!<br/><br/>
                    this is a blog documenting writeup's and tools of various ctf's we
                    participate in. we may not be the best though 🙂!<br/>
                    <br/>
                    <strong>*not CTF's 🚩we play in are documented*</strong>
                </p>
                <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={buttonClick}>view ctf's</button>
                </div>
                <div className={`${styles.dropdownContent} ${showDropdown ? styles.show : ''}`}>
                    <div className={`${styles.CTF}${2023}`}>
                        <p>CTF 1</p>
                        <p>CTF 2</p>
                        <p>CTF 3</p>
                    </div>
                    <div className={`${styles.CTF}${2024}`}>
                        <p>CTF 1</p>
                        <p>CTF 2</p>
                        <p>CTF 3</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default About;

