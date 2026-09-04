"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

export default function Hero({ show }: { show?: boolean }) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (show) {
            gsap.to(ref.current, {
                autoAlpha: 1,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
            });
        }
    }, [show]);

    return (
        <div
            ref={ref}
            className="min-h-screen flex justify-center items-center opacity-0 invisible relative"
        >
            {/* <div className="absolute top-40 right-20 ">
                <button className="text-3xl font-bold border-2 border-amber-200 p-3 rounded-full text-black bg-white cursor-pointer">
                    Download CV
                </button>
            </div> */}
            <div className="space-y-4">
                <h1 className="text-xl text-start font-crafty">
                    Hi , It&apos;s me
                </h1>
                <h1 className="text-7xl font-bold font-doppio">
                    Khant Pyae Htoo
                </h1>
            </div>
        </div>
    );
}
