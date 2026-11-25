"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MemberRegistration from "@/components/MemberRegistration";
import MatrimonySection from "@/components/MatrimonySection";
import MarketplaceSection from "@/components/MarketplaceSection";
import JobsSection from "@/components/JobsSection";
import NewsSection from "@/components/NewsSection";
import GallerySection from "@/components/GallerySection";
import IdVerificationWidget from "@/components/IdVerificationWidget";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [lang, setLang] = useState<"ta" | "en">("ta");

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF5]">
      {/* Main Responsive Header */}
      <Header lang={lang} setLang={setLang} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <div id="home">
          <Hero lang={lang} />
        </div>

        {/* About Community Section */}
        <AboutSection lang={lang} />

        {/* Interactive Member Registration & Live Digital ID Card Generator */}
        <MemberRegistration lang={lang} />

        {/* Verified Matrimony Section */}
        <MatrimonySection lang={lang} />

        {/* Handloom Blankets & Livestock Marketplace Section */}
        <MarketplaceSection lang={lang} />

        {/* Community Employment & Careers Section */}
        <JobsSection lang={lang} />

        {/* Latest Announcements & News Section */}
        <NewsSection lang={lang} />

        {/* Cultural Photo Gallery Section */}
        <GallerySection lang={lang} />

        {/* Public Member ID Verification Section */}
        <IdVerificationWidget lang={lang} />

        {/* Contact Us & Headquarters Support Section */}
        <ContactSection lang={lang} />
      </main>

      {/* Official Footer */}
      <Footer lang={lang} />
    </div>
  );
}
