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
    embedLink: "https://open.spotify.com/embed/track/1Jsos1mzwTwYGOndYN5h8V?si=fbc946326ea543d9",
    tag: "Hip Hop",
  },
  {
    title: "Tune Maari Entriyaan",
    artist: "Various Artists",
    embedLink: "https://open.spotify.com/embed/track/5kg1GacbhgQfLcbgOBRO9c?si=06e2252b3da946aa",
    tag: "Bollywood Electronic",
  },
  {
    title: "In my feelings",
    artist: "Drake",
    embedLink: "https://open.spotify.com/embed/track/2G7V7zsVDxg1yRsu7Ew9RJ?si=a762c89547c04c1f",
    tag: "Rap",
  },
  {
    title: "Rakhlo Tum chupaake",
    artist: "Arpit Bala",
    embedLink: "https://open.spotify.com/embed/track/5nXmr6ypbTYjhLR3lXSPyc?si=18110693c81a4d1b",
    tag: "Indie Pop",
  },
  {
    title: "Pink + White",
    artist: "Frank Ocean",
    embedLink: "https://open.spotify.com/embed/track/1Jsos1mzwTwYGOndYN5h8V",
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
              <div key={track.title} className="rounded-xl overflow-hidden">
                <iframe
                  src={track.embedLink}
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-xl"
                />
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
            method="POST"
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
            // netlify-honeypot="bot-field"
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

