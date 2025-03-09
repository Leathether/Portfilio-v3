"use client"
import Link from "next/link";
import Image from "next/image";
import Portrait from "/public/portrait.jpg";

const buttonCSS: string = "w-[16vw] h-[10vh] m-2 p-0 mr-[.25vw] ml-[.25vw] bg-inherit text-white font-black text-[.8rem] rounded-xl content-center border-[.25vw] border-[#E17564]";

export default function Navigation() {
  return (
    <nav className="flex flex-row justify-center ">
      <Link href="/">
        <button className="h-[10vh] m-2 rounded-xl">
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
      <Link href="/rate-my-professor">
        <button className={buttonCSS}>Rate My Professor</button>
      </Link>
      <Link href="/social-media">
        <button className="w-[8vw] h-[10vh] bg-inherit m-2 p-0 ml-[.25vw] mr-[.25vw] font-black text-white text-[.8rem] rounded-2xl border-[.25vw] border-[#E17564]">Social Media</button>
      </Link>
    </nav>
  );
} 