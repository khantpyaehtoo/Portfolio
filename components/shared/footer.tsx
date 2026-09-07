"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface FooterProps {
    show?: boolean;
}

export default function Footer({ show }: FooterProps) {
    const footerRef = useRef<HTMLElement>(null);

    // GSAP Entrance Animation
    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add("(max-width: 767px)", () => {
                gsap.set(footerRef.current, { autoAlpha: 1, y: 0 });
            });

            mm.add("(min-width: 768px)", () => {
                if (show) {
                    gsap.to(footerRef.current, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                    });
                }
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
            className="w-full bg-black px-4 sm:px-6 md:px-16 pt-12 pb-8 opacity-100 visible translate-y-0 md:opacity-0 md:invisible md:translate-y-5 relative z-30"
        >
            <div className="max-w-5xl mx-auto relative">
                {/* Main Card Container with Modern Glassmorphism Styling */}
                <div className="bg-[#141517]/90 backdrop-blur-xl text-white p-6 sm:p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative z-10">
                    <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-10">
                        {/* Main Grid Content */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10 flex-1">
                            {/* Brand Info */}
                            <div className="space-y-3">
                                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white font-doppio">
                                    Khant Pyae Htoo
                                </h2>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    &copy; 2026. Designed & Built by{" "}
                                    <span className="font-mono text-amber-300 font-medium">
                                        Khant Pyae Htoo
                                    </span>
                                </p>
                            </div>

                            {/* Quick Links */}
                            <div className="space-y-3">
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
                                            className="hover:text-amber-300 transition-colors inline-block cursor-pointer"
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
                                            className="hover:text-amber-300 transition-colors inline-block cursor-pointer"
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
                                            className="hover:text-amber-300 transition-colors inline-block cursor-pointer"
                                        >
                                            Q&A
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Contact & CV */}
                            <div className="space-y-3">
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
                                className="w-10 h-10 rounded-full bg-amber-300 text-black flex items-center justify-center hover:bg-amber-400 hover:scale-105 active:scale-95 transition-all shadow-md hover:shadow-amber-300/20 cursor-pointer touch-manipulation select-none relative z-50"
                            >
                                <i className="fa-solid fa-arrow-up text-xs pointer-events-none" />
                            </a>

                            <a
                                href="https://facebook.com/khantpyae.00"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all active:scale-95"
                            >
                                <i className="fa-brands fa-facebook-f text-xs" />
                            </a>
                            <a
                                href="https://github.com/khantpyaehtoo"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all active:scale-95"
                            >
                                <i className="fa-brands fa-github text-xs" />
                            </a>
                            <a
                                href="https://linkedin.com/khantpyaehtoo"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all active:scale-95"
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
