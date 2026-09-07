"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef, useState, useEffect } from "react";

export default function Hero({ show }: { show?: boolean }) {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

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
            const mm = gsap.matchMedia();

            // Mobile (Under 768px): Animation မလုပ်ဘဲ တန်းပြမည်
            mm.add("(max-width: 767px)", () => {
                gsap.set(contentRef.current, {
                    autoAlpha: 1,
                    visibility: "visible",
                    opacity: 1,
                });
                gsap.set(".hero-animate", { opacity: 1, y: 0 });
            });

            // Desktop (768px & above): Intro Show ဖြစ်မှ Animation Run မည်
            mm.add("(min-width: 768px)", () => {
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
            });

            return () => mm.revert();
        },
        { scope: sectionRef, dependencies: [show] },
    );

    return (
        <section
            ref={sectionRef}
            id="home"
            className="w-full min-h-screen relative overflow-hidden bg-[#0a0a0a] flex items-center justify-center font-sans"
        >
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                }}
            />

            <div
                ref={contentRef}
                className="w-full max-w-6xl mx-auto px-6 md:px-16 min-h-screen flex flex-col justify-center items-start opacity-100 md:opacity-0 md:invisible relative z-10 pt-20"
            >
                <div className="space-y-6 max-w-4xl">
                    <div className="hero-animate inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Available for full-time roles & projects</span>
                    </div>

                    <p className="hero-animate text-2xl md:text-3xl font-crafty text-amber-300 -rotate-1 origin-left">
                        Hi, It&apos;s me
                    </p>

                    <h1 className="hero-animate text-5xl sm:text-7xl md:text-8xl font-bold font-doppio tracking-tight text-white leading-none">
                        Khant Pyae Htoo
                    </h1>

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

                    <div className="hero-animate flex flex-wrap items-center gap-4 pt-4">
                        <a
                            href="#works"
                            className="bg-amber-300 hover:bg-amber-400 text-black font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 flex items-center gap-2"
                        >
                            View Selected Works
                            <i className="fa-solid fa-arrow-down text-xs"></i>
                        </a>

                        <a
                            href="/CV.pdf"
                            download="CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/5 hover:bg-white/10 text-white border border-white/15 font-medium text-sm px-6 py-3 rounded-full transition-all duration-200 flex items-center gap-2"
                        >
                            <i className="fa-solid fa-file-arrow-down text-xs"></i>
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="hero-animate absolute bottom-8 left-6 md:left-16 flex items-center gap-3 text-xs font-mono text-gray-500 uppercase tracking-widest">
                    <span className="w-8 h-[1px] bg-gray-700" />
                    Scroll Down
                </div>
            </div>
        </section>
    );
}
