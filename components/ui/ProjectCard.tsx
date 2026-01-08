"use client";
import Image from "next/image";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const hasMoreInfo = Boolean(project.moreInfoLink);
  const isWinner = project.tags?.some((t) => t.toLowerCase().includes("winner"));
  const isFeatured = project.tags?.some((t) => t.toLowerCase().includes("featured"));
  const isInProgress = project.isInProgress;

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
          src={project.image || "/placeholder.svg"}
          alt={`Screenshot of ${project.title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 560px, 100vw"
          priority={false}
        />
        {(isWinner || isFeatured) && (
          <span className="absolute top-4 left-4 rounded-[6px] bg-[#1A1A1A] px-[14px] py-[6px] text-[12px] font-semibold uppercase tracking-[0.5px] text-white">
            {isWinner ? "Winner" : "Featured"}
          </span>
        )}
        {isFeatured && (
          <span className="absolute top-4 right-4 h-7 w-7 rounded-full bg-white/90 text-[#1A1A1A] shadow-[0_8px_18px_-12px_rgba(0,0,0,0.4)] grid place-items-center">
            ★
          </span>
        )}
      </div>

      <div className="relative flex flex-1 flex-col gap-4 p-6 transition-all duration-300 group-hover:translate-y-0">
        {project.tags?.[0] && (
          <span className="inline-block mb-3 rounded-[6px] bg-[#F5F5F5] px-3 py-[5px] text-[13px] font-semibold text-[#1A1A1A]">
            {project.tags[0]}
          </span>
        )}

        <h2
          className="text-[22px] font-bold text-[#1A1A1A] leading-[1.3] mb-3 cursor-pointer transition-colors duration-200 hover:text-[#2a2a2a]"
        >
          {project.title}
        </h2>

        <p
          className="text-[15px] leading-[1.6] text-[#4A4A4A] mb-5"
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2" style={{ gap: "8px" }}>
          {(project.tags || []).slice(0, 4).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="inline-flex items-center rounded-[6px] border border-[#E5E5E5] bg-transparent px-[10px] py-[4px] text-[12px] font-medium text-[#4A4A4A] transition-colors duration-200 hover:bg-black hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-[#F5F5F5] pt-5 mt-5">
          <div className="flex items-center gap-2">
            {project.githubLink && !isInProgress && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                className="text-[#4A4A4A] transition duration-200 hover:text-[#1A1A1A] hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
          </div>

          <div>
            {(project.moreInfoLink || project.githubLink) && !isInProgress && (
              <a
                href={project.moreInfoLink || project.githubLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-semibold text-[#1A1A1A] transition-colors duration-200 hover:underline"
              >
                Learn More →
              </a>
            )}
          </div>
        </div>
      </div>
      <span
        className="pointer-events-none absolute inset-0 rounded-[16px] border border-transparent group-hover:border-[#1A1A1A] group-hover:shadow-[0_22px_58px_-12px_rgba(0,0,0,0.28)]"
        style={{ transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)", transform: "translateY(0)" }}
      />
      {isInProgress && (
        <div className="pointer-events-none absolute inset-0 bg-white/70 backdrop-blur-[2px] flex items-center justify-center text-xs font-semibold uppercase tracking-[0.18em] text-[#1A1A1A]">
          Under production
        </div>
      )}
      <style jsx>{`
        article:hover {
          transform: translateY(-8px);
        }
      `}</style>
    </article>
  );
}

