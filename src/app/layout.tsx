import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import Portrait from "/public/portrait.jpg";
import "./globals.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from './components/Navigation';

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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4DZTZR1673"></script>
        <header className="bg-[#872341] h-34 w-full flex justify-center flex-row">
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  );
}



