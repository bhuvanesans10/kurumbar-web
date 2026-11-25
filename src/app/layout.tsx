import type { Metadata } from "next";
import { Inter, Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansTamil = Noto_Sans_Tamil({
  variable: "--font-noto-tamil",
  subsets: ["tamil"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "குறும்பர் சமூக அதிகாரப்பூர்வ தளம் | Kurumbar Community Digital Platform",
  description:
    "Official centralized digital platform for the Kurumbar community (www.kurumbar.org) — Digital Member ID Card, Verified Registry, Community Announcements, Matrimony, Marketplace & Job Portal.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/logo-concept-1-icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  keywords: [
    "Kurumbar",
    "குறும்பர்",
    "Kurumbar Community",
    "Kurumba Gounder",
    "Kurumbar Sangam",
    "Kurumbar ID Card",
    "Kurumbar Matrimony",
    "Kurumbar Welfare",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ta"
      className={`${inter.variable} ${notoSansTamil.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAFAF5] text-[#1E293B]">
        {children}
      </body>
    </html>
  );
}
