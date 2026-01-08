import { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import CursorTrail from "@/components/ui/CursorTrail";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daman Kumar",
  description: "A curated collection of my projects and experiences.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const bodyClass = `${geistSans.variable} ${geistMono.variable} antialiased`;

  // #region agent log
  fetch("http://127.0.0.1:7245/ingest/b442492c-1267-4c57-ba65-11ee44a73000", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sessionId: "debug-session",
      runId: "pre-fix",
      hypothesisId: "H2",
      location: "src/app/layout.tsx:18",
      message: "Body class composition",
      data: { bodyClass, geistSansVar: geistSans.variable, geistMonoVar: geistMono.variable },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion

  return (
    <html lang="en">
      <body className={bodyClass}>
        {/* <CursorTrail /> */}
        {children}
      </body>
    </html>
  );
}

