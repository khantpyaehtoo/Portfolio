"use client";

import { useState } from "react";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Hero from "@/components/shared/hero";
import IntroAnimation from "@/components/shared/introAnimation";

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

                <section className="min-h-screen p-10">
                    <h1 className="text-4xl font-medium text-center font-crafty">
                        about me !
                    </h1>
                    <p></p>
                </section>
                <section className="min-h-screen p-10">
                    <h1 className="text-4xl font-medium text-center font-crafty">
                        Works
                    </h1>
                </section>
                {/* <section className="min-h-screen p-10">
                    <h1 className="text-4xl font-bold">Playground</h1>
                </section> */}
                <section className="min-h-screen p-10">
                    <h1 className="text-4xl font-medium text-center font-crafty">
                        Contact
                    </h1>
                </section>
            </main>

            <Footer show={isIntroFinished} />
        </>
    );
}
