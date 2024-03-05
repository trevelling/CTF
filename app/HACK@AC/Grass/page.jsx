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

export default function Grass() {
  const router = useRouter();
  const handlePrevious = () => {
    router.push("/HACK@AC/VVS");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    router.push("/HACK@AC/OOP");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [isZoomed1, setIsZoomed1] = useState(false);

  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const [copied3, setCopied3] = useState(false);
  const [copied4, setCopied4] = useState(false);
  const [copied5, setCopied5] = useState(false);
  const [copied6, setCopied6] = useState(false);

  const copyCode1 = () => {
    navigator.clipboard.writeText(`
┌──(tev㉿kali)-[~/HACK@AC]
└─$ exiftool Grass_Final.png
ExifTool Version Number         : 12.67
File Name                       : Grass_Final.png
Directory                       : .
File Size                       : 15 MB
File Modification Date/Time     : 2023:05:15 15:42:42-04:00
File Access Date/Time           : 2023:05:15 15:42:42-04:00
File Inode Change Date/Time     : 2024:02:27 05:29:42-05:00
File Permissions                : -rw-r--r--
Error                           : File format error
    `);
    setCopied1(true);
    setTimeout(() => setCopied1(false), 50);
  };

  const copyCode2 = () => {
    navigator.clipboard.writeText(`
┌──(tev㉿kali)-[~/HACK@AC]
└─$ pngcheck -v Grass_Final.png
File: Grass_Final.png (15081104 bytes)
  this is neither a PNG or JNG image nor MNG stream
ERRORS DETECTED in Grass_Final.png
    `);
    setCopied2(true);
    setTimeout(() => setCopied2(false), 50);
  };

  const copyCode3 = () => {
    navigator.clipboard.writeText(`
┌──(tev㉿kali)-[~/HACK@AC]
└─$ xxd -l8 Grass_Final.png
00000000: 8940 4e47 0d0a 1a0a
    `);
    setCopied3(true);
    setTimeout(() => setCopied3(false), 50);
  };

  const copyCode4 = () => {
    navigator.clipboard.writeText(`
┌──(tev㉿kali)-[~/HACK@AC]
└─$ printf '\\x89\\x50\\x4e\\x47\\x0d\\x0a\\x1a\\x0a' | dd of=Grass_Final.png bs=1 seek=0 conv=notrunc
8+0 records in
8+0 records out 
8 bytes copied, 0.000240838 s, 33.2 kB/s
    `);
    setCopied4(true);
    setTimeout(() => setCopied4(false), 50);
  };

  const copyCode5 = () => {
    navigator.clipboard.writeText(`
┌──(tev㉿kali)-[~/HACK@AC]
└─$ pngcheck Grass_Final.png
OK: Grass_Final.png (4032x3024, 32-bit RGB+alpha, non-interlaced, 69.1%).
    
┌──(tev㉿kali)-[~/HACK@AC]
└─$ eog Grass_Final.png
    `);
    setCopied5(true);
    setTimeout(() => setCopied5(false), 50);
  };

  const copyCode6 = () => {
    navigator.clipboard.writeText(`
┌──(tev㉿kali)-[~/HACK@AC]
└─$ zsteg Grass_Final.png 
imagedata           .. file: AIX core file 64-bit
b1,g,msb,xy         .. file: OpenPGP Secret Key
b1,rgb,lsb,xy       .. text: "ACSI{t0uch_gr@55}"
b2,r,msb,xy         .. file: OpenPGP Secret Key
b2,g,msb,xy         .. text: "PTPUADPP"
b2,b,msb,xy         .. text: "QADQDET@"
b3,bgr,lsb,xy       .. text: "Zh$S, Y("
b4,r,msb,xy         .. text: "p@0WGt3'0 @W1pV7@SsU"
b4,g,lsb,xy         .. text: "Ffff\"fD\" \"hdB$hdDFH"
b4,g,msb,xy         .. file: zlib compressed data
b4,b,lsb,xy         .. text: "\"d&dDff@("
b4,b,msb,xy         .. text: "aQ!FVe\"6!1QF aG&QBbD"
b4,rgb,msb,xy       .. text: "0qe7FW76!S2!"
b4,abgr,msb,xy      .. text: "ouos_Gos/1/5/1/1"
    `);
    setCopied6(true);
    setTimeout(() => setCopied6(false), 50);
  };
  return (
    <div className={styles.grassContainer}>
      <div className={styles.grassTitle} style={{ color: "white"}}>
          Grass is Greener
        <br />
      </div>
      <div className={styles.grassQuestion}>
        <p>
          <strong className={styles.command} style={{ color: "rgb(255, 255, 255)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          the Leaves Shades the Branches
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILE: </strong>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/HACK@AC/Grass_Final.zip"
            download
          >
            Grass_Final.zip
          </a>
          <br />
          <br />
        </p>
      </div>
      <div className={styles.grassSolved}>
        <p>
          Unzipping <code>Grass_Final.zip</code>, gives us{" "}
          <code>Grass_Final.png</code>. Immediately, I tried viewing the png
          using{" "}
          <a
            href="https://help.gnome.org/users/eog/stable/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>eog</code>
          </a>
          . However, it gave me a file format error. Thus, I tried using{" "}
          <a
            href="https://help.gnome.org/users/eog/stable/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>exiftool</code>
          </a>{" "}
          to see the metadata of the file. Once again, it showed a file format
          error.
          <br />
        </p>
      </div>
      <div className={styles.grassEvidence}>
        <button onClick={copyCode1} className={styles.copyButton}>
          {copied1 ? <IoCopyOutline /> : <IoCopy />}
        </button>
        <SyntaxHighlighter language="bash" style={dracula}>
          {`┌──(tev㉿kali)-[~/HACK@AC]
└─$ exiftool Grass_Final.png
ExifTool Version Number         : 12.67
File Name                       : Grass_Final.png
Directory                       : .
File Size                       : 15 MB
File Modification Date/Time     : 2023:05:15 15:42:42-04:00
File Access Date/Time           : 2023:05:15 15:42:42-04:00
File Inode Change Date/Time     : 2024:02:27 05:29:42-05:00
File Permissions                : -rw-r--r--
Error                           : File format error`}
        </SyntaxHighlighter>
      </div>
      <div className={styles.grassEvidence}>
        <button onClick={copyCode2} className={styles.copyButton}>
          {copied2 ? <IoCopyOutline /> : <IoCopy />}
        </button>
        <SyntaxHighlighter language="bash" style={dracula}>
          {`┌──(tev㉿kali)-[~/HACK@AC]
└─$ pngcheck -v Grass_Final.png
File: Grass_Final.png (15081104 bytes)
  this is neither a PNG or JNG image nor MNG stream
ERRORS DETECTED in Grass_Final.png`}
        </SyntaxHighlighter>
      </div>
      <div className={styles.grassSolved}>
        <p>
          After some googling, I came across this{" "}
          <a
            href="https://github.com/blinils/CTF/blob/master/CTF-Jeopardy/2016-icectf/challenges/corrupt-transmission-50/README.md"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>github repo</code>
          </a>{" "}
          talking about{" "}
          <a
            href="https://medium.com/@d.harish008/what-is-a-magic-byte-and-how-to-exploit-1e286da1c198"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>magic bytes</code>
          </a>
          . Basically, we can now exploit this the same way. Seeing that is a
          png image, we can change to magic bytes of the corrupted
          <strong> Grass_Final.png</strong> file.
          <br />
          <br /> Here's the list of{" "}
          <a
            href="https://en.wikipedia.org/wiki/List_of_file_signatures"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>file signatures</code>
          </a>{" "}
          for their respecitive magic bytes.
          <br />
          <br />I used{" "}
          <a
            href="https://www.hackingarticles.in/linux-for-pentester-xxd-privilege-escalation/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>xxd</code>
          </a>{" "}
          on the file to see its hexadecimal format. However, based on the png
          file signaures, it has been altered and is no longer a png despite the
          file extension.
        </p>
      </div>
      <div className={styles.grassEvidence}>
        <button onClick={copyCode3} className={styles.copyButton}>
          {copied3 ? <IoCopyOutline /> : <IoCopy />}
        </button>
        <SyntaxHighlighter language="bash" style={dracula}>
          {`┌──(tev㉿kali)-[~/HACK@AC]
└─$ xxd -l8 Grass_Final.png
00000000: 8940 4e47 0d0a 1a0a`}
        </SyntaxHighlighter>
      </div>
      <div className={styles.grassSolved}>
        <p>
          We can alter the magic bytes of the corrupted png to match the magic
          bytes of a real png file.
        </p>
      </div>
      <div className={styles.grassEvidence}>
        <button onClick={copyCode4} className={styles.copyButton}>
          {copied4 ? <IoCopyOutline /> : <IoCopy />}
        </button>
        <SyntaxHighlighter language="bash" style={dracula}>
          {`┌──(tev㉿kali)-[~/HACK@AC]
└─$ printf '\\x89\\x50\\x4e\\x47\\x0d\\x0a\\x1a\\x0a' | dd of=Grass_Final.png bs=1 seek=0 conv=notrunc
8+0 records in
8+0 records out 
8 bytes copied, 0.000240838 s, 33.2 kB/s`}
        </SyntaxHighlighter>
      </div>

      <div className={styles.grassSolved}>
        <p>
          The file is now an actual png file. I ran{" "}
          <a
            href="https://help.gnome.org/users/eog/stable/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>eog</code>
          </a>{" "}
          on the file and it revealed an area of ACS(I).
        </p>
      </div>
      <div className={styles.grassEvidence}>
        <button onClick={copyCode5} className={styles.copyButton}>
          {copied5 ? <IoCopyOutline /> : <IoCopy />}
        </button>
        <SyntaxHighlighter language="bash" style={dracula}>
          {`┌──(tev㉿kali)-[~/HACK@AC]
└─$ pngcheck Grass_Final.png
OK: Grass_Final.png (4032x3024, 32-bit RGB+alpha, non-interlaced, 69.1%).

┌──(tev㉿kali)-[~/HACK@AC]
└─$ eog Grass_Final.png`}
        </SyntaxHighlighter>
      </div>
      <div
        className={`${styles.grassEvidencePic} ${isZoomed1 ? styles.zoomed : ""}`}
        onClick={toggleZoom1}
      >
        <Image src="/HACK@AC/Grass_Final1.png" width={900} height={600} alt="logo" className={styles.grassImage}/>
      </div>
      <div className={styles.grassSolved}>
        <p>
          At this point, I got really stuck as I thought it had something to do
          with the image. Thus I tried looking hard at the image to see if the
          flag was hidden in the photo 🤣.
          <br />
          <br />I re-looked at the challenge and realised the description gave
          us a hint. Reading the capital letters of the description 
          <code>the Leaves Shades the Branches</code> gives us 
          <a
            href="https://www.analog.com/en/resources/glossary/lsb.html"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>LSB</code>
          </a>
          . Then I knew I had to run{" "}
          <a
            href="https://wiki.bi0s.in/steganography/zsteg/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>zsteg</code>
          </a>{" "}
          on the image. There is the flag!
        </p>
      </div>
      <div className={styles.grassEvidence}>
        <button onClick={copyCode6} className={styles.copyButton}>
          {copied6 ? <IoCopyOutline /> : <IoCopy />}
        </button>
        <SyntaxHighlighter language="bash" style={dracula}>
          {`┌──(tev㉿kali)-[~/HACK@AC]
└─$ zsteg Grass_Final.png 
imagedata           .. file: AIX core file 64-bit
b1,g,msb,xy         .. file: OpenPGP Secret Key
b1,rgb,lsb,xy       .. text: "ACSI{t0uch_gr@55}"
b2,r,msb,xy         .. file: OpenPGP Secret Key
b2,g,msb,xy         .. text: "PTPUADPP"
b2,b,msb,xy         .. text: "QADQDET@"
b3,bgr,lsb,xy       .. text: "Zh$S, Y("
b4,r,msb,xy         .. text: "p@0WGt3'0 @W1pV7@SsU"
b4,g,lsb,xy         .. text: "Ffff\"fD\" \"hdB$hdDFH"
b4,g,msb,xy         .. file: zlib compressed data
b4,b,lsb,xy         .. text: "\"d&dDff@("
b4,b,msb,xy         .. text: "aQ!FVe\"6!1QF aG&QBbD"
b4,rgb,msb,xy       .. text: "0qe7FW76!S2!"
b4,abgr,msb,xy      .. text: "ouos_Gos/1/5/1/1"`}
        </SyntaxHighlighter>
      </div>
      <div className={styles.grassFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          ACSI{"{t0uch_gr@55}"}
        </span>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button1} onClick={handlePrevious}>
          <div className={styles.buttonPrevious}>Previous</div>
          <div className={styles.buttonText}>Very Vulnerable Site</div>
          <span className={styles.arrow}><BsArrowLeft /></span>
        </button>
        <button className={styles.button2} onClick={handleNext}>
          <div className={styles.buttonNext}>Next</div>
          <div className={styles.buttonText}>Object Orientated Programming</div>
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
