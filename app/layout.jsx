"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Sidebar from "@/app/ui/sidebar";
import Navbar from "@/app/ui/navbar";
import "./globals.css";
import Preloader from "@/app/ui/preloader";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>CTF blog</title>
      </Head>
      <body>
        {loading && <Preloader />}
        <div
          style={{ display: "flex", height: "100vh", flexDirection: "column", textDecoration: "none" }}
        >
          <Navbar />
          <div
            style={{ display: "flex", flexDirection: "row", overflow: "auto", textDecoration: "none" }}
          >
            <Sidebar />
            <main style={{ flex: 1, overflowY: "auto", padding: "20px", textDecoration: "none" }}>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
