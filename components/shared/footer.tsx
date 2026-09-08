"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface FooterProps {
    show?: boolean;
}

export default function Footer({ show }: FooterProps) {
    const footerRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // GSAP Entrance & ScrollTrigger Animation
    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            // Mobile Setup
            mm.add("(max-width: 767px)", () => {
                gsap.set(footerRef.current, { autoAlpha: 1, y: 0 });

                gsap.fromTo(
                    containerRef.current,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: footerRef.current,
                            start: "top 95%",
                            end: "bottom top",
                            toggleActions: "play reverse play reverse",
                        },
                    },
                );
            });

            // Desktop Setup
            mm.add("(min-width: 768px)", () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 85%",
                        end: "bottom top",
                        toggleActions: "play reverse play reverse",
                    },
                });

                // Overall Footer Visibility
                tl.to(footerRef.current, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out",
                })
                    // Inner Glassmorphism Card Reveal
                    .fromTo(
                        containerRef.current,
                        { y: 50, opacity: 0, scale: 0.97, filter: "blur(8px)" },
                        {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            filter: "blur(0px)",
                            duration: 0.8,
                            ease: "power3.out",
                        },
                        "-=0.3",
                    )
                    // Content Elements Stagger Effect
                    .fromTo(
                        ".footer-item-anim",
                        { y: 20, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.4,
                            stagger: 0.08,
                            ease: "power2.out",
                        },
                        "-=0.4",
                    )
                    // Social & Top Scroll Action Items
                    .fromTo(
                        ".footer-action-anim",
                        { scale: 0, opacity: 0 },
                        {
                            scale: 1,
                            opacity: 1,
                            duration: 0.3,
                            stagger: 0.05,
                            ease: "back.out(1.7)",
                        },
                        "-=0.2",
                    );
            });

            return () => mm.revert();
        },
        { scope: footerRef, dependencies: [show] },
    );

    // Universal Smooth Scroll Handler (Lenis + Native Window Support)
    const handleScrollTo = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string,
    ) => {
        e.preventDefault();

        if (href === "#top" || href === "#home") {
            if (
                typeof window !== "undefined" &&
                (
                    window as unknown as {
                        lenis?: { scrollTo: (target: number) => void };
                    }
                ).lenis
            ) {
                (
                    window as unknown as {
                        lenis?: { scrollTo: (target: number) => void };
                    }
                ).lenis?.scrollTo(0);
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
            return;
        }

        const targetId = href.replace("#", "");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const navbarOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.pageYOffset - navbarOffset;

            if (
                typeof window !== "undefined" &&
                (
                    window as unknown as {
                        lenis?: { scrollTo: (target: number) => void };
                    }
                ).lenis
            ) {
                (
                    window as unknown as {
                        lenis?: { scrollTo: (target: number) => void };
                    }
                ).lenis?.scrollTo(offsetPosition);
            } else {
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        }
    };

    return (
        <footer
            ref={footerRef}
            className="w-full bg-[#0a0a0a]  px-4 sm:px-6 md:px-16 pt-12 pb-8 opacity-100 visible translate-y-0 md:opacity-0 md:invisible md:translate-y-5 relative z-30 selection:bg-amber-300 selection:text-black"
        >
            <div className="max-w-5xl mx-auto relative">
                {/* Main Card Container with Glassmorphism Styling */}
                <div
                    ref={containerRef}
                    className="bg-[#141517]/90 backdrop-blur-xl text-white p-6 sm:p-8 md:p-12 rounded-3xl border border-white/10 hover:border-amber-300/20 transition-colors duration-500 shadow-2xl relative z-10 overflow-hidden"
                >
                    {/* Background Subtle Ambient Glow */}
                    <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-10 relative z-10">
                        {/* Main Grid Content */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10 flex-1">
                            {/* Brand Info */}
                            <div className="space-y-3 footer-item-anim">
                                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white font-doppio">
                                    Khant Pyae Htoo
                                </h2>
                                <div className="text-gray-400 text-xs leading-relaxed space-y-2">
                                    <p>
                                        &copy; 2026. Designed & Built by{" "}
                                        <span className="font-mono text-amber-300 font-medium">
                                            Khant Pyae Htoo
                                        </span>
                                    </p>
                                    <p className="flex items-center gap-2 pt-1">
                                        <span>source code available on</span>
                                        <a
                                            href="https://github.com/khantpyaehtoo/Portfolio"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="GitHub Repository"
                                            className="hover:text-amber-300 text-gray-300 transition-colors inline-flex items-center"
                                        >
                                            <i className="fa-brands fa-github text-base" />
                                        </a>
                                    </p>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="space-y-3 footer-item-anim">
                                <h3 className="text-amber-300 font-mono text-xs uppercase tracking-widest">
                                    {"// Explore"}
                                </h3>
                                <ul className="space-y-2.5 text-gray-300 text-xs font-medium">
                                    <li>
                                        <a
                                            href="#works"
                                            onClick={(e) =>
                                                handleScrollTo(e, "#works")
                                            }
                                            className="hover:text-amber-300 transition-all hover:translate-x-1 inline-block cursor-pointer duration-200"
                                        >
                                            Work
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#about"
                                            onClick={(e) =>
                                                handleScrollTo(e, "#about")
                                            }
                                            className="hover:text-amber-300 transition-all hover:translate-x-1 inline-block cursor-pointer duration-200"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#faq"
                                            onClick={(e) =>
                                                handleScrollTo(e, "#faq")
                                            }
                                            className="hover:text-amber-300 transition-all hover:translate-x-1 inline-block cursor-pointer duration-200"
                                        >
                                            Q&A
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Contact & CV */}
                            <div className="space-y-3 footer-item-anim">
                                <h3 className="text-amber-300 font-mono text-xs uppercase tracking-widest">
                                    {"// Get in touch"}
                                </h3>
                                <div className="space-y-2 text-gray-300 text-xs font-medium">
                                    <a
                                        href="mailto:khantpyaehtoo.dev@gmail.com"
                                        className="block hover:text-amber-300 transition-colors font-mono break-all"
                                    >
                                        khantpyaehtoo.dev@gmail.com
                                    </a>
                                    <a
                                        href="/CV.pdf"
                                        download="CV.pdf"
                                        className="inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 hover:underline pt-1 font-mono text-xs group cursor-pointer"
                                    >
                                        <span>Download CV</span>
                                        <i className="fa-solid fa-arrow-down text-[10px] group-hover:translate-y-0.5 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Vertical Social & Scroll Top Bar */}
                        <div className="flex md:flex-col items-center justify-center gap-3 pt-6 md:pt-0 md:pl-8 border-t md:border-t-0 md:border-l border-white/10 relative z-20">
                            {/* Scroll to Top Button */}
                            <a
                                href="#top"
                                onClick={(e) => handleScrollTo(e, "#top")}
                                aria-label="Scroll to top"
                                style={{
                                    WebkitTapHighlightColor: "transparent",
                                }}
                                className="footer-action-anim w-10 h-10 rounded-full bg-amber-300 text-black flex items-center justify-center hover:bg-amber-400 hover:scale-110 active:scale-90 transition-all duration-300 shadow-lg shadow-amber-300/10 hover:shadow-amber-300/30 cursor-pointer touch-manipulation select-none relative z-50"
                            >
                                <i className="fa-solid fa-arrow-up text-xs pointer-events-none" />
                            </a>

                            <a
                                href="https://facebook.com/khantpyae.00"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="footer-action-anim w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center justify-center hover:bg-white hover:text-black hover:border-white hover:scale-105 transition-all active:scale-95"
                            >
                                <i className="fa-brands fa-facebook-f text-xs" />
                            </a>
                            <a
                                href="https://github.com/khantpyaehtoo"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="footer-action-anim w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center justify-center hover:bg-white hover:text-black hover:border-white hover:scale-105 transition-all active:scale-95"
                            >
                                <i className="fa-brands fa-github text-xs" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/khantpyaehtoo"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="footer-action-anim w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center justify-center hover:bg-white hover:text-black hover:border-white hover:scale-105 transition-all active:scale-95"
                            >
                                <i className="fa-brands fa-linkedin-in text-xs" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
