"use client";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { ReactNode, useEffect } from "react";

interface MainLayoutProps {
  children: ReactNode;
  showGithubLink?: boolean;
}

export default function MainLayout({
  children,
  showGithubLink = false,
}: MainLayoutProps) {
  const containerClass =
    "grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 max-w-6xl mx-auto";

  // #region agent log
  fetch("http://127.0.0.1:7245/ingest/b442492c-1267-4c57-ba65-11ee44a73000", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sessionId: "debug-session",
      runId: "pre-fix",
      hypothesisId: "H1",
      location: "components/sections/MainLayout.tsx:13",
      message: "MainLayout container class",
      data: { containerClass },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion

  useEffect(() => {
    const htmlClass = document.documentElement.className;
    const bodyClass = document.body.className;
    const fontArbitrary = Array.from(document.querySelectorAll<HTMLElement>("[class]"))
      .map((el) => {
        const cls = el.className as unknown;
        if (typeof cls === "string") return cls;
        if (cls && typeof (cls as any).baseVal === "string") return (cls as any).baseVal; // SVGAnimatedString
        if (cls && typeof (cls as any).toString === "function") return (cls as any).toString();
        return "";
      })
      .filter((cls) => typeof cls === "string" && cls.includes("font-["))
      .slice(0, 8);

    // #region agent log
    fetch("http://127.0.0.1:7245/ingest/b442492c-1267-4c57-ba65-11ee44a73000", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionId: "debug-session",
        runId: "pre-fix-dom-scan",
        hypothesisId: "H3",
        location: "components/sections/MainLayout.tsx:33",
        message: "DOM class scan for font-[",
        data: { htmlClass, bodyClass, fontArbitrary },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }, []);

  return (
    <div className={containerClass}>
      <Header />
      <main className="w-full">{children}</main>
      {/* <Footer showGithubLink={showGithubLink} /> */}
    </div>
  );
}

