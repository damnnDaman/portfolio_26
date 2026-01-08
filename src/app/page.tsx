"use client";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Dancing_Script } from "next/font/google";
import MainLayout from "../../components/sections/MainLayout";
import SocialButton from "../../components/ui/SocialButton";
import { socialLinks } from "@/constants/socialLinks";
import { SocialLink } from "@/types/socialLink";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function Home() {
  const [links] = useState<SocialLink[]>(socialLinks);
  const heroImages = useMemo(
    () => ["/about/me3.png", "/about/me4.png", "/co-op/party.jpeg", "/home/hack-win.png", "/home/meet.png"],
    []
  );
  const heroCaptions = useMemo(
    () => [
      "Excited to learn new things",
      "Love to get photos",
      "Celebrating with the Team",
      "Hackathon Win",
      "At the Office",
      
      
    ],
    []
  );
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [heroImages]);

  return (
    <MainLayout>
      <div
        className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14 py-[60px] px-[30px] sm:px-[40px] md:px-[50px] rounded-[24px] border border-[#E5E5E5] bg-white max-w-7xl w-full mx-auto"
        style={{ boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)" }}
      >
        <div className="order-2 md:order-1 flex flex-col gap-5 max-w-3xl text-center md:text-left">
          <div
            className="fade-up inline-flex items-center gap-2 self-center md:self-start rounded-full border border-[#0F2F6B]/20 bg-[#0F2F6B]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0F2F6B]"
            style={{ animationDelay: "150ms" }}
          >
            Fast and focused learner
          </div>

          <h1
            className={`${dancing.className} fade-up text-[52px] sm:text-[60px] md:text-[72px] font-bold tracking-tight`}
            style={{
              animationDelay: "200ms",
              color: "#1A1A1A",
            }}
          >
            Daman Kumar
          </h1>

          <p
            className="fade-up typing text-[20px] sm:text-[22px] font-semibold"
            style={{ color: "#1A1A1A", animationDelay: "400ms" }}
          >
            Software Engineering Student
          </p>

          <p
            className={`${dancing.className} fade-up text-base sm:text-lg leading-relaxed`}
            style={{ color: "#1A1A1A", animationDelay: "600ms" }}
          >
            Learning. Building. Solving problems.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start mt-3">
            <a
              href="/experience"
              className="mt-3 inline-flex items-center gap-3 rounded-[8px] px-10 py-4 text-[16px] font-semibold text-white transition-all duration-200 bounce-in bg-[#1A1A1A] shadow-[0_4px_16px_rgba(0,0,0,0.15),0_6px_24px_-10px_rgba(15,47,107,0.35)] hover:bg-[#2A2A2A] hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(0,0,0,0.2),0_10px_30px_-12px_rgba(15,47,107,0.45)]"
              style={{ animationDelay: "1100ms" }}
            >
              View My Work
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="/resume.pdf"
              className="mt-3 inline-flex items-center gap-3 rounded-[8px] border-2 border-[#1A1A1A] px-10 py-4 text-[16px] font-semibold text-[#1A1A1A] transition-transform duration-150 bounce-in shadow-[0_2px_10px_rgba(15,47,107,0.12)] active:scale-[0.98] active:shadow-[0_6px_18px_rgba(0,0,0,0.18)]"
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: "1150ms" }}
            >
              Resume / CV
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="flex gap-6 items-center justify-center md:justify-start mt-4">
            {links.map((link, index) => (
              <SocialButton
                key={index}
                icon={link.icon}
                text={link.text}
                href={link.href}
                onClick={link.onClick}
                ariaLabel={link.ariaLabel}
                classNameOverride={`fade-up`}
                styleOverride={{ animationDelay: `${800 + index * 100}ms` }}
              />
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2 relative w-full max-w-[380px] sm:max-w-[460px] md:max-w-[500px] aspect-[4/5] mx-auto md:ml-auto fade-scale" style={{ animationDelay: "500ms" }}>
          <div className="absolute inset-[18px] sm:inset-[24px] blur-[70px] sm:blur-[90px] rounded-[36%] bg-gradient-to-br from-[#667eea]/40 to-[#764ba2]/35 opacity-70 animate-pulse" aria-hidden="true" />
          <div
            className="relative w-full h-full overflow-hidden rounded-2xl border-4 border-white ring-[10px] ring-[rgba(102,126,234,0.12)] bg-white transition-all duration-200 hover:border-black hover:ring-black/10 hover:shadow-[0_22px_56px_-14px_rgba(0,0,0,0.24),0_12px_32px_-18px_rgba(0,0,0,0.2),0_0_0_18px_rgba(15,47,107,0.16)]"
            style={{ boxShadow: "0 18px 48px -12px rgba(0,0,0,0.20), 0 10px 28px -16px rgba(0,0,0,0.18)" }}
          >
            {heroImages.map((src, idx) => {
              const isActive = idx === slideIndex;
              return (
                <div
                  key={src}
                  className={`absolute inset-0 transition-all duration-800 ease-in-out ${
                    isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                >
                  <Image
                    src={src}
                    alt="Portrait of Daman Kumar"
                    fill
                    priority={idx === 0}
                    className="object-cover transition-transform duration-[1800ms] ease-out"
                    style={{
                      transform: isActive ? "scale(1.06) translateY(-4px)" : "scale(1.01)",
                    }}
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-slate-900/10 to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-800 shadow-[0_10px_24px_-14px_rgba(0,0,0,0.25)]">
                    {idx + 1}/{heroImages.length}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-full bg-white/92 px-3 py-2 text-xs font-semibold text-slate-800 shadow-[0_10px_22px_-16px_rgba(0,0,0,0.35)]">
                    <span>{heroCaptions[idx] || "Behind the scenes"}</span>
                    <span aria-hidden="true">↗</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            {heroImages.map((_, idx) => {
              const isActive = idx === slideIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setSlideIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 w-2.5 rounded-full border transition-all duration-200 ${
                    isActive
                      ? "bg-black border-transparent scale-110"
                      : "bg-transparent border-black/40 hover:border-black"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats cards */}
      <div className="mt-10 grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-3">
        {[
          { value: "10+", label: "Projects" },
          { value: "1", label: "Years Experience" },
          { value: "2", label: "Co-op Terms" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-[12px] border border-[#E5E5E5] bg-white p-6 text-center transition-all duration-200 shadow-[0_8px_24px_-20px_rgba(0,0,0,0.22)] hover:-translate-y-1 hover:shadow-[0_14px_36px_-20px_rgba(0,0,0,0.26)] hover:scale-[1.02]"
          >
            <div className="text-[32px] font-bold text-[#1A1A1A] leading-tight">{stat.value}</div>
            <div className="text-[14px] text-[#4A4A4A] mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}

