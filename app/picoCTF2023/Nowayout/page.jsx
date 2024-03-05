"use client";

import React, { useState, useEffect } from "react";
import Preloader from "@/app/ui/preloader";
import { IoCopyOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { IoCopy } from "react-icons/io5"
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

export default function NoWayOut() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1);

    return () => clearTimeout(timeout);
  }, []);
  const router = useRouter();
  const handlePrevious = () => {
    router.push("/picoCTF2023/Reverse");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    router.push("/picoCTF2023/SafeOpener2");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isZoomed1, setIsZoomed1] = useState(false);
  const [isZoomed2, setIsZoomed2] = useState(false);
  const [isZoomed3, setIsZoomed3] = useState(false);

  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };

  const toggleZoom2 = () => {
    setIsZoomed2(!isZoomed2);
  };
  const toggleZoom3 = () => {
    setIsZoomed3(!isZoomed3);
  };

  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);

  const copyCode1 = () => {
    navigator.clipboard.writeText(`
Old code:

if (Input.GetButton("Jump") && this.canMove && this.characterController.IsGrounded && !this.isClimbing)
{
    this.moveDirection.y = this.jumpSpeed;
}
else
{
    this.moveDirection.y = y;
}
    `);
    setCopied1(true);
    setTimeout(() => setCopied1(false), 50);
  };

  const copyCode2 = () => {
    navigator.clipboard.writeText(`
New code:

if (Input.GetButton("Jump") // && this.canMove && this.characterController.IsGrounded && !this.isClimbing)
{
    this.moveDirection.y = this.jumpSpeed;
}
else
{
    this.moveDirection.y = y;
}
    `);
    setCopied2(true);
    setTimeout(() => setCopied2(false), 50);
  };
  return (
    <div className={styles.noWayOutContainer}>
      {loading && <Preloader />}
      <div className={styles.noWayOutTitle} style={{ color: "white"}}>
          No way out
        <br />
      </div>
      <div className={styles.noWayOutQuestion}>
        <p>
          <strong className={styles.command} style={{ color: "rgb(255, 255, 255)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
        Put this flag in standard picoCTF format before submitting. If the flag was <code>h1_1m_7h3_f14g</code> submit <code>picoCTF{"h1_1m_7h3_f14g"}</code> to the platform.
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILES: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/pico2023/win.zip"
            download
          >
            win.zip
          </a>,{" "}
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/pico2023/mac.app.zip"
            download
          >
            mac.app.zip
          </a>
          <br />
          <br />
        </p>
      </div>
      <div className={styles.noWayOutSolved}>
        <p>
          The challenge gave us two files <code>win.zip</code> and <code>mac.app.zip</code>. Since I am on windows, i will be using <code>win.zip</code>.
          <br />
          <br />
          Unzipping <code>win.zip</code> gives us many files. The important one would be the <code>Unity files</code>. When runned, it brings us into a game, where to get the flag, we need to escape the walls that we are surrounded by.
        </p>
      </div>
      <div
        className={`${styles.noWayOutEvidencePic} ${isZoomed1 ? styles.zoomed : ""}`}
        onClick={toggleZoom1}
      >
        <Image src="/pico2023/Nowayout1.png" width={900} height={450} alt="logo" className={styles.vm0Image} />
      </div>
      <div className={styles.noWayOutSolved}>
        <p>
          However, we do not jump high enough to jump over the walls. We can view and modify the source code of the file <code>pico_Data</code> using{" "}
          <a
            href="https://github.com/dnSpy/dnSpy"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>dnSpy</code>
          </a> 
          . Opening up the source code, the main file of concern is the <code>PlayerController</code>, so that we can modify the movements (aka jump).
        </p>
      </div>
      <div
        className={`${styles.noWayOutEvidencePic} ${isZoomed2 ? styles.zoomed : ""}`}
        onClick={toggleZoom2}
      >
        <Image src="/pico2023/Nowayout2.png" width={900} height={500} alt="logo" className={styles.vm0Image} />
      </div>
      <div className={styles.noWayOutSolved}>
        <p>
          We will have to modify the code of this. 
        </p>
      </div>
      <div className={styles.noWayOutEvidence}>
        <button onClick={copyCode1} className={styles.copyButton}>
          {copied1 ? <IoCopyOutline /> : <IoCopy />}
        </button>
        <SyntaxHighlighter language="bash" style={dracula}>
          {`Old code:

if (Input.GetButton("Jump") && this.canMove && this.characterController.IsGrounded && !this.isClimbing)
{
    this.moveDirection.y = this.jumpSpeed;
}
else
{
    this.moveDirection.y = y;
}`}
        </SyntaxHighlighter>
      </div>
      <div className={styles.noWayOutSolved}>
        <p>
          This is the new modified code. Now, when the player presses the <code>jump button</code>,<code>this.moveDirection.y</code> will be set to <code>this.jumpSpeed</code>, regardless of the player&apos;s ability to move <code>(this.canMove)</code>, the players&apos;s grounding status <code>(this.characterController.IsGrounded)</code>, or whether the player is climbing <code>(this.isClimbing)</code>.
          We can now sort of &quot;fly&quot; and head over to the flag
        </p>
      </div>
      <div className={styles.noWayOutEvidence}>
        <button onClick={copyCode2} className={styles.copyButton}>
          {copied2 ? <IoCopyOutline /> : <IoCopy />}
        </button>
        <SyntaxHighlighter language="bash" style={dracula}>
          {`New code:

if (Input.GetButton("Jump") // && this.canMove && this.characterController.IsGrounded && !this.isClimbing)
{
    this.moveDirection.y = this.jumpSpeed;
}
else
{
    this.moveDirection.y = y;
}`}
        </SyntaxHighlighter>
      </div>
      <div
        className={`${styles.noWayOutEvidencePic} ${isZoomed3 ? styles.zoomed : ""}`}
        onClick={toggleZoom3}
      >
        <Image src="/pico2023/Nowayout3.png" width={900} height={700} alt="logo" className={styles.vm0Image} />
      </div>

      <div className={styles.noWayOutFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          picoCTF{"{WELCOME_TO_UNITY!!}"}
        </span>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button1} onClick={handlePrevious}>
          <div className={styles.buttonPrevious}>Previous</div>
          <div className={styles.buttonText}>Reverse</div>
          <span className={styles.arrow}><BsArrowLeft /></span>
        </button>
        <button className={styles.button2} onClick={handleNext}>
          <div className={styles.buttonNext}>Next</div>
          <div className={styles.buttonText}>Safe Opener 2</div>
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