"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  PhoneCall,
  Mail,
  MapPin,
  Heart,
  Globe,
  ExternalLink,
} from "lucide-react";

interface FooterProps {
  lang: "ta" | "en";
}

export default function Footer({ lang }: FooterProps) {
  const isTa = lang === "ta";

  return (
    <footer className="bg-[#14532D] text-white pt-16 pb-12 border-t-4 border-[#FACC15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/15">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-2xl p-1.5 flex items-center justify-center shadow-md">
                <Image
                  src="/brand/logo-concept-1-icon.png"
                  alt="Kurumbar Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-black text-white tracking-tight">
                  KURUMBAR
                </span>
                <span className="ml-2 bg-[#FACC15] text-[#14532D] text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                  குறும்பர்
                </span>
                <p className="text-xs text-[#FACC15] font-medium">
                  அதிகாரப்பூர்வ சமுதாய இணையதளம் • www.kurumbar.org
                </p>
              </div>
            </div>

            <p className="text-xs text-white/80 leading-relaxed max-w-sm">
              {isTa
                ? "உலகெங்கும் வாழும் குறும்பர் (குரும்பா / கும்பா கவுண்டர்) சமுதாய மக்களை டிஜிட்டல் முறையில் ஒருங்கிணைத்து, கல்வி, திருமணம், வேலைவாய்ப்பு மற்றும் பாரம்பரிய வணிக சேவைகளை வழங்கும் அதிகாரப்பூர்வ தளம்."
                : "Centralized digital platform unifying the global Kurumbar community with verified member registration, digital ID cards, matrimony, rural trade, and youth employment."}
            </p>

            <div className="flex items-center gap-3 text-xs text-white/90 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#FACC15]" />
              <span>100% பாதுகாப்பான மற்றும் சரிபார்க்கப்பட்ட சமுதாய தளம்</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h5 className="font-extrabold text-sm text-[#FACC15] tracking-wider uppercase">
              {isTa ? "பயனுள்ள இணைப்புகள்" : "Quick Links"}
            </h5>
            <ul className="space-y-2 text-xs text-white/80 font-medium">
              <li>
                <Link href="#home" className="hover:text-[#FACC15] transition-colors">
                  முகப்பு (Home)
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#FACC15] transition-colors">
                  எங்களை பற்றி (About Us)
                </Link>
              </li>
              <li>
                <Link href="#register" className="hover:text-[#FACC15] transition-colors text-[#FACC15]">
                  உறுப்பினர் சேர்க்கை (Member Registry)
                </Link>
              </li>
              <li>
                <Link href="#verify" className="hover:text-[#FACC15] transition-colors">
                  அடையாள அட்டை சரிபார்ப்பு (Verify ID)
                </Link>
              </li>
              <li>
                <Link href="#news" className="hover:text-[#FACC15] transition-colors">
                  சமுதாய செய்திகள் (News)
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-[#FACC15] transition-colors">
                  புகைப்படங்கள் (Gallery)
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h5 className="font-extrabold text-sm text-[#FACC15] tracking-wider uppercase">
              {isTa ? "சமுதாய சேவைகள்" : "Community Modules"}
            </h5>
            <ul className="space-y-2 text-xs text-white/80 font-medium">
              <li>
                <Link href="#matrimony" className="hover:text-[#FACC15] transition-colors">
                  குறும்பர் வரன் தேடல் (Matrimony)
                </Link>
              </li>
              <li>
                <Link href="#marketplace" className="hover:text-[#FACC15] transition-colors">
                  செம்மறி ஆடு & கம்பளி சந்தை (Marketplace)
                </Link>
              </li>
              <li>
                <Link href="#jobs" className="hover:text-[#FACC15] transition-colors">
                  வேலைவாய்ப்பு மையம் (Job Portal)
                </Link>
              </li>
              <li>
                <Link href="#register" className="hover:text-[#FACC15] transition-colors">
                  QR டிஜிட்டல் உறுப்பினர் அட்டை (Digital ID)
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#FACC15] transition-colors">
                  மாணவர் கல்வி நிதி (Scholarships)
                </Link>
              </li>
            </ul>
          </div>

          {/* District Chapters */}
          <div className="space-y-3">
            <h5 className="font-extrabold text-sm text-[#FACC15] tracking-wider uppercase">
              {isTa ? "முக்கிய மாவட்ட கிளைகள்" : "Key District Chapters"}
            </h5>
            <div className="grid grid-cols-2 gap-1 text-[11px] text-white/75 font-medium">
              <span>சேலம் (Salem)</span>
              <span>ஈரோடு (Erode)</span>
              <span>கோவை (Coimbatore)</span>
              <span>திருப்பூர் (Tiruppur)</span>
              <span>தர்மபுரி (Dharmapuri)</span>
              <span>கிருஷ்ணகிரி (Krishnagiri)</span>
              <span>நாமக்கல் (Namakkal)</span>
              <span>திண்டுக்கல் (Dindigul)</span>
              <span>வேலூர் (Vellore)</span>
              <span>சென்னை (Chennai)</span>
            </div>
            <p className="text-[10px] text-white/60 pt-2">
              மற்றும் தமிழகத்தின் 38 மாவட்டங்களிலும் கிளைகள் செயல்படுகின்றன.
            </p>
          </div>
        </div>

        {/* Bottom copyright and legal notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/70 gap-4">
          <p>
            © 2026 தமிழ்நாடு குறும்பர் சமுதாய சங்கம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. (www.kurumbar.org)
          </p>
          <div className="flex items-center gap-6 text-[11px]">
            <Link href="#contact" className="hover:text-[#FACC15]">
              விதிமுறைகள் & கொள்கை (Terms)
            </Link>
            <Link href="#verify" className="hover:text-[#FACC15]">
              தனியுரிமை கொள்கை (Privacy)
            </Link>
            <Link href="#contact" className="hover:text-[#FACC15]">
              உதவி மையம் (Support)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
