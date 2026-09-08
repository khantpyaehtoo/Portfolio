"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
        imageBg: "from-emerald-500/10 via-emerald-500/5 to-transparent",
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
        imageBg: "from-amber-500/10 via-amber-500/5 to-transparent",
        images: ["/speed-test.png"],
    },
    {
        id: "03",
        title: "Mari - Booking & Staff Management System",
        category: "Full-Stack Management System",
        description:
            "A modern, responsive, and efficient Booking and Staff Management System built with React, Vite, Ant Design, and RTK Query. Designed for beauty salons and appointment-based businesses.",
        tags: ["React", "antd", "Tailwind v4", "redux-toolkit", "chartjs-2"],
        link: "https://mari-management-system.vercel.app",
        github: "https://github.com/khantpyaehtoo/Mari-Management-System",
        imageBg: "from-pink-500/10 via-pink-500/5 to-transparent",
        images: ["/mari-dashboard.png", "/mari-dashboard1.png"],
    },
    {
        id: "04",
        title: "Apex Academy",
        category: "Frontend Web Application",
        description:
            "Apex Academy web app featuring smooth GSAP animations and responsive design.",
        tags: ["React", "GSAP", "Tailwind v4", "VITE"],
        link: "https://apex-academy-sand.vercel.app",
        github: "https://github.com/khantpyaehtoo/Apex-Academy",
        imageBg: "from-blue-500/10 via-blue-500/5 to-transparent",
        images: ["/apex-academy.png"],
    },
];

export default function StickyWorkSection() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            // Header Entrance Animation only
            gsap.from(".works-header-anim", {
                scrollTrigger: {
                    trigger: ".works-header-anim",
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
            });

            // ScrollTrigger for Active Navbar Sync (Fixes Sticky Stack Bug)
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top 40%",
                end: "bottom 30%",
                onToggle: (self) => {
                    if (self.isActive) {
                        window.dispatchEvent(
                            new CustomEvent("active-section-change", {
                                detail: "works",
                            }),
                        );
                    }
                },
            });
        },
        { scope: containerRef },
    );

    return (
        <section
            id="works"
            ref={containerRef}
            className="w-full bg-bg-base text-text-main px-6 md:px-16 py-24 border-t border-border-subtle relative transition-colors duration-300"
        >
            <div className="max-w-5xl mx-auto space-y-16">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <span className="works-header-anim block text-primary font-mono text-xs uppercase tracking-widest font-semibold">
                            {"// Selected Works"}
                        </span>
                        <h2 className="works-header-anim text-4xl md:text-6xl font-bold tracking-tight font-doppio text-text-main mt-1">
                            Crafted with Code
                        </h2>
                    </div>
                    <p className="works-header-anim text-text-muted text-sm max-w-sm">
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

// Sub-component for individual card & multi-image auto-toggle logic
function ProjectCard({
    project,
    topOffset,
}: {
    project: Project;
    topOffset: string;
}) {
    const [activeImgIndex, setActiveImgIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-slide effect for projects with multiple images
    useEffect(() => {
        if (project.images.length <= 1 || isHovered) return;

        const interval = setInterval(() => {
            setActiveImgIndex((prev) => (prev + 1) % project.images.length);
        }, 3000); // 3 seconds per image

        return () => clearInterval(interval);
    }, [project.images.length, isHovered]);

    return (
        <div
            style={{ top: topOffset }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="sticky bg-bg-surface border border-border-subtle rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row justify-between gap-8 overflow-hidden group hover:border-primary transition-all duration-300 backdrop-blur-sm"
        >
            {/* Background Accent Glow */}
            <div
                className={`absolute inset-0 bg-gradient-to-br ${project.imageBg} opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
            />

            {/* Left Side: Project Info */}
            <div className="flex-1 flex flex-col justify-between space-y-8 z-10 relative">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="text-primary font-mono text-sm font-semibold">
                            {project.id}
                        </span>
                        <span className="text-text-muted opacity-50">•</span>
                        <span className="text-text-muted font-mono text-xs uppercase tracking-wider">
                            {project.category}
                        </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-text-main group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-xl">
                        {project.description}
                    </p>
                </div>

                {/* Tech Stack & Links */}
                <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tIndex) => (
                            <span
                                key={tIndex}
                                className="text-xs font-mono px-3 py-1 bg-bg-base text-text-muted rounded-full border border-border-subtle hover:border-primary hover:text-primary transition-colors duration-200 shadow-sm"
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
                            className="inline-flex items-center gap-2 bg-primary text-bg-base font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer active:scale-95 shadow-md hover:opacity-90"
                        >
                            Live Demo
                            <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
                        </a>
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-full bg-bg-base border border-border-subtle text-text-main hover:border-primary hover:text-primary transition-all cursor-pointer active:scale-95 shadow-sm"
                            >
                                <i className="fa-brands fa-github text-lg" />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Right Side: Mockup Image Frame */}
            <div className="w-full md:w-5/12 h-[260px] md:h-auto min-h-[260px] bg-bg-base border border-border-subtle rounded-2xl overflow-hidden relative z-10 group-hover:scale-[1.02] transition-transform duration-500 flex flex-col shadow-lg">
                {/* Browser Mockup Header Bar */}
                <div className="h-7 bg-bg-surface border-b border-border-subtle px-3 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    </div>

                    {/* Image Switcher Dots (If project has multiple images) */}
                    {project.images.length > 1 && (
                        <div className="flex gap-1.5 bg-bg-base px-2 py-0.5 rounded-full border border-border-subtle">
                            {project.images.map((_, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => setActiveImgIndex(i)}
                                    className={`h-2 rounded-full transition-all cursor-pointer ${
                                        activeImgIndex === i
                                            ? "bg-primary w-4"
                                            : "bg-text-muted/40 hover:bg-text-muted w-2"
                                    }`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Next.js Image Area with Smooth Auto-Fade */}
                <div className="relative flex-1 w-full h-full bg-bg-base overflow-hidden">
                    {project.images.map((imgSrc, imgIdx) => (
                        <Image
                            key={imgSrc}
                            src={imgSrc}
                            alt={`${project.title} Screenshot ${imgIdx + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className={`object-cover object-top transition-opacity duration-700 ease-in-out ${
                                activeImgIndex === imgIdx
                                    ? "opacity-100 relative z-10"
                                    : "opacity-0 absolute inset-0 z-0"
                            }`}
                            priority={project.id === "01"}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
