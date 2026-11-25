"use client";

import { SAMPLE_JOBS, JobItem } from "@/data/mockData";
import {
  Briefcase,
  MapPin,
  Clock,
  PhoneCall,
  BadgeCheck,
  Building2,
  Wallet,
} from "lucide-react";

interface JobsProps {
  lang: "ta" | "en";
}

export default function JobsSection({ lang }: JobsProps) {
  const isTa = lang === "ta";

  return (
    <section id="jobs" className="py-16 lg:py-24 bg-[#FAFAF5] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#DCFCE7] text-[#14532D] text-xs font-bold px-3.5 py-1.5 rounded-full mb-3 border border-[#15803D]/20">
            <Briefcase className="w-4 h-4 text-[#15803D]" />
            <span>{isTa ? "குறும்பர் சமுதாய வேலைவாய்ப்பு மையம்" : "Community Career & Job Portal"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#14532D] tracking-tight">
            {isTa ? "சமூக இளைஞர்களுக்கான வேலைவாய்ப்புகள்" : "Career Opportunities for Youth"}
          </h2>
          <p className="text-base text-[#475569] mt-3">
            {isTa
              ? "குறும்பர் தொழிலதிபர்கள், நிறுவனங்கள் மற்றும் தொழில் முனைவோர் வழங்கும் நேரடி வேலைவாய்ப்புகள். தகுதியுள்ள நபர்கள் நேரடியாக தொடர்பு கொண்டு பணியில் சேரலாம்."
              : "Direct employment opportunities posted by community businesses, institutions, and entrepreneurs across Tamil Nadu with direct employer contact."}
          </p>
        </div>

        {/* Jobs List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAMPLE_JOBS.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl border border-[#E2E8F0] transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="inline-flex items-center gap-1.5 bg-[#DCFCE7] text-[#14532D] text-[11px] font-bold px-2.5 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5 text-[#15803D]" />
                    <span>{job.jobType === "FULL_TIME" ? "முழுநேரப் பணி (Full-Time)" : "பகுதிநேரம்"}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#475569] bg-[#FAFAF5] px-2.5 py-1 rounded-lg border border-[#E2E8F0]">
                    {job.category}
                  </span>
                </div>

                <div>
                  <h4 className="font-extrabold text-base text-[#14532D] leading-snug">
                    {job.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-[#475569] mt-1.5">
                    <Building2 className="w-4 h-4 text-[#15803D]" />
                    <span>{job.company}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FAFAF5] border border-[#E2E8F0] space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#475569]">மாத சம்பளம்:</span>
                    <span className="font-bold text-[#15803D]">{job.salaryText}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#475569]">அனுபவம்:</span>
                    <span className="font-semibold text-[#1E293B]">{job.experience}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#475569]">பணி இடம்:</span>
                    <span className="font-semibold text-[#1E293B]">{job.district}</span>
                  </div>
                </div>

                <p className="text-xs text-[#475569] leading-relaxed">
                  {job.description}
                </p>
              </div>

              {/* Action Button: Direct Call Employer */}
              <div className="pt-6 border-t border-[#E2E8F0] mt-6">
                <a
                  href={`tel:${job.contactMobile.replace(/\s+/g, "")}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#15803D] hover:bg-[#14532D] text-white text-xs font-bold py-3 px-4 rounded-xl shadow-xs transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-[#FACC15]" />
                  <span>விண்ணப்பிக்க அழைக்க ({job.contactMobile})</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
