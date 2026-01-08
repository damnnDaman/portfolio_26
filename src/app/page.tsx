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
    () => ["/home/me3.png", "/about/me2.png", "/about/me3.png", "/about/me4.png"],
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
      <div className="relative flex flex-col-reverse md:flex-row items-center md:items-center justify-between gap-12 md:gap-16 py-10 overflow-hidden px-4 sm:px-8">
        <div className="blob blob--yellow -top-10 -left-10 md:-left-24" aria-hidden="true" />
        <div className="blob blob--yellow-light top-24 -right-16 md:-right-32" aria-hidden="true" />
        <div className="flex flex-col gap-6 max-w-3xl text-center md:text-left">
          <h1 className={`${dancing.className} text-4xl sm:text-5xl font-bold text-[color:var(--heading)] tracking-tight`}>
            Daman Kumar
          </h1>

          <h2 className="text-xl sm:text-2xl leading-relaxed text-[color:var(--foreground)]">
            Hi! I&apos;m Daman, a Software Engineering student at the University of Guelph. I&apos;m
            passionate about software development and machine learning.
          </h2>

          <div className="flex gap-6 items-center justify-center md:justify-start mt-2">
            {links.map((link, index) => (
              <SocialButton
                key={index}
                icon={link.icon}
                text={link.text}
                href={link.href}
                onClick={link.onClick}
                ariaLabel={link.ariaLabel}
              />
            ))}
          </div>
        </div>

        <div className="relative w-[260px] sm:w-[280px] h-[220px] sm:h-[260px] max-w-full shrink-0">
          <div className="absolute inset-[28px] blur-[80px] rounded-full bg-blue-200/70 opacity-60 animate-pulse" aria-hidden="true" />
          <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-white/40 bg-white/95">
            {heroImages.map((src, idx) => (
              <Image
                key={src}
                src={src}
                alt="Portrait of Daman Kumar"
                fill
                priority={idx === 0}
                className={`object-cover transition-opacity duration-700 ease-in-out ${
                  idx === slideIndex ? "opacity-100" : "opacity-0"
                }`}
                sizes="100vw"
              />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

