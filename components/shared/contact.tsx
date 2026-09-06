"use client";

import React, { useState } from "react";

export default function ContactSection() {
    const [copied, setCopied] = useState(false);
    const email = "ericrebillet@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section
            id="contact"
            className="w-full bg-[#0a0a0a] text-white px-6 md:px-16 py-28 font-sans relative overflow-hidden"
        >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto space-y-16 relative z-10">
                {/* Section Header */}
                <div className="space-y-4 max-w-2xl">
                    <span className="text-amber-300 font-mono text-xs uppercase tracking-widest block">
                        {"// Get In Touch"}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
                        Got something in mind? <br />
                        <span className="text-gray-400">
                            Let&apos;s build together.
                        </span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed pt-2">
                        I&apos;m always open to discussing new projects,
                        freelance work, creative ideas, or opportunities to be
                        part of your vision.
                    </p>
                </div>

                {/* Main Action & Direct Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Interactive Email Copy Card */}
                    <div className="md:col-span-2 bg-[#141517] p-8 rounded-2xl border border-white/10 hover:border-amber-300/40 transition-all group relative flex flex-col justify-between space-y-6">
                        <div className="space-y-2">
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block">
                                Direct Mail
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold font-mono text-white group-hover:text-amber-300 transition-colors">
                                {email}
                            </h3>
                        </div>

                        <div className="flex items-center gap-4 pt-4">
                            <a
                                href={`mailto:${email}`}
                                className="bg-amber-300 hover:bg-amber-400 text-black font-semibold text-xs md:text-sm px-6 py-2.5 rounded-lg transition-all active:scale-95 inline-flex items-center gap-2"
                            >
                                <span>Send Mail</span>
                                <i className="fa-solid fa-paper-plane text-xs"></i>
                            </a>

                            <button
                                onClick={handleCopyEmail}
                                className="bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-xs md:text-sm px-4 py-2.5 rounded-lg transition-all active:scale-95 inline-flex items-center gap-2 font-mono"
                            >
                                <i
                                    className={`fa-regular ${copied ? "fa-check text-emerald-400" : "fa-copy"}`}
                                ></i>
                                <span>
                                    {copied ? "Copied!" : "Copy Address"}
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Telegram / Fast Chat Card */}
                    <a
                        href="https://t.me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#141517] p-8 rounded-2xl border border-white/10 hover:border-amber-300/40 transition-all group flex flex-col justify-between space-y-6"
                    >
                        <div className="space-y-2">
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block">
                                Quick Chat
                            </span>
                            <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors flex items-center gap-2">
                                Telegram{" "}
                                <span className="text-xs text-amber-300 font-normal">
                                    ➔
                                </span>
                            </h3>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                Fast responses for casual notes & quick project
                                inquiries.
                            </p>
                        </div>

                        <div className="text-xs font-mono text-gray-400 group-hover:text-white transition-colors flex items-center gap-1">
                            <span>Open Telegram</span>
                            <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                        </div>
                    </a>
                </div>

                {/* Social Network Links */}
                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                        Social Networks
                    </span>
                    <div className="flex flex-wrap gap-6 text-xs md:text-sm font-medium text-gray-400">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-amber-300 transition-colors inline-flex items-center gap-1.5"
                        >
                            <i className="fa-brands fa-github text-sm"></i>
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-amber-300 transition-colors inline-flex items-center gap-1.5"
                        >
                            <i className="fa-brands fa-linkedin-in text-sm"></i>
                            LinkedIn
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-amber-300 transition-colors inline-flex items-center gap-1.5"
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
