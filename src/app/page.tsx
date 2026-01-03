"use client";
import { useState } from "react";
import Image from "next/image";
import MainLayout from "../../components/sections/MainLayout";
import SocialButton from "../../components/ui/SocialButton";
import { socialLinks } from "@/constants/socialLinks";
import { SocialLink } from "@/types/socialLink";

export default function Home() {
  const [links] = useState<SocialLink[]>(socialLinks);

  return (
    <MainLayout>
      <div className="relative flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16 py-8 overflow-hidden">
        <div className="blob blob--pink -top-10 -left-10 md:-left-24" aria-hidden="true" />
        <div className="blob blob--blue top-24 -right-16 md:-right-32" aria-hidden="true" />
        <div className="flex flex-col gap-6 max-w-xl text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-[color:var(--heading)] tracking-tight">
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

        <div className="relative w-full max-w-[15rem] sm:max-w-[18rem] md:max-w-[20rem] aspect-square shrink-0">
          <div className="absolute inset-0 blur-3xl rounded-full bg-blue-200 opacity-50 animate-pulse" aria-hidden="true" />
          <div className="relative w-full h-full overflow-hidden rounded-full shadow-lg transform-gpu transition-transform duration-500 hover:rotate-3 hover:scale-105">
            <Image
              src="/home/Daman2.png"
              alt="A headshot of Daman  Kumar"
              fill
              sizes="(max-width: 640px) 75vw, (max-width: 1024px) 40vw, 20rem"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

