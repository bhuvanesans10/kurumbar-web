"use client";

import { useState } from "react";
import Header from "@/components/Header";
import MemberRegistration from "@/components/MemberRegistration";
import Footer from "@/components/Footer";

export default function RegisterPage() {
  const [lang, setLang] = useState<"ta" | "en">("ta");

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF5]">
      <Header lang={lang} setLang={setLang} />
      <main className="flex-1 pt-6">
        <MemberRegistration lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
