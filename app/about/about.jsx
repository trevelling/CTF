import React from 'react';
import styles from "./about.module.css";
 
function About(){

    return(
        <div>
            <div className={styles.CTFheader} >
                <p>
                    <span aria-hidden="true">CTF</span>
                    <span>CTF</span>
                    <span aria-hidden="true">CTF</span>
                </p>
            </div>
            <p className={styles.about}>
                hi! i'm a CTF player in
                SG! <br></br> this is a blog documenting writeup's and tools of various ctf's we
                participate in. we may not be the best though 🙂!
        
                <br></br>
                *not CTF's 🚩we play in are documented*
            </p>
        
        </div>
        
    );
}

export default About;

