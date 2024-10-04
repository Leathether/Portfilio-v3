import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image"
import Portrait from "../public/portrait.jpg"
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
  title: "Create Next App",
  description: "Generated by create next app",
};

const buttonCSS = "w-36 h-14 m-4 bg-slate-400 text-black font-black text-2xl rounded-xl"

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
          <Image src={Portrait} alt="By Peter Magenheim" className="w-16 h-full p-2 rounded-xl"></Image>
          <button className="w-24 h-14 m-4 bg-slate-400 text-black font-black text-2xl rounded-xl">Home</button>
          <button className={buttonCSS}></button>
          <button className={buttonCSS}></button>
          <button className={buttonCSS}></button>
          <button className={buttonCSS}></button>
          <button className={buttonCSS}></button>
          <button className={buttonCSS}></button>
          <button className={buttonCSS}></button>
          <button className={buttonCSS}></button>
        </header>
        {children}
      </body>
    </html>
  );
}



