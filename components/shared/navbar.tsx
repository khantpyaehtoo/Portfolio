"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";

export default function Navbar({ show }: { show?: boolean }) {
    const navRef = useRef<HTMLDivElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navLinks = [
        { name: "Home", href: "#home", id: "home" },
        { name: "About", href: "#about", id: "about" },
        { name: "Works", href: "#works", id: "works" },
        { name: "Q&A", href: "#faq", id: "faq" },
        { name: "Contact", href: "#contact", id: "contact" },
    ];

    // Listen for Custom Active Section Event from GSAP ScrollTrigger
    useEffect(() => {
        const handleCustomActive = (e: Event) => {
            const customEvent = e as CustomEvent<string>;
            if (customEvent.detail) {
                setActiveSection(customEvent.detail);
            }
        };

        window.addEventListener("active-section-change", handleCustomActive);
        return () =>
            window.removeEventListener(
                "active-section-change",
                handleCustomActive,
            );
    }, []);

    // Mobile Menu Body Scroll handler
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    // Scroll Detection
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Active Section Intersection Observer (For Normal Sections)
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-30% 0px -40% 0px",
            threshold: 0,
        };

        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(
            observerCallback,
            observerOptions,
        );

        navLinks.forEach((link) => {
            const el = document.getElementById(link.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // GSAP Animation Update for Pre-loader / Intro Sync
    useGSAP(
        () => {
            if (!navRef.current) return;

            const mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                if (show) {
                    gsap.to(navRef.current, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                    });
                } else {
                    gsap.set(navRef.current, {
                        autoAlpha: 0,
                        y: -20,
                    });
                }
            });

            mm.add("(max-width: 767px)", () => {
                gsap.set(navRef.current, { clearProps: "all" });
            });

            return () => mm.revert();
        },
        { scope: navRef, dependencies: [show] },
    );

    // Toggle Handler for Mobile Menu
    const handleToggleMenu = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsMobileMenuOpen((prev) => !prev);
    };

    // Smooth Scroll Handler
    const handleScrollTo = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string,
    ) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

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
        <header className="fixed top-0 left-0 w-full z-[100] flex justify-center p-4 md:p-6 pointer-events-auto">
            <div
                ref={navRef}
                className={`relative z-[101] w-full bg-[#141517]/80 backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-full shadow-2xl transition-all duration-300 ease-in-out md:opacity-0 md:invisible md:-translate-y-5 ${
                    isScrolled
                        ? "max-w-3xl py-3 px-5 md:px-6 border-white/20 shadow-amber-500/5"
                        : "max-w-5xl py-3 px-6 md:py-3.5 md:px-8"
                }`}
            >
                <div className="flex justify-between items-center">
                    <a
                        href="#home"
                        onClick={(e) => handleScrollTo(e, "#home")}
                        className="font-bold text-white font-doppio tracking-tight text-base md:text-lg hover:text-amber-300 transition-colors cursor-pointer select-none"
                    >
                        Khant Pyae Htoo
                    </a>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex items-center mx-10 space-x-6 text-sm font-medium">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;

                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) =>
                                        handleScrollTo(e, link.href)
                                    }
                                    className={`relative py-1 transition-colors duration-300 cursor-pointer ${
                                        isActive
                                            ? "text-amber-300 font-semibold"
                                            : "text-gray-300 hover:text-white"
                                    }`}
                                >
                                    {link.name}
                                    <span
                                        className={`absolute bottom-0 left-0 h-[2px] bg-amber-300 rounded-full transition-all duration-300 ease-out ${
                                            isActive
                                                ? "w-full opacity-100"
                                                : "w-0 opacity-0"
                                        }`}
                                    />
                                </a>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-3">
                        <a
                            href="/CV.pdf"
                            download="CV.pdf"
                            className="hidden sm:inline-flex items-center gap-2 bg-amber-300 hover:bg-amber-400 text-black font-semibold text-xs md:text-sm px-5 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-amber-300/20 cursor-pointer active:scale-95"
                        >
                            <span>Download CV</span>
                            <i className="fa-solid fa-download text-xs" />
                        </a>

                        {/* 3-Bar Perfect Cross Hamburger Button */}
                        <button
                            type="button"
                            onClick={handleToggleMenu}
                            aria-label="Toggle Navigation Menu"
                            className="md:hidden relative w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex flex-col justify-center items-center gap-[5px] text-white focus:outline-none active:scale-95 transition-all cursor-pointer z-[102] touch-manipulation"
                        >
                            <span
                                className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out transform origin-center ${
                                    isMobileMenuOpen
                                        ? "translate-y-[7px] rotate-45 bg-amber-300"
                                        : ""
                                }`}
                            />
                            <span
                                className={`w-5 h-[2px] bg-white rounded-full transition-all duration-200 ease-in-out ${
                                    isMobileMenuOpen
                                        ? "opacity-0 scale-0"
                                        : "opacity-100"
                                }`}
                            />
                            <span
                                className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out transform origin-center ${
                                    isMobileMenuOpen
                                        ? "-translate-y-[7px] -rotate-45 bg-amber-300"
                                        : ""
                                }`}
                            />
                        </button>
                    </div>
                </div>

                {/* Modern Glassmorphic Mobile Dropdown Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                        isMobileMenuOpen
                            ? "max-h-[350px] opacity-100 pt-4 pb-2 border-t border-white/10 mt-3"
                            : "max-h-0 opacity-0 pt-0 pb-0 mt-0 pointer-events-none"
                    }`}
                >
                    <nav className="flex flex-col space-y-1.5">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;

                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) =>
                                        handleScrollTo(e, link.href)
                                    }
                                    className={`flex items-center justify-between text-base font-medium transition-all py-3 px-4 rounded-2xl cursor-pointer select-none active:scale-[0.98] ${
                                        isActive
                                            ? "text-amber-300 font-semibold bg-white/10 border border-white/10 shadow-inner"
                                            : "text-gray-200 hover:text-white hover:bg-white/5 border border-transparent"
                                    }`}
                                >
                                    <span>{link.name}</span>
                                    {isActive && (
                                        <span className="w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_8px_#fcd34d]" />
                                    )}
                                </a>
                            );
                        })}

                        <a
                            href="/CV.pdf"
                            download="CV.pdf"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="sm:hidden flex items-center justify-center gap-2 bg-amber-300 hover:bg-amber-400 text-black font-semibold text-sm py-3 text-center rounded-2xl transition-all duration-200 mt-2 cursor-pointer active:scale-95 shadow-lg shadow-amber-300/10"
                        >
                            <span>Download CV</span>
                            <i className="fa-solid fa-download text-xs" />
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
