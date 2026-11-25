"use client";

import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Users,
  Heart,
  Landmark,
  ScrollText,
} from "lucide-react";

interface AboutProps {
  lang: "ta" | "en";
}

export default function AboutSection({ lang }: AboutProps) {
  const isTa = lang === "ta";

  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAFAF5]">
                <Image
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=700&auto=format&fit=crop&q=80"
                  alt="Kurumbar Cultural Heritage"
                  width={600}
                  height={500}
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#14532D] text-white p-5 rounded-2xl shadow-xl border-2 border-[#FACC15] max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FACC15] text-[#14532D] flex items-center justify-center font-black">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-sm text-[#FACC15]">தொன்மை வரலாறு</h5>
                    <p className="text-[11px] text-white/80">
                      இயற்கையோடு இயைந்த மேய்ச்சல் & கைத்தறி பாரம்பரியம்
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#DCFCE7] text-[#14532D] text-xs font-bold px-3.5 py-1.5 rounded-full border border-[#15803D]/20">
              <ScrollText className="w-4 h-4 text-[#15803D]" />
              <span>{isTa ? "குறும்பர் சமுதாய வரலாறு & நோக்கம்" : "Our Heritage & Mission"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#14532D] tracking-tight leading-snug">
              {isTa ? (
                <>
                  பாரம்பரியமும் பெருமையும் கொண்ட{" "}
                  <span className="text-[#15803D]">குறும்பர் சமுதாயத்தின்</span> வரலாறு
                </>
              ) : (
                <>
                  The Rich Heritage and Noble Purpose of the{" "}
                  <span className="text-[#15803D]">Kurumbar Community</span>
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              {isTa
                ? "குறும்பர் சமூகம் (குரும்பா / கும்பா கவுண்டர்) தமிழகத்தின் தொன்மையான மேய்ச்சல் மற்றும் வேளாண் நாகரிகத்தின் ஆணிவேராக விளங்கும் சமுதாயமாகும். செம்மறி ஆட்டு ரோமத்தில் பாரம்பரிய கைத்தறி கம்பளிகள் நெய்தல், இயற்கை விவசாயம் மற்றும் சமூக ஒற்றுமை ஆகியவற்றில் தலைமுறை தலைமுறையாக அளப்பரிய பங்களிப்பை ஆற்றி வருகின்றனர்."
                : "The Kurumbar community represents one of the most ancient pastoral and agrarian traditions of South India. Renowned for their ethical livestock stewardship, handloom wool craftsmanship (Kambli), and deep reverence for nature, the community continues to be a cornerstone of rural harmony."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#FAFAF5] border border-[#E2E8F0]">
                <div className="w-9 h-9 rounded-xl bg-[#DCFCE7] text-[#15803D] flex items-center justify-center mb-2.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#14532D] text-sm mb-1">
                  {isTa ? "நம்பகமான டிஜிட்டல் ஆவணமாக்கல்" : "Verified Digital Census"}
                </h4>
                <p className="text-xs text-[#475569] leading-normal">
                  {isTa
                    ? "அனைத்து மாவட்ட குறும்பர் மக்களையும் டிஜிட்டல் உறுப்பினர் அட்டையுடன் பதிவு செய்து பாதுகாப்பான சமுதாய பதிவேட்டை உருவாக்குதல்."
                    : "Digitizing and unifying community records with verifiable QR-encoded member identity cards across all 38 districts."}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAFAF5] border border-[#E2E8F0]">
                <div className="w-9 h-9 rounded-xl bg-[#DCFCE7] text-[#15803D] flex items-center justify-center mb-2.5">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#14532D] text-sm mb-1">
                  {isTa ? "இளைஞர் கல்வி & வேலைவாய்ப்பு" : "Youth Education & Careers"}
                </h4>
                <p className="text-xs text-[#475569] leading-normal">
                  {isTa
                    ? "சமூக ஏழை மாணவர்களுக்கு கல்வி உதவித்தொகை மற்றும் பட்டதாரி இளைஞர்களுக்கு வேலைவாய்ப்பு வழிகாட்டுதல்."
                    : "Empowering next-generation students with higher education scholarships, competitive career guidance, and job networks."}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAFAF5] border border-[#E2E8F0]">
                <div className="w-9 h-9 rounded-xl bg-[#DCFCE7] text-[#15803D] flex items-center justify-center mb-2.5">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#14532D] text-sm mb-1">
                  {isTa ? "பாதுகாப்பான திருமண வரன் தேடல்" : "Safe Matrimonial Alliances"}
                </h4>
                <p className="text-xs text-[#475569] leading-normal">
                  {isTa
                    ? "எந்தவொரு இடைத்தரகரும் கட்டணமும் இன்றி குலம், நட்சத்திரம் அடிப்படையில் வரன்களை இணைக்கும் மேடை."
                    : "Brokering trust without middlemen fees by matching brides and grooms across verified kulam and horoscopic values."}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAFAF5] border border-[#E2E8F0]">
                <div className="w-9 h-9 rounded-xl bg-[#DCFCE7] text-[#15803D] flex items-center justify-center mb-2.5">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#14532D] text-sm mb-1">
                  {isTa ? "நேரடி விவசாய & கம்பளி சந்தை" : "Direct Rural Trade"}
                </h4>
                <p className="text-xs text-[#475569] leading-normal">
                  {isTa
                    ? "ஆடு வளர்ப்பு விவசாயிகள் மற்றும் கம்பளி நெசவாளர்கள் நுகர்வோரை நேரடியாக தொடர்பு கொள்ளும் கட்டணமில்லா தளம்."
                    : "Connecting shepherds, farmers, and handloom weavers directly with buyers via direct telephone calls."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
