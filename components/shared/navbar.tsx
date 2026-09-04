"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";

export default function Navbar({ show }: { show?: boolean }) {
    const navRef = useRef<HTMLDivElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useGSAP(() => {
        if (show) {
            gsap.to(navRef.current, {
                autoAlpha: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
            });
        }
    }, [show]);

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-center p-4 transition-all duration-300">
            <div
                ref={navRef}
                className={`transition-all duration-500 opacity-0 invisible -translate-y-5 ${
                    isScrolled
                        ? "w-[80%] md:w-[60%] bg-black/40 backdrop-blur-md border border-white/10 rounded-full py-3 px-8 shadow-lg"
                        : "w-full bg-black/40 backdrop-blur-md border border-white/10 rounded-full py-3 px-8"
                }`}
            >
                <div className="flex justify-between items-center text-black">
                    <h1
                        className={`font-bold transition-colors duration-300 text-white`}
                    >
                        Eric Rebillet
                    </h1>

                    <div
                        className={`flex items-center space-x-8 transition-colors duration-300 text-gray-300`}
                    >
                        <a
                            href="#home"
                            className="hover:text-amber-400 transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="hover:text-amber-400 transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#works"
                            className="hover:text-amber-400 transition-colors"
                        >
                            Works
                        </a>
                        <a
                            href="#playground"
                            className="hover:text-amber-400 transition-colors"
                        >
                            Playground
                        </a>

                        <button
                            className={`py-2 px-5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                                isScrolled
                                    ? "bg-white text-black hover:bg-amber-300"
                                    : "bg-white text-black border-2 border-blue-400 "
                            }`}
                        >
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
