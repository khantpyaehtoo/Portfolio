"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    tags: string[];
    link: string;
    github?: string;
    imageBg: string;
    images: string[];
}

const projects: Project[] = [
    {
        id: "01",
        title: "Plants E-Commerce Platform",
        category: "Full-Stack Application",
        description:
            "A modern plant store featuring Supabase authentication, custom React state logic, and automated order notifications integrated directly with a Telegram Bot, including an Admin Dashboard.",
        tags: ["React", "Vite", "Tailwind CSS", "Supabase", "Telegram Bot"],
        link: "https://zeros-eight.vercel.app",
        github: "https://github.com/khantpyaehtoo/e-commerce",
        imageBg: "from-emerald-900/40 to-black",
        images: ["/zero.png", "/zero-dashboard.png"],
    },
    {
        id: "02",
        title: "Real-time Typing Practice App",
        category: "Frontend Web Application",
        description:
            "Speed typing application focusing on optimized DOM manipulations, real-time analytics, and Firebase synchronization for high-performance user tracking.",
        tags: ["Vanilla JS", "DOM Optimization", "Firebase", "CSS3"],
        link: "https://typing-game-pearl.vercel.app",
        github: "https://github.com/khantpyaehtoo/Typing_Game",
        imageBg: "from-amber-900/40 to-black",
        images: ["/speed-test.png"],
    },
    {
        id: "03",
        title: "Mari - Booking & Staff Management System",
        category: "Full-Stack Management System",
        description:
            "A modern, responsive, and efficient Booking and Staff Management System built with React, Vite, Ant Design, and RTK Query. Designed for beauty salons and appointment-based businesses.",
        tags: ["React", "antd", "Tailwind v4", "redux-toolkit", "chartjs-2"],
        link: "#",
        github: "https://github.com/khantpyaehtoo/Mari-Management-System",
        imageBg: "from-pink-900/40 to-black",
        images: ["/mari-dashboard.png", "/mari-dashboard1.png"],
    },
    {
        id: "04",
        title: "Apex Academy",
        category: "Frontend Web Application",
        description:
            "Apex Academy web app featuring smooth GSAP animations and responsive design.",
        tags: ["React", "GSAP", "Tailwind v4", "VITE"],
        link: "#",
        github: "https://github.com/Apex-Academy",
        imageBg: "from-blue-900/40 to-black",
        images: ["/apex-academy.png"],
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
                            <ProjectCard
                                key={project.id}
                                project={project}
                                topOffset={topOffset}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// Sub-component for individual card & multi-image toggle logic
function ProjectCard({
    project,
    topOffset,
}: {
    project: Project;
    topOffset: string;
}) {
    const [activeImgIndex, setActiveImgIndex] = useState(0);

    return (
        <div
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
                        <span className="text-gray-500">•</span>
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
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-black hover:bg-amber-300 font-medium text-sm px-5 py-2.5 rounded-full transition-all duration-200"
                        >
                            Live Demo
                            <i className="fa-solid fa-arrow-up-right text-xs -rotate-45" />
                        </a>
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 transition-colors"
                            >
                                <i className="fa-brands fa-github text-lg" />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Right Side: Mockup Image Frame */}
            <div className="w-full md:w-5/12 h-[260px] md:h-auto min-h-[260px] bg-black/60 border border-white/10 rounded-2xl overflow-hidden relative z-10 group-hover:scale-[1.02] transition-transform duration-500 flex flex-col">
                {/* Browser Mockup Header Bar */}
                <div className="h-7 bg-white/5 border-b border-white/10 px-3 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    </div>

                    {/* Image Switcher Dots (If project has multiple images) */}
                    {project.images.length > 1 && (
                        <div className="flex gap-1.5 bg-black/40 px-2 py-0.5 rounded-full border border-white/5">
                            {project.images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveImgIndex(i)}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                        activeImgIndex === i
                                            ? "bg-amber-300 w-4"
                                            : "bg-white/30 hover:bg-white/60"
                                    }`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Next.js Image Area */}
                <div className="relative flex-1 w-full h-full bg-zinc-950">
                    {project.images.map((imgSrc, imgIdx) => (
                        <Image
                            key={imgSrc}
                            src={imgSrc}
                            alt={`${project.title} Screenshot ${imgIdx + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className={`object-cover object-top transition-opacity duration-500 ${
                                activeImgIndex === imgIdx
                                    ? "opacity-100 relative"
                                    : "opacity-0 absolute inset-0"
                            }`}
                            priority={project.id === "01"}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
