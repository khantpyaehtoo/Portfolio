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

            tl.from("#intro-slide", {
                xPercent: 100,
                duration: 1.3,
                delay: 0.3,
            })
                .from(["#title-1", "#title-2", "#title-3"], {
                    opacity: 0,
                    y: "+=30",
                    stagger: 0.5,
                })
                .to(["#title-1", "#title-2", "#title-3"], {
                    opacity: 0,
                    y: "-=30",
                    delay: 0.3,
                    stagger: 0.5,
                })
                .to("#intro-slide", {
                    xPercent: -100,
                    duration: 1.3,
                });
        },
        { scope: container },
    );

    return (
        <div ref={container} className="relative z-50">
            <div
                id="intro-slide"
                className="fixed inset-0 h-screen p-10 bg-gray-50 flex flex-col gap-10 tracking-tight text-black"
            >
                <h1 id="title-1" className="text-7xl font-bold">
                    Software Engineer
                </h1>
                <h1 id="title-2" className="text-7xl font-bold">
                    Front-end Developer
                </h1>
                <h1 id="title-3" className="text-7xl font-bold">
                    Freelancer
                </h1>
            </div>
        </div>
    );
}
