"use client";

import { useState } from "react";
import Image from "next/image";
import { SAMPLE_MARKETPLACE, MarketItem } from "@/data/mockData";
import {
  ShoppingBag,
  PhoneCall,
  MapPin,
  CheckCircle2,
  Tag,
  ShieldCheck,
} from "lucide-react";

interface MarketplaceProps {
  lang: "ta" | "en";
}

export default function MarketplaceSection({ lang }: MarketplaceProps) {
  const isTa = lang === "ta";
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const filteredItems = SAMPLE_MARKETPLACE.filter((item) => {
    if (activeCategory === "ALL") return true;
    return item.category === activeCategory;
  });

  return (
    <section id="marketplace" className="py-16 lg:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#DCFCE7] text-[#14532D] text-xs font-bold px-3.5 py-1.5 rounded-full mb-3 border border-[#15803D]/20">
            <ShoppingBag className="w-4 h-4 text-[#15803D]" />
            <span>{isTa ? "குறும்பர் சமுதாய வணிக & கால்நடை சந்தை" : "Community Trade & Marketplace"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#14532D] tracking-tight">
            {isTa ? "பாரம்பரிய கைத்தறி கம்பளி & நேரடி கால்நடை விற்பனை" : "Traditional Handloom Blankets & Livestock"}
          </h2>
          <p className="text-base text-[#475569] mt-3">
            {isTa
              ? "குறும்பர் விவசாய பெருமக்கள் மற்றும் கைத்தறி நெசவாளர்களிடம் இருந்து நேரடியாக தரமான செம்மறி ஆடுகள் மற்றும் தூய கம்பளிப் போர்வைகளை இடைத்தரகர் இன்றி வாங்குங்கள்."
              : "Buy directly from Kurumbar farmers and master weavers — pure native sheep, authentic handloom wool blankets (Kambli), and organic farm produce with zero middlemen markups."}
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
            {[
              { id: "ALL", labelTa: "அனைத்தும் (All)", labelEn: "All Items" },
              { id: "LIVESTOCK", labelTa: "🐑 செம்மறி & ஆடுகள் (Livestock)", labelEn: "Livestock" },
              { id: "HANDLOOM", labelTa: "🧶 கைத்தறி கம்பளிகள் (Kambli)", labelEn: "Handloom Blankets" },
              { id: "AGRICULTURE", labelTa: "🌾 இயற்கை விவசாய பொருட்கள்", labelEn: "Farm Produce" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#15803D] text-white shadow-md"
                    : "bg-[#FAFAF5] text-[#475569] border border-[#E2E8F0] hover:bg-[#DCFCE7]/50"
                }`}
              >
                {isTa ? cat.labelTa : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-[#E2E8F0] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image & Price Tag */}
                <div className="relative h-56 w-full bg-[#FAFAF5] overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#FACC15] text-[#14532D] text-xs font-black px-3 py-1 rounded-full shadow-xs">
                    {item.priceText}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#15803D] text-[10px] font-bold px-2 py-0.5 rounded-full border border-white">
                    {item.inStock ? "கையிருப்பில் உள்ளது" : "ஆர்டரின் பேரில்"}
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-5 space-y-2.5">
                  <h4 className="font-bold text-sm text-[#14532D] leading-snug line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#475569] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  <div className="pt-2 border-t border-[#E2E8F0] space-y-1.5 text-xs">
                    <div className="flex items-center gap-1.5 text-[#475569]">
                      <MapPin className="w-3.5 h-3.5 text-[#15803D] shrink-0" />
                      <span className="font-medium">{item.district}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#1E293B]">
                      <span className="text-[11px] text-[#475569]">விற்பனையாளர்:</span>
                      <span className="font-semibold">{item.sellerName}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button: Direct Phone Call (Spec §5.5) */}
              <div className="p-5 pt-0">
                <a
                  href={`tel:${item.sellerMobile.replace(/\s+/g, "")}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#15803D] hover:bg-[#14532D] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-xs transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#FACC15]" />
                  <span>விற்பனையாளரை அழைக்க ({item.sellerMobile})</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Notice on Direct Trading */}
        <div className="mt-12 bg-[#FAFAF5] rounded-2xl p-6 border border-[#E2E8F0] text-center max-w-3xl mx-auto">
          <p className="text-xs text-[#475569] leading-relaxed">
            <strong className="text-[#14532D]">நேரடி பரிவர்த்தனை விதிமுறை:</strong> குறும்பர் சமுதாய தளம் ஒரு தகவல் தொடர்பு பாலமாக மட்டுமே செயல்படுகிறது. விற்பனை அல்லது பொருட்களின் நேரடி பரிவர்த்தனை வாங்குபவருக்கும் விற்பனையாளருக்கும் இடையே மட்டுமே நடைபெறும்.
          </p>
        </div>
      </div>
    </section>
  );
}
