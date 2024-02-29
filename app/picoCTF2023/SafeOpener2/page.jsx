"use client";

import React from "react";
import styles from "./page.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function SafeOpener2() {
  return (
    <div className={styles.safeContainer}>
      <div className={styles.safeTitle} style={{ color: "white"}}>
          Safe Opener 2
        <br />
      </div>
      <div className={styles.safeQuestion}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          What can you do with this file? I forgot the key to my safe but this
          file is supposed to help me with retrieving the lost key. Can you help
          me unlock my safe?
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILE: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/SafeOpener.class"
            download
          >
            SafeOpener.class
          </a>
        </p>
      </div>
      <div className={styles.safeSolved}>
        <p>
          This was another very straight foward reverse engineering challenge.
          We can use{" "}
          <a
            href="https://www.geeksforgeeks.org/file-command-in-linux-with-examples/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>file</code>
          </a>{" "}
          to see what type file this is. Since it is a complied Java class file,
          we need to decompile it to see the code.
        </p>
      </div>
      <div className={styles.safeEvidence}>
        <SyntaxHighlighter language="bash" style={gruvboxDark}>
          {`
┌──(tev㉿kali)-[~/pico]
└─$ file SafeOpener.class
SafeOpener.class: complied Java class data, version 52.0 (Java 1.8)
  `}
        </SyntaxHighlighter>
      </div>
      <div className={styles.safeSolved}>
        <p>
          We can use many open-source tools that decompile Java class code.
          Since this is a simple challenge, I just used a{" "}
          <a
            href="http://www.javadecompilers.com/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>online Java decomplier</code>
          </a>
          . From the decomplied code, we will get the flag.
          <br />
          <br />
          This is the decomplied code.
        </p>
      </div>
      <div className={styles.safeEvidence}>
        <SyntaxHighlighter language="python" style={gruvboxDark}>
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
      <div className={styles.safeFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          picoCTF{"{SAf3_0p3n3rr_y0u_solv3d_it_0e57c117}"}
        </span>
      </div>
    </div>
  );
}
