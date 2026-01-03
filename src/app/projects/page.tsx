import React from "react";
import MainLayout from "../../../components/sections/MainLayout";
import ProjectsList from "../../../components/sections/ProjectsList";
import { projects } from "../../constants/projects";

export default function Projects() {
  return (
    <MainLayout showGithubLink={true}>
      <div className="relative space-y-14 overflow-hidden">
        <div className="blob blob--pink -top-20 -left-24" aria-hidden="true" />
        <div className="blob blob--blue top-16 right-[-120px]" aria-hidden="true" />

        <section className="relative z-10 text-center space-y-5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-indigo-700 shadow-sm">
            Projects
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[color:var(--heading)] leading-tight">
            Real-world builds that stay maintainable and ship fast
          </h1>
          <p className="text-lg text-[color:var(--foreground)] max-w-2xl mx-auto">
            From AI/ML to mobile and data, here are the projects where I iterated quickly,
            cared about polish, and measured outcomes.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["AI/ML", "Mobile", "Data", "Full-stack"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-indigo-100 bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold text-indigo-800 shadow-sm"
              >
                {chip}
              </span>
            ))}
          </div>
        </section>

        <div className="relative z-10">
          <ProjectsList projects={projects} />
        </div>
      </div>
    </MainLayout>
  );
}

