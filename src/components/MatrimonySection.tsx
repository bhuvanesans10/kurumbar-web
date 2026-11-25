"use client";

import { useState } from "react";
import Image from "next/image";
import { SAMPLE_MATRIMONY, MatrimonyItem } from "@/data/mockData";
import {
  Heart,
  ShieldCheck,
  PhoneCall,
  User,
  GraduationCap,
  Briefcase,
  MapPin,
  Sparkles,
  Search,
  Filter,
  CheckCircle,
} from "lucide-react";

interface MatrimonyProps {
  lang: "ta" | "en";
}

export default function MatrimonySection({ lang }: MatrimonyProps) {
  const isTa = lang === "ta";
  const [filterGender, setFilterGender] = useState<"ALL" | "GROOM" | "BRIDE">("ALL");
  const [selectedProfile, setSelectedProfile] = useState<MatrimonyItem | null>(null);

  const filteredProfiles = SAMPLE_MATRIMONY.filter((p) => {
    if (filterGender === "ALL") return true;
    return p.gender === filterGender;
  });

  return (
    <section id="matrimony" className="py-16 lg:py-24 bg-[#FAFAF5] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#DCFCE7] text-[#14532D] text-xs font-bold px-3.5 py-1.5 rounded-full mb-3 border border-[#15803D]/20">
            <Heart className="w-4 h-4 text-[#15803D]" />
            <span>{isTa ? "குறும்பர் திருமண தகவல் மையம்" : "Kurumbar Matrimony Service"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#14532D] tracking-tight">
            {isTa ? "சரிபார்க்கப்பட்ட சமுதாய வரன்கள்" : "Verified Matrimonial Alliances"}
          </h2>
          <p className="text-base text-[#475569] mt-3">
            {isTa
              ? "குறும்பர் சமுதாயத்திற்குள் பாரம்பரியம், குலம், நட்சத்திரப் பொருத்தம் மற்றும் கல்வித் தகுதியின் அடிப்படையில் பொருத்தமான வரன்களை தேர்வு செய்யுங்கள்."
              : "Explore verified bride and groom profiles within the Kurumbar community with complete privacy and zero agent fees."}
          </p>

          {/* Gender Filter Tabs */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => setFilterGender("ALL")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                filterGender === "ALL"
                  ? "bg-[#15803D] text-white shadow-md"
                  : "bg-white text-[#475569] border border-[#E2E8F0] hover:bg-[#DCFCE7]/40"
              }`}
            >
              {isTa ? "அனைத்து வரன்கள் (All)" : "All Profiles"}
            </button>
            <button
              onClick={() => setFilterGender("GROOM")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                filterGender === "GROOM"
                  ? "bg-[#15803D] text-white shadow-md"
                  : "bg-white text-[#475569] border border-[#E2E8F0] hover:bg-[#DCFCE7]/40"
              }`}
            >
              👨 {isTa ? "மணமகன் வரன்கள் (Grooms)" : "Grooms"}
            </button>
            <button
              onClick={() => setFilterGender("BRIDE")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                filterGender === "BRIDE"
                  ? "bg-[#15803D] text-white shadow-md"
                  : "bg-white text-[#475569] border border-[#E2E8F0] hover:bg-[#DCFCE7]/40"
              }`}
            >
              👩 {isTa ? "மணமகள் வரன்கள் (Brides)" : "Brides"}
            </button>
          </div>
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProfiles.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-[#E2E8F0] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Photo & Badges */}
                <div className="relative h-64 w-full bg-[#FAFAF5] overflow-hidden">
                  <Image
                    src={p.photoUrl}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#14532D]/90 backdrop-blur-xs text-[#FACC15] text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                    {p.gender === "GROOM" ? "மணமகன் • GROOM" : "மணமகள் • BRIDE"}
                  </div>
                  <div className="absolute top-3 right-3 bg-[#15803D] text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FACC15]" />
                    <span>சரிபார்க்கப்பட்டது</span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white">
                    <h4 className="font-extrabold text-base leading-snug">{p.name}</h4>
                    <p className="text-xs text-white/90">
                      {p.age} வயது • {p.height}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-2.5 text-xs">
                  <div className="flex items-start gap-2 text-[#1E293B]">
                    <GraduationCap className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                    <span className="font-medium line-clamp-1">{p.education}</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#1E293B]">
                    <Briefcase className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                    <span className="font-medium line-clamp-1">{p.occupation} ({p.workLocation})</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#1E293B]">
                    <MapPin className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                    <span className="font-medium">{p.district}</span>
                  </div>
                  <div className="pt-2 border-t border-[#E2E8F0] grid grid-cols-2 gap-2 text-[11px]">
                    <div className="bg-[#FAFAF5] p-2 rounded-xl">
                      <span className="text-[#475569] block text-[10px]">குலம் (Kulam):</span>
                      <span className="font-bold text-[#14532D]">{p.kulam}</span>
                    </div>
                    <div className="bg-[#FAFAF5] p-2 rounded-xl">
                      <span className="text-[#475569] block text-[10px]">நட்சத்திரம்:</span>
                      <span className="font-bold text-[#14532D]">{p.star}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedProfile(p)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#15803D] hover:bg-[#14532D] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-xs transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#FACC15]" />
                  <span>விவரங்களை பார்க்க & தொடர்பு</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Matrimony Verification Safety Notice Modal */}
        {selectedProfile && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E2E8F0] relative animate-in zoom-in-95">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#DCFCE7] flex items-center justify-center text-[#15803D]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-extrabold text-base text-[#14532D]">
                    வரன் தொடர்பு வழிகாட்டுதல் (Privacy Protected)
                  </h4>
                </div>
                <button
                  onClick={() => setSelectedProfile(null)}
                  className="text-gray-400 hover:text-gray-700 font-bold text-lg p-1"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs text-[#1E293B]">
                <div className="p-4 rounded-2xl bg-[#FAFAF5] border border-[#E2E8F0] flex gap-4 items-center">
                  <div className="w-16 h-16 rounded-xl overflow-hidden relative shrink-0">
                    <Image
                      src={selectedProfile.photoUrl}
                      alt={selectedProfile.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#14532D]">{selectedProfile.name}</h5>
                    <p className="text-[#475569]">{selectedProfile.education} • {selectedProfile.district}</p>
                    <p className="text-[#15803D] font-semibold mt-0.5">{selectedProfile.kulam} • {selectedProfile.star}</p>
                  </div>
                </div>

                <div className="bg-[#FEF9C3] p-4 rounded-xl border border-[#FACC15] text-[#1E293B] space-y-2">
                  <p className="font-bold text-xs text-[#14532D]">
                    சமுதாய பெண்கள் மற்றும் இளைஞர்களின் பாதுகாப்பு விதிமுறை:
                  </p>
                  <p className="leading-relaxed">
                    சமூக உறுப்பினர்களின் கைபேசி எண்கள் பொதுவெளியில் நேரடியாக வெளியிடப்படாது. இரு குடும்பத்தாரின் பரஸ்பர ஒப்புதல் மற்றும் ஜாதகப் பொருத்தம் சரிபார்த்த பின்னரே தொலைபேசி எண்கள் பகிரப்படும்.
                  </p>
                </div>

                <div className="border border-[#E2E8F0] rounded-2xl p-4 space-y-2">
                  <span className="font-bold block text-xs text-[#14532D]">
                    வரன் ஒருங்கிணைப்பாளர் உதவி மையத்தை தொடர்பு கொள்ள:
                  </span>
                  <div className="flex items-center justify-between text-xs font-semibold bg-[#FAFAF5] p-3 rounded-xl">
                    <span className="flex items-center gap-2 text-[#15803D]">
                      <PhoneCall className="w-4 h-4 text-[#15803D]" /> +91 94432 12345
                    </span>
                    <span className="text-[#475569]">காலை 9:00 - மாலை 7:00</span>
                  </div>
                  <p className="text-[11px] text-[#475569]">
                    சுயவிவர ஐடி: <strong className="text-[#14532D]">{selectedProfile.id}</strong> ஐ குறிப்பிட்டு விவரங்களை பெறலாம்.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href="tel:+919443212345"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#15803D] hover:bg-[#14532D] text-white text-xs font-bold py-3 px-4 rounded-xl shadow-md"
                >
                  <PhoneCall className="w-4 h-4 text-[#FACC15]" />
                  <span>அழைக்க (+91 94432 12345)</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedProfile(null)}
                  className="px-5 py-3 rounded-xl border border-[#E2E8F0] text-xs font-bold text-[#475569] hover:bg-[#FAFAF5]"
                >
                  மூடுக
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
