"use client";

import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { IoCopy } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

export default function VVS() {
  const router = useRouter();
  const handlePrevious = () => {
    router.push("/HACK@AC/ASCII");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    router.push("/HACK@AC/Grass");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [isZoomed1, setIsZoomed1] = useState(false);

  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const [copied3, setCopied3] = useState(false);

  const copyCode1 = () => {
    navigator.clipboard.writeText(`
@app.route('/register', methods=['POST'])
def register():
  username = request.form['username']
  password = request.form['password']
  phash = sha256(password.encode('utf-8')).hexdigest()
      
  conn = sqlite3.connect('database.db')
  cur = conn.cursor()
  ## Wait how do I use the question mark thing again?
  cur.execute(f"INSERT INTO users (username, password, admin) VALUES ('{username}', '{phash}', 0)")
  onn.commit()
      
  return redirect(url_for('index', message='Successfully registered!'))
    `);
    setCopied1(true);
    setTimeout(() => setCopied1(false), 50);
  };

  const copyCode2 = () => {
    navigator.clipboard.writeText(`
[username]','[password hashed with SHA256]',1--
    `);
    setCopied2(true);
    setTimeout(() => setCopied2(false), 50);
  };

  const copyCode3 = () => {
    navigator.clipboard.writeText(`
cur.execute(f"INSERT INTO users (username, password, admin) VALUES ('{username}', '{phash}', 0)")
    `);
    setCopied3(true);
    setTimeout(() => setCopied3(false), 50);
  };
  return (
    <div className={styles.vvsContainer}>
      <div className={styles.vvsTitle} style={{ color: "white"}}>
          Very Vulnerable Site
        <br />
      </div>
      <div className={styles.vvsQuestion}>
        <p>
          <strong className={styles.command} style={{ color: "rgb(255, 255, 255)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          So i think this site is pretty unbreakable. The flag seems to be
          impossible to obtain to me, but apparently there are multiple ways to
          get the flag? Maybe I'm just dumb...
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILE: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/HACK@AC/VVS.zip"
            download
          >
            VeryVulnerableSite.zip
          </a>
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>INSTANCE: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="http://beta.hacac.live:7004"
          >
            hackac.live
          </a>
        </p>
      </div>
      <div className={styles.vvsSolved}>
        <p>
          Running the instance will bring us to a website with a login and
          register page that requires us to input a username and password to get the flag.
          <br />
        </p>
      </div>
      <div
        className={`${styles.vvsEvidencePic} ${isZoomed1 ? styles.zoomed : ""}`}
        onClick={toggleZoom1}
      >
        <Image src="/HACK@AC/VVS1.png" width={900} height={350} alt="logo" className={styles.vvsImage} />
      </div>
      <div className={styles.vvsSolved}>
        <p>
          From the given <code>app.py</code> file, the
          code of concern is the function (register). This function takes
          username and password inputs from a form, hashes the password using
          SHA-256, inserts the username, hashed password, and a default value
          for admin into a SQLite database, and then redirects the user to the
          index page with a success message. <br /><br />This is part of the code that is of concern.
        </p>
      </div>
      <div className={styles.vvsEvidence}>
        <button onClick={copyCode1} className={styles.copyButton}>
          {copied1 ? <IoCopyOutline /> : <IoCopy />}
        </button>
        <SyntaxHighlighter language="python" style={dracula}>
          {`@app.route('/register', methods=['POST'])
def register():
  username = request.form['username']
  password = request.form['password']
  phash = sha256(password.encode('utf-8')).hexdigest()
  
  conn = sqlite3.connect('database.db')
  cur = conn.cursor()
  ## Wait how do I use the question mark thing again?
  cur.execute(f"INSERT INTO users (username, password, admin) VALUES ('{username}', '{phash}', 0)")
  conn.commit()
  
  return redirect(url_for('index', message='Successfully registered!'))`}
        </SyntaxHighlighter>
      </div>
      <div className={styles.vvsSolved}>
      Firstly, I tried many times to inject a payload into the username field of the registration form but realised the goal was to first create a new user as the database was empty.
      <br />
      <br />
      Payload:
      </div>
      <div className={styles.vvsEvidence}>
        <button onClick={copyCode2} className={styles.copyButton}>
          {copied2 ? <IoCopyOutline /> : <IoCopy />}
        </button>
        <SyntaxHighlighter language="python" style={dracula}>
          {`[username]','[password hashed with SHA256]',1--`}
        </SyntaxHighlighter>
      </div>

      <div className={styles.vvsSolved}>
      By injecting the password 
      directly into the username field, it bypasses the 
      python code's hashing process. After 
      registering with this payload, you can log into 
      the created account with the displayed flag.
      <br />
      <br />
      The SQL payload was based on this line of the code.
      </div>
      <div className={styles.vvsEvidence}>
        <button onClick={copyCode3} className={styles.copyButton}>
          {copied3 ? <IoCopyOutline /> : <IoCopy />}
        </button>
        <SyntaxHighlighter language="python" style={dracula}>
          {`cur.execute(f"INSERT INTO users (username, password, admin) VALUES ('{username}', '{phash}', 0)")`}
        </SyntaxHighlighter>
      </div>
    
      <div className={styles.vvsFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          ACSI{"{a_v3ry_v8lner4b13_p4g3_w1th_55t1_7wt_5q1i}"}
        </span>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button1} onClick={handlePrevious}>
          <div className={styles.buttonPrevious}>Previous</div>
          <div className={styles.buttonText}>ASCII Me Anything</div>
          <span className={styles.arrow}><BsArrowLeft /></span>
        </button>
        <button className={styles.button2} onClick={handleNext}>
          <div className={styles.buttonNext}>Next</div>
          <div className={styles.buttonText}>Grass is Greener</div>
          <span className={styles.arrow}><BsArrowRight /></span>
        </button>
      </div>
      <div className={styles.line}></div>
      <footer className={styles.footer}>    
          &copy; 2024 Tev
      </footer>
    </div>
  );
}