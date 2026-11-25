"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  ShieldCheck,
  UserCheck,
  PhoneCall,
  Globe2,
  ChevronDown,
} from "lucide-react";

interface HeaderProps {
  lang: "ta" | "en";
  setLang: (lang: "ta" | "en") => void;
}

export default function Header({ lang, setLang }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = {
    ta: {
      helpline: "சமூக உதவி எண்: +91 94432 12345 | support@kurumbar.org",
      verifyId: "உறுப்பினர் அட்டை சரிபார்ப்பு",
      home: "முகப்பு",
      about: "எங்களை பற்றி",
      register: "உறுப்பினர் பதிவு",
      matrimony: "வரன் தேடல்",
      marketplace: "சந்தை",
      jobs: "வேலைவாய்ப்பு",
      news: "செய்திகள்",
      gallery: "புகைப்படங்கள்",
      contact: "தொடர்பு",
      ctaRegister: "உறுப்பினர் பதிவு செய்க",
      login: "உள்நுழைவு",
    },
    en: {
      helpline: "Community Helpline: +91 94432 12345 | support@kurumbar.org",
      verifyId: "Verify Member ID",
      home: "Home",
      about: "About Us",
      register: "Member Registry",
      matrimony: "Matrimony",
      marketplace: "Marketplace",
      jobs: "Jobs",
      news: "News & Events",
      gallery: "Gallery",
      contact: "Contact",
      ctaRegister: "Register as Member",
      login: "Login",
    },
  }[lang];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-xs">
      {/* Top micro-bar for official helpline & quick verification */}
      <div className="bg-[#14532D] text-white text-xs py-1.5 px-4 sm:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <PhoneCall className="w-3.5 h-3.5 text-[#FACC15]" />
          <span className="font-medium tracking-wide">{t.helpline}</span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="#verify"
            className="flex items-center gap-1.5 text-white/90 hover:text-[#FACC15] transition-colors font-medium"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#FACC15]" />
            <span>{t.verifyId}</span>
          </Link>
          <div className="flex items-center gap-1 bg-[#15803D] rounded-full px-2 py-0.5 border border-white/20">
            <Globe2 className="w-3 h-3 text-[#FACC15]" />
            <button
              onClick={() => setLang(lang === "ta" ? "en" : "ta")}
              className="font-bold text-[11px] text-white hover:text-[#FACC15] transition-colors"
            >
              {lang === "ta" ? "English" : "தமிழ்"}
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-xs border border-[#15803D]/20 bg-[#FAFAF5] p-1 flex items-center justify-center transition-transform group-hover:scale-105">
              <Image
                src="/brand/logo.png"
                alt="Kurumbar Logo"
                width={44}
                height={44}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-[#14532D] tracking-tight">
                  KURUMBAR
                </span>
                <span className="bg-[#FACC15] text-[#14532D] text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                  குறும்பர்
                </span>
              </div>
              <p className="text-[11px] text-[#475569] font-medium tracking-wide">
                அதிகாரப்பூர்வ சமூக இணையதளம் • www.kurumbar.org
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="#home"
              className="px-3 py-2 text-sm font-semibold text-[#1E293B] hover:text-[#15803D] hover:bg-[#DCFCE7]/50 rounded-lg transition-colors"
            >
              {t.home}
            </Link>
            <Link
              href="#about"
              className="px-3 py-2 text-sm font-semibold text-[#1E293B] hover:text-[#15803D] hover:bg-[#DCFCE7]/50 rounded-lg transition-colors"
            >
              {t.about}
            </Link>
            <Link
              href="#register"
              className="px-3 py-2 text-sm font-semibold text-[#15803D] hover:bg-[#DCFCE7]/60 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <UserCheck className="w-4 h-4 text-[#15803D]" />
              <span>{t.register}</span>
            </Link>
            <Link
              href="#matrimony"
              className="px-3 py-2 text-sm font-semibold text-[#1E293B] hover:text-[#15803D] hover:bg-[#DCFCE7]/50 rounded-lg transition-colors"
            >
              {t.matrimony}
            </Link>
            <Link
              href="#marketplace"
              className="px-3 py-2 text-sm font-semibold text-[#1E293B] hover:text-[#15803D] hover:bg-[#DCFCE7]/50 rounded-lg transition-colors"
            >
              {t.marketplace}
            </Link>
            <Link
              href="#jobs"
              className="px-3 py-2 text-sm font-semibold text-[#1E293B] hover:text-[#15803D] hover:bg-[#DCFCE7]/50 rounded-lg transition-colors"
            >
              {t.jobs}
            </Link>
            <Link
              href="#news"
              className="px-3 py-2 text-sm font-semibold text-[#1E293B] hover:text-[#15803D] hover:bg-[#DCFCE7]/50 rounded-lg transition-colors"
            >
              {t.news}
            </Link>
            <Link
              href="#gallery"
              className="px-3 py-2 text-sm font-semibold text-[#1E293B] hover:text-[#15803D] hover:bg-[#DCFCE7]/50 rounded-lg transition-colors"
            >
              {t.gallery}
            </Link>
            <Link
              href="#contact"
              className="px-3 py-2 text-sm font-semibold text-[#1E293B] hover:text-[#15803D] hover:bg-[#DCFCE7]/50 rounded-lg transition-colors"
            >
              {t.contact}
            </Link>
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="#register"
              className="inline-flex items-center gap-2 bg-[#15803D] hover:bg-[#14532D] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <UserCheck className="w-4 h-4 text-[#FACC15]" />
              <span>{t.ctaRegister}</span>
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#1E293B] hover:bg-[#FAFAF5] border border-[#E2E8F0] focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#14532D]" />
              ) : (
                <Menu className="w-6 h-6 text-[#14532D]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E2E8F0] bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top">
          <div className="flex flex-col space-y-1.5">
            <Link
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-[#1E293B] hover:bg-[#FAFAF5]"
            >
              {t.home}
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-[#1E293B] hover:bg-[#FAFAF5]"
            >
              {t.about}
            </Link>
            <Link
              href="#register"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-[#15803D] bg-[#DCFCE7]/60 flex items-center justify-between"
            >
              <span>{t.register}</span>
              <span className="text-xs font-bold bg-[#15803D] text-white px-2 py-0.5 rounded-full">
                ID அட்டை
              </span>
            </Link>
            <Link
              href="#matrimony"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-[#1E293B] hover:bg-[#FAFAF5]"
            >
              {t.matrimony}
            </Link>
            <Link
              href="#marketplace"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-[#1E293B] hover:bg-[#FAFAF5]"
            >
              {t.marketplace}
            </Link>
            <Link
              href="#jobs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-[#1E293B] hover:bg-[#FAFAF5]"
            >
              {t.jobs}
            </Link>
            <Link
              href="#news"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-[#1E293B] hover:bg-[#FAFAF5]"
            >
              {t.news}
            </Link>
            <Link
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-[#1E293B] hover:bg-[#FAFAF5]"
            >
              {t.gallery}
            </Link>
            <Link
              href="#verify"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-[#1E293B] hover:bg-[#FAFAF5]"
            >
              {t.verifyId}
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-[#1E293B] hover:bg-[#FAFAF5]"
            >
              {t.contact}
            </Link>
            <div className="pt-3">
              <Link
                href="#register"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#15803D] text-white px-5 py-3 rounded-xl font-bold text-center shadow-md"
              >
                <UserCheck className="w-5 h-5 text-[#FACC15]" />
                <span>{t.ctaRegister}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
