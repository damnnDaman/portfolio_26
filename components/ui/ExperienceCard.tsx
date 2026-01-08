"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Experience } from "../../src/types/experience";

type ObjectFit = "cover" | "contain" | "fill" | "none" | "scale-down";

interface ExperienceCardProps {
  experience: Experience;
  imageObjectFit?: ObjectFit;
  imagePadding?: string;
}

export default function ExperienceCard({
  experience,
  imageObjectFit = "contain",
  imagePadding = "p-4",
}: ExperienceCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const maxTilt = 6;
    setTilt({
      x: -(y * maxTilt),
      y: x * maxTilt,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      className="group mx-4 sm:mx-0 bg-gradient-to-br from-white/98 via-white/94 to-amber-50/70 backdrop-blur rounded-xl overflow-hidden border border-white/70 ring-1 ring-white/70 shadow-[0_18px_55px_-26px_rgba(15,23,42,0.36)] w-full transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_68px_-22px_rgba(15,23,42,0.42)] hover:ring-amber-100/80"
      style={{
        perspective: "1000px",
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(0)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col md:flex-row">
        <div className={`md:w-1/3 flex items-center justify-center bg-white ${imagePadding}`}>
          <div className="relative w-full h-64 md:h-72">
            <Image
              src={experience.image || "/placeholder.svg"}
              alt={`Image related to ${experience.title} at ${experience.company}`}
              fill
              className={`object-${imageObjectFit}`}
              sizes="(min-width: 1024px) 360px, (min-width: 768px) 300px, 100vw"
              priority={false}
            />
          </div>
        </div>
        <div className="md:w-2/3 p-5 space-y-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                {experience.category && (
                  <span className="px-2 py-1 text-[11px] font-semibold rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                    {experience.category === "extracurricular"
                      ? "Extracurricular"
                      : "Achievement"}
                  </span>
                )}
                <h3 className="text-xl font-semibold text-[color:var(--heading)] group-hover:text-blue-700 transition-colors">
                  {experience.title}
                </h3>
              </div>
              <span className="text-sm text-gray-500">{experience.duration}</span>
            </div>
            <div className="text-md font-medium text-[color:var(--heading)]">
              {experience.company}
            </div>
          </div>

          <p className="text-[color:var(--foreground)] leading-relaxed">
            {experience.description}
          </p>

          {experience.skills && experience.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {experience.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-block px-2.5 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

