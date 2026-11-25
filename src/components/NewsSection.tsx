"use client";

import Image from "next/image";
import { SAMPLE_NEWS, NewsItem } from "@/data/mockData";
import {
  Bell,
  Calendar,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface NewsProps {
  lang: "ta" | "en";
}

export default function NewsSection({ lang }: NewsProps) {
  const isTa = lang === "ta";

  return (
    <section id="news" className="py-16 lg:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#DCFCE7] text-[#14532D] text-xs font-bold px-3.5 py-1.5 rounded-full mb-3 border border-[#15803D]/20">
            <Bell className="w-4 h-4 text-[#15803D]" />
            <span>{isTa ? "சமுதாய நிகழ்வுகள் & அறிவிப்புகள்" : "Community News & Updates"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#14532D] tracking-tight">
            {isTa ? "சமீபத்திய சமுதாய செய்திகள்" : "Latest Announcements & Events"}
          </h2>
          <p className="text-base text-[#475569] mt-3">
            {isTa
              ? "கோவில் கும்பாபிஷேக திருவிழாக்கள், மாணவர் கல்வி உதவித்தொகை திட்டங்கள் மற்றும் தமிழ்நாடு மாநில அளவிலான சமுதாய அறிவிப்புகள்."
              : "Stay informed on temple consecrations, education welfare drives, and state-wide community gatherings."}
          </p>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SAMPLE_NEWS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-[#E2E8F0] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 w-full bg-[#FAFAF5] overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#14532D] text-[#FACC15] text-[10px] font-bold px-3 py-1 rounded-full">
                    {item.category === "FESTIVAL" && "கோவில் திருவிழா"}
                    {item.category === "SCHOLARSHIP" && "கல்வி உதவித்தொகை"}
                    {item.category === "MEETING" && "சமுதாய மாநாடு"}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#15803D]">
                    <Calendar className="w-3.5 h-3.5 text-[#15803D]" />
                    <span>{item.date}</span>
                  </div>
                  <h4 className="font-extrabold text-base text-[#14532D] leading-snug group-hover:text-[#15803D] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#15803D] group-hover:gap-2.5 transition-all">
                  <span>முழு விவரம் வாசிக்க</span>
                  <ArrowRight className="w-4 h-4 text-[#FACC15]" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
