'use client';

import React, { useState } from "react";

export default function RateMyProfessor() {
    const [iframeError, setIframeError] = useState(false);

    return (
        <section className="w-full min-h-screen bg-[#09122C] px-4 md:px-[10vw] py-8">
            <h1 className="text-4xl md:text-5xl text-white text-center font-black mb-8 text-border-5xl">Rate My Professor</h1>
            
            <div className="flex flex-col md:flex-row gap-8">
                <section className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl text-white text-center font-black mb-6 text-border-5xl">Overview</h2>
                    <p className="text-white text-center text-lg mb-8">
                        A platform where students can rate and review their professors, helping others make informed decisions about their education.
                    </p>
                </section>

                <section className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl text-white text-center font-black mb-6 text-border-5xl">Video Demo</h2>
                    <div className="flex flex-col items-center justify-center">
                    <iframe width="560" height="315" className="w-full aspect-video rounded-lg" src="https://www.youtube.com/embed/ymDfCJGIA40?si=NUXuUAXmAuab2bPO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </section>
            </div>
        </section>
    );
}   