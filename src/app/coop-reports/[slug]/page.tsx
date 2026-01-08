import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
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

  const sectionStyle = {
    background: "#FFFFFF",
    border: "1px solid #E5E5E5",
    borderRadius: "16px",
    padding: "40px",
    marginBottom: "32px",
    maxWidth: "900px",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: "0 18px 48px -20px rgba(0,0,0,0.25), 0 8px 22px -18px rgba(0,0,0,0.18)",
  };

  const badgeText = report.term?.toUpperCase() || "FALL 2025 REPORT · TERM8";
  const currentIndex = coopReports.findIndex((r) => r.slug === slug);
  const prevReport = currentIndex > 0 ? coopReports[currentIndex - 1] : null;
  const nextReport =
    currentIndex >= 0 && currentIndex < coopReports.length - 1
      ? coopReports[currentIndex + 1]
      : null;

  return (
    <MainLayout>
      <article
        className="space-y-10 px-5 md:px-10"
        style={{ paddingTop: "100px", paddingBottom: "60px", backgroundColor: "#FAFAFA" }}
      >
        <header
          className="max-w-[1000px] w-full mx-auto text-center space-y-4"
          style={{ marginBottom: "32px" }}
        >
          <span
            className="inline-block uppercase"
            style={{
              background: "#1A1A1A",
              color: "#FFFFFF",
              padding: "8px 16px",
              borderRadius: "6px",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.5px",
              marginBottom: "24px",
            }}
          >
            {badgeText}
          </span>
          <div className="flex justify-center">
            {report.coverImage ? (
              <Image
                src={report.coverImage}
                alt={report.employer}
                width={140}
                height={80}
                style={{ height: "80px", width: "auto", marginBottom: "24px", filter: "grayscale(0)" }}
              />
            ) : null}
          </div>
          <h1
            className="font-bold"
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "#1A1A1A",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            {report.title}
          </h1>
        
          {/* Description removed per request */}
        </header>

        {/* Quick info card */}
        <section
          className="fade-up"
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E5E5",
            borderRadius: "16px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
            padding: "32px",
            maxWidth: "900px",
            margin: "-40px auto 60px",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <p
                style={{
                  fontSize: "13px",
                  color: "#8A8A8A",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontWeight: 600,
                }}
              >
                Role
              </p>
              <p style={{ fontSize: "16px", color: "#1A1A1A", fontWeight: 500 }}>{report.role}</p>
            </div>
            <div className="space-y-2">
              <p
                style={{
                  fontSize: "13px",
                  color: "#8A8A8A",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontWeight: 600,
                }}
              >
                Skills
              </p>
              <div className="flex flex-wrap" style={{ gap: "8px" }}>
                {(report.skills || []).slice(0, 6).map((skill) => (
                  <span
                    key={skill}
                    style={{
                      background: "#F5F5F5",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "13px",
                      color: "#1A1A1A",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <p
                style={{
                  fontSize: "13px",
                  color: "#8A8A8A",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontWeight: 600,
                }}
              >
                Duration
              </p>
              <p style={{ fontSize: "16px", color: "#1A1A1A", fontWeight: 500 }}>
                {report.term}
              </p>
            </div>
          </div>
        </section>

        {report.employerInfo && (
          <section className="fade-up card-3d" style={sectionStyle}>
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#8A8A8A",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  Employer
                </p>
                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "#1A1A1A",
                    marginBottom: "12px",
                  }}
                >
                  What they do
                </h2>
              </div>
              <span style={{ fontSize: "14px", color: "#8A8A8A", fontStyle: "italic" }}>
                Mission, scope, and impact.
              </span>
            </div>
            <div className="grid gap-6 md:grid-cols-[3fr,2fr] items-start">
              <p style={{ color: "#4A4A4A", lineHeight: 1.7, fontSize: "16px" }}>
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
          <section className="fade-up card-3d" style={sectionStyle}>
            <p
              style={{
                fontSize: "12px",
                color: "#8A8A8A",
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontWeight: 600,
                marginBottom: "12px",
              }}
            >
              Role & scope
            </p>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#1A1A1A",
                marginBottom: "24px",
              }}
            >
              Job description
            </h2>
            <p style={{ color: "#4A4A4A", lineHeight: 1.8, fontSize: "16px" }}>
              {report.jobDescription}
            </p>
          </section>
        )}

        {report.images && report.images.length > 0 && (
          <section className="fade-up card-3d" style={sectionStyle}>
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#8A8A8A",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  Gallery
                </p>
                <h2
                  style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#1A1A1A",
                    marginBottom: "24px",
                  }}
                >
                  Highlights in pictures
                </h2>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {report.images.map((img) => (
                <figure
                  key={img.alt}
                  className="group relative overflow-hidden flex flex-col gallery-card"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E5E5E5",
                    borderRadius: "12px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="relative w-full" style={{ aspectRatio: "4 / 3", overflow: "hidden" }}>
                    {img.url ? (
                      <Image
                        src={img.url}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        sizes="(min-width: 1024px) 400px, (min-width: 768px) 360px, 100vw"
                      />
                    ) : (
                      <div className="h-64 w-full flex items-center justify-center text-gray-500 text-sm">
                        Add image: {img.alt}
                      </div>
                    )}
                  </div>
                  <figcaption
                    style={{
                      padding: "16px",
                      borderTop: "1px solid #F5F5F5",
                      fontSize: "14px",
                      color: "#4A4A4A",
                      textAlign: "center",
                    }}
                  >
                    {img.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {report.goalDetails && report.goalDetails.length > 0 && (
          <section className="fade-up card-3d" style={sectionStyle}>
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
             
                <h2
                  style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#1A1A1A",
                    marginBottom: "8px",
                  }}
                >
                Goal deep dives
                </h2>
              </div>
              <span style={{ fontSize: "14px", color: "#8A8A8A", fontStyle: "italic" }}>
                Pull structured goals...
              </span>
            </div>
            <div className="space-y-8">
              {report.goalDetails.map((goal, idx) => (
                <div
                  key={goal.title}
                  className="space-y-4 goal-card"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E5E5E5",
                    borderRadius: "12px",
                    padding: "20px",
                    boxShadow: "0 12px 28px -16px rgba(0,0,0,0.2)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#8A8A8A",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        fontWeight: 600,
                      }}
                    >
                      Goal Deep Dive {idx + 1}
                    </span>
                    <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1A1A1A" }}>
                      {goal.title}
                    </h3>
                  </div>
                  <div className="space-y-3" style={{ color: "#4A4A4A", lineHeight: 1.8, fontSize: "16px" }}>
                    {goal.actionPlan && (
                      <>
                        {/* <p className="font-semibold text-heading">Action Plan</p> */}
                        <p>{goal.actionPlan}</p>
                      </>
                    )}
                  
                  </div>
                  {goal.image?.url && (
                    <div
                      className="relative w-full overflow-hidden"
                      style={{
                        border: "1px dashed #E5E5E5",
                        borderRadius: "10px",
                        background: "#F7F7F7",
                      }}
                    >
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
          <section className="fade-up card-3d" style={sectionStyle}>
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#8A8A8A",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  Impact highlights & conclusions
                </p>
                <h2
                  style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#1A1A1A",
                    marginBottom: "8px",
                  }}
                >
                  What I built, shipped, and concluded
                </h2>
              </div>
              <span style={{ fontSize: "14px", color: "#8A8A8A", fontStyle: "italic" }}>
                Problem → Solution → Outcome.
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {combinedHighlights.map((item) => (
                <div
                  key={item}
                  className="border border-[#E5E5E5] rounded-xl p-4"
                  style={{ background: "#F9FAFB", color: "#1A1A1A" }}
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
        )}

        {report.takeaways && report.takeaways.length > 0 && (
          <section className="fade-up card-3d" style={sectionStyle}>
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#8A8A8A",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  Reflections
                </p>
                <h2
                  style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#1A1A1A",
                    marginBottom: "8px",
                  }}
                >
                  What I learned
                </h2>
              </div>
              <span style={{ fontSize: "14px", color: "#8A8A8A", fontStyle: "italic" }}>
                Specific, honest, concise.
              </span>
            </div>
            <ul className="space-y-2 list-disc list-inside text-foreground">
              {report.takeaways.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {report.acknowledgments && report.acknowledgments.length > 0 && (
          <section className="fade-up card-3d" style={sectionStyle}>
            <p
              style={{
                fontSize: "12px",
                color: "#8A8A8A",
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontWeight: 600,
                marginBottom: "12px",
              }}
            >
              Acknowledgments
            </p>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#1A1A1A",
                marginBottom: "8px",
              }}
            >
              Thanks and credits
            </h2>
            <ul className="space-y-1 list-disc list-inside text-foreground">
              {report.acknowledgments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Navigation removed per request */}
      </article>
    </MainLayout>


  );
}

