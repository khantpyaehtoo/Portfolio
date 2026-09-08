"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            // Title & Header Animation
            gsap.from(".about-header-anim", {
                scrollTrigger: {
                    trigger: ".about-header-anim",
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
            });

            // Story & Left Column Cards
            gsap.from(".about-left-anim", {
                scrollTrigger: {
                    trigger: ".about-left-anim",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
            });

            // Right Column Cards & System Log
            gsap.from(".about-right-anim", {
                scrollTrigger: {
                    trigger: ".about-right-anim",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
            });
        },
        { scope: containerRef },
    );

    return (
        <section
            id="about"
            ref={containerRef}
            className="min-h-screen bg-bg-base text-text-main px-6 md:px-16 py-24 font-sans border-t border-border-subtle relative overflow-hidden transition-colors duration-300"
        >
            {/* Subtle Ambient Background Glow */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto space-y-16 relative z-10">
                {/* Header Title */}
                <div className="space-y-2">
                    <span className="about-header-anim block text-primary font-mono text-xs uppercase tracking-widest font-semibold">
                        {"// Who I Am"}
                    </span>
                    <h1 className="about-header-anim text-5xl md:text-7xl font-extrabold tracking-tight font-doppio uppercase text-text-main">
                        About Me
                    </h1>
                </div>

                {/* Main Content: 2 Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column: Story & Values */}
                    <div className="space-y-12">
                        {/* My Story */}
                        <div className="about-left-anim space-y-4">
                            <h2 className="text-2xl font-bold tracking-tight text-text-main">
                                My Story
                            </h2>
                            <div className="space-y-4 text-text-muted leading-relaxed text-sm md:text-base">
                                <p>
                                    I’m a self-driven Web Developer with a
                                    strong focus on building fast, performant,
                                    and interactive web applications. What
                                    started as pure curiosity quickly turned
                                    into a relentless passion for engineering
                                    modern frontend systems and full-stack
                                    integration.
                                </p>
                                <p>
                                    Currently working as a Front-End Developer,
                                    I specialize in building smooth user
                                    interfaces with React, Next.js (App Router),
                                    and Tailwind CSS, backed by scalable backend
                                    services using Node.js, Express, and
                                    Supabase. I thrive on solving complex state
                                    management, UI physics, and client-side
                                    logic.
                                </p>
                                <p>
                                    When I’m not shipping code for production, I
                                    study Data Structures & Algorithms (DSA) to
                                    sharpen my problem-solving skills, optimize
                                    terminal-based workflows on Ubuntu Linux,
                                    and craft clean micro-interactions.
                                </p>
                            </div>
                        </div>

                        {/* Engineering Values */}
                        <div className="about-left-anim space-y-4">
                            <h2 className="text-2xl font-bold tracking-tight text-text-main">
                                Engineering Values
                            </h2>
                            <div className="flex flex-wrap gap-2.5">
                                {[
                                    "⚡ Fast Execution",
                                    "🧩 Clean Code & Reusability",
                                    "🎨 Aesthetic UI Physics",
                                    "🐧 Linux Terminal Workflow",
                                    "🔍 Algorithmic Logic",
                                    "🚀 Continuous Deployment",
                                ].map((value) => (
                                    <span
                                        key={value}
                                        className="px-3.5 py-2 bg-bg-surface text-xs font-medium text-text-muted rounded-lg border border-border-subtle hover:border-primary hover:text-text-main shadow-sm transition-all duration-300 hover:-translate-y-1 cursor-default select-none inline-block"
                                    >
                                        {value}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Tech Stack & System Log */}
                    <div className="space-y-12">
                        {/* Technologies */}
                        <div className="about-right-anim space-y-6">
                            <h2 className="text-2xl font-bold tracking-tight text-text-main">
                                Technologies that I use
                            </h2>

                            {/* Frontend */}
                            <div className="space-y-2">
                                <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted">
                                    Frontend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "React",
                                        "Next.js",
                                        "TypeScript",
                                        "Tailwind CSS",
                                        "Redux Toolkit",
                                        "GSAP",
                                    ].map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-bg-surface text-xs font-medium rounded-full text-text-muted border border-border-subtle hover:border-primary hover:text-primary transition-colors shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Backend */}
                            <div className="space-y-2">
                                <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted">
                                    Backend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Node.js",
                                        "Express",
                                        "Supabase",
                                        "Firebase",
                                        "MongoDB",
                                    ].map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-bg-surface text-xs font-medium rounded-full text-text-muted border border-border-subtle hover:border-primary hover:text-primary transition-colors shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Tools & Others */}
                            <div className="space-y-2">
                                <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted">
                                    Tools & Others
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Git",
                                        "Ubuntu Linux",
                                        "Postman",
                                        "Vercel",
                                    ].map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-bg-surface text-xs font-medium rounded-full text-text-muted border border-border-subtle hover:border-primary hover:text-primary transition-colors shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* System Log & Status */}
                        <div className="about-right-anim space-y-4">
                            <h2 className="text-2xl font-bold tracking-tight text-text-main">
                                System Log & Status
                            </h2>

                            <div className="bg-bg-surface border border-border-subtle rounded-xl p-4 font-mono text-xs space-y-3 shadow-xl">
                                <div className="flex items-center gap-2 border-b border-border-subtle pb-2.5 text-text-muted">
                                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                    <span className="ml-2 text-[10px] text-text-muted">
                                        profile_highlights.sh
                                    </span>
                                </div>

                                <div className="space-y-2.5 text-text-main">
                                    <div>
                                        <p>
                                            <span className="text-primary">
                                                $
                                            </span>{" "}
                                            status --current
                                        </p>
                                        <p className="text-emerald-600 dark:text-emerald-400 pl-4 font-medium flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                                            <span>
                                                ➔ Open for Freelance &
                                                Collaborative Projects
                                            </span>
                                        </p>
                                    </div>

                                    <div>
                                        <p>
                                            <span className="text-primary">
                                                $
                                            </span>{" "}
                                            fetch --key-focus
                                        </p>
                                        <p className="text-text-muted pl-4">
                                            ➔ Full-Stack Next.js Architecture
                                        </p>
                                        <p className="text-text-muted pl-4">
                                            ➔ State Optimization & Clean UI
                                            Animations
                                        </p>
                                    </div>

                                    <div>
                                        <p>
                                            <span className="text-primary">
                                                $
                                            </span>{" "}
                                            fetch --environment
                                        </p>
                                        <p className="text-text-muted pl-4">
                                            ➔ Ubuntu Linux, Git, VS Code,
                                            Postman
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
