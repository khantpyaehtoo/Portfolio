"use client";

import React from "react";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="min-h-screen bg-[#0a0a0a] text-white px-6 md:px-16 py-24 font-sans border-t border-white/5 relative overflow-hidden"
        >
            {/* Subtle Ambient Background Glow */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto space-y-16 relative z-10">
                {/* Header Title */}
                <div className="space-y-2">
                    <span className="text-amber-300 font-mono text-xs uppercase tracking-widest">
                        {"// Who I Am"}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight font-doppio uppercase text-white">
                        About Me
                    </h1>
                </div>

                {/* Main Content: 2 Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column: Story & Values */}
                    <div className="space-y-12">
                        {/* My Story */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold tracking-tight text-white">
                                My Story
                            </h2>
                            <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
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
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold tracking-tight text-white">
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
                                        className="px-3.5 py-2 bg-[#141517] text-xs font-medium text-gray-300 rounded-lg border border-white/10 hover:border-amber-300/60 hover:text-white transition-all cursor-default select-none"
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
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold tracking-tight text-white">
                                Technologies that I use
                            </h2>

                            {/* Frontend */}
                            <div className="space-y-2">
                                <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400">
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
                                            className="px-3 py-1 bg-[#1f2023] text-xs font-medium rounded-full text-gray-300 border border-white/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Backend */}
                            <div className="space-y-2">
                                <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400">
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
                                            className="px-3 py-1 bg-[#1f2023] text-xs font-medium rounded-full text-gray-300 border border-white/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Tools & Others */}
                            <div className="space-y-2">
                                <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400">
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
                                            className="px-3 py-1 bg-[#1f2023] text-xs font-medium rounded-full text-gray-300 border border-white/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* System Log & Status */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold tracking-tight text-white">
                                System Log & Status
                            </h2>

                            <div className="bg-[#141517] border border-white/10 rounded-xl p-4 font-mono text-xs space-y-3 shadow-xl">
                                <div className="flex items-center gap-2 border-b border-white/5 pb-2.5 text-gray-500">
                                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                    <span className="ml-2 text-[10px] text-gray-400">
                                        profile_highlights.sh
                                    </span>
                                </div>

                                <div className="space-y-2.5 text-gray-300">
                                    <div>
                                        <p>
                                            <span className="text-amber-300">
                                                $
                                            </span>{" "}
                                            status --current
                                        </p>
                                        <p className="text-emerald-400 pl-4 font-medium">
                                            ➔ Open for Freelance & Collaborative
                                            Projects
                                        </p>
                                    </div>

                                    <div>
                                        <p>
                                            <span className="text-amber-300">
                                                $
                                            </span>{" "}
                                            fetch --key-focus
                                        </p>
                                        <p className="text-gray-400 pl-4">
                                            ➔ Full-Stack Next.js Architecture
                                        </p>
                                        <p className="text-gray-400 pl-4">
                                            ➔ State Optimization & Clean UI
                                            Animations
                                        </p>
                                    </div>

                                    <div>
                                        <p>
                                            <span className="text-amber-300">
                                                $
                                            </span>{" "}
                                            fetch --environment
                                        </p>
                                        <p className="text-gray-400 pl-4">
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
