"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CreditCard,
  HeartHandshake,
  Briefcase,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface HeroProps {
  lang: "ta" | "en";
}

export default function Hero({ lang }: HeroProps) {
  const isTa = lang === "ta";

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#DCFCE7]/30 via-[#FAFAF5] to-[#FAFAF5] pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#E2E8F0]/60">
      {/* Decorative pastoral subtle background patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FACC15]/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#15803D]/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-[#15803D]/30 shadow-xs">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#15803D] animate-pulse" />
              <span className="text-xs font-bold text-[#14532D] tracking-wide">
                {isTa
                  ? "தமிழ்நாடு குறும்பர் சமுதாய அதிகாரப்பூர்வ தளம் • www.kurumbar.org"
                  : "Official Platform of the Kurumbar Community • www.kurumbar.org"}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#14532D] tracking-tight leading-[1.2]">
              {isTa ? (
                <>
                  உலகெங்கும் வாழும்{" "}
                  <span className="text-[#15803D] underline decoration-[#FACC15] decoration-4 underline-offset-8">
                    குறும்பர் சமூகத்தை
                  </span>{" "}
                  ஒன்றிணைக்கும் டிஜிட்டல் தளம்
                </>
              ) : (
                <>
                  Empowering & Uniting the Global{" "}
                  <span className="text-[#15803D] underline decoration-[#FACC15] decoration-4 underline-offset-8">
                    Kurumbar Community
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {isTa
                ? "சரிபார்க்கப்பட்ட சமுதாய உறுப்பினர் பதிவு, அதிகாரப்பூர்வ QR டிஜிட்டல் அடையாள அட்டை, நம்பகமான வரன் தேடல் (Matrimony), பாரம்பரிய கைத்தறி கம்பளி மற்றும் கால்நடை சந்தை, மற்றும் சமுதாய வேலைவாய்ப்புகள் — அனைத்தும் ஒரே தளத்தில்."
                : "Official centralized registry with verifiable Digital QR Member ID cards, trusted community matrimony, traditional handloom wool & livestock trade, and verified employment opportunities — all in one unified platform."}
            </p>

            {/* Key Service Highlights Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 bg-white text-[#14532D] text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs">
                <CreditCard className="w-4 h-4 text-[#15803D]" />
                {isTa ? "டிஜிட்டல் உறுப்பினர் அட்டை" : "Digital ID Card"}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white text-[#14532D] text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs">
                <HeartHandshake className="w-4 h-4 text-[#15803D]" />
                {isTa ? "நம்பகமான வரன் தேடல்" : "Verified Matrimony"}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white text-[#14532D] text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs">
                <Users className="w-4 h-4 text-[#15803D]" />
                {isTa ? "கால்நடை & கம்பளி சந்தை" : "Livestock & Handloom"}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white text-[#14532D] text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#E2E8F0] shadow-2xs">
                <Briefcase className="w-4 h-4 text-[#15803D]" />
                {isTa ? "வேலைவாய்ப்பு மையம்" : "Job Portal"}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <Link
                href="#register"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#15803D] hover:bg-[#14532D] text-white px-7 py-3.5 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <span>{isTa ? "உறுப்பினர் பதிவு செய்க" : "Apply for Digital Member ID"}</span>
                <ArrowRight className="w-5 h-5 text-[#FACC15]" />
              </Link>
              <Link
                href="#verify"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FAFAF5] text-[#14532D] px-6 py-3.5 rounded-xl font-bold text-base border-2 border-[#15803D]/30 shadow-xs hover:border-[#15803D] transition-all"
              >
                <ShieldCheck className="w-5 h-5 text-[#15803D]" />
                <span>{isTa ? "அடையாள அட்டை சரிபார்க்க" : "Verify Member ID"}</span>
              </Link>
            </div>

            {/* Trust points */}
            <div className="pt-4 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 border-t border-[#E2E8F0]">
              <div className="text-center lg:text-left">
                <p className="text-xl font-black text-[#14532D]">38</p>
                <p className="text-xs text-[#475569] font-medium">
                  {isTa ? "மாவட்டங்கள் இணைப்பு" : "Districts Covered"}
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-xl font-black text-[#14532D]">100%</p>
                <p className="text-xs text-[#475569] font-medium">
                  {isTa ? "சரிபார்க்கப்பட்ட உறுப்பினர்கள்" : "Verified Records"}
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-xl font-black text-[#14532D]">0 கட்டணம்</p>
                <p className="text-xs text-[#475569] font-medium">
                  {isTa ? "சமூக சேவை (No Fees)" : "Free Community Service"}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual — Interactive Mockup of the Kurumbar Digital ID Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-[#FACC15] text-[#14532D] text-xs font-black px-3.5 py-1.5 rounded-full shadow-md z-20 flex items-center gap-1.5 border border-white">
                <Sparkles className="w-4 h-4 text-[#14532D]" />
                <span>{isTa ? "அதிகாரப்பூர்வ மாதிரி அட்டை" : "Official Specimen"}</span>
              </div>

              {/* Card Container mimicking the Digital ID Card */}
              <div className="bg-gradient-to-br from-[#14532D] via-[#15803D] to-[#166534] rounded-3xl p-6 text-white shadow-2xl border-4 border-[#FACC15]/80 relative overflow-hidden">
                {/* Background watermarked monogram */}
                <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
                  <div className="w-64 h-64 rounded-full border-16 border-white flex items-center justify-center font-black text-9xl">
                    K
                  </div>
                </div>

                {/* ID Card Top Header */}
                <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-white rounded-xl p-1 flex items-center justify-center shadow-xs">
                      <Image
                        src="/brand/logo.png"
                        alt="Kurumbar Seal"
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm tracking-wide text-white">
                        KURUMBAR COMMUNITY PLATFORM
                      </h4>
                      <p className="text-[11px] text-[#FACC15] font-semibold">
                        குறும்பர் சமுதாய டிஜிட்டல் அடையாள அட்டை
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/15 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-[#FACC15] border border-white/20">
                    VERIFIED
                  </div>
                </div>

                {/* ID Card Body */}
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Photo with Circular Frame */}
                  <div className="col-span-5 text-center">
                    <div className="w-24 h-28 mx-auto bg-white/90 rounded-xl overflow-hidden border-2 border-[#FACC15] shadow-inner relative flex items-center justify-center">
                      <Image
                        src="/images/member_avatar.png"
                        alt="Member Photo"
                        width={96}
                        height={112}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="mt-1.5 inline-block bg-[#FACC15] text-[#14532D] text-[9px] font-black px-2 py-0.5 rounded-full">
                      MALE • ஆண்
                    </div>
                  </div>

                  {/* Member Details */}
                  <div className="col-span-7 space-y-1 text-xs">
                    <div>
                      <span className="text-white/60 text-[10px] block font-medium">உறுப்பினர் பெயர் (Name)</span>
                      <span className="font-bold text-white text-sm">ஆர். கார்த்திக் (R. Karthik)</span>
                    </div>
                    <div>
                      <span className="text-white/60 text-[10px] block font-medium">தந்தை பெயர் (Father's Name)</span>
                      <span className="font-semibold text-white/90">கே. ரங்கசாமி (K. Rangasamy)</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-0.5">
                      <div>
                        <span className="text-white/60 text-[10px] block font-medium">பிறந்த தேதி (DOB)</span>
                        <span className="font-semibold text-white/90">14-08-1996</span>
                      </div>
                      <div>
                        <span className="text-white/60 text-[10px] block font-medium">இரத்த வகை (Blood)</span>
                        <span className="font-bold text-[#FACC15]">O+ Positive</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-white/60 text-[10px] block font-medium">மாவட்டம் (District)</span>
                      <span className="font-semibold text-white/90">சேலம் (Salem West)</span>
                    </div>
                  </div>
                </div>

                {/* ID Card Footer with Member ID and QR Code */}
                <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between bg-black/20 -mx-6 -mb-6 p-4 rounded-b-2xl">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#FACC15] font-bold block">
                      MEMBER ID NO
                    </span>
                    <span className="text-base font-mono font-black text-white tracking-widest">
                      TN01M0000001
                    </span>
                  </div>

                  {/* QR Code Graphic Mockup */}
                  <div className="bg-white p-1 rounded-lg shadow-xs flex items-center justify-center">
                    <div className="w-12 h-12 bg-black rounded-xs flex items-center justify-center p-1">
                      <div className="w-full h-full border border-white flex flex-col justify-between p-0.5">
                        <div className="flex justify-between">
                          <div className="w-2.5 h-2.5 bg-white" />
                          <div className="w-2.5 h-2.5 bg-white" />
                        </div>
                        <div className="flex justify-center">
                          <div className="w-2 h-2 bg-[#FACC15]" />
                        </div>
                        <div className="flex justify-between">
                          <div className="w-2.5 h-2.5 bg-white" />
                          <div className="w-1.5 h-1.5 bg-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative mini caption below card */}
              <div className="mt-3 text-center">
                <span className="text-xs text-[#475569] font-medium flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#15803D]" />
                  {isTa
                    ? "அரசு மற்றும் சமுதாய அமைப்புகளால் அங்கீகரிக்கப்பட்ட வடிவம்"
                    : "Standardized tamper-proof digital card for all Kurumbar members"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
