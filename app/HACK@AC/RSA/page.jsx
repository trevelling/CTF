import React from "react";
import styles from "./page.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function RSA() {
  return (
    <div className={styles.rsaContainer}>
      <div className={styles.rsaTitle}>
        <a
          href="https://blog.yes-but-no.org/ybn-ctf-2023/ctf"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          RandomlySelectedAlgorithm
        </a>
        <br />
      </div>
      <div className={styles.rsaQuestion}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          An introduction to the RSA algorithm!
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILES: </strong>
          <a style={{ color: "white", textDecoration: "none" }} href="/RSA_RSA.txt" download>RSA.txt</a>
        </p>
      </div>
      <div className={styles.rsaSolved}>
        <p>
          <strong>RSA.txt</strong> explained what was RSA about and its origins. It provided us with <strong>n,e,c,p,q</strong>. 
          This made it very easy to solve it, 
          as they gave me all the values to decrypt the cipher text.
          <br />
          <br />
          To solve this challenge, I inversed the encryption.
        </p>
      </div>
      <div className={styles.rsaEvidence}>
        <SyntaxHighlighter language="python" style={materialDark}>
          {`
    from Crypto.Util.number import long_to_bytes

    n = 8658628546195742416426846064560031781994710710324915841146332112158193600986064369896954438498015317717916206099831713871181185450145194452521938644103383
    e = 65537
    c = 769592140916016206061510390105816140132298080171302825675003070039700638199487654083036331263030420828746407264205639107935615485853068753206330654648074
    p = 79683944517959696670617631384131219775576650611292688567988662400264431266819
    q = 108662147670716818049624938161195710612908147677637733268728580525147068371357
    
    # Calculate Euler's totient function φ(n)
    phi_n = (p - 1) * (q - 1)
    
    # Calculate the private exponent d
    d = pow(e, -1, phi_n)
    
    # Decrypt the ciphertext c
    m = pow(c, d, n)
    
    # Convert the integer to the flag string
    flag = long_to_bytes(m)
    print(flag.decode())
    
          `}
        </SyntaxHighlighter>
      </div>
      <div className={styles.rsaFlag}>
        <span>Flag: </span>

        <span style={{ color: "rgb(137, 207, 240)" }}>
          ACSI{"{i_l0ve_RS@}"}
        </span>
      </div>
    </div>
  );
}
