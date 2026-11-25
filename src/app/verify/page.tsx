"use client";

import { useState } from "react";
import Header from "@/components/Header";
import IdVerificationWidget from "@/components/IdVerificationWidget";
import Footer from "@/components/Footer";

export default function VerifyPage() {
  const [lang, setLang] = useState<"ta" | "en">("ta");

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF5]">
      <Header lang={lang} setLang={setLang} />
      <main className="flex-1 pt-6">
        <IdVerificationWidget lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
