"use client";

import React, { useState,  useEffect } from 'react';
import styles from "./about.module.css";

// Component for animating text
const AnimatedText = ({ text }) => {
    const [visibleText, setVisibleText] = useState('');
  
    useEffect(() => {
      let index = 1; // Variable to keep track of the current index in the text
      const interval = setInterval(() => {
        if (index > text.length) {
          clearInterval(interval); // Check if we have reached the end of the text
        } else {
          setVisibleText(text.substring(0, index)); // Update the 'visibleText' state with a substring of 'text' up to the current index
          index += 1;
        }
      }, 100); // Text animation speed (milliseconds)
    }, [text]);
  
    return <span>{visibleText}</span>;
  };


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
                    <AnimatedText text="hi! i&apos;m a CTF player in SG!" /><br/>
                </p>
                <p>
                    this is a blog documenting writeup&apos;s and tools of various ctf&apos;s we
                    participate in. we may not be the best though 🙂!<br/>
                    <br/>
                    <strong>*not all CTF&apos;s 🚩 played are documented*</strong>
                </p>
                <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={buttonClick}>view ctf&apos;s</button>
                </div>
                <div className={`${styles.dropdownContent} ${showDropdown ? styles.show : ''}`}>
                    <div className={styles.ctf2023}>
                       <strong><em>2023</em></strong>
                        <div className={styles.ctf}>
                            <ul>
                                <li>BrainHack [Top 20 poly-category]</li><br/>
                                <li>TISC [Level 2]</li><br/>
                                <li>YBN [8th]</li><br/>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.ctf2024}>
                       <strong><em>2024</em></strong>
                        <div className={styles.ctf}>
                            <ul>
                                <li>Bits CTF</li><br/>
                                <li>LA CTF</li><br/>
                                <li>Braeker CTF</li><br/>
                                <li>ACS(I) Hacks</li><br/>
                                <li>Grey Hats</li><br/>
                                <li>BrainHack</li><br/>
                            </ul>
                        </div>
                    </div>
                    <div className={`${styles.CTF}${2024}`}>
                        
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default About;

