"use client";

import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        id: "faq-1",
        question: "What kind of work do you take on?",
        answer: "I specialize in full-stack web development—building high-performance React/Next.js frontend applications, custom UI components, responsive layouts, and RESTful APIs with Node.js or Supabase.",
    },
    {
        id: "faq-2",
        question: "Are you available right now?",
        answer: "Yes, I am currently open to full-time junior web developer positions, internships, and select freelance web development projects.",
    },
    {
        id: "faq-3",
        question: "Do you work solo or with a team?",
        answer: "I can work independently on full-stack projects from scratch, but I also thrive in cross-functional teams using Git/GitHub for smooth collaboration.",
    },
    {
        id: "faq-4",
        question: "Where are you based?",
        answer: "I am based in Yangon, Myanmar, working in the UTC+6:30 time zone, and fully equipped for remote work.",
    },
    {
        id: "faq-5",
        question: "How do we start?",
        answer: "You can drop a message via the contact form above or email me directly at khantpyaehtoo.dev@gmail.com. I'll get back to you within 24-48 hours!",
    },
];

export default function GoodToKnowSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const containerRef = useRef<HTMLElement>(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    // GSAP ScrollTrigger Entrance Animation
    useGSAP(
        () => {
            // Header Entrance
            gsap.from(".faq-header-anim", {
                scrollTrigger: {
                    trigger: ".faq-header-anim",
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
            });

            // FAQ Items Sequential Stagger Entrance
            gsap.from(".faq-item-anim", {
                scrollTrigger: {
                    trigger: "#faq-container",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
            });
        },
        { scope: containerRef },
    );

    // Dynamic Height & Content Fade GSAP Accordion Toggle Logic
    const toggleAccordion = (index: number) => {
        const isClosing = openIndex === index;
        const nextIndex = isClosing ? null : index;

        // Close Currently Open Item
        if (openIndex !== null && contentRefs.current[openIndex]) {
            const currentEl = contentRefs.current[openIndex];
            gsap.to(currentEl, {
                height: 0,
                opacity: 0,
                duration: 0.35,
                ease: "power2.inOut",
            });
        }

        // Open Selected Item
        if (!isClosing && contentRefs.current[index]) {
            const nextEl = contentRefs.current[index];
            gsap.fromTo(
                nextEl,
                { height: 0, opacity: 0 },
                {
                    height: "auto",
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.out",
                },
            );
        }

        setOpenIndex(nextIndex);
    };

    return (
        <section
            id="faq"
            ref={containerRef}
            className="w-full bg-[#0a0a0a] text-white px-6 md:px-16 py-28 relative font-sans border-t border-white/5 z-10 overflow-hidden"
        >
            {/* Background Grid */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
                style={{
                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-amber-500/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none -z-10" />

            <div className="max-w-3xl mx-auto relative z-20">
                <div className="text-center mb-16 space-y-2">
                    <span className="faq-header-anim font-crafty text-amber-300 text-xl md:text-2xl -rotate-6 inline-block tracking-wide select-none">
                        questions?
                    </span>
                    <h2 className="faq-header-anim text-4xl md:text-6xl font-bold tracking-tight text-white">
                        Good to know
                    </h2>
                </div>

                <div
                    id="faq-container"
                    className="divide-y divide-white/10 border-y border-white/10"
                >
                    {faqData.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={item.id}
                                className={`faq-item-anim transition-colors duration-300 ${
                                    isOpen ? "bg-white/[0.03]" : ""
                                }`}
                            >
                                <h3>
                                    <button
                                        type="button"
                                        onClick={() => toggleAccordion(index)}
                                        aria-expanded={isOpen}
                                        style={{
                                            WebkitTapHighlightColor:
                                                "transparent",
                                        }}
                                        className="w-full py-6 px-4 md:px-6 flex justify-between items-center text-left hover:text-amber-300 transition-colors group focus:outline-none cursor-pointer touch-manipulation active:bg-white/5"
                                    >
                                        <span className="text-lg md:text-xl font-medium tracking-tight pr-4">
                                            {item.question}
                                        </span>
                                        <span
                                            className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 ease-out shrink-0 ${
                                                isOpen
                                                    ? "bg-amber-300 text-black rotate-180"
                                                    : "bg-white/5 text-amber-300 border border-white/10"
                                            }`}
                                        >
                                            <svg
                                                className="w-3.5 h-3.5 transition-transform duration-200"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                {isOpen ? (
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2.5}
                                                        d="M20 12H4"
                                                    />
                                                ) : (
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2.5}
                                                        d="M12 4v16m8-8H4"
                                                    />
                                                )}
                                            </svg>
                                        </span>
                                    </button>
                                </h3>

                                {/* GSAP Animated Answer Container */}
                                <div
                                    ref={(el) => {
                                        contentRefs.current[index] = el;
                                    }}
                                    className="overflow-hidden px-4 md:px-6"
                                    style={{
                                        height: index === 0 ? "auto" : 0,
                                        opacity: index === 0 ? 1 : 0,
                                    }}
                                >
                                    <p className="text-gray-300 text-sm md:text-base leading-relaxed pb-6 pr-6">
                                        {index === 4 ? (
                                            <>
                                                You can drop a message via the
                                                contact form above or email me
                                                directly at{" "}
                                                <a
                                                    href="mailto:khantpyaehtoo.dev@gmail.com"
                                                    className="text-amber-300 underline underline-offset-4 hover:text-amber-200 transition-colors"
                                                >
                                                    khantpyaehtoo.dev@gmail.com
                                                </a>
                                                . I&apos;ll get back to you
                                                within 24-48 hours!
                                            </>
                                        ) : (
                                            item.answer
                                        )}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
