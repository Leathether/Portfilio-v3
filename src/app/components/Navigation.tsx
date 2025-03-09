"use client"
import Link from "next/link";
import Image from "next/image";
import Portrait from "/public/portrait.jpg";

const buttonCSS: string = "w-[9vw] h-[5vw] m-4 mr-[.25vw] mr-[.25vw] bg-inherit text-white font-black text-2xl rounded-xl content-center border-[.25vw] border-[#E17564]";

export default function Navigation() {
  return (
    <nav className="flex flex-row justify-center ">
      <Link href="/">
        <button className="w-[3.75vw] m-2 rounded-xl">
          <Image src={Portrait} alt="By Peter Magenheim" className="w-full h-full rounded-xl" />
        </button>
      </Link>
      <Link href="/">
        <button className={buttonCSS}>Home</button>
      </Link>
      <Link href="/everybody-a-hacker-ide">
        <button className={buttonCSS}>C++ IDE</button>
      </Link>
      <Link href="/cmd-support">
        <button className={buttonCSS}>CMD Support</button>
      </Link>
      <Link href="/flashcards">
        <button className={buttonCSS}>Flashcards</button>
      </Link>
      <Link href="/wakamole-game">
        <button className={buttonCSS}>Wakamole Game</button>
      </Link>
      <Link href="/python-game">
        <button className={buttonCSS}>Python Game</button>
      </Link>
      <Link href="/social-media">
        <button className="w-[6vw] h-[5vw] bg-inherit m-4 font-black text-white text-2xl rounded-2xl border-[.25vw] border-[#E17564]">Social Media</button>
      </Link>
    </nav>
  );
} 