import Head from "next/head";
import Navbar from "@/app/ui/navbar";
import Credits from "@/app/ui/credits";
import LastUpdated from "@/app/ui/lastupdate";
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
        <Navbar />
        <Credits />
        <LastUpdated />
        {children}
      </body>
    </html>
  );
}