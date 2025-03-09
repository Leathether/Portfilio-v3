'use client';

import React, { useState } from "react";

export default function Flashcards() {
    const [iframeError, setIframeError] = useState(false);

    return (
        <section className="w-full min-h-screen bg-[#09122C] px-4 md:px-[10vw] py-8">
            <h1 className="text-4xl md:text-5xl text-white text-center font-black mb-8 text-border-5xl">Flashcards</h1>
            
            <div className="flex flex-col md:flex-row gap-8">
                <section className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl text-white text-center font-black mb-6 text-border-5xl">Overview</h2>
                    <p className="text-white text-center text-lg mb-8">
                        Flashcards is a website that allows you to create flashcards for your studies. The website is designed to be used by everyone, from beginners to experts.
                    </p>
                </section>

                <section className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl text-white text-center font-black mb-6 text-border-5xl">Try It Out</h2>
                    <div className="flex flex-col items-center justify-center">
                        <a 
                            href="https://flashcard-app-leathether-peter-magenheims-projects.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mb-4"
                        >
                            Open Flashcard App
                        </a>
                        <p className="text-white text-center text-lg">
                            Click the button above to open the Flashcard app in a new tab
                        </p>
                    </div>
                </section>
            </div>
        </section>
    );
}