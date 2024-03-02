"use client";

import React from "react";
import styles from "./page.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Timer() {
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
          <strong className={styles.command} style={{ color: "rgb(255, 255, 255)" }}>~# cat Question</strong>
          <br />
        </p>
        <p>
        You will find the flag after analysing this apk.
          <br />
          <br />
          <strong style={{ color: "rgb(137, 207, 240)" }}>FILE: </strong>
          <a style={{ color: "white", textDecoration: "none" }} href="/pico2023/timer.apk" download>timer.apk</a>
        </p>
      </div>
      <div className={styles.timerSolved}>
        <p>
          Opening up <code>timer.apk</code> in{" "}
          <a
            href="https://github.com/skylot/jadx"
            target="blank"
            style={{ color: "rgb(76, 211, 76)" }}
          >
            <code>jadx</code>
          </a>
          {" "}will allow us to decomplie the code to see more information. Heading over to <code>AndriordManifest.xml</code>, the flag is hiding in plain sight.
        </p>
      </div>
      <div className={styles.timerEvidence}>
        <SyntaxHighlighter language="xml" style={gruvboxDark}>
          {`
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android" android:versionCode="1" android:versionName="picoCTF{t1m3r_r3v3rs3d_succ355fully_17496}" android:compileSdkVersion="32" android:compileSdkVersionCodename="12" package="com.example.timer" platformBuildVersionCode="32" platformBuildVersionName="12">
    <uses-sdk android:minSdkVersion="21" android:targetSdkVersion="32"/>
    <application android:theme="@style/Theme.Timer" android:label="@string/app_name" android:icon="@mipmap/ic_launcher" android:debuggable="true" android:allowBackup="true" android:supportsRtl="true" android:fullBackupContent="@xml/backup_rules" android:roundIcon="@mipmap/ic_launcher_round" android:appComponentFactory="androidx.core.app.CoreComponentFactory" android:dataExtractionRules="@xml/data_extraction_rules">
        <activity android:name="com.example.timer.MainActivity" android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN"/>
                <category android:name="android.intent.category.LAUNCHER"/>
            </intent-filter>
        </activity>
        <provider android:name="androidx.startup.InitializationProvider" android:exported="false" android:authorities="com.example.timer.androidx-startup">
            <meta-data android:name="androidx.emoji2.text.EmojiCompatInitializer" android:value="androidx.startup"/>
            <meta-data android:name="androidx.lifecycle.ProcessLifecycleInitializer" android:value="androidx.startup"/>
        </provider>
    </application>
</manifest>
          `}
        </SyntaxHighlighter>
      </div>
      <div className={styles.timerFlag}>
        <span>Flag: </span>
        <span style={{ color: "rgb(137, 207, 240)" }}>
          picoCTF{"{t1m3r_r3v3rs3d_succ355fully_17496}"}
        </span>
      </div>
    </div>
  );
}
