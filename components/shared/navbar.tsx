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

    // Mobile Menu ပွင့်ချိန် နောက်က Body Scroll ခေတ္တ ပိတ်ထားခြင်း
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

    // Active Section Intersection Observer
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -50% 0px",
            threshold: 0.1,
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

    // GSAP Animation (Desktop View Only)
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
                }
            });

            return () => mm.revert();
        },
        { scope: navRef, dependencies: [show] },
    );

    // Safe Toggle Function for Mobile and Desktop
    const toggleMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    // Smooth Scroll To Target
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
        <header className="fixed top-0 left-0 w-full z-[100] flex justify-center p-4 md:p-6 pointer-events-none">
            <div
                ref={navRef}
                className={`relative z-[101] pointer-events-auto transition-all duration-300 opacity-100 visible translate-y-0 md:opacity-0 md:invisible md:-translate-y-5 bg-[#141517] border border-white/10 rounded-3xl md:rounded-full shadow-2xl ${
                    isScrolled
                        ? "w-full max-w-3xl py-3 px-5 md:px-6 border-white/15"
                        : "w-full max-w-5xl py-3 px-6 md:py-3.5 md:px-8"
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
                            className="hidden sm:inline-flex items-center gap-2 bg-amber-300 hover:bg-amber-400 text-black font-semibold text-xs md:text-sm px-5 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-amber-300/20 cursor-pointer"
                        >
                            <span>Download CV</span>
                            <i className="fa-solid fa-download text-xs" />
                        </a>

                        {/* Mobile Hamburger Button */}
                        <button
                            type="button"
                            onClick={toggleMenu}
                            aria-label="Toggle Navigation Menu"
                            style={{ WebkitTapHighlightColor: "transparent" }}
                            className="md:hidden w-11 h-11 rounded-full bg-white/10 border border-white/20 flex flex-col justify-center items-center gap-1.5 text-white focus:outline-none active:scale-95 transition-transform cursor-pointer touch-manipulation relative z-[102]"
                        >
                            <span
                                className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 pointer-events-none ${
                                    isMobileMenuOpen
                                        ? "rotate-45 translate-y-2 bg-amber-300"
                                        : ""
                                }`}
                            />
                            <span
                                className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 pointer-events-none ${
                                    isMobileMenuOpen ? "opacity-0" : ""
                                }`}
                            />
                            <span
                                className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 pointer-events-none ${
                                    isMobileMenuOpen
                                        ? "-rotate-45 -translate-y-2 bg-amber-300"
                                        : ""
                                }`}
                            />
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu Container */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                        isMobileMenuOpen
                            ? "max-h-96 opacity-100 pt-4 pb-2 border-t border-white/10 mt-3"
                            : "max-h-0 opacity-0 pt-0 pb-0 border-t-0 mt-0 pointer-events-none"
                    }`}
                >
                    <nav className="flex flex-col space-y-1">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;

                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) =>
                                        handleScrollTo(e, link.href)
                                    }
                                    className={`flex items-center justify-between text-base font-medium transition-colors py-3 px-4 rounded-xl cursor-pointer select-none active:bg-white/20 ${
                                        isActive
                                            ? "text-amber-300 font-semibold bg-white/10"
                                            : "text-gray-200 hover:text-white hover:bg-white/5"
                                    }`}
                                >
                                    <span>{link.name}</span>
                                    {isActive && (
                                        <span className="w-2 h-2 rounded-full bg-amber-300" />
                                    )}
                                </a>
                            );
                        })}

                        <a
                            href="/CV.pdf"
                            download="CV.pdf"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="sm:hidden flex items-center justify-center gap-2 bg-amber-300 hover:bg-amber-400 text-black font-semibold text-sm py-3 text-center rounded-xl transition-all duration-200 mt-2 cursor-pointer active:scale-95"
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
