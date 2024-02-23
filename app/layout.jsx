// RootLayout.jsx
import React from 'react';
import Head from "next/head";
import Sidebar from "@/app/ui/sidebar";
import Navbar from "@/app/ui/navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>CTF blog</title>
      </Head>
      <body>
        <div style={{ display: 'flex', height: '100vh', flexDirection: 'column'}}>
          <Navbar />
          <div style={{display: 'flex', flexDirection: 'row', overflow: 'auto'}}>
            <Sidebar />
            <main style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
