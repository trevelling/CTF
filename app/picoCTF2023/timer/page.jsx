"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";


export default function Timer() {
  const [isZoomed1, setIsZoomed1] = useState(false);
  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };
  return (
    <div className={styles.timerContainer}>
      <div className={styles.timerTitle}>
        <a
          href="https://blog.yes-but-no.org/ybn-ctf-2023/ctf"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          timer
        </a>
        <br />
      </div>
      <div className={styles.timerQuestion}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
        You will find the flag after analysing this apk.
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILE: </strong>
          <a style={{ color: "white", textDecoration: "none" }} href="/timer_timer.apk" download>timer.apk</a>,{" "}
        </p>
      </div>
      <div className={styles.timerSolved}>
        <p>
          This was a very straight foward reverse engineering challenge. We can use file to see what file this is. 
          Since it is a complied Java class file, we need to 
          decompile it to see the code.
        </p>
      </div>
      <div
        className={`${styles.timerEvidence} ${
          isZoomed1 ? styles.zoomed : ""
        }`}
        onClick={toggleZoom1}
      >
        <Image src="/safe1.png" width={800} height={90} alt="logo" />
      </div>
      <div className={styles.timerSolved}>
        <p>
          We can use many open-source tools that decompile Java class code. Since this is a simple challenge, I just used a{" "}
          <a
            href="http://www.javadecompilers.com/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            online Java decomplier
          </a>
          . From the decomplied code, we will get the flag.
        </p>
      </div>
      <div className={styles.timerEvidence}>
        <SyntaxHighlighter language="python" style={materialDark}>
          {`
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Base64;
import java.util.Base64.Encoder;
        
public class SafeOpener {
    public static void main(String[] args) throws IOException {
        BufferedReader keyboard = new BufferedReader(new InputStreamReader(System.in));
        Encoder encoder = Base64.getEncoder();
        String encodedkey = "";
        String key = "";
        
        for(int i = 0; i < 3; ++i) {
            System.out.print("Enter password for the safe: ");
            key = keyboard.readLine();
            encodedkey = encoder.encodeToString(key.getBytes());
            System.out.println(encodedkey);
            boolean isOpen = openSafe(encodedkey);
            if (isOpen) {
                break;
            }
        
            System.out.println("You have  " + (2 - i) + " attempt(s) left");
        }
        
    }
        
    public static boolean openSafe(String password) {
        String encodedkey = "picoCTF{SAf3_0p3n3rr_y0u_solv3d_it_0e57c117}";
        if (password.equals(encodedkey)) {
            System.out.println("Sesame open");
            return true;
        } else {
            System.out.println("Password is incorrect\n");
            return false;
        }
    }
}
            
          `}
        </SyntaxHighlighter>
      </div>
      <div className={styles.timerFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          picoCTF{"{SAf3_0p3n3rr_y0u_solv3d_it_0e57c117}"}
        </span>
      </div>
    </div>
  );
}