import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link"
import Image from "next/image";
import Portrait from "/public/portrait.jpg";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is by Peter Magenheim, and it is version 3 of his portfolio",
  keywords:"SoftwareDeveloper, Programmer, Software, SoftwareEngineer, Coder",
  icons: "/portrait.jpg"
};

const buttonCSS:string = "w-[15.5vw] h-14 m-4 bg-slate-400 text-black font-black text-2xl rounded-xl"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-slate-800 h-34 w-full flex flex-row">
          <button className="w-12 m-2 rounded-xl">
            <Image src={Portrait} alt="By Peter Magenheim" className="w-full h-full rounded-xl" />
          </button>
          <button className="w-24 h-14 m-4 bg-slate-400 text-black font-black text-2xl rounded-xl content-center">Home</button>
          <button className={buttonCSS}></button>
          <button className={buttonCSS}></button>
          <button className={buttonCSS}></button>
          <button className={buttonCSS}></button>
          <button className={buttonCSS}></button>
          <button className="w-[3.5vw] h-[3.5vw] bg-slate-400 rounded-2xl m-2"></button>
        </header>
        {children}
      </body>
    </html>
  );
}



