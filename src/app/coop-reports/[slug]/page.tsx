import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MainLayout from "../../../../components/sections/MainLayout";
import { coopReports } from "../../../constants/coopReports";

interface CoopReportPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return coopReports.map((report) => ({ slug: report.slug }));
}

export async function generateMetadata({
  params,
}: CoopReportPageProps): Promise<Metadata> {
  const { slug } = await params;
  const report = coopReports.find((r) => r.slug === slug);
  return {
    title: report ? `${report.title} — Co-op Report` : "Co-op Report",
    description: report?.jobDescription || "Co-op report details.",
  };
}

export default async function CoopReportDetail({ params }: CoopReportPageProps) {
  const { slug } = await params;
  const report = coopReports.find((r) => r.slug === slug);
  if (!report) return notFound();

  const combinedHighlights = [...(report.highlights || [])];

  

  return (
    <MainLayout>
      <article className="relative space-y-10 overflow-hidden px-4 sm:px-0">
        <div className="blob blob--pink -top-24 -left-32" aria-hidden="true" />
        <div className="blob blob--yellow top-24 right-[-120px]" aria-hidden="true" />
        <header className="bg-gradient-to-br from-white/98 via-white/94 to-amber-50/70 backdrop-blur rounded-2xl shadow-[0_18px_55px_-26px_rgba(15,23,42,0.36)] border border-white/70 ring-1 ring-white/70 hover:ring-amber-100/80 overflow-hidden relative z-10 transition-shadow duration-300">
          <div className="relative h-64 w-full bg-gray-100">
            {report.coverImage ? (
              <Image
                src={report.coverImage}
                alt={report.title}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 1200px, 100vw"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center text-gray-500">
                Add /coop/cover-image.jpg
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 space-y-2 text-white">
              <p className="text-sm font-semibold uppercase tracking-wide">
                {report.term}
              </p>
              <h1 className="text-3xl font-bold">{report.title}</h1>
              <p className="text-sm text-gray-200">
                {report.role} · {report.employer}
                {report.location ? ` · ${report.location}` : ""}
              </p>
            </div>
          </div>
          <div className="p-8 space-y-4">
            {report.skills && report.skills?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {report.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-amber-50 text-amber-800 border border-amber-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
            {report.jobDescription && (
              <p className="text-lg text-[color:var(--foreground)] leading-relaxed">
                {report.abstract}
              </p>
            )}
          </div>
        </header>

        {/* Overview summary */}
        <section className="relative z-10">
          <div className="rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-orange-50 shadow-md p-6 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
              Overview
            </p>
            <div className="space-y-2 text-[color:var(--foreground)] leading-relaxed">
              {report.abstract && (
                <p>
                  <span className="font-semibold text-[color:var(--heading)]">Scope & Impact:</span>{" "}
                  {report.abstract}
                </p>
              )}
              <p>
                <span className="font-semibold text-[color:var(--heading)]">Role:</span>{" "}
                {report.role} · {report.employer}
                {report.location ? ` · ${report.location}` : ""}
              </p>
              {report.skills && report.skills.length > 0 && (
                <p>
                  <span className="font-semibold text-[color:var(--heading)]">Skills:</span>{" "}
                  {report.skills.join(" • ")}
                </p>
              )}
            </div>
          </div>
        </section>

        {report.employerInfo && (
          <section className="bg-gradient-to-br from-white/98 via-white/94 to-amber-50/70 backdrop-blur rounded-2xl shadow-[0_18px_55px_-26px_rgba(15,23,42,0.36)] border border-white/70 ring-1 ring-white/70 p-8 space-y-6 relative z-10 transition-shadow duration-300 hover:ring-amber-100/80 hover:shadow-[0_22px_68px_-22px_rgba(15,23,42,0.42)]">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Employer
                </p>
                <h2 className="text-2xl font-semibold text-[color:var(--heading)]">
                  What they do
                </h2>
              </div>
              <span className="text-sm text-gray-500">
                Mission, scope, and impact.
              </span>
            </div>
            <div className="grid gap-6 md:grid-cols-[2fr,1fr] items-start">
              <p className="text-[color:var(--foreground)] leading-relaxed">
                {report.employerInfo.about}
              </p>
              <div className="relative w-full rounded-xl border border-gray-100 bg-gray-50 overflow-hidden">
                {report.employerInfo.image?.url ? (
                  <Image
                    src={report.employerInfo.image.url}
                    alt={report.employerInfo.image.alt}
                    width={800}
                    height={450}
                    className="h-full w-full object-cover"
                    sizes="(min-width: 768px) 560px, 100vw"
                  />
                ) : (
                  <div className="aspect-video w-full flex items-center justify-center text-gray-500 text-sm">
                    Add employer image
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {report.jobDescription && (
          <section className="bg-gradient-to-br from-white/98 via-white/94 to-amber-50/70 backdrop-blur rounded-2xl shadow-[0_18px_55px_-26px_rgba(15,23,42,0.36)] border border-white/70 ring-1 ring-white/70 p-8 space-y-3 relative z-10 transition-shadow duration-300 hover:ring-amber-100/80 hover:shadow-[0_22px_68px_-22px_rgba(15,23,42,0.42)]">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Role & scope
            </p>
            <h2 className="text-2xl font-semibold text-[color:var(--heading)]">
              Job description
            </h2>
            <p className="text-[color:var(--foreground)] leading-relaxed">
              {report.jobDescription}
            </p>
          </section>
        )}

        {report.images && report.images.length > 0 && (
          <section className="bg-gradient-to-br from-white/98 via-white/94 to-amber-50/70 backdrop-blur rounded-2xl shadow-[0_18px_55px_-26px_rgba(15,23,42,0.36)] border border-white/70 ring-1 ring-white/70 p-8 space-y-4 relative z-10 transition-shadow duration-300 hover:ring-amber-100/80 hover:shadow-[0_22px_68px_-22px_rgba(15,23,42,0.42)]">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Gallery
                </p>
                <h2 className="text-2xl font-semibold text-[color:var(--heading)]">
                  Highlights in pictures
                </h2>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {report.images.map((img) => (
                <figure
                  key={img.alt}
                  className="group relative rounded-xl border border-gray-100 bg-gray-50 overflow-hidden flex flex-col transition-transform duration-500 ease-out hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className="relative w-full h-full transition-transform duration-500 ease-out group-hover:-rotate-x-3 group-hover:rotate-y-3"
                    style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
                  >
                    {img.url ? (
                      <Image
                        src={img.url}
                        alt={img.alt}
                        width={400}
                        height={256}
                        className="w-full max-w-xs mx-auto h-64 object-contain"
                        sizes="(min-width: 768px) 360px, 90vw"
                      />
                    ) : (
                      <div className="h-64 w-full flex items-center justify-center text-gray-500 text-sm">
                        Add image: {img.alt}
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-amber-100/40 via-transparent to-orange-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <figcaption className="p-3 text-sm text-[color:var(--foreground)]">
                    {img.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {report.goalDetails && report.goalDetails.length > 0 && (
          <section className="bg-gradient-to-br from-white/98 via-white/94 to-amber-50/70 backdrop-blur rounded-2xl shadow-[0_18px_55px_-26px_rgba(15,23,42,0.36)] border border-white/70 ring-1 ring-white/70 p-8 space-y-6 relative z-10 transition-shadow duration-300 hover:ring-amber-100/80 hover:shadow-[0_22px_68px_-22px_rgba(15,23,42,0.42)]">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Goal deep dives
                </p>
                <h2 className="text-2xl font-semibold text-[color:var(--heading)]">
                  Action, success, reflection, conclusion
                </h2>
              </div>
              <span className="text-sm text-gray-500">
                Five structured goals with optional visuals.
              </span>
            </div>
            <div className="space-y-8">
              {report.goalDetails.map((goal, idx) => (
                <div key={goal.title} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-100 rounded-full px-2.5 py-1">
                      {idx + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-[color:var(--heading)]">
                      {goal.title}
                    </h3>
                  </div>
                  <div className="space-y-3 text-[color:var(--foreground)] text-sm leading-relaxed">
                    {goal.actionPlan && (
                      <>
                        <p className="font-semibold text-[color:var(--heading)]">Action Plan</p>
                        <p>{goal.actionPlan}</p>
                      </>
                    )}
                    {goal.measureOfSuccess && (
                      <>
                        <p className="font-semibold text-[color:var(--heading)]">Measure of Success</p>
                        <p>{goal.measureOfSuccess}</p>
                      </>
                    )}
                    <p className="font-semibold text-[color:var(--heading)]">Reflection</p>
                    <p>{goal.reflection}</p>
                  </div>
                  {goal.image?.url && (
                    <div className="relative w-full rounded-lg border border-dashed border-amber-100 bg-amber-50/40 overflow-hidden">
                      <Image
                        src={goal.image.url}
                        alt={goal.image.alt}
                        width={600}
                        height={360}
                        className="w-full max-w-xs mx-auto h-60 object-contain"
                        sizes="(min-width: 768px) 420px, 90vw"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {combinedHighlights.length > 0 && (
          <section className="bg-gradient-to-br from-white/98 via-white/94 to-amber-50/70 backdrop-blur rounded-2xl shadow-[0_18px_55px_-26px_rgba(15,23,42,0.36)] border border-white/70 ring-1 ring-white/70 p-8 space-y-4 relative z-10 transition-shadow duration-300 hover:ring-amber-100/80 hover:shadow-[0_22px_68px_-22px_rgba(15,23,42,0.42)]">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Impact highlights & conclusions
                </p>
                <h2 className="text-2xl font-semibold text-[color:var(--heading)]">
                  What I built, shipped, and concluded
                </h2>
              </div>
              <span className="text-sm text-gray-500">
                Problem → Solution → Outcome.
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {combinedHighlights.map((item) => (
                <div
                  key={item}
                    className="border border-gray-100 rounded-xl p-4 bg-amber-50/40 text-[color:var(--foreground)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
        )}

        {report.takeaways && report.takeaways.length > 0 && (
          <section className="bg-gradient-to-br from-white/98 via-white/94 to-amber-50/70 backdrop-blur rounded-2xl shadow-[0_18px_55px_-26px_rgba(15,23,42,0.36)] border border-white/70 ring-1 ring-white/70 p-8 space-y-4 relative z-10 transition-shadow duration-300 hover:ring-amber-100/80 hover:shadow-[0_22px_68px_-22px_rgba(15,23,42,0.42)]">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Reflections
                </p>
                <h2 className="text-2xl font-semibold text-[color:var(--heading)]">
                  What I learned
                </h2>
              </div>
              <span className="text-sm text-gray-500">
                Specific, honest, concise.
              </span>
            </div>
            <ul className="space-y-2 list-disc list-inside text-[color:var(--foreground)]">
              {report.takeaways.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {report.acknowledgments && report.acknowledgments.length > 0 && (
          <section className="bg-gradient-to-br from-white/98 via-white/94 to-amber-50/70 backdrop-blur rounded-2xl shadow-[0_18px_55px_-26px_rgba(15,23,42,0.36)] border border-white/70 ring-1 ring-white/70 p-8 space-y-3 relative z-10 transition-shadow duration-300 hover:ring-amber-100/80 hover:shadow-[0_22px_68px_-22px_rgba(15,23,42,0.42)]">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Acknowledgments
            </p>
            <h2 className="text-2xl font-semibold text-[color:var(--heading)]">
              Thanks and credits
            </h2>
            <ul className="space-y-1 list-disc list-inside text-[color:var(--foreground)]">
              {report.acknowledgments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}
      </article>

    </MainLayout>


  );
}

