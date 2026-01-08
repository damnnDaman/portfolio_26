"use client";
import Image from "next/image";
import MainLayout from "../../../components/sections/MainLayout";
import SocialButton from "../../../components/ui/SocialButton";
import { socialLinks } from "@/constants/socialLinks";
import { Playfair_Display, Manrope } from "next/font/google";

const aboutImage = "/about/me.jpeg";

const techStack = [
  "React / Next.js",
  "TypeScript",
  "Node.js & Express",
  "Python (Pandas, NumPy, FastAPI, PyTorch)",
  "C/C++",
  "SQL",
  "Figma",
  "Salesforce",
  "Microsoft Fabric",
  "PostgreSQL / MongoDB",
  "Tailwind CSS",
  "Azure DevOps",
  "Power BI",
  "CI/CD & GitHub Actions",
];

const currentItems = ["Learning", "Building", "Problem solving"];

const musicFavorites = [
  {
    title: "Farebi",
    artist: "Chaar Diwaari, Raftaar",
    link: "https://open.spotify.com/track/1Jsos1mzwTwYGOndYN5h8V?si=fbc946326ea543d9",
    tag: "Hip Hop",
  },
  {
    title: "Tune Maari Entriyaan",
    artist: "Various Artists",
    link: "https://open.spotify.com/track/5kg1GacbhgQfLcbgOBRO9c?si=06e2252b3da946aa",
    tag: "Bollywood Electronic",
  },
  {
    title: "In my feelings",
    artist: "Drake",
    link: "https://open.spotify.com/track/2G7V7zsVDxg1yRsu7Ew9RJ?si=a762c89547c04c1f",
    tag: "Rap",
  },
  {
    title: "Rakhlo Tum chupaake",
    artist: "Arpit Bala",
    link: "https://open.spotify.com/track/5nXmr6ypbTYjhLR3lXSPyc?si=18110693c81a4d1b",
    tag: "Indie Pop",
  },
  {
    title: "Pink + White",
    artist: "Frank Ocean",
    link: "https://open.spotify.com/track/6WS1cUwxPdtAGaxK9YyQZe",
    tag: "R&B",
  },
 
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

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function About() {
  return (
    <MainLayout>
      <div className={`${manrope.className} space-y-12`}>
        {/* 1. Hero Section */}
        <section className={`${cardClass} grid md:grid-cols-2 gap-8 items-center`}>
          <div className="space-y-4 text-foreground">
            <p className="text-sm uppercase tracking-[0.2em] text-[#0F2F6B]">
              About Daman
            </p>
            <h1 className={`${playfair.className} text-4xl font-bold text-heading`}>
              Hi, I’m Daman Kumar
            </h1>
            <p className="text-lg leading-relaxed text-foreground">
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
          <h2 className="text-2xl font-semibold text-heading mb-4">
            Tech Stack & Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-[#E5E5E5] bg-white px-4 py-2 text-sm font-semibold text-[#1A1A1A] shadow-[0_6px_18px_-16px_rgba(0,0,0,0.22)] transition-colors duration-150 hover:bg-black hover:text-white hover:border-black"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* 4. Currently */}
        <section className={cardClass}>
          <h2 className="text-2xl font-semibold text-heading mb-4">
            Currently
          </h2>
          <ul className="space-y-3 text-foreground">
            {currentItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#1A1A1A]" aria-hidden="true" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 5. Music */}
        <section
          className="w-full rounded-[16px] bg-[#FAFAFA] p-10 sm:p-12"
          style={{ padding: "80px 40px" }}
        >
          <div className="text-center mb-12">
            <h2 className="text-[36px] font-bold text-[#1A1A1A] mb-4">What I&apos;m Listening To</h2>
            <p className="text-[18px] text-[#4A4A4A]">Here&apos;s what&apos;s been on repeat lately</p>
          </div>
          <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {musicFavorites.map((track) => (
              <div
                key={track.title}
                className="group rounded-[12px] border border-[#E5E5E5] bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_10px_26px_-16px_rgba(0,0,0,0.18)]"
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 overflow-hidden rounded-[10px] bg-[#F3F4F6] flex items-center justify-center">
                    <span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1DB954] shadow-[0_6px_16px_-10px_rgba(0,0,0,0.45)]"
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                      >
                        <path
                          d="M18.5 9.9c-3.3-2-8.7-2.2-11.8-1.2a.7.7 0 0 0 .45 1.33c2.7-.91 7.6-.75 10.4.94a.7.7 0 0 0 .94-.25.7.7 0 0 0-.25-.94Zm-.4 2.64c-.27-.17-4.5-2.6-9.6-1.2a.6.6 0 1 0 .32 1.15c4.5-1.3 8.5.93 8.54.95a.6.6 0 0 0 .73-.96Zm-1 2.59c-.22-.14-3.6-2.16-7.3-1a.5.5 0 0 0 .28.96c3.3-.96 6.4.87 6.43.89a.5.5 0 0 0 .57-.85Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[16px] font-semibold text-[#1A1A1A] truncate">{track.title}</p>
                    <p className="text-[14px] text-[#4A4A4A] truncate">{track.artist}</p>
                    {track.tag && (
                      <span className="mt-2 inline-flex rounded-full bg-[#F8FAFC] px-3 py-1 text-[12px] font-semibold text-[#4A4A4A] border border-[#E5E5E5]">
                        {track.tag}
                      </span>
                    )}
                  </div>
                </div>
                {track.link && (
                  <a
                    href={track.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-[#1A1A1A] transition-colors duration-150 hover:text-black"
                  >
                    ▶ Play on Spotify
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 6. Hobbies & Interests */}
        <section className={cardClass}>
          <h2 className="text-2xl font-semibold text-heading mb-6">
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
                  <h3 className="text-lg font-semibold text-heading">
                    {item.title}
                  </h3>
                  <p className="text-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Anonymous Message */}
        <section className={cardClass}>
          <h2 className="text-2xl font-semibold text-heading mb-3">
            Send an Anonymous Message
          </h2>
          <p className="text-foreground mb-4">
            Want to share feedback or ideas anonymously? Use the quick form below - no sign-in needed.
          </p>
          {/* Hidden static form so Netlify detects this form and captures submissions */}
          <form
            name="contact"
            data-netlify="true"
            netlify-honeypot="bot-field"
            hidden
            aria-hidden="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input name="bot-field" />
            <input name="name" />
            <input name="email" />
            <textarea name="message" />
          </form>
          <form
            name="contact"
            method="POST"
            action="/about?form=success"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out if you&apos;re human: <input name="bot-field" />
              </label>
            </p>
            <label className="flex flex-col gap-2 text-sm font-semibold text-[#1A1A1A]">
              Message
              <textarea
                name="message"
                rows={4}
                className="rounded-[10px] border border-[#E5E5E5] bg-white px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]/20"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-[10px] bg-[#1A1A1A] px-4 py-2 text-sm font-semibold text-white transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_10px_26px_-18px_rgba(0,0,0,0.35)]"
            >
              Send
            </button>
          </form>
        </section>

        {/* 8. Connect */}
        <section
          className="w-full rounded-[16px] bg-[#FAFAFA] text-center"
          style={{ padding: "80px 40px" }}
        >
          <h2 className="text-[42px] font-bold text-[#1A1A1A] mb-4">Let&apos;s Connect</h2>
          <p className="text-[18px] text-[#4A4A4A] mb-10">
            Always open to interesting conversations and opportunities
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            {socialLinks.map((link, index) => (
              <SocialButton
                key={link.text + index}
                icon={link.icon}
                text={link.text}
                href={link.href}
                ariaLabel={link.ariaLabel}
                classNameOverride="h-14 w-14 text-base"
              />
            ))}
          </div>
          <a
            href="mailto:damankumar1515@gmail.com"
            className="inline-flex items-center justify-center rounded-[10px] bg-[#1A1A1A] px-12 py-4 text-[18px] font-semibold text-white shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)] transition-transform duration-150 hover:-translate-y-1 hover:shadow-[0_14px_38px_-18px_rgba(0,0,0,0.35)]"
          >
            Get In Touch
          </a>
        </section>
      </div>
    </MainLayout>
  );
}

