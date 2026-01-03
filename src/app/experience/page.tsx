import MainLayout from "../../../components/sections/MainLayout";
import WorkExperience from "../../../components/sections/TechnicalWorkExperience";
import ExtracurricularExperience from "../../../components/sections/ExtracurricularExperience";
import { technicalWorkExperiences } from "@/constants/technicalWorkExperience";
import { extracurricularExperiences } from "@/constants/extracurricularExperience";

export default function Experience() {
  return (
    <MainLayout>
      <div className="relative space-y-14 overflow-hidden">
        <div className="blob blob--pink -top-20 -left-24" aria-hidden="true" />
        <div className="blob blob--blue top-16 right-[-120px]" aria-hidden="true" />

        <section className="relative z-10 text-center space-y-5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-indigo-700 shadow-sm">
            Experience
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[color:var(--heading)] leading-tight">
            Work that blends delivery speed with measurable impact
          </h1>
          <p className="text-lg text-[color:var(--foreground)] max-w-2xl mx-auto">
            Technical roles, leadership, and extracurricular builds—kept consistent with the same polish and velocity as my projects.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Backend", "Frontend", "Leadership", "Community"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-indigo-100 bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold text-indigo-800 shadow-sm"
              >
                {chip}
              </span>
            ))}
          </div>
        </section>

        <div className="relative z-10 space-y-12">
          <WorkExperience experiences={technicalWorkExperiences} />
          <ExtracurricularExperience experiences={extracurricularExperiences} />
        </div>
      </div>
    </MainLayout>
  );
}

