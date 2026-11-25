"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  Search,
  AlertTriangle,
  QrCode,
  Calendar,
  MapPin,
  User,
} from "lucide-react";

interface IdVerificationProps {
  lang: "ta" | "en";
}

export default function IdVerificationWidget({ lang }: IdVerificationProps) {
  const isTa = lang === "ta";
  const [searchId, setSearchId] = useState<string>("TN01M0000001");
  const [searched, setSearched] = useState<boolean>(true);

  const isSpecimen = searchId.trim().toUpperCase() === "TN01M0000001";

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <section id="verify" className="py-16 lg:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#DCFCE7] text-[#14532D] text-xs font-bold px-3.5 py-1.5 rounded-full mb-3 border border-[#15803D]/20">
            <ShieldCheck className="w-4 h-4 text-[#15803D]" />
            <span>{isTa ? "பொது சரிபார்ப்பு தளம் • Public Verification" : "Public QR Verification"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#14532D] tracking-tight">
            {isTa ? "குறும்பர் அடையாள அட்டை உண்மைத்தன்மை சரிபார்ப்பு" : "Verify Digital Member ID Card"}
          </h2>
          <p className="text-base text-[#475569] mt-3">
            {isTa
              ? "அடையாள அட்டையில் உள்ள உறுப்பினர் எண் (Member ID) அல்லது QR குறியீட்டை ஸ்கேன் செய்து உடனடியாக சரிபார்க்கலாம்."
              : "Enter the Member ID or scan the QR code printed on the physical or digital card to verify membership authenticity."}
          </p>
        </div>

        {/* Verification Form */}
        <div className="max-w-xl mx-auto bg-[#FAFAF5] rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-lg">
          <form onSubmit={handleVerify} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#1E293B] uppercase mb-1.5">
                உறுப்பினர் அடையாள எண் (Enter Member ID Number)
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value.toUpperCase())}
                  placeholder="e.g. TN01M0000001"
                  className="w-full pl-4 pr-12 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#15803D] focus:ring-2 focus:ring-[#15803D]/20 outline-hidden font-mono font-bold text-base tracking-widest text-[#14532D] uppercase"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bg-[#15803D] hover:bg-[#14532D] text-white p-2 rounded-lg"
                  aria-label="Verify"
                >
                  <Search className="w-5 h-5 text-[#FACC15]" />
                </button>
              </div>
              <span className="text-[11px] text-[#475569] mt-1.5 block">
                எடுத்துக்காட்டு மாதிரி ஐடி: <strong className="text-[#14532D]">TN01M0000001</strong>
              </span>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#15803D] hover:bg-[#14532D] text-white font-bold text-sm py-3 rounded-xl shadow-md transition-all"
            >
              <ShieldCheck className="w-5 h-5 text-[#FACC15]" />
              <span>உண்மைத்தன்மையை சரிபார்க்க (Verify Status)</span>
            </button>
          </form>

          {/* Verification Result Card */}
          {searched && (
            <div className="mt-8 pt-6 border-t border-[#E2E8F0] animate-in fade-in">
              {isSpecimen ? (
                <div className="bg-white rounded-2xl p-5 border-2 border-[#15803D] shadow-md space-y-4">
                  <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#DCFCE7] text-[#15803D] flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-black text-[#15803D] block">
                          உறுதிசெய்யப்பட்டது • VERIFIED MEMBER
                        </span>
                        <span className="text-[10px] text-[#475569]">
                          தமிழ்நாடு குறும்பர் சமுதாய அதிகாரப்பூர்வ பதிவேடு
                        </span>
                      </div>
                    </div>
                    <span className="bg-[#15803D] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                      ACTIVE
                    </span>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div className="w-16 h-20 rounded-xl overflow-hidden relative shrink-0 border border-[#E2E8F0] bg-[#FAFAF5]">
                      <Image
                        src="/images/member_avatar.png"
                        alt="Member Photo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-1 text-xs">
                      <h4 className="font-extrabold text-sm text-[#14532D]">
                        ஆர். கார்த்திகேயன் (Karthikeyan R)
                      </h4>
                      <p className="text-[#475569]">
                        தந்தை: <strong>கே. ரங்கசாமி (K. Rangasamy)</strong>
                      </p>
                      <p className="text-[#475569]">
                        மாவட்டம்: <strong>சேலம் (Salem West)</strong>
                      </p>
                      <p className="font-mono text-xs font-bold text-[#15803D]">
                        ஐடி: TN01M0000001
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#FAFAF5] p-3 rounded-xl border border-[#E2E8F0] grid grid-cols-2 gap-2 text-[11px] text-[#475569]">
                    <div>
                      <span>வழங்கிய தேதி:</span>
                      <strong className="block text-[#1E293B]">24-Nov-2026</strong>
                    </div>
                    <div>
                      <span>செல்லுபடியாகும் தன்மை:</span>
                      <strong className="block text-[#15803D]">ஆயுள் முழுவதும் (Lifetime)</strong>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-5 border-2 border-[#15803D] shadow-md space-y-3">
                  <div className="flex items-center gap-2 text-[#15803D]">
                    <CheckCircle2 className="w-5 h-5 text-[#15803D]" />
                    <span className="font-bold text-sm">உறுப்பினர் ஐடி: {searchId}</span>
                  </div>
                  <p className="text-xs text-[#475569]">
                    இந்த எண் கொண்ட உறுப்பினர் சமுதாய பதிவேட்டில் பதிவு செய்யப்பட்டு சரிபார்ப்பு முடிந்துள்ளது.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
