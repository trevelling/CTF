"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Grass() {
  const [isZoomed1, setIsZoomed1] = useState(false);

  const toggleZoom1 = () => {
    setIsZoomed1(!isZoomed1);
  };
  return (
    <div className={styles.grassContainer}>
      <div className={styles.grassTitle} style={{ color: "white"}}>
          Grass is Greener
        <br />
      </div>
      <div className={styles.grassQuestion}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
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
          to see any metadata of the file. Once again, it showed a file format
          error.
          <br />
        </p>
      </div>
      <div className={styles.grassEvidence}>
        <SyntaxHighlighter language="bash" style={gruvboxDark}>
          {`
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
  `}
        </SyntaxHighlighter>
      </div>
      <div className={styles.grassEvidence}>
        <SyntaxHighlighter language="bash" style={gruvboxDark}>
          {`
┌──(tev㉿kali)-[~/HACK@AC]
└─$ pngcheck -v Grass_Final.png
File: Grass_Final.png (15081104 bytes)
  this is neither a PNG or JNG image nor MNG stream
ERRORS DETECTED in Grass_Final.png
  `}
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
        <SyntaxHighlighter language="bash" style={gruvboxDark}>
          {`
┌──(tev㉿kali)-[~/HACK@AC]
└─$ xxd -l8 Grass_Final.png
00000000: 8940 4e47 0d0a 1a0a
  `}
        </SyntaxHighlighter>
      </div>
      <div className={styles.grassSolved}>
        <p>
          We can alter the magic bytes of the corrupted png to match the magic
          bytes of a real png file.
        </p>
      </div>
      <div className={styles.grassEvidence}>
        <SyntaxHighlighter language="bash" style={gruvboxDark}>
          {`
┌──(tev㉿kali)-[~/HACK@AC]
└─$ printf '\\x89\\x50\\x4e\\x47\\x0d\\x0a\\x1a\\x0a' | dd of=Grass_Final.png bs=1 seek=0 conv=notrunc
8+0 records in
8+0 records out 
8 bytes copied, 0.000240838 s, 33.2 kB/s
        `}
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
        <SyntaxHighlighter language="bash" style={gruvboxDark}>
          {`
┌──(tev㉿kali)-[~/HACK@AC]
└─$ pngcheck Grass_Final.png
OK: Grass_Final.png (4032x3024, 32-bit RGB+alpha, non-interlaced, 69.1%).

┌──(tev㉿kali)-[~/HACK@AC]
└─$ eog Grass_Final.png
        `}
        </SyntaxHighlighter>
      </div>
      <div
        className={`${styles.grassEvidence} ${isZoomed1 ? styles.zoomed : ""}`}
        onClick={toggleZoom1}
      >
        <Image src="/HACK@AC/Grass_Final1.png" width={700} height={400} alt="logo" />
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
        <SyntaxHighlighter language="bash" style={gruvboxDark}>
          {`
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
        `}
        </SyntaxHighlighter>
      </div>
      <div className={styles.grassFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          ACSI{"{t0uch_gr@55}"}
        </span>
      </div>
    </div>
  );
}
