import React from "react";

export default function EverybodyAHackerIDE() {
    return (
        <section className="w-full min-h-screen bg-[#09122C] px-4 md:px-[10vw]">
            <h1 className="text-xl md:text-[2rem] text-white text-center font-black py-6 md:m-8 text-border-5xl">
                Everybody a Hacker IDE
            </h1>
            
            <section className="w-full flex flex-col md:flex-row gap-6 md:gap-8">
                <section className="w-full md:w-[40vw]">
                    <h2 className="text-xl md:text-[2rem] text-white text-center font-black mb-4 md:m-8 text-border-5xl">
                        Overview
                    </h2>
                    <p className="text-white text-center font-black mx-2 md:m-8 text-border-5xl">
                        Everybody a Hacker IDE built with C++ with a simple and easy to use interface. 
                        The IDE is designed to be used by everyone, from beginners to experts.
                        <br /><br />
                        The IDE is currently in beta and is still being developed. You can download 
                        the latest version of the IDE{" "}
                        <a 
                            className="text-blue-500 hover:text-blue-400 underline" 
                            href="https://github.com/Leathether/everybody-a-hacker-ide/"
                        >
                            here
                        </a>.
                    </p>
                </section>

                <section className="w-full md:w-[40vw] flex flex-col justify-center items-center">
                    <h2 className="text-xl md:text-[2rem] text-white text-center font-black mb-4 md:m-8 text-border-5xl">
                        Beta-1.1.0
                    </h2>
                    <div className="relative w-full aspect-video max-w-[800px] mx-2 md:mx-8">
                        <iframe 
                            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                            src="https://www.youtube.com/embed/AZmeUptVG-k" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>
            </section>
        </section>
    );
}