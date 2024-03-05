"use client";

import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function BabyRev() {
  const router = useRouter();
  const handlePrevious = () => {
    router.push("/bitsCTF/LadyLove");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    router.push("/bitsCTF/BabyRSA");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);

  const copyCode1 = () => {
    navigator.clipboard.writeText(`
undefined8 main(void)
{
  size_t sVar1;
  long in_FS_OFFSET;
  char local_38 [40];
  long local_10;
      
  local_10 = *(long *)(in_FS_OFFSET + 0x28);
  printf("Enter a string: ");
  fgets(local_38,0x20,stdin);
  sVar1 = strlen(local_38);
  if (sVar1 == 0x18) {
    myfunc(local_38);
  }
  else {
    puts(":P\n");
  }
  if (local_10 != *(long *)(in_FS_OFFSET + 0x28)) {
                    /* WARNING: Subroutine does not return */
    __stack_chk_fail();
  }
  return 0;
}
    `);
    setCopied1(true);
    setTimeout(() => setCopied1(false), 1500);
  };

  const copyCode2 = () => {
    navigator.clipboard.writeText(`
    void myfunc(char *param_1)
{
  if (*param_1 == 'B') {
    if (((((((param_1[4] == 'C') && (param_1[0xd] == 'm')) && (param_1[0x13] == 'r')) &&
          (((param_1[3] == 'S' && (param_1[10] == 'l')) &&
            ((param_1[2] == 'T' && ((param_1[0xe] == 'e' && (param_1[0x11] == '0')))))))) &&
          ((param_1[0x16] == '}' &&
          (((param_1[7] == '{' && (param_1[5] == 'T')) && (param_1[0xf] == '_')))))) &&
        (((param_1[1] == 'I' && (param_1[0x15] == 'v')) &&
          (((param_1[8] == 'w' && ((param_1[0xb] == 'c' && (param_1[6] == 'F')))) &&
          (param_1[0x14] == '3')))))) &&
        ((((param_1[9] == '3' && (param_1[0xc] == '0')) && (param_1[0x10] == 't')) &&
        (param_1[0x12] == '_')))) {
      puts("Yippee :3\n");
    }
  }
  else {
    puts(":PP\n");
  }
  return;
}
    `);
    setCopied2(true);
    setTimeout(() => setCopied2(false), 1500);
  };
  return (
    <div className={styles.babyRevContainer}>
      <div className={styles.babyRevTitle} style={{ color: "white"}}>
          baby-rev
        <br />
      </div>
      <div className={styles.babyRevQuestion}>
        <p>
          <strong className={styles.command} style={{ color: "rgb(255, 255, 255)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          anita max wyinn
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILE: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/BitsCTF/baby-rev"
            download
          >
            baby-rev.elf
          </a>
        </p>
      </div>
      <div className={styles.babyRevSolved}>
        <p>
          Since it was a reverse engineering challenge, I opened the elf file in{" "}
          <a
            href="https://ghidra-sre.org/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>Ghidra</code>
          </a>
          . This code computes if the input string length is 18 characters long
          and if it is will call <code>myfunc(local_38)</code> else, it
          outputs <code>:P</code>.
          <br />
        </p>
      </div>
      <div className={styles.babyRevEvidence}>
        <button onClick={copyCode1} className={styles.copyButton}>
          {copied1 ? <IoCopyOutline /> : <IoCopyOutline />}
        </button>
        <SyntaxHighlighter language="c" style={dracula}>
          {`undefined8 main(void)
{
  size_t sVar1;
  long in_FS_OFFSET;
  char local_38 [40];
  long local_10;
  
  local_10 = *(long *)(in_FS_OFFSET + 0x28);
  printf("Enter a string: ");
  fgets(local_38,0x20,stdin);
  sVar1 = strlen(local_38);
  if (sVar1 == 0x18) {
    myfunc(local_38);
  }
  else {
    puts(":P\n");
  }
  if (local_10 != *(long *)(in_FS_OFFSET + 0x28)) {
                    /* WARNING: Subroutine does not return */
    __stack_chk_fail();
  }
  return 0;
}`}
        </SyntaxHighlighter>
      </div>
      <div className={styles.babyRevSolved}>
        <p>
          In this function, it compares character by character, if every
          character is correct, it outputs the flag.
          <br />
          This indicated to me that inputting the same string will result in the
          flag by rearranging it.
        </p>
      </div>
      <div className={styles.babyRevEvidence}>
        <button onClick={copyCode2} className={styles.copyButton}>
          {copied2 ? <IoCopyOutline /> : <IoCopyOutline />}
        </button>
        <SyntaxHighlighter language="c" style={dracula}>
          {`void myfunc(char *param_1)
{
  if (*param_1 == 'B') {
    if (((((((param_1[4] == 'C') && (param_1[0xd] == 'm')) && (param_1[0x13] == 'r')) &&
          (((param_1[3] == 'S' && (param_1[10] == 'l')) &&
           ((param_1[2] == 'T' && ((param_1[0xe] == 'e' && (param_1[0x11] == '0')))))))) &&
         ((param_1[0x16] == '}' &&
          (((param_1[7] == '{' && (param_1[5] == 'T')) && (param_1[0xf] == '_')))))) &&
        (((param_1[1] == 'I' && (param_1[0x15] == 'v')) &&
         (((param_1[8] == 'w' && ((param_1[0xb] == 'c' && (param_1[6] == 'F')))) &&
          (param_1[0x14] == '3')))))) &&
       ((((param_1[9] == '3' && (param_1[0xc] == '0')) && (param_1[0x10] == 't')) &&
        (param_1[0x12] == '_')))) {
      puts("Yippee :3\n");
    }
  }
  else {
    puts(":PP\n");
  }
  return;
}`}
        </SyntaxHighlighter>
      </div>
      <div className={styles.babyRevFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          BITSCTF{"{w3lc0me_t0_r3v}"}
        </span>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button1} onClick={handlePrevious}>
          <div className={styles.buttonPrevious}>Previous</div>
          <div className={styles.buttonText}>LadyLove</div>
          <span className={styles.arrow}></span>
        </button>
        <button className={styles.button2} onClick={handleNext}>
          <div className={styles.buttonNext}>Next</div>
          <div className={styles.buttonText}>Baby RSA</div>
          <span className={styles.arrow}></span>
        </button>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}
