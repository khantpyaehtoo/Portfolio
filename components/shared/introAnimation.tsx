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
            const tl = gsap.timeline({
                onComplete: () => {
                    if (onIntroComplete) onIntroComplete();
                },
            });

            // Initial State setup
            gsap.set("#intro-slide", { xPercent: 0 });

            tl.from(["#title-1", "#title-2", "#title-3"], {
                opacity: 0,
                y: 40,
                duration: 0.8,
                stagger: 0.25,
                ease: "power3.out",
                delay: 0.2,
            })
                .to(["#title-1", "#title-2", "#title-3"], {
                    opacity: 0,
                    y: -30,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "power3.in",
                    delay: 0.4,
                })
                .to("#intro-slide", {
                    xPercent: -100,
                    duration: 1.1,
                    ease: "expo.inOut",
                });
        },
        { scope: container },
    );

    return (
        <div ref={container} className="relative z-50 font-sans">
            <div
                id="intro-slide"
                className="fixed inset-0 h-screen w-full bg-[#0a0a0a] text-white flex flex-col justify-center items-start px-8 md:px-20 gap-4 tracking-tight border-b border-white/10"
            >
                {/* Background Ambient Glow */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-2 relative z-10 font-mono">
                    <span
                        id="title-1"
                        className="block text-amber-300 text-sm md:text-base tracking-widest uppercase"
                    >
                        {"// Khant Pyae Htoo"}
                    </span>
                    <h1
                        id="title-2"
                        className="text-4xl md:text-7xl font-extrabold uppercase font-sans text-white"
                    >
                        Front-End Developer
                    </h1>
                    <p
                        id="title-3"
                        className="text-gray-400 text-sm md:text-lg font-sans"
                    >
                        Crafting smooth UI & full-stack web experiences.
                    </p>
                </div>
            </div>
        </div>
    );
}
