"use client";

import { useState } from "react";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building,
} from "lucide-react";

interface ContactProps {
  lang: "ta" | "en";
}

export default function ContactSection({ lang }: ContactProps) {
  const isTa = lang === "ta";
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [contactData, setContactData] = useState({
    name: "",
    mobile: "",
    district: "Salem (சேலம்)",
    subject: "Member Registration",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#FAFAF5] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#DCFCE7] text-[#14532D] text-xs font-bold px-3.5 py-1.5 rounded-full mb-3 border border-[#15803D]/20">
            <Mail className="w-4 h-4 text-[#15803D]" />
            <span>{isTa ? "தொடர்பு கொள்ள & உதவி மையம்" : "Contact & Support"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#14532D] tracking-tight">
            {isTa ? "சமுதாய தலைமையக தொடர்பு விவரங்கள்" : "Connect with the Community Team"}
          </h2>
          <p className="text-base text-[#475569] mt-3">
            {isTa
              ? "உறுப்பினர் சேர்க்கை, அடையாள அட்டை, வரன் தேடல் அல்லது சமுதாய உதவிகளுக்கு எங்களை எப்போது வேண்டுமானாலும் தொடர்பு கொள்ளலாம்."
              : "Have queries regarding membership registration, digital ID card issuance, or matrimony verification? Our team is here to assist you."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Office Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-[#E2E8F0] space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#DCFCE7] text-[#15803D] flex items-center justify-center shrink-0">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-base text-[#14532D]">
                    தலைமை அலுவலக முகவரி (Head Office)
                  </h4>
                  <p className="text-xs text-[#475569] mt-1.5 leading-relaxed">
                    தமிழ்நாடு குறும்பர் முன்னேற்ற சங்கம் தலைமை அலுவலகம்,<br />
                    14/2B, ராஜாஜி சாலை, புதிய பேருந்து நிலையம் எதிரில்,<br />
                    சேலம் - 636 004, தமிழ்நாடு.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#DCFCE7] text-[#15803D] flex items-center justify-center shrink-0">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-base text-[#14532D]">
                    கைபேசி & வாட்ஸ்அப் உதவி எண்கள்
                  </h4>
                  <p className="text-xs text-[#475569] mt-1.5">
                    தலைமைச் செயலகம்: <strong className="text-[#14532D]">+91 94432 12345</strong><br />
                    வரன் & சேவை மையம்: <strong className="text-[#14532D]">+91 98421 54321</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#DCFCE7] text-[#15803D] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-base text-[#14532D]">
                    மின்னஞ்சல் முகவரிகள் (Official Email)
                  </h4>
                  <p className="text-xs text-[#475569] mt-1.5">
                    பொது தொடர்பு: <strong className="text-[#14532D]">support@kurumbar.org</strong><br />
                    அலுவலகம்: <strong className="text-[#14532D]">admin@kurumbar.org</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#DCFCE7] text-[#15803D] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-base text-[#14532D]">
                    வேலை நேரம் (Office Hours)
                  </h4>
                  <p className="text-xs text-[#475569] mt-1.5">
                    திங்கள் முதல் சனி வரை: காலை 9:30 - மாலை 6:30 மணி வரை<br />
                    (ஞாயிறு விடுமுறை)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#14532D] mb-2">
                {isTa ? "உங்கள் சந்தேகங்கள் மற்றும் கருத்துக்களை அனுப்புக" : "Send an Enquiry to the Team"}
              </h3>
              <p className="text-xs text-[#475569] mb-6">
                {isTa
                  ? "கீழே உள்ள படிவத்தை பூர்த்தி செய்து அனுப்பவும். எங்களது சமுதாய ஒருங்கிணைப்பாளர் உங்களை தொடர்பு கொள்வார்."
                  : "Fill out the inquiry form and our representative will get back to you promptly."}
              </p>

              {submitted ? (
                <div className="bg-[#DCFCE7] rounded-2xl p-6 text-center space-y-3 border border-[#15803D]/20 animate-in zoom-in-95">
                  <div className="w-12 h-12 rounded-full bg-[#15803D] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-extrabold text-base text-[#14532D]">
                    உங்கள் செய்தி வெற்றிகரமாக பெறப்பட்டது!
                  </h4>
                  <p className="text-xs text-[#1E293B] max-w-md mx-auto leading-relaxed">
                    நன்றி. உங்களது கோரிக்கை எங்களது சமுதாய உதவி மையத்திற்கு அனுப்பப்பட்டுள்ளது. விரைவில் தங்களை தொடர்பு கொள்வோம்.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#15803D] underline mt-2"
                  >
                    மற்றொரு செய்தி அனுப்ப
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] uppercase mb-1">
                        உங்கள் பெயர் (Your Name) *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactData.name}
                        onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E2E8F0] focus:border-[#15803D] outline-hidden text-sm"
                        placeholder="எ.கா. சுப்பிரமணி"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] uppercase mb-1">
                        கைபேசி எண் (Mobile Number) *
                      </label>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        value={contactData.mobile}
                        onChange={(e) => setContactData({ ...contactData, mobile: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E2E8F0] focus:border-[#15803D] outline-hidden text-sm"
                        placeholder="9876543210"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] uppercase mb-1">
                        மாவட்டம் (District) *
                      </label>
                      <input
                        type="text"
                        value={contactData.district}
                        onChange={(e) => setContactData({ ...contactData, district: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E2E8F0] focus:border-[#15803D] outline-hidden text-sm"
                        placeholder="e.g. Salem, Coimbatore, Erode"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] uppercase mb-1">
                        கோரிக்கை வகை (Subject) *
                      </label>
                      <select
                        value={contactData.subject}
                        onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E2E8F0] focus:border-[#15803D] outline-hidden text-sm bg-white"
                      >
                        <option value="Member Registration">உறுப்பினர் சேர்க்கை & அட்டை</option>
                        <option value="Matrimony Assistance">வரன் தேடல் உதவி</option>
                        <option value="Livestock & Trade">கால்நடை & கம்பளி விற்பனை</option>
                        <option value="Job Opportunity">வேலைவாய்ப்பு தகவல்</option>
                        <option value="Temple & Festival">கோவில் விழா அறிவிப்பு</option>
                        <option value="General Query">இதர உதவிகள்</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E293B] uppercase mb-1">
                      செய்தி / வினவல் (Message / Query) *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E2E8F0] focus:border-[#15803D] outline-hidden text-sm"
                      placeholder="தங்களுக்கு தேவையான தகவலை இங்கே சுருக்கமாக குறிப்பிடவும்..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#15803D] hover:bg-[#14532D] text-white font-bold text-sm py-3 px-6 rounded-xl shadow-md transition-all"
                  >
                    <Send className="w-4 h-4 text-[#FACC15]" />
                    <span>செய்தியை அனுப்புக (Submit Message)</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
