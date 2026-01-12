import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import MainLayout from "../../../components/sections/MainLayout";
import { coopReports } from "@/constants/coopReports";

export const metadata: Metadata = {
  title: "Co-op Reports",
  description: "Browse co-op reports and dive into detailed reflections.",
};

export default function CoopReportsIndex() {
  return (
    <MainLayout>
      <div
        className="relative space-y-14 overflow-hidden"
        style={{ padding: "40px 40px 60px" }}
      >
        <div className="blob blob--pink -top-20 -left-24" aria-hidden="true" />
        <div className="blob blob--blue top-10 right-[-120px]" aria-hidden="true" />
        <section className="relative z-10 text-center space-y-5 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F5F5F5] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#1A1A1A] border border-[#E5E5E5] shadow-sm mb-6">
            Co-op Reports
          </div>
          <h1
            className="font-bold text-[40px] leading-[1.2] tracking-[-1px] text-[#1A1A1A] mx-auto fade-up"
            style={{ maxWidth: "900px", animationDelay: "120ms" }}
          >
            Work terms with clear goals, outcomes, and reflection
          </h1>
          <p
            className="text-[19px] text-[#4A4A4A] mx-auto leading-[1.6] mt-5"
            style={{ maxWidth: "700px" }}
          >
            Browse each term for scope, impact, and learnings—kept consistent with my project and experience layout.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Full-time", "Part-time", "On-site", "Hybrid/Remote"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[#E5E5E5] bg-[#F5F5F5] px-3.5 py-1.5 text-xs font-semibold text-[#4A4A4A] shadow-sm"
              >
                {chip}
              </span>
            ))}
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2 relative z-10">
          {coopReports.map((report, idx) => (
            <Link
              key={report.slug}
              href={`/coop-reports/${report.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-[16px] border border-[#E5E5E5] bg-white fade-up"
              style={{
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              <div className="relative h-[240px] w-full overflow-hidden bg-[#F5F5F5] transition-transform duration-500">
                {report.coverImage ? (
                  <Image
                    src={report.coverImage}
                    alt={report.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 560px, 100vw"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-gray-500 text-sm">
                    Add /coop/cover-image.jpg
                  </div>
                )}
                <span className="absolute top-4 left-4 rounded-[6px] bg-[#1A1A1A] px-[12px] py-[6px] text-[12px] font-semibold uppercase tracking-[0.4px] text-white">
                  {report.term}
                </span>
              </div>
              <div className="relative flex flex-1 flex-col gap-4 p-6 transition-all duration-300 group-hover:translate-y-0">
                <h2 className="text-[22px] font-bold text-[#1A1A1A] leading-[1.3] mb-1">
                  {report.title}
                </h2>
                <p className="text-sm text-[#4A4A4A]">
                  {report.role} · {report.employer}
                  {report.location ? ` · ${report.location}` : ""}
                </p>
                <p className="text-[15px] leading-[1.6] text-[#4A4A4A] mb-4 line-clamp-3">
                  {report.abstract ||
                    "Click to read the goals, outcomes, and reflections for this term."}
                </p>
                {report.skills && report.skills.length > 0 && (
                  <div className="flex flex-wrap" style={{ gap: "8px" }}>
                    {report.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-[6px] border border-[#E5E5E5] bg-transparent px-[10px] py-[4px] text-[12px] font-medium text-[#4A4A4A]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-auto flex items-center justify-end border-t border-[#F5F5F5] pt-5">
                  <span className="text-[14px] font-semibold text-[#1A1A1A] transition-colors duration-200 group-hover:underline">
                    View details →
                  </span>
                </div>
              </div>
              <span
                className="pointer-events-none absolute inset-0 rounded-[16px] border border-transparent group-hover:border-[#1A1A1A] group-hover:shadow-[0_22px_58px_-12px_rgba(0,0,0,0.28)]"
                style={{ transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)", transform: "translateY(0)" }}
              />
            </Link>
          ))}
        </section>
      </div>
    </MainLayout>
  );
}

