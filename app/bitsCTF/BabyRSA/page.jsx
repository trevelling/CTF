"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function BabyRSA() {
  const [isZoomed1, setIsZoomed1] = useState(false);
  const [isZoomed2, setIsZoomed2] = useState(false);

  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };

  const toggleZoom2 = () => {
    setIsZoomed2(!isZoomed2);
  };
  return (
    <div className={styles.babyRsaContainer}>
      <div className={styles.babyRsaTitle} style={{ color: "white"}}>
          Baby Rsa
        <br />
      </div>
      <div className={styles.babyRsaQuestion}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          Rsa is for babies. So we improved it by taking it to the next
          dimensions.
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILES: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/bitsCTF/rsa_mat.sage"
            download
          >
            rsa_mat.sage
          </a>
          ,{" "}
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/bitsCTF/chall.txt"
            download
          >
            chall.txt
          </a>
        </p>
      </div>
      <div className={styles.babyRsaSolved}>
        <p>
          RSA challenges are pretty standard. Opening up{" "}
          <code>rsa_mat.sage</code> shows us code that encrypts a plaintext
          message using a custom method, and prints the resulting ciphertext
          while chall.txt contains the values of <code>n,a,b,c, and d</code>
          .
          <br />
          <br />
          This code generates an RSA key pair, splits a given plaintext pt into
          four equal parts, and then constructs a 2x2 matrix g using these four
          parts. It encrypts the matrix g using the encrypt function and prints
          the resulting ciphertext c.
          <br />
        </p>
      </div>
      <div className={styles.babyRsaEvidence}>
        <SyntaxHighlighter language="python" style={gruvboxDark}>
          {`
#!/usr/bin/env python3

from Crypto.Util.number import bytes_to_long
from Crypto.PublicKey import RSA
from sage.all import matrix, Zmod
            
key = RSA.generate(2048)
            
print(f"n = {key.n}")
            
pt = b"REDACTEDZ"
pt = [pt[p:p+len(pt)//4] for p in range(0, len(pt), len(pt)//4)]
            
g = matrix(Zmod(key.n), [[pt[0], pt[1]], [pt[2], pt[3]]]) 
            
def encrypt(g):
  return g ^ 65537
            
c = encrypt(g)
            
for i in c:
  for j in i:
    print(j)
          `}
        </SyntaxHighlighter>
      </div>
      <div className={styles.babyRsaSolved}>
        <p>
          We can use{" "}
          <a
            href="http://factordb.com/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>factordb</code>
          </a>{" "}
          to calcualte the <code>p</code> and <code>q</code> from n.
          <br />
        </p>
      </div>
      <div
        className={`${styles.babyRsaEvidence} ${
          isZoomed1 ? styles.zoomed : ""
        }`}
        onClick={toggleZoom1}
      >
        <Image src="/BitsCTF/BabyRSA1.png" width={900} height={100} alt="logo" />
      </div>
      <div className={styles.babyRsaSolved}>
        <p>
          With all the information I have <code>p,q,n,a,b,c,d</code> I am
          able to compute the plain text.
          <br />
          <br />
          This python code simply reverses the ct that i got from{" "}
          <code>rsa_mat.sage</code>. Sub in the values obtained.
        </p>
      </div>
      <div className={styles.babyRsaEvidence}>
        <SyntaxHighlighter language="python" style={gruvboxDark}>
          {`
from Crypto.Util.number import long_to_bytes

g = matrix(Zmod(n), [[a,b], [c,d]])
phi = (p*p - 1)*(p*p - p)*(q*q - 1)*(q*q - q)
d = pow(65537, -1, phi)
             
pt = (g^d).lift()
            
pt = long_to_bytes(pt[0][0]) + long_to_bytes(pt[0][1]) + long_to_bytes(pt[1][0]) + long_to_bytes(pt[0][1])
   
print(pt)
          `}
        </SyntaxHighlighter>
      </div>
      <div className={styles.babyRsaSolved}>
        <p>Running the code in sage will result in the flag.</p>
      </div>
      <div
        className={`${styles.babyRsaEvidence} ${
          isZoomed2 ? styles.zoomed : ""
        }`}
        onClick={toggleZoom2}
      >
        <Image src="/BitsCTF/BabyRSA2.png" width={800} height={350} alt="logo" />
      </div>

      <div className={styles.babyRsaFlag}>
        <span>Flag: </span>

        <span style={{ color: "rgb(137, 207, 240)" }}>
          BITSCTF{"{63N3r41_11N34r_6r0UP_C4ND0_4NY7H1N6}"}
        </span>
      </div>
    </div>
  );
}
