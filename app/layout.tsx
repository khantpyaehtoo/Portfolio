import type { Metadata } from "next";
import {
    Butterfly_Kids,
    Crafty_Girls,
    Doppio_One,
    Geist,
    Geist_Mono,
} from "next/font/google";

import "./globals.css";
import "@/components/shared/gsapProvider";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ThemeProvider } from "@/components/themeProvider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const doppioOne = Doppio_One({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-doppio",
});

const butterflyKid = Butterfly_Kids({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-butterfly",
});

const craftygirls = Crafty_Girls({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-crafty",
});

export const metadata: Metadata = {
    title: "Khant Pyae Htoo | Dev",
    description: "Crafted By Khant Pyae Htoo",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${geistSans.variable} ${geistMono.variable} ${doppioOne.variable} ${butterflyKid.variable} ${craftygirls.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col bg-bg-base text-text-main">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
