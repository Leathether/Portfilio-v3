"use client"
import React, { useState } from "react"

export default function CmdSupport() {
    const [iframeError, setIframeError] = useState(false);

    return (
        <section className="w-full min-h-screen bg-[#09122C] px-4 md:px-[10vw] py-8">
            <h1 className="text-4xl md:text-5xl text-white text-center font-black mb-8 text-border-5xl">CMD Support</h1>
            
            <div className="flex flex-col md:flex-row gap-8">
                <section className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl text-white text-center font-black mb-6 text-border-5xl">Overview</h2>
                    <p className="text-white text-center text-lg mb-8">
                        A command-line support tool that helps users troubleshoot common issues and provides guidance through terminal commands.
                    </p>
                </section>

                <section className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl text-white text-center font-black mb-6 text-border-5xl">Try It Out</h2>
                    <div className="flex flex-col items-center justify-center">
                        <iframe
                            src="https://customer-support-henna.vercel.app"
                            className="w-full aspect-video rounded-lg"
                            onError={() => setIframeError(true)}
                        />
                        {iframeError && (
                            <p className="text-red-500 text-center mt-4">
                                Failed to load the application. Please try refreshing the page.
                            </p>
                        )}
                    </div>
                </section>
            </div>
        </section>
    )
}