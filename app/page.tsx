"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Hero from "@/components/shared/hero";
import IntroAnimation from "@/components/shared/introAnimation";
import AboutSection from "@/components/shared/aboutme";
import ContactSection from "@/components/shared/contact";
import GoodToKnowSection from "@/components/shared/faq";
import StickyWorkSection from "@/components/shared/works";

export default function Home() {
    const [isIntroFinished, setIsIntroFinished] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);

            if (mobile) {
                setIsIntroFinished(true);
            }
        };

        checkMobile();
    }, []);

    return (
        <div className="relative min-h-screen bg-[#141517] overflow-x-clip">
            {!isIntroFinished && !isMobile && (
                <IntroAnimation
                    onIntroComplete={() => setIsIntroFinished(true)}
                />
            )}

            <Navbar show={isMobile ? true : isIntroFinished} />

            <main className="relative z-10">
                <Hero show={isMobile ? true : isIntroFinished} />

                <AboutSection />
                <StickyWorkSection />

                <GoodToKnowSection />
                <ContactSection />
            </main>

            <Footer show={isMobile ? true : isIntroFinished} />
        </div>
    );
}
