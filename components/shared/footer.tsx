"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface FooterProps {
    show?: boolean;
}

export default function Footer({ show }: FooterProps) {
    const footerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (show) {
            gsap.to(footerRef.current, {
                autoAlpha: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
            });
        }
    }, [show]);

    return (
        <div
            ref={footerRef}
            className="w-full bg-white opacity-0 invisible translate-y-5"
        >
            <div className="flex items-start justify-around px-40 py-5">
                <div className="text-black">
                    <h1>Eric Rebillet</h1>
                    <p>&copy; 2026 August. Created by Eric</p>
                </div>
                <div className="text-black">
                    <h1>Explore</h1>
                    <p>Work</p>
                    <p>About</p>
                    <p>Journal</p>
                </div>
                <div className="text-black">
                    <h1>Get in touch</h1>
                    <p>ericrebillet@gmail.com</p>
                    <p>Download CV</p>
                </div>
            </div>
        </div>
    );
}
