import React from "react";
import MainLayout from "../../../components/sections/MainLayout";
import ProjectsList from "../../../components/sections/ProjectsList";
import { projects } from "../../constants/projects";

export default function Projects() {
  return (
    <MainLayout showGithubLink={true}>
      <div
        className="relative space-y-14 overflow-hidden"
        style={{ padding: "40px 40px 60px" }}
      >
        <div className="blob blob--pink -top-20 -left-24" aria-hidden="true" />
        <div className="blob blob--blue top-16 right-[-120px]" aria-hidden="true" />

        <section className="relative z-10 text-center space-y-5 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F5F5F5] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#1A1A1A] border border-[#E5E5E5] shadow-sm mb-6">
            Projects
          </div>
          <h1
            className="font-bold text-[40px] leading-[1.2] tracking-[-1px] text-[#1A1A1A] mx-auto fade-up"
            style={{ maxWidth: "900px", animationDelay: "120ms" }}
          >
            Real-world builds that stay maintainable and ship fast
          </h1>
          <p
            className="text-[19px] text-[#4A4A4A] mx-auto leading-[1.6] mt-5"
            style={{ maxWidth: "700px" }}
          >
            From AI/ML to mobile and data, here are the projects where I iterated quickly, cared about polish, and measured outcomes.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["AI/ML", "Mobile", "Data", "Full-stack"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[#E5E5E5] bg-[#F5F5F5] px-3.5 py-1.5 text-xs font-semibold text-[#4A4A4A] shadow-sm"
              >
                {chip}
              </span>
            ))}
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-4 py-2 text-[12px] font-semibold text-[#1A1A1A] shadow-sm mt-4">
            More projects on the way
          </div>
        </section>

        <div className="relative z-10">
          <ProjectsList projects={projects} />
        </div>
      </div>
    </MainLayout>
  );
}

