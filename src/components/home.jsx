import React from "react";
import img2 from "../assets/img2.jpg";
import TextType from "./texttype";

export default function Home() {
    return (
        <div
            className="h-screen w-full bg-contain bg-no-repeat bg-center relative"
            style={{ backgroundImage: `url(${img2})` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-start justify-center h-full px-12 md:px-24 text-white">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                    Shrouk Kamel
                </h1>

                <div className="text-2xl md:text-3xl font-light flex items-center">
                    <TextType
                        text={["I'm Frontend Web Developer .",
                             "I Create Websites", 
                             "Landing Page Dashboard,Portfolio and more"]}

                        typingSpeed={75}
                        deletingSpeed={50}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                        className="font-semibold text-blue-400"
                    />
                </div>
            </div>
        </div>
    );
}
