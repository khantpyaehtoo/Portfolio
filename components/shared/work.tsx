"use client";

import React from "react";

interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    tags: string[];
    link: string;
    github?: string;
    imageBg: string;
}

const projects: Project[] = [
    {
        id: "01",
        title: "Plants E-Commerce Platform",
        category: "Full-Stack Application",
        description:
            "A modern plant store featuring Supabase authentication, custom React state logic, and automated order notifications integrated directly with a Telegram Bot.",
        tags: ["React", "Next.js", "Tailwind CSS", "Supabase", "Telegram Bot"],
        link: "#",
        github: "https://github.com",
        imageBg: "from-emerald-900/40 to-black",
    },
    {
        id: "02",
        title: "Real-time Typing Practice App",
        category: "Frontend Web Application",
        description:
            "Speed typing application focusing on optimized DOM manipulations, real-time analytics, and Firebase synchronization for high-performance user tracking.",
        tags: ["Vanilla JS", "DOM Optimization", "Firebase", "CSS3"],
        link: "#",
        github: "https://github.com",
        imageBg: "from-amber-900/40 to-black",
    },
    {
        id: "03",
        title: "Algorithm & UI Playground",
        category: "Experimental UI & Logic",
        description:
            "Interactive visualization of Big-O complexity, binary search trees, custom clip-path layouts, and GSAP micro-animations.",
        tags: ["TypeScript", "GSAP", "Tailwind v4", "Algorithms"],
        link: "#",
        github: "https://github.com",
        imageBg: "from-blue-900/40 to-black",
    },
];

export default function StickyWorkSection() {
    return (
        <section
            id="works"
            className="w-full bg-[#0a0a0a] text-white px-6 md:px-16 py-24 border-t border-white/5"
        >
            <div className="max-w-5xl mx-auto space-y-16">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <span className="text-amber-300 font-mono text-xs uppercase tracking-widest">
                            {"// Selected Works"}
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight font-doppio mt-1">
                            Crafted with Code
                        </h2>
                    </div>
                    <p className="text-gray-400 text-sm max-w-sm">
                        A showcase of web applications, interactive UI
                        components, and performance-focused projects.
                    </p>
                </div>

                {/* Sticky Cards Stack Container */}
                <div className="relative flex flex-col gap-12 pb-24">
                    {projects.map((project, index) => {
                        const topOffset = `${100 + index * 30}px`;

                        return (
                            <div
                                key={project.id}
                                style={{ top: topOffset }}
                                className="sticky bg-[#141517] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row justify-between gap-8 overflow-hidden group hover:border-amber-300/40 transition-all duration-300"
                            >
                                {/* Background Accent Glow */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${project.imageBg} opacity-50 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none`}
                                />

                                {/* Left Side: Project Info */}
                                <div className="flex-1 flex flex-col justify-between space-y-8 z-10 relative">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-amber-300 font-mono text-sm">
                                                {project.id}
                                            </span>
                                            <span className="text-gray-500">
                                                •
                                            </span>
                                            <span className="text-gray-400 font-mono text-xs uppercase tracking-wider">
                                                {project.category}
                                            </span>
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Tech Stack & Links */}
                                    <div className="space-y-6">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, tIndex) => (
                                                <span
                                                    key={tIndex}
                                                    className="text-xs font-mono px-3 py-1 bg-white/10 text-gray-200 rounded-full border border-white/10"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-4 pt-2">
                                            <a
                                                href={project.link}
                                                className="inline-flex items-center gap-2 bg-white text-black hover:bg-amber-300 font-medium text-sm px-5 py-2.5 rounded-full transition-all duration-200"
                                            >
                                                Live Demo
                                                <i className="fa-solid fa-arrow-up-right text-xs -rotate-45"></i>
                                            </a>
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 transition-colors"
                                                >
                                                    <i className="fa-brands fa-github text-lg"></i>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Visual Mockup Area / Image Placeholder */}
                                <div className="w-full md:w-5/12 min-h-[220px] md:min-h-full bg-black/40 border border-white/10 rounded-2xl p-4 flex flex-col justify-center items-center relative z-10 group-hover:scale-[1.02] transition-transform duration-500">
                                    <div className="text-center space-y-2">
                                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto">
                                            <i className="fa-solid fa-laptop-code text-amber-300"></i>
                                        </div>
                                        <p className="text-xs font-mono text-gray-500">
                                            [ Project Preview ]
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
