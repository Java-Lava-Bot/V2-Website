"use client";

import { useEffect } from "react";
import StatusScript from "./components/StatusScript";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import UpdatesSection from "./components/UpdatesSection";
import FeaturesSection from "./components/FeaturesSection";
import StatsSection from "./components/StatsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PremiumCTA from "./components/PremiumCTA";
import FAQSection from "./components/FAQSection";

export default function HomePage() {
    useEffect(() => {
        // Set current year in footer if exists
        const currentYearElement = document.getElementById('current-year');
        if (currentYearElement) {
            currentYearElement.textContent = new Date().getFullYear().toString();
        }
    }, []);
    
    return (
        <>
            <StatusScript />
            <Header />

            <main className="relative z-10">
                <HeroSection />
                <UpdatesSection />
                <FeaturesSection />
                <StatsSection />
                <TestimonialsSection />
                <PremiumCTA />
                <FAQSection />
            </main>

            <Footer />
        </>
    )
}