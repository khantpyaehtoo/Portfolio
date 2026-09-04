"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface FooterProps {
    show?: boolean;
}

export default function Footer({ show }: FooterProps) {
    const footerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        if (show) {
            gsap.to(footerRef.current, {
                autoAlpha: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
            });
        }
    }, [show]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer
            ref={footerRef}
            className="w-full px-6 md:px-16 pt-12 pb-8 opacity-0 invisible translate-y-5"
        >
            <div className="max-w-6xl mx-auto relative">
                {/* Main Card Container */}
                <div className="bg-[#18191c] text-white p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl relative z-0 -mt-[1px]">
                    <div className="flex flex-col md:flex-row justify-between gap-10">
                        {/* Main Grid Content */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 flex-1">
                            <div className="space-y-3">
                                <h2 className="text-2xl font-bold tracking-tight">
                                    Khant Pyae Htoo
                                </h2>
                                <p className="text-gray-400 text-sm">
                                    &copy; 2026 August. Built by{" "}
                                    <span className="font-crafty text-sm text-amber-300 font-normal">
                                        khant pyae htoo
                                    </span>
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider">
                                    Explore
                                </h3>
                                <ul className="space-y-2 text-gray-300 text-sm font-medium">
                                    <li>
                                        <a
                                            href="#works"
                                            className="hover:text-amber-300 transition-colors"
                                        >
                                            Work
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#about"
                                            className="hover:text-amber-300 transition-colors"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#playground"
                                            className="hover:text-amber-300 transition-colors"
                                        >
                                            Playground
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider">
                                    Get in touch
                                </h3>
                                <div className="space-y-2 text-gray-300 text-sm font-medium">
                                    <p>ericrebillet@gmail.com</p>
                                    <a
                                        href="/cv.pdf"
                                        className="inline-block text-amber-300 hover:underline pt-2"
                                    >
                                        Download CV &rarr;
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Vertical Social Bar */}
                        <div className="flex flex-col items-center gap-3 pt-2 md:pl-6 border-t md:border-t-0 md:border-l border-white/10">
                            <button
                                onClick={scrollToTop}
                                className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-amber-300 hover:text-white transition-all"
                            >
                                <i className="fa-solid fa-arrow-up  text-xs"></i>
                            </button>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
                            >
                                <i className="fa-brands fa-facebook-f text-xs"></i>
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
                            >
                                <i className="fa-brands fa-github text-xs"></i>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
                            >
                                <i className="fa-brands fa-linkedin-in text-xs"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
