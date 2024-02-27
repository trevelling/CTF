"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function VVS() {
  const [isZoomed1, setIsZoomed1] = useState(false);
  const [isZoomed2, setIsZoomed2] = useState(false);

  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };

  const toggleZoom2 = () => {
    setIsZoomed2(!isZoomed2);
  };
  return (
    <div className={styles.vvsContainer}>
      <div className={styles.vvsTitle}>
        <a
          href="https://blog.yes-but-no.org/ybn-ctf-2023/ctf"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          Very Vulnerable Site
        </a>
        <br />
      </div>
      <div className={styles.vvsQuestion}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
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
            href="/VVS.zip"
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
        className={`${styles.vvsEvidence} ${isZoomed1 ? styles.zoomed : ""}`}
        onClick={toggleZoom1}
      >
        <Image src="/VVS1.png" width={700} height={250} alt="logo" />
      </div>
      <div className={styles.vvsSolved}>
        <p>
          From the given <strong>app.py</strong> file, the
          code of concern is the function (register). This function takes
          username and password inputs from a form, hashes the password using
          SHA-256, inserts the username, hashed password, and a default value
          for admin into a SQLite database, and then redirects the user to the
          index page with a success message. <br /><br />This is part of the code that is of concern.
        </p>
      </div>
      <div className={styles.vvsEvidence}>
        <SyntaxHighlighter language="python" style={materialDark}>
          {`
@app.route('/register', methods=['POST'])
def register():
  username = request.form['username']
  password = request.form['password']
  phash = sha256(password.encode('utf-8')).hexdigest()
  
  conn = sqlite3.connect('database.db')
  cur = conn.cursor()
  ## Wait how do I use the question mark thing again?
  cur.execute(f"INSERT INTO users (username, password, admin) VALUES ('{username}', '{phash}', 0)")
  conn.commit()
  
  return redirect(url_for('index', message='Successfully registered!'))
          `}
        </SyntaxHighlighter>
      </div>
      <div className={styles.vvsSolved}>
      Firstly, I tried many times to inject a payload into the username field of the registration form but realised the goal was to first create a new user as the database was empty.
      <br />
      <br />
      Payload:
      <br /> 
      <div className={styles.vvsEvidence}>
        <SyntaxHighlighter language="python" style={materialDark}>
          {`
[username]','[password hashed with SHA256]',1--
          `}
        </SyntaxHighlighter>
      </div>
      <br />
      <br />
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
        <SyntaxHighlighter language="python" style={materialDark}>
          {`
  cur.execute(f"INSERT INTO users (username, password, admin) VALUES ('{username}', '{phash}', 0)")
          `}
        </SyntaxHighlighter>
      </div>

      <div className={styles.vvsFlag}>
        <span>Flag: </span>

        <span style={{ color: "rgb(137, 207, 240)" }}>
          ACSI{"{a_v3ry_v8lner4b13_p4g3_w1th_55t1_7wt_5q1i}"}
        </span>
      </div>
    </div>
  );
}
