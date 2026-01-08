"use client";
import Image from "next/image";
import React from "react";
import { Experience } from "../../src/types/experience";

type ObjectFit = "cover" | "contain" | "fill" | "none" | "scale-down";

interface ExperienceCardProps {
  experience: Experience;
  imageObjectFit?: ObjectFit;
  imagePadding?: string;
  index?: number;
}

export default function ExperienceCard({
  experience,
  imageObjectFit = "contain",
  imagePadding = "p-4",
  index = 0,
}: ExperienceCardProps) {
  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-[16px] border border-[#E5E5E5] bg-white fade-up"
      style={{
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div className="relative h-[240px] w-full overflow-hidden bg-[#F5F5F5] transition-transform duration-500">
        <Image
          src={experience.image || "/placeholder.svg"}
          alt={`Image related to ${experience.title} at ${experience.company}`}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 560px, 100vw"
          priority={false}
        />
      </div>

      <div className="relative flex flex-1 flex-col gap-4 p-6 transition-all duration-300 group-hover:translate-y-0">
        {experience.company && (
          <span className="inline-block mb-3 rounded-[6px] bg-[#2E2E2E] px-3 py-[5px] text-[13px] font-semibold text-white">
            {experience.company}
          </span>
        )}

        <h2 className="text-[22px] font-bold text-[#1A1A1A] leading-[1.3] mb-2">
          {experience.title}
        </h2>
        <p className="text-sm text-[#4A4A4A]">{experience.duration}</p>

        <p className="text-[15px] leading-[1.6] text-[#4A4A4A] mb-5">
          {experience.description}
        </p>

        {experience.skills && experience.skills.length > 0 && (
          <div className="flex flex-wrap" style={{ gap: "8px" }}>
            {experience.skills.slice(0, 4).map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-[6px] border border-[#E5E5E5] bg-transparent px-[10px] py-[4px] text-[12px] font-medium text-[#4A4A4A] transition-colors duration-200 hover:bg-black hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center justify-end border-t border-[#F5F5F5] pt-5 mt-5">
          {experience.category !== "extracurricular" &&
            experience.category !== "achievement" &&
            experience.showCoopReportsLink !== false && (
            <a
              href="/coop-reports"
              className="text-[14px] font-semibold text-[#1A1A1A] transition-colors duration-200 hover:underline"
            >
              View Co-op Reports →
            </a>
          )}
        </div>
      </div>
      <span
        className="pointer-events-none absolute inset-0 rounded-[16px] border border-transparent group-hover:border-[#1A1A1A] group-hover:shadow-[0_22px_58px_-12px_rgba(0,0,0,0.28)]"
        style={{ transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)", transform: "translateY(0)" }}
      />
      <style jsx>{`
        article:hover {
          transform: translateY(-8px);
        }
      `}</style>
    </article>
  );
}

