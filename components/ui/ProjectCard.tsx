"use client";
import Image from "next/image";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasMoreInfo = Boolean(project.moreInfoLink);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white/80 backdrop-blur shadow-sm transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={`Screenshot of ${project.title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 560px, 100vw"
          priority={false}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/35 via-slate-900/10 to-transparent" />
      </div>

      <div className="relative flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-[color:var(--heading)]">
              {project.title}
            </h2>
            {project.tags?.[0] && (
              <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-semibold text-indigo-700">
                {project.tags[0]}
              </span>
            )}
          </div>
        </div>

        <p className="text-sm leading-relaxed text-[color:var(--foreground)]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="inline-block rounded-full border border-indigo-100 bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3">
          {hasMoreInfo && (
            <a
              href={project.moreInfoLink}
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`More info about ${project.title}`}
            >
              Learn more
              <span aria-hidden="true">↗</span>
            </a>
          )}

          {project.githubLink && (
            <a
              href={project.githubLink}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-100 px-3.5 py-2 text-sm font-semibold text-indigo-800 transition hover:border-indigo-200 hover:text-indigo-900"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

