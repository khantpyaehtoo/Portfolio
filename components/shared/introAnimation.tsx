"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface IntroAnimationProps {
    onIntroComplete?: () => void;
}

export default function IntroAnimation({
    onIntroComplete,
}: IntroAnimationProps) {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // Intro ပြနေချိန်မှာ Page Scroll ပိတ်ထားမည်
            document.body.style.overflow = "hidden";

            const tl = gsap.timeline({
                onComplete: () => {
                    // Animation ပြီးသွားလျှင် Scroll ပြန်ဖွင့်မည်
                    document.body.style.overflow = "";
                    if (onIntroComplete) onIntroComplete();
                },
            });

            // Initial setup for Slide overlay & Text
            gsap.set("#intro-slide", { xPercent: 0 });
            gsap.set(["#title-1", "#title-2", "#title-3"], {
                opacity: 0,
                y: 30,
                scale: 0.98,
            });

            // Smooth Fade-In Sequence
            tl.to(["#title-1", "#title-2", "#title-3"], {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                delay: 0.2,
            })
                // Smooth Fade-Out Sequence
                .to(["#title-1", "#title-2", "#title-3"], {
                    opacity: 0,
                    y: -20,
                    scale: 0.98,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.inOut",
                    delay: 0.5,
                })
                // Slide Away Overlay
                .to("#intro-slide", {
                    xPercent: -100,
                    duration: 1,
                    ease: "expo.inOut",
                });

            return () => {
                document.body.style.overflow = "";
            };
        },
        { scope: container },
    );

    return (
        <div ref={container} className="relative z-200 font-sans">
            <div
                id="intro-slide"
                className="fixed inset-0 h-screen w-full bg-bg-base text-text-main flex flex-col justify-center items-start px-6 sm:px-12 md:px-20 gap-4 tracking-tight border-b border-border-subtle transition-colors duration-300"
            >
                {/* Background Ambient Glow */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-2 relative z-10 font-mono w-full max-w-4xl">
                    <span
                        id="title-1"
                        className="block text-primary text-xs sm:text-sm md:text-base tracking-widest uppercase font-semibold"
                    >
                        {"// Khant Pyae Htoo"}
                    </span>
                    <h1
                        id="title-2"
                        className="text-3xl sm:text-5xl md:text-7xl font-extrabold uppercase font-sans text-text-main leading-tight"
                    >
                        Front-End Developer
                    </h1>
                    <p
                        id="title-3"
                        className="text-text-muted text-xs sm:text-base md:text-lg font-sans"
                    >
                        Crafting smooth UI & full-stack web experiences.
                    </p>
                </div>
            </div>
        </div>
    );
}
