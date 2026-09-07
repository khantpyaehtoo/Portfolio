"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef, useState, useEffect } from "react";

export default function Hero({ show }: { show?: boolean }) {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

    // Track Mouse Position
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useGSAP(
        () => {
            if (show) {
                const tl = gsap.timeline({
                    defaults: { ease: "power3.out", duration: 0.8 },
                });

                tl.to(contentRef.current, {
                    autoAlpha: 1,
                    duration: 0.3,
                }).fromTo(
                    ".hero-animate",
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, stagger: 0.15 },
                );
            }
        },
        { scope: sectionRef, dependencies: [show] },
    );

    return (
        <section
            id="home"
            ref={sectionRef}
            className="w-full min-h-screen relative overflow-hidden bg-[#0a0a0a] flex items-center justify-center font-sans"
        >
            {/* 1. Base Subtle Radial Dots Background (Full Screen) */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                }}
            />

            {/* 2. Interactive Glowing Dots Follower (Full Screen) */}
            <div
                className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300"
                style={{
                    backgroundImage: `radial-gradient(#f59e0b 1.5px, transparent 1.5px)`,
                    backgroundSize: "24px 24px",
                    WebkitMaskImage: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
                    maskImage: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
                }}
            />

            {/* 3. Mouse Center Soft Ambient Amber Glow */}
            <div
                className="absolute w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none z-0 transition-transform duration-75"
                style={{
                    left: 0,
                    top: 0,
                    transform: `translate3d(${mousePos.x - 144}px, ${mousePos.y - 144}px, 0)`,
                }}
            />

            {/* Content Container (Centered Max-Width) */}
            <div
                ref={contentRef}
                className="w-full max-w-6xl mx-auto px-6 md:px-16 min-h-screen flex flex-col justify-center items-start opacity-0 invisible relative z-10 pt-20"
            >
                <div className="space-y-6 max-w-4xl">
                    {/* Available Status Badge */}
                    <div className="hero-animate inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Available for full-time roles & projects</span>
                    </div>

                    {/* Subtitle / Intro */}
                    <p className="hero-animate text-2xl md:text-3xl font-crafty text-amber-300 -rotate-1 origin-left">
                        Hi, It&apos;s me
                    </p>

                    {/* Main Name Heading */}
                    <h1 className="hero-animate text-5xl sm:text-7xl md:text-8xl font-bold font-doppio tracking-tight text-white leading-none">
                        Khant Pyae Htoo
                    </h1>

                    {/* Title & Short Bio */}
                    <div className="hero-animate space-y-2">
                        <p className="text-xl md:text-2xl font-medium text-gray-300">
                            Front-End Developer
                        </p>
                        <p className="text-sm md:text-base text-gray-400 max-w-xl leading-relaxed">
                            Crafting performant web applications with React,
                            Next.js, and modern UI architectures. Focused on
                            smooth interactions and clean code.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="hero-animate flex flex-wrap items-center gap-4 pt-4">
                        <a
                            href="#works"
                            className="bg-amber-300 hover:bg-amber-400 text-black font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 flex items-center gap-2"
                        >
                            View Selected Works
                            <i className="fa-solid fa-arrow-down text-xs"></i>
                        </a>

                        <a
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/5 hover:bg-white/10 text-white border border-white/15 font-medium text-sm px-6 py-3 rounded-full transition-all duration-200 flex items-center gap-2"
                        >
                            <i className="fa-solid fa-file-arrow-down text-xs"></i>
                            Download CV
                        </a>
                    </div>
                </div>

                {/* Bottom Scroll Indicator */}
                <div className="hero-animate absolute bottom-8 left-6 md:left-16 flex items-center gap-3 text-xs font-mono text-gray-500 uppercase tracking-widest">
                    <span className="w-8 h-[1px] bg-gray-700" />
                    Scroll Down
                </div>
            </div>
        </section>
    );
}
