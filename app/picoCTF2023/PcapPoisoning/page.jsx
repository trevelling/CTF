import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function PcapPoisoning() {
  return (
    <div className={styles.pcapPoisoningContainer}>
      <div className={styles.pcapPoisoningTitle}>
        <a
          href="https://blog.yes-but-no.org/ybn-ctf-2023/ctf"
          target="blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          PcapPoisoning
        </a>
        <br />
      </div>
      <div className={styles.pcapPoisoningQuestion}>
        <p>
          <strong style={{ color: "rgb(76, 211, 76)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
          How about some hide and seek heh? Download this file and find the
          flag.
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILE: </strong>
          trace.pcap
        </p>
      </div>
      <div className={styles.pcapPoisoningSolved}>
        <p>
          This is a simple forensics challenge. Seeing the challenge name "
          <strong>Pcap</strong>", I ought to use{" "}
          <a
            href="https://www.wireshark.org/"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            Wireshark
          </a>
          . Opening the pcap file in wireshark will result us in a lot of
          different packets. <br />
          <br />
          We can observe the most common protocol being used by going to{" "}
          <strong>Statistics 🡢 Protocol Hierarchy </strong>. We can see that the
          most exchanged packets is <strong>TCP</strong>.
        </p>
      </div>
      <div className={styles.pcapPoisoningEvidence}>
        <Image src="/PcapPoisoning1.png" width={800} height={325} alt="logo" />
      </div>
      <div className={styles.pcapPoisoningSolved}>
        <p>
          Using the filter feature in Wireshark and inputting this filter,{" "}
          <strong>tcp contains "pico"</strong> we will get the flag located in
          the Hex Dump.
          <br />
          <br />
          Use this{" "}
          <a
            href="https://cdn.comparitech.com/wp-content/uploads/2019/06/Wireshark-Cheat-Sheet-1.jpg.webp"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            Wireshark Cheat Sheet
          </a>
          .
        </p>
      </div>
      <div className={styles.pcapPoisoningEvidence}>
        <Image src="/PcapPoisoning2.png" width={800} height={400} alt="logo" />
      </div>
      <div className={styles.pcapPoisoningFlag}>
        <span>Flag: </span>

        <span style={{ color: "rgb(137, 207, 240)" }}>
          picoCTF{"{P64P_4N4L7S1S_SU55355FUL_f621fa37}"}
        </span>
      </div>
    </div>
  );
}
