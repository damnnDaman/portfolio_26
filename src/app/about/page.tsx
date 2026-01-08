"use client";
import MainLayout from "../../../components/sections/MainLayout";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const heroImages = ["/about/me.jpeg", "/about/me2.png", "/about/me3.png", "/about/me4.png"];

export default function About() {
  const [slideIndex, setSlideIndex] = useState(0);
  const images = useMemo(() => heroImages, []);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <MainLayout>
      <div className="">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[color:var(--heading)] mb-4">
            About Daman
          </h1>
        </div>

        <div className="space-y-12">
          <section className="relative bg-white rounded-lg shadow-md border border-gray-100 p-8 overflow-hidden">
            <div className="blob blob--pink -top-24 -left-28" aria-hidden="true" />
            <div className="blob blob--blue top-12 right-[-120px]" aria-hidden="true" />
            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div className="space-y-4 text-[color:var(--foreground)]">
                <p>
                  <strong>Hi! I’m Daman</strong>, a third-year Software Engineering student at
                  the University of Guelph. I’ve always been curious about
                  computers, AI, and what once felt like “magic” — and today, AI
                  feels like that magic coming to life. This curiosity drives me
                  to constantly learn and explore new technologies. I also enjoy
                  visiting different company offices to gain real-world exposure
                  and better understand how technology is applied beyond the
                  classroom.
                </p>
               
                <p>
                  Outside of academics, I enjoy playing <strong>badminton</strong> and <strong>cricket</strong>,
                  and during the summer you’ll often find me <strong>cycling</strong> around my
                  neighbourhood every couple of days. My current focus is on
                  strengthening my <strong>full-stack development</strong> and <strong>AI/ML</strong> skills, and
                  I’m actively seeking internship or co-op opportunities where I
                  can continue learning and building impactful solutions. Feel
                  free to reach out if you’d like to connect or collaborate!
                </p>
              </div>
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg min-h-[320px]">
                {images.map((src, idx) => (
                  <Image
                    key={src}
                    src={src}
                    alt="Daman gallery"
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={`object-cover transition-opacity duration-700 ease-in-out ${
                      idx === slideIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>

          <h2 className="text-2xl font-semibold mb-6 text-[color:var(--heading)]">
            Hobbies and Interests
          </h2>

          <section className="relative bg-white rounded-lg shadow-md border border-gray-100 p-8 overflow-hidden">
            <div className="blob blob--yellow -top-16 left-[-100px]" aria-hidden="true" />
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {[
                 {
                  title: "Competitions",
                  img: "/about/volunteering.webp",
                  desc:
                    "Hackathons and coding comps push me to prototype fast and learn faster.",
                },
                {
                  title: "Volunteering",
                  img: "/about/competitions.webp",
                  desc:
                    "Giving back through mentorship and events keeps me grounded and connected.",
                },
                {
                  title: "Badminton",
                  img: "/about/badminton.jpeg",
                  desc:
                    "Fast rallies keep me sharp and de-stressed after long coding sessions.",
                },
                {
                  title: "Outing",
                  img: "/about/outing.jpeg",
                  desc:
                    "Love to go out and explore new places and try new things.",
                },
                {
                  title: "Video Editing",
                  img: "/about/video-edit.webp",
                  desc:
                    "I love crafting tight cuts, smooth transitions, and on-beat audio for pro-grade demos.",
                },
              
               
                {
                  title: "South Indian Food",
                  img: "/about/south-indian.jpeg",
                  desc:
                    "Love to eat South Indian food and try new recipes.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-xl border border-gray-100 shadow-sm overflow-hidden transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-gradient-to-br from-white to-gray-50"
                >
                  <div className="relative w-full h-52 bg-gray-100 overflow-hidden">
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
                    <h3 className="text-lg font-semibold text-[color:var(--heading)] group-hover:text-blue-700 transition-colors">
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
        </div>
      </div>
    </MainLayout>
  );
}

