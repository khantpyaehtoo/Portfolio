"use client";

import React, { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// Mouse Position tracking custom hook
function useMousePosition(ref: React.RefObject<HTMLElement | null>) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };

        const element = ref.current;
        if (element) {
            element.addEventListener("mousemove", handleMouseMove);
        }

        return () => {
            if (element) {
                element.removeEventListener("mousemove", handleMouseMove);
            }
        };
    }, [ref]);

    return mousePos;
}

export default function ContactSection() {
    const [copied, setCopied] = useState(false);
    const containerRef = useRef<HTMLElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const email = "khantpyaehtoo.dev@gmail.com";

    const mousePos = useMousePosition(cardRef);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    useGSAP(
        () => {
            const ctx = gsap.context(() => {
                // Smooth Entrance
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                });

                tl.fromTo(
                    ".gtk-header-anim",
                    { y: 50, opacity: 0, filter: "blur(10px)" },
                    {
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                        duration: 1,
                        stagger: 0.12,
                        ease: "power4.out",
                    },
                )
                    .fromTo(
                        ".gtk-card-anim",
                        { y: 60, opacity: 0, scale: 0.96 },
                        {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            duration: 0.9,
                            stagger: 0.15,
                            ease: "power3.out",
                        },
                        "-=0.6",
                    )
                    .fromTo(
                        ".gtk-socials-anim",
                        { y: 20, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.6,
                            ease: "power2.out",
                        },
                        "-=0.4",
                    );
            }, containerRef);

            return () => ctx.revert();
        },
        { scope: containerRef },
    );

    return (
        <section
            id="contact"
            ref={containerRef}
            className="min-h-[70vh] w-full bg-bg-base text-text-main px-6 md:px-16 py-28 font-sans relative overflow-hidden z-20 pointer-events-auto selection:bg-primary selection:text-text-main border-t border-border-subtle transition-colors duration-300"
        >
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

            <div className="max-w-5xl mx-auto space-y-16 relative z-10">
                {/* Header Section */}
                <div className="space-y-4 max-w-2xl">
                    <span className="gtk-header-anim text-primary font-mono text-xs uppercase tracking-widest block font-semibold">
                        {"// Get In Touch"}
                    </span>
                    <h2 className="gtk-header-anim text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-text-main">
                        Got a project in mind? <br />
                        <span className="text-text-muted font-normal">
                            Let&apos;s build together.
                        </span>
                    </h2>
                    <p className="gtk-header-anim text-text-muted text-sm md:text-base leading-relaxed pt-2">
                        I&apos;m currently open to full-time opportunities,
                        freelance projects, or creative collaborations. Feel
                        free to reach out!
                    </p>
                </div>

                {/* Main Interactive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* GoodToKnow Cursor Tracking Card */}
                    <div
                        ref={cardRef}
                        className="gtk-card-anim md:col-span-2 bg-bg-surface p-8 rounded-3xl border border-border-subtle hover:border-primary/50 transition-all duration-500 relative flex flex-col justify-between space-y-8 overflow-hidden group shadow-xl"
                    >
                        {/* Dynamic Mouse Hover Glow Effect */}
                        <div
                            className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                            style={{
                                background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, var(--primary-glow), transparent 40%)`,
                            }}
                        />

                        <div className="space-y-2 relative z-10">
                            <span className="text-xs font-mono text-text-muted uppercase tracking-wider block">
                                Direct Mail
                            </span>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-text-main group-hover:text-primary transition-colors break-all">
                                {email}
                            </h3>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 relative z-10">
                            <a
                                href={`mailto:${email}`}
                                className="bg-primary hover:opacity-90 text-bg-base  font-semibold text-xs md:text-sm px-6 py-3 rounded-xl transition-all duration-300 hover:scale-[1.03] active:scale-95 inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-primary/10"
                            >
                                <span>Send Mail</span>
                                <i className="fa-solid fa-paper-plane text-xs"></i>
                            </a>

                            <button
                                type="button"
                                onClick={handleCopyEmail}
                                className="bg-bg-base hover:bg-border-subtle border border-border-subtle text-text-main text-xs md:text-sm px-5 py-3 rounded-xl transition-all duration-300 hover:scale-[1.03] active:scale-95 inline-flex items-center gap-2 font-mono cursor-pointer backdrop-blur-md shadow-sm"
                            >
                                <i
                                    className={`fa-regular ${
                                        copied
                                            ? "fa-check text-emerald-500 dark:text-emerald-400"
                                            : "fa-copy"
                                    }`}
                                ></i>
                                <span>
                                    {copied ? "Copied!" : "Copy Address"}
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Telegram Card with Hover Lift Effect */}
                    <a
                        href="https://t.me/pyxis_xi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gtk-card-anim bg-bg-surface p-8 rounded-3xl border border-border-subtle hover:border-primary/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/5 group flex flex-col justify-between space-y-6 cursor-pointer relative overflow-hidden shadow-xl"
                    >
                        <div className="space-y-3 relative z-10">
                            <span className="text-xs font-mono text-text-muted uppercase tracking-wider block">
                                Quick Chat
                            </span>
                            <h3 className="text-2xl font-bold text-text-main group-hover:text-primary transition-colors flex items-center justify-between">
                                Telegram{" "}
                                <span className="text-sm text-primary font-normal transform group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300">
                                    <i className="fa-regular fa-paper-plane"></i>
                                </span>
                            </h3>
                            <p className="text-xs text-text-muted leading-relaxed">
                                Fast responses for direct messages & quick
                                inquiries.
                            </p>
                        </div>

                        <div className="text-xs font-mono text-text-muted group-hover:text-text-main transition-colors flex items-center gap-1.5 relative z-10">
                            <span>Open Telegram</span>
                            <i className="fa-solid fa-paper-plane text-[10px]"></i>
                        </div>
                    </a>
                </div>

                {/* Socials Bar */}
                <div className="gtk-socials-anim pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                        Socials
                    </span>
                    <div className="flex flex-wrap gap-6 text-xs md:text-sm font-medium text-text-muted">
                        <a
                            href="https://github.com/khantpyaehtoo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors inline-flex items-center gap-2 hover:-translate-y-0.5 transform duration-200"
                        >
                            <i className="fa-brands fa-github text-sm"></i>
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/khantpyaehtoo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors inline-flex items-center gap-2 hover:-translate-y-0.5 transform duration-200"
                        >
                            <i className="fa-brands fa-linkedin-in text-sm"></i>
                            LinkedIn
                        </a>
                        <a
                            href="https://facebook.com/khantpyae.00"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors inline-flex items-center gap-2 hover:-translate-y-0.5 transform duration-200"
                        >
                            <i className="fa-brands fa-facebook-f text-sm"></i>
                            Facebook
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
