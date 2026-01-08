import MainLayout from "../../../components/sections/MainLayout";
import WorkExperience from "../../../components/sections/TechnicalWorkExperience";
import ExtracurricularExperience from "../../../components/sections/ExtracurricularExperience";
import { technicalWorkExperiences } from "@/constants/technicalWorkExperience";
import { extracurricularExperiences } from "@/constants/extracurricularExperience";

export default function Experience() {
  return (
    <MainLayout>
      <div
        className="relative space-y-14 overflow-hidden"
        style={{ padding: "100px 40px 60px" }}
      >
        <div className="blob blob--pink -top-20 -left-24" aria-hidden="true" />
        <div className="blob blob--blue top-16 right-[-120px]" aria-hidden="true" />

        <section className="relative z-10 text-center space-y-5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F5F5F5] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#1A1A1A] border border-[#E5E5E5] shadow-sm mb-6">
            Experience
          </div>
          <h1
            className="font-bold text-[52px] leading-[1.2] tracking-[-1px] text-[#1A1A1A] mx-auto fade-up"
            style={{ maxWidth: "900px", animationDelay: "120ms" }}
          >
            Work that blends delivery speed with measurable impact
          </h1>
          <p
            className="text-[19px] text-[#4A4A4A] mx-auto leading-[1.6] mt-5"
            style={{ maxWidth: "700px" }}
          >
            Technical roles, leadership, and extracurricular builds—kept consistent with the same polish and velocity as my projects.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Backend", "Frontend", "Leadership", "Community"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[#E5E5E5] bg-[#F5F5F5] px-3.5 py-1.5 text-xs font-semibold text-[#4A4A4A] shadow-sm"
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

