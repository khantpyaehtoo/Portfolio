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
        // { name: "Playground", href: "#playground", id: "playground" },
    ];

    // Scroll Detection for Navbar Sizing
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Active Section Detection via Intersection Observer
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -50% 0px",
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

        // Track all sections based on navLinks IDs
        navLinks.forEach((link) => {
            const el = document.getElementById(link.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    useGSAP(
        () => {
            if (show) {
                gsap.to(navRef.current, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                });
            }
        },
        { scope: navRef, dependencies: [show] },
    );

    // Smooth Scroll Helper
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

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-center p-4 md:p-6 pointer-events-none">
            <div
                ref={navRef}
                className={`pointer-events-auto transition-all duration-500 opacity-0 invisible -translate-y-5 bg-[#141517]/80 backdrop-blur-md border border-white/10 rounded-3xl md:rounded-full shadow-2xl ${
                    isScrolled
                        ? "w-full max-w-2xl py-2.5 px-5 md:px-6 border-white/15"
                        : "w-full max-w-5xl py-3 px-6 md:py-3.5 md:px-8"
                }`}
            >
                <div className="flex justify-between items-center">
                    {/* Logo / Name */}
                    <a
                        href="#home"
                        onClick={(e) => handleScrollTo(e, "#home")}
                        className="font-bold text-white font-doppio tracking-tight text-base md:text-lg hover:text-amber-300 transition-colors z-10"
                    >
                        Khant Pyae Htoo
                    </a>

                    {/* Desktop Navigation Links with Animated Active Underline */}
                    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;

                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) =>
                                        handleScrollTo(e, link.href)
                                    }
                                    className={`relative py-1 transition-colors duration-300 ${
                                        isActive
                                            ? "text-amber-300 font-semibold"
                                            : "text-gray-300 hover:text-white"
                                    }`}
                                >
                                    {link.name}

                                    {/* Active Amber Underline Indicator */}
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

                    {/* Right Action Area */}
                    <div className="flex items-center gap-3">
                        <a
                            href="#contact"
                            onClick={(e) => handleScrollTo(e, "#contact")}
                            className="hidden sm:inline-flex bg-amber-300 hover:bg-amber-400 text-black font-semibold text-xs md:text-sm px-5 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-amber-300/20"
                        >
                            Contact
                        </a>

                        {/* Mobile Hamburger Toggle Button */}
                        <button
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            aria-label="Toggle Navigation Menu"
                            className="md:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 flex flex-col justify-center items-center gap-1.5 text-white focus:outline-none"
                        >
                            <span
                                className={`w-5 h-0.5 bg-white rounded-full transition-transform duration-300 ${
                                    isMobileMenuOpen
                                        ? "rotate-45 translate-y-2 bg-amber-300"
                                        : ""
                                }`}
                            />
                            <span
                                className={`w-5 h-0.5 bg-white rounded-full transition-opacity duration-300 ${
                                    isMobileMenuOpen ? "opacity-0" : ""
                                }`}
                            />
                            <span
                                className={`w-5 h-0.5 bg-white rounded-full transition-transform duration-300 ${
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
                    className={`grid transition-all duration-300 ease-in-out md:hidden ${
                        isMobileMenuOpen
                            ? "grid-rows-[1fr] opacity-100 pt-6 pb-2"
                            : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                    <div className="overflow-hidden">
                        <nav className="flex flex-col space-y-4 pt-2 border-t border-white/10">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.id;

                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) =>
                                            handleScrollTo(e, link.href)
                                        }
                                        className={`flex items-center justify-between text-base font-medium transition-colors px-2 ${
                                            isActive
                                                ? "text-amber-300 font-semibold"
                                                : "text-gray-300 hover:text-white"
                                        }`}
                                    >
                                        <span>{link.name}</span>
                                        {isActive && (
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                                        )}
                                    </a>
                                );
                            })}
                            <a
                                href="#contact"
                                onClick={(e) => handleScrollTo(e, "#contact")}
                                className="sm:hidden bg-amber-300 hover:bg-amber-400 text-black font-semibold text-sm py-2.5 text-center rounded-xl transition-all duration-200 mt-2"
                            >
                                Contact
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
