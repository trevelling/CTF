"use client";

import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";;
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { IoCopy } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

export default function RSA() {
  const router = useRouter();
  const handlePrevious = () => {
    router.push("/HACK@AC/Stream");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    router.push("/HACK@AC/Potato");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);

  const copyCode1 = () => {
    navigator.clipboard.writeText(`
    RSA

    RSA (Rivest-Shamir-Adleman) is a widely used public-key encryption algorithm that allows for secure data transmission1. It relies on the difficulty of factoring a very large number into its prime factors, and uses concepts of primes and modular arithmetic.
    
    Being an asymmetric encryption algorithm, RSA uses 2 different keys: a public key for encryption and a private key for decryption.
    
    Key generation
    
        Two prime numbers pp and qq are chosen. These numbers are kept private.
    
        The modulus nn is calculated through p∗qp∗q. This is used in both the public and private key.
    
        ϕϕ (phi) is calculated through (p−1)∗(q−1)(p−1)∗(q−1).
    
        The public exponent ee is chosen such that 1<e<ϕ1<e<ϕ and ee is coprime to ϕϕ (coprime means the two numbers share no common factors).
    
        The private exponent dd is calculated as the modular multiplicative inverse of ee modulo ϕϕ.
    
    The public key consists of nn and ee while the private key consists of nn and dd. The public key will be distributed for encryption while the private key is hidden for decryption.
    
    Encryption
    
        The plaintext MM is converted into an integer mm using a reversible protocol.
    
        The ciphertext cc is calculated through memod  nmemodn.
    
    Decryption
    
        The ciphertext is decrypted through cdmod  ncdmodn, which gives us mm.
    
        From there we convert mm back into the plaintext message.
    
    Hence, dd has to be kept hidden, but if we have access to pp and qq, we can calculate dd and decrypt messages!
    
    For this challenge, decrypt this RSA encryption when provided with nn, ee, cc, pp and qq:
    
    n = 8658628546195742416426846064560031781994710710324915841146332112158193600986064369896954438498015317717916206099831713871181185450145194452521938644103383
    e = 65537
    c = 769592140916016206061510390105816140132298080171302825675003070039700638199487654083036331263030420828746407264205639107935615485853068753206330654648074
    p = 79683944517959696670617631384131219775576650611292688567988662400264431266819
    q = 108662147670716818049624938161195710612908147677637733268728580525147068371357
    
    (After decryption, use the long_to_bytes function to convert the integer to the flag string)
    `);
    setCopied1(true);
    setTimeout(() => setCopied1(false), 50);
  };

  const copyCode2 = () => {
    navigator.clipboard.writeText(`
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
    `);
    setCopied2(true);
    setTimeout(() => setCopied2(false), 50);
  };
  return (
    <div className={styles.rsaContainer}>
      <div className={styles.rsaTitle} style={{ color: "white"}}>
          RandomlySelectedAlgorithm
        <br />
      </div>
      <div className={styles.rsaQuestion}>
        <p>
          <strong className={styles.command} style={{ color: "rgb(255, 255, 255)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          An introduction to the RSA algorithm!
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILE: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/HACK@AC/RSA.txt"
            download
          >
            RSA.txt
          </a>
        </p>
      </div>
      <div className={styles.rsaSolved}>
        <p>
          <code>RSA.txt</code>
        </p>
      </div>
      <div className={styles.rsaEvidence}>
        <button onClick={copyCode1} className={styles.copyButton}>
          {copied1 ? <IoCopyOutline /> : <IoCopy />}
        </button>
        <SyntaxHighlighter language="text" style={dracula}>
          {`RSA

RSA (Rivest-Shamir-Adleman) is a widely used public-key encryption algorithm that allows for secure data transmission1. It relies on the difficulty of factoring a very large number into its prime factors, and uses concepts of primes and modular arithmetic.

Being an asymmetric encryption algorithm, RSA uses 2 different keys: a public key for encryption and a private key for decryption.

Key generation

    Two prime numbers pp and qq are chosen. These numbers are kept private.

    The modulus nn is calculated through p∗qp∗q. This is used in both the public and private key.

    ϕϕ (phi) is calculated through (p−1)∗(q−1)(p−1)∗(q−1).

    The public exponent ee is chosen such that 1<e<ϕ1<e<ϕ and ee is coprime to ϕϕ (coprime means the two numbers share no common factors).

    The private exponent dd is calculated as the modular multiplicative inverse of ee modulo ϕϕ.

The public key consists of nn and ee while the private key consists of nn and dd. The public key will be distributed for encryption while the private key is hidden for decryption.

Encryption

    The plaintext MM is converted into an integer mm using a reversible protocol.

    The ciphertext cc is calculated through memod  nmemodn.

Decryption

    The ciphertext is decrypted through cdmod  ncdmodn, which gives us mm.

    From there we convert mm back into the plaintext message.

Hence, dd has to be kept hidden, but if we have access to pp and qq, we can calculate dd and decrypt messages!

For this challenge, decrypt this RSA encryption when provided with nn, ee, cc, pp and qq:

n = 8658628546195742416426846064560031781994710710324915841146332112158193600986064369896954438498015317717916206099831713871181185450145194452521938644103383
e = 65537
c = 769592140916016206061510390105816140132298080171302825675003070039700638199487654083036331263030420828746407264205639107935615485853068753206330654648074
p = 79683944517959696670617631384131219775576650611292688567988662400264431266819
q = 108662147670716818049624938161195710612908147677637733268728580525147068371357

(After decryption, use the long_to_bytes function to convert the integer to the flag string)`}
        </SyntaxHighlighter>
      </div>
      <div className={styles.rsaSolved}>
        <p>
          This makes it very
          easy to solve it, as they gave us all the values to decrypt the cipher
          text.
          <br />
          <br />
          To solve this challenge, we need to inverse the encryption.
        </p>
      </div>
      <div className={styles.rsaEvidence}>
        <button onClick={copyCode2} className={styles.copyButton}>
          {copied2 ? <IoCopyOutline /> : <IoCopy />}
        </button>
        <SyntaxHighlighter language="python" style={dracula}>
          {`from Crypto.Util.number import long_to_bytes

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
print(flag.decode())`}
        </SyntaxHighlighter>
      </div>
      <div className={styles.rsaFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          ACSI{"{i_l0ve_RS@}"}
        </span>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button1} onClick={handlePrevious}>
          <div className={styles.buttonPrevious}>Previous</div>
          <div className={styles.buttonText}>Stream of Conciousness</div>
          <span className={styles.arrow}><BsArrowRight /></span>
        </button>
        <button className={styles.button2} onClick={handleNext}>
          <div className={styles.buttonNext}>Next</div>
          <div className={styles.buttonText}>Potato</div>
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