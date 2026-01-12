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
    "grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen px-4 py-8 pb-20 gap-16 sm:px-8 md:px-12 lg:px-20 max-w-6xl mx-auto w-full";



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

