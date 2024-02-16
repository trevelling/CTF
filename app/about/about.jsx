import React from 'react';
import styles from "./about.module.css";

function About(){
    return(
        <div>
            <div className={styles.CTFheader} >
                <span aria-hidden="true">CTF</span>
                <span>CTF</span>
                <span aria-hidden="true">CTF</span>
            </div>
            <div className={styles.about}>
                <p>
                    hi! i'm a CTF player in SG!<br/><br/>
                    this is a blog documenting writeup's and tools of various ctf's we
                    participate in. we may not be the best though 🙂!
    
                    <br></br>
                    *not CTF's 🚩we play in are documented*
                </p>
                <button className={styles.button}>view ctf's</button>
            </div>
        </div>
        
    );
}

export default About;

