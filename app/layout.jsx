import Head from "next/head";
import Info from "@/app/ui/info";
import Sidebar from "@/app/ui/sidebar";
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
        <Info />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}