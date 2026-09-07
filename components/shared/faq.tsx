"use client";

import React, { useState } from "react";

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
        answer: "You can drop a message via the contact form above or email me directly at ericrebillet@gmail.com. I'll get back to you within 24-48 hours!",
    },
];

export default function GoodToKnowSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First item default open for better UX

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            id="faq"
            className="w-full bg-[#0a0a0a] text-white px-6 md:px-16 py-28 relative overflow-hidden font-sans border-t border-white/5"
        >
            {/* 1. Subtle Background Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* 2. Soft Amber Ambient Spotlight (Matches Hero Glow) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="max-w-3xl mx-auto relative z-10">
                {/* Header Title with Handwriting Sub-label */}
                <div className="text-center mb-16 space-y-2">
                    <span className="font-crafty text-amber-300 text-xl md:text-2xl -rotate-6 inline-block tracking-wide">
                        questions?
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                        Good to know
                    </h2>
                </div>

                {/* FAQ Accordion List */}
                <div className="divide-y divide-white/10 border-y border-white/10">
                    {faqData.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={item.id}
                                className={`transition-all duration-300 ${
                                    isOpen
                                        ? "bg-white/[0.02]"
                                        : "hover:bg-white/[0.01]"
                                }`}
                            >
                                <h3>
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-answer-${item.id}`}
                                        className="w-full py-6 px-4 md:px-6 flex justify-between items-center text-left hover:text-amber-300 transition-colors group focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-300 rounded-lg"
                                    >
                                        <span className="text-lg md:text-xl font-medium tracking-tight pr-4 transition-colors">
                                            {item.question}
                                        </span>
                                        <span
                                            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                                                isOpen
                                                    ? "bg-amber-300 text-black rotate-180"
                                                    : "bg-white/5 text-amber-300 border border-white/10 group-hover:bg-amber-300 group-hover:text-black group-hover:border-amber-300"
                                            }`}
                                        >
                                            <i
                                                className={`fa-solid ${
                                                    isOpen
                                                        ? "fa-minus"
                                                        : "fa-plus"
                                                } text-xs`}
                                            />
                                        </span>
                                    </button>
                                </h3>

                                {/* Expandable Answer Container */}
                                <div
                                    id={`faq-answer-${item.id}`}
                                    role="region"
                                    aria-hidden={!isOpen}
                                    className={`grid transition-all duration-300 ease-in-out ${
                                        isOpen
                                            ? "grid-rows-[1fr] opacity-100 pb-6 px-4 md:px-6"
                                            : "grid-rows-[0fr] opacity-0 px-4 md:px-6"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-gray-400 text-sm md:text-base leading-relaxed pr-6">
                                            {index === 4 ? (
                                                <>
                                                    You can drop a message via
                                                    the contact form above or
                                                    email me directly at{" "}
                                                    <a
                                                        href="mailto:ericrebillet@gmail.com"
                                                        className="text-amber-300 underline underline-offset-4 hover:text-amber-200 transition-colors"
                                                    >
                                                        ericrebillet@gmail.com
                                                    </a>
                                                    . I'll get back to you
                                                    within 24-48 hours!
                                                </>
                                            ) : (
                                                item.answer
                                            )}
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
