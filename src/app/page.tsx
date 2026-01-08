"use client";
import { useState } from "react";
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

  return (
    <MainLayout>
      <div className="relative flex flex-col items-center justify-center gap-12 md:gap-16 py-10 overflow-hidden">
        <div className="blob blob--yellow -top-10 -left-10 md:-left-24" aria-hidden="true" />
        <div className="blob blob--yellow-light top-24 -right-16 md:-right-32" aria-hidden="true" />
        <div className="relative w-full max-w-[24rem] sm:max-w-[28rem] md:max-w-[36rem] aspect-video shrink-0">
          <div className="absolute inset-0 blur-3xl rounded-full bg-blue-200 opacity-50 animate-pulse" aria-hidden="true" />
          <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-white/40 transform-gpu transition-transform duration-500 hover:rotate-1 hover:scale-105">
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              // Unmuted by request; note some browsers block autoplay with sound.
              playsInline
              controls
              preload="auto"
              aria-label="Intro video"
              controlsList="nodownload"
            >
              <source src="/home/intro_video.mp4" type="video/mp4" />
              <source src="/home/intro_video.mov" type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="flex flex-col gap-6 max-w-3xl text-center">
          <h1 className={`${dancing.className} text-4xl sm:text-5xl font-bold text-[color:var(--heading)] tracking-tight`}>
            Daman Kumar
          </h1>

          <h2 className="text-xl sm:text-2xl leading-relaxed text-[color:var(--foreground)]">
            Hi! I&apos;m Daman, a Software Engineering student at the University of Guelph. I&apos;m
            passionate about software development and machine learning.
          </h2>

          <div className="flex gap-6 items-center justify-center sm:justify-start mt-2">
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
      </div>
    </MainLayout>
  );
}

