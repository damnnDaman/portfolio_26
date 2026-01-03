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
      <div className="relative space-y-14 overflow-hidden">
        <div className="blob blob--pink -top-20 -left-24" aria-hidden="true" />
        <div className="blob blob--blue top-10 right-[-120px]" aria-hidden="true" />
        <section className="relative z-10 text-center space-y-5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-indigo-700 shadow-sm">
            Co-op Reports
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[color:var(--heading)] leading-tight">
            Work terms with clear goals, outcomes, and reflection
          </h1>
          <p className="text-lg text-[color:var(--foreground)] max-w-2xl mx-auto">
            Browse each term for scope, impact, and learnings—kept consistent with my project and experience layout.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Full-time", "Part-time", "On-site", "Hybrid/Remote"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-indigo-100 bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold text-indigo-800 shadow-sm"
              >
                {chip}
              </span>
            ))}
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2 relative z-10">
          {coopReports.map((report) => (
            <Link
              key={report.slug}
              href={`/coop-reports/${report.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl transform-gpu"
            >
              <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10" />
                {report.coverImage ? (
                  <Image
                    src={report.coverImage}
                    alt={report.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 640px, 100vw"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-gray-500">
                    Add /coop/cover-image.jpg
                  </div>
                )}
                <div className="absolute bottom-3 left-3 z-20 text-white space-y-1">
                  <p className="text-sm font-semibold">{report.term}</p>
                  <p className="text-xs text-gray-200">
                    {report.role} · {report.employer}
                  </p>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  {report.location && <span>{report.location}</span>}
                  {report.skills && report.skills?.length > 0 && (
                    <span aria-hidden="true">•</span>
                  )}
                  {report.skills && (
                  <span className="flex flex-wrap gap-1">
                      {report.skills.map((skill) => (
                        <span
                          key={skill}
                        className="px-2.5 py-1 text-[11px] rounded-full bg-indigo-50 text-indigo-800 border border-indigo-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-semibold text-[color:var(--heading)]">
                  {report.title}
                </h2>
                <p className="text-[color:var(--foreground)] leading-relaxed line-clamp-3">
                  {report.abstract ||
                    "Click to read the goals, outcomes, and reflections for this term."}
                </p>
                <div className="flex justify-end">
                  <span className="text-sm font-semibold text-indigo-700 group-hover:underline">
                    View details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </MainLayout>
  );
}

