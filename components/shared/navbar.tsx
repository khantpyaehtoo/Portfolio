"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";

export default function Navbar({ show }: { show?: boolean }) {
    const navRef = useRef<HTMLDivElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useGSAP(
        () => {
            if (show) {
                gsap.to(navRef.current, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                });
            }
        },
        { scope: navRef, dependencies: [show] },
    );

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-center p-4 md:p-6 pointer-events-none">
            <div
                ref={navRef}
                className={`pointer-events-auto transition-all duration-500 opacity-0 invisible -translate-y-5 bg-[#141517]/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl ${
                    isScrolled
                        ? "w-full max-w-2xl py-2.5 px-6 border-white/15"
                        : "w-full max-w-5xl py-3.5 px-8"
                }`}
            >
                <div className="flex justify-between items-center">
                    {/* Logo / Name */}
                    <a
                        href="#home"
                        className="font-bold text-white font-doppio tracking-tight text-base md:text-lg hover:text-amber-300 transition-colors"
                    >
                        Khant Pyae Htoo
                    </a>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-300">
                        <a
                            href="#home"
                            className="hover:text-amber-300 transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="hover:text-amber-300 transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#works"
                            className="hover:text-amber-300 transition-colors"
                        >
                            Works
                        </a>
                        <a
                            href="#playground"
                            className="hover:text-amber-300 transition-colors"
                        >
                            Playground
                        </a>
                    </nav>

                    {/* Contact Button */}
                    <a
                        href="#contact"
                        className="bg-amber-300 hover:bg-amber-400 text-black font-semibold text-xs md:text-sm px-5 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-amber-300/20"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </header>
    );
}
