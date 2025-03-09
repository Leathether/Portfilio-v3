import React from "react";

export default function SocialMedia() {
    return (
        <section className="w-full min-h-screen bg-[#09122C] px-[5vw] py-8">
            {/* Header Section */}
            <h1 className="text-[2rem] text-white text-center font-black mb-12 text-border-5xl">Connect With Me</h1>
            
            {/* Social Media Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* LinkedIn */}
                <div className="bg-[#0A1430] rounded-lg p-6 shadow-lg">
                    <h2 className="text-3xl text-white font-bold mb-4">LinkedIn</h2>
                    <div className="aspect-video mb-4">
                    <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
                    <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="HORIZONTAL" data-vanity="peter-magenheim-d" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/peter-magenheim-d?trk=profile-badge"></a></div>
                    </div>
                    <a 
                        href="https://www.linkedin.com/in/peter-magenheim-d/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 font-semibold"
                    >
                        Connect on LinkedIn →
                    </a>
                </div>

                {/* GitHub */}
                <div className="bg-[#0A1430] rounded-lg p-6 shadow-lg">
                    <h2 className="text-3xl text-white font-bold mb-4">GitHub</h2>
                    <div className="aspect-video mb-4 flex justify-center">
                        <img
                            src="https://github-readme-stats.vercel.app/api?username=Leathether&show_icons=true&theme=dark"
                            alt="GitHub Stats"
                            className="rounded"
                        />
                    </div>
                    <a 
                        href="https://github.com/Leathether" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 font-semibold"
                    >
                        Follow on GitHub →
                    </a>
                </div>

                {/* YouTube */}
                <div className="bg-[#0A1430] rounded-lg p-6 shadow-lg">
                    <h2 className="text-3xl text-white font-bold mb-4">YouTube</h2>
                    <div className="aspect-video mb-4">
                    <iframe 
                        width="560" 
                        height="315" 
                        className="w-fit h-fit" 
                        src="https://www.youtube.com/embed/s_umKI2EFpc?si=XEfUGsH08rAOS47M" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                    </div>
                    <a 
                        href="https://www.youtube.com/@petermagenheim2389" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 font-semibold"
                    >
                        Subscribe on YouTube →
                    </a>
                </div>

                {/* X (Twitter) */}
                <div className="bg-[#0A1430] rounded-lg p-6 shadow-lg">
                    <h2 className="text-3xl text-white font-bold mb-4">X (Twitter)</h2>
                    <div className="aspect-video mb-4">
                        <iframe
                            src="https://platform.twitter.com/embed/index.html?dnt=true&embedId=twitter-widget-0&frame=false&hideCard=false&hideThread=false&lang=en&theme=dark&userId=leathether"
                            className="w-full h-full rounded"
                            frameBorder="0"
                            scrolling="no"
                            allowTransparency
                            title="Twitter Profile"
                        ></iframe>
                    </div>
                    <a 
                        href="https://x.com/leathether" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 font-semibold"
                    >
                        Follow on X →
                    </a>
                </div>

                {/* Instagram */}
                <div className="bg-[#0A1430] rounded-lg p-6 shadow-lg">
                    <h2 className="text-3xl text-white font-bold mb-4">Instagram</h2>
                    <div className="aspect-video mb-4 flex justify-center items-center">
                        <iframe 
                            src="https://www.instagram.com/masterhacker2019/embed"
                            className="w-full h-full rounded"
                            frameBorder="0"
                            scrolling="no"
                            allowTransparency
                            title="Instagram Feed"
                        ></iframe>
                    </div>
                    <a 
                        href="https://www.instagram.com/masterhacker2019/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 font-semibold"
                    >
                        Follow on Instagram →
                    </a>
                </div>

                {/* TikTok */}
                <div className="bg-[#0A1430] rounded-lg p-6 shadow-lg">
                    <h2 className="text-3xl text-white font-bold mb-4">TikTok</h2>
                    <div className="aspect-video mb-4 flex justify-center items-center">
                        <iframe
                            src="https://www.tiktok.com/embed/@petermagenheim"
                            className="w-full h-full rounded"
                            allowFullScreen
                            frameBorder="0"
                            scrolling="no"
                        ></iframe>
                    </div>
                    <a 
                        href="https://www.tiktok.com/@petermagenheim" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 font-semibold"
                    >
                        Follow on TikTok →
                    </a>
                </div>
            </div>
        </section>
    );
}