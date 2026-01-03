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
    description: report?.abstract || "Co-op report details.",
  };
}

export default async function CoopReportDetail({ params }: CoopReportPageProps) {
  const { slug } = await params;
  const report = coopReports.find((r) => r.slug === slug);
  if (!report) return notFound();

  return (
    <MainLayout>
      <article className="relative space-y-10 overflow-hidden">
        <div className="blob blob--pink -top-24 -left-32" aria-hidden="true" />
        <div className="blob blob--yellow top-24 right-[-120px]" aria-hidden="true" />
        <header className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden relative z-10">
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
                    className="px-3 py-1 text-xs rounded-full bg-indigo-50 text-indigo-800 border border-indigo-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
            {report.abstract && (
              <p className="text-lg text-[color:var(--foreground)] leading-relaxed">
                {report.abstract}
              </p>
            )}
          </div>
        </header>

        {/* 3D accent visuals */}
        <section className="relative z-10">
          <div
            className="rounded-2xl border border-indigo-100/60 bg-gradient-to-br from-indigo-50 via-white to-purple-50 shadow-lg p-6"
            style={{ perspective: "1200px" }}
          >
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Scope & Impact",
                  body: report.abstract || "Impact highlights and outcomes.",
                },
                {
                  title: "Role",
                  body: `${report.role} · ${report.employer}`,
                },
                {
                  title: "Skills",
                  body:
                    report.skills?.join(" • ") ||
                    "Add skills to showcase focus areas.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="group relative overflow-hidden rounded-xl bg-white/80 border border-indigo-100 shadow-md transition-transform duration-700 ease-out"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateX(0deg) rotateY(0deg)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/60 via-transparent to-purple-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="p-5 space-y-2 transform transition-transform duration-700 group-hover:-translate-y-1 group-hover:rotate-x-3 group-hover:rotate-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
                      {card.title}
                    </p>
                    <p className="text-[color:var(--foreground)] text-sm leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                  <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-indigo-200/60 blur-3xl group-hover:translate-y-4 group-hover:-translate-x-4 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {report.employerInfo && (
          <section className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 space-y-6 relative z-10">
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
          <section className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 space-y-3 relative z-10">
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
          <section className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 space-y-4 relative z-10">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Visuals
                </p>
                <h2 className="text-2xl font-semibold text-[color:var(--heading)]">
                  Supporting images
                </h2>
              </div>
              <span className="text-sm text-gray-500">Add links from /public.</span>
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
                    <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-100/40 via-transparent to-purple-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <figcaption className="p-3 text-sm text-[color:var(--foreground)]">
                    {img.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {report.goals && report.goals.length > 0 && (
          <section className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 space-y-4 relative z-10">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Goals
                </p>
                <h2 className="text-2xl font-semibold text-[color:var(--heading)]">
                  What I set out to achieve
                </h2>
              </div>
              <span className="text-sm text-gray-500">
                Actionable, measurable outcomes.
              </span>
            </div>
            <ul className="grid md:grid-cols-2 gap-3 list-disc list-inside text-[color:var(--foreground)]">
              {report.goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </section>
        )}

        {report.goalDetails && report.goalDetails.length > 0 && (
          <section className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 space-y-6 relative z-10">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Goal deep dives
                </p>
                <h2 className="text-2xl font-semibold text-[color:var(--heading)]">
                  Goal → reflection → conclusion
                </h2>
              </div>
              <span className="text-sm text-gray-500">
                Five structured goals with optional visuals.
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {report.goalDetails.map((goal, idx) => (
                <div
                  key={goal.title}
                  className="group border border-gray-100 rounded-xl p-5 bg-gradient-to-br from-indigo-50/60 to-white space-y-3 transition-transform duration-500 ease-out hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-[color:var(--heading)]">
                      {goal.title}
                    </h3>
                    <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-full px-2.5 py-1">
                      {idx + 1}/5
                    </span>
                  </div>
                  <div className="space-y-2 text-[color:var(--foreground)] text-sm leading-relaxed">
                    <p>
                      <span className="font-semibold text-[color:var(--heading)]">
                        Reflection:
                      </span>{" "}
                      {goal.reflection}
                    </p>
                    <p>
                      <span className="font-semibold text-[color:var(--heading)]">
                        Conclusion:
                      </span>{" "}
                      {goal.conclusion}
                    </p>
                  </div>
                  <div
                    className="relative w-full rounded-lg border border-dashed border-indigo-100 bg-indigo-50/40 overflow-hidden transition-transform duration-500 ease-out group-hover:-rotate-x-2 group-hover:rotate-y-2"
                    style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
                  >
                    {goal.image?.url ? (
                      <Image
                        src={goal.image.url}
                        alt={goal.image.alt}
                        width={600}
                        height={360}
                        className="w-full max-w-xs mx-auto h-60 object-contain"
                        sizes="(min-width: 768px) 420px, 90vw"
                      />
                    ) : (
                      <div className="h-60 flex items-center justify-center text-xs text-indigo-700">
                        Optional image: {goal.image?.alt || "Add visual"}
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-indigo-100/40 via-transparent to-purple-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {report.highlights && report.highlights.length > 0 && (
          <section className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 space-y-4 relative z-10">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Impact Highlights
                </p>
                <h2 className="text-2xl font-semibold text-[color:var(--heading)]">
                  What I built and shipped
                </h2>
              </div>
              <span className="text-sm text-gray-500">
                Problem → Solution → Outcome.
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {report.highlights.map((item) => (
                <div
                  key={item}
                    className="border border-gray-100 rounded-xl p-4 bg-indigo-50/40 text-[color:var(--foreground)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
        )}

        {report.takeaways && report.takeaways.length > 0 && (
          <section className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 space-y-4 relative z-10">
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
          <section className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 space-y-3 relative z-10">
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

