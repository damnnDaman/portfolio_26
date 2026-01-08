"use client";
import Image from "next/image";
import MainLayout from "../../../components/sections/MainLayout";
import SocialButton from "../../../components/ui/SocialButton";
import { socialLinks } from "@/constants/socialLinks";

const aboutImage = "/about/me.jpeg";

const techStack = [
  "React / Next.js",
  "TypeScript",
  "Node.js & Express",
  "Python (FastAPI, Flask)",
  "PostgreSQL / MongoDB",
  "Tailwind CSS",
  "AWS basics",
  "CI/CD & GitHub Actions",
];

const currentItems = [
  "Building full-stack projects focused on clean UI and reliable backend APIs.",
  "Exploring AI/ML fundamentals to ship practical, not just academic, features.",
  "Practicing system design and data modeling for internship interviews.",
];

const musicFavorites = [
  { title: "Night Trouble", artist: "Petit Biscuit" },
  { title: "Cold Little Heart", artist: "Michael Kiwanuka" },
  { title: "Landslide", artist: "Oh Wonder" },
];

const hobbies = [
  {
    title: "Competitions",
    img: "/about/volunteering.webp",
    desc: "Hackathons and coding comps push me to prototype fast and learn faster.",
  },
  {
    title: "Volunteering",
    img: "/about/competitions.webp",
    desc: "Giving back through mentorship and events keeps me grounded and connected.",
  },
  {
    title: "Badminton",
    img: "/about/badminton.jpeg",
    desc: "Fast rallies keep me sharp and de-stressed after long coding sessions.",
  },
  {
    title: "Outing",
    img: "/about/outing.jpeg",
    desc: "Love to go out and explore new places and try new things.",
  },
  {
    title: "Video Editing",
    img: "/about/video-edit.webp",
    desc: "I love crafting tight cuts, smooth transitions, and on-beat audio for pro-grade demos.",
  },
  {
    title: "South Indian Food",
    img: "/about/south-indian.jpeg",
    desc: "Love to eat South Indian food and try new recipes.",
  },
];

const cardClass =
  "bg-white border border-[#E5E5E5] rounded-2xl shadow-[0_10px_30px_-20px_rgba(0,0,0,0.18)] p-8";

export default function About() {
  return (
    <MainLayout>
      <div className="space-y-12">
        {/* 1. Hero Section */}
        <section className={`${cardClass} grid md:grid-cols-2 gap-8 items-center`}>
          <div className="space-y-4 text-[color:var(--foreground)]">
            <p className="text-sm uppercase tracking-[0.2em] text-[#0F2F6B]">
              About Daman
            </p>
            <h1 className="text-4xl font-bold text-[color:var(--heading)]">
              Hi, I’m Daman Kumar
            </h1>
            <p className="text-lg leading-relaxed text-[color:var(--foreground)]">
              Third-year Software Engineering student at the University of Guelph focused on full-stack
              development, clean interfaces, and building things that actually ship.
            </p>
          </div>
          <div className="relative w-full h-full min-h-[320px] rounded-2xl overflow-hidden border-2 border-white shadow-[0_16px_48px_-22px_rgba(0,0,0,0.25)]">
            <Image
              src={aboutImage}
              alt="Daman gallery"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* Stats cards removed */}

        {/* What I'm Up To removed */}

        {/* 2. My Story removed */}

        {/* 3. Tech Stack / Skills */}
        <section className={cardClass}>
          <h2 className="text-2xl font-semibold text-[color:var(--heading)] mb-4">
            Tech Stack & Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-[#E5E5E5] bg-white px-4 py-2 text-sm font-semibold text-[#1A1A1A] shadow-[0_6px_18px_-16px_rgba(0,0,0,0.22)]"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* 4. Currently */}
        <section className={cardClass}>
          <h2 className="text-2xl font-semibold text-[color:var(--heading)] mb-4">
            Currently
          </h2>
          <ul className="space-y-3 text-[color:var(--foreground)]">
            {currentItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#1A1A1A]" aria-hidden="true" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 5. Music */}
        <section className={cardClass}>
          <h2 className="text-2xl font-semibold text-[color:var(--heading)] mb-4">
            Music on Repeat
          </h2>
          <div className="space-y-3">
            {musicFavorites.map((track) => (
              <div
                key={track.title}
                className="flex items-center justify-between rounded-xl border border-[#E5E5E5] bg-white px-4 py-3 text-[color:var(--foreground)]"
              >
                <div>
                  <p className="font-semibold text-[#1A1A1A]">{track.title}</p>
                  <p className="text-sm text-[color:var(--foreground)]">{track.artist}</p>
                </div>
                <span className="text-xs uppercase tracking-[0.18em] text-[#0F2F6B]">Fav</span>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Hobbies & Interests */}
        <section className={cardClass}>
          <h2 className="text-2xl font-semibold text-[color:var(--heading)] mb-6">
            Hobbies & Interests
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {hobbies.map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-[#E5E5E5] bg-white shadow-[0_8px_22px_-18px_rgba(0,0,0,0.25)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_36px_-18px_rgba(0,0,0,0.3)]"
              >
                <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                  {item.img ? (
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-gray-500">
                      Add {item.title} photo
                    </div>
                  )}
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold text-[color:var(--heading)]">
                    {item.title}
                  </h3>
                  <p className="text-[color:var(--foreground)] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Anonymous Message */}
        <section className={cardClass}>
          <h2 className="text-2xl font-semibold text-[color:var(--heading)] mb-3">
            Send an Anonymous Message
          </h2>
          <p className="text-[color:var(--foreground)] mb-4">
            Want to share feedback or ideas anonymously? Use the quick form below—no sign-in needed.
          </p>
          <a
            href="https://forms.gle/anon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[10px] border border-[#1A1A1A] px-4 py-2 text-sm font-semibold text-[#1A1A1A] transition-colors duration-150 hover:bg-[#1A1A1A] hover:text-white"
          >
            Open anonymous form
            <span aria-hidden="true">↗</span>
          </a>
        </section>

        {/* 8. Connect */}
        <section className={cardClass}>
          <h2 className="text-2xl font-semibold text-[color:var(--heading)] mb-4">
            Connect
          </h2>
          <p className="text-[color:var(--foreground)] mb-4">
            Always happy to chat about projects, internships, or tech ideas. Reach out:
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {socialLinks.map((link, index) => (
              <SocialButton
                key={link.text + index}
                icon={link.icon}
                text={link.text}
                href={link.href}
                ariaLabel={link.ariaLabel}
              />
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

