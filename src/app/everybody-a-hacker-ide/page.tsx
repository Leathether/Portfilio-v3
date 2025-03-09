import React from "react";

export default function EverybodyAHackerIDE() {
    return (
        
        <section className="w-full h-full bg-[#09122C] pr-[10vw] pl-[10vw]">
            <h1 className="text-5xl text-white text-center font-black m-8 text-border-5xl ">Everybody a Hacker IDE</h1>
            <section className="w-full h-full bg-[#09122C] flex flex-row">
                <section className="w-[40vw] h-full bg-[#09122C]">
                    <h1 className="text-5xl text-white text-center font-black m-8 text-border-5xl">Overview</h1>
                    <p className="text-white text-center font-black m-8 text-border-5xl">
                        Everybody a Hacker IDE built with C++ with a simple and easy to use interface. The IDE is designed to be used by everyone, from beginners to experts. <br></br> <br></br>
                        The IDE is currently in beta and is still being developed. You can download the latest version of the IDE <a className="text-blue-500 text-underline on" href="https://github.com/Leathether/everybody-a-hacker-ide/">here</a>.
                    </p>
                </section>
                <section className="w-[40vw] h-full bg-[#09122C] flex flex-col justify-center items-center">
                    <h1 className="text-5xl text-white text-center font-black m-8 text-border-5xl">Beta-1.1.0</h1>
                    <iframe className="w-[32vw] h-[18vw] m-8" src="https://www.youtube.com/embed/AZmeUptVG-k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </section>
            </section>
        </section>
    )
}