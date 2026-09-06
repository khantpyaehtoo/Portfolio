"use client";

import { useState } from "react";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Hero from "@/components/shared/hero";
import IntroAnimation from "@/components/shared/introAnimation";
import AboutSection from "@/components/shared/aboutme";
import ContactSection from "@/components/shared/contact";
import GoodToKnowSection from "@/components/shared/faq";
// import WorkSection from "@/components/shared/works";
import StickyWorkSection from "@/components/shared/work";
// import TechStackSection from "@/components/shared/techStack";

export default function Home() {
    const [isIntroFinished, setIsIntroFinished] = useState(false);

    return (
        <>
            {!isIntroFinished && (
                <IntroAnimation
                    onIntroComplete={() => setIsIntroFinished(true)}
                />
            )}

            <Navbar show={isIntroFinished} />

            <main>
                <Hero show={isIntroFinished} />

                <AboutSection />
                {/* <TechStackSection /> */}
                <StickyWorkSection />
                {/* <WorkSection /> */}

                <GoodToKnowSection />
                <ContactSection />
            </main>

            <Footer show={isIntroFinished} />
        </>
    );
}
