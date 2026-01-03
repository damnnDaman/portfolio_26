import { Experience } from "@/types/experience";

export const extracurricularExperiences: Experience[] = [
  {
    title: "People’s Choice Award — OPS Hackathon x Microsoft",
    duration: "2025",
    company: "OPS Hackathon",
    description:
      "Won with highest votes among 50+ teams. Built a real-time Ontario-US trade data platform: StatCan API ingestion, Delta Lake ETL, KPI generation, and GNN forecasting for trade risk.",
    image: "/experience/OPS-hack.jpeg",
    category: "achievement",
    skills: ["Microsoft Fabric", "Power BI", "Delta Lake", "APIs", "GNN", "ETL"],
  },
  {
    title: "3rd Place — GDSC Hack 2025 (Speak Easy)",
    duration: "2025",
    company: "GDSC Hacks",
    description:
      "Built Speak Easy, a real-time ASL communication mobile app; cross-platform pipeline for speech↔ASL with classifiers and TTS.",
    image: "/projects/speak-easy.png",
    category: "achievement",
    skills: ["React Native", "ML", "Real-time", "TTS", "Computer Vision"],
  },
  {
    title: "Entrance Scholarship",
    duration: "2022",
    company: "University of Guelph",
    description:
      "Awarded for graduating high school with 90%+; recognized academic excellence entering Software Engineering.",
    image: "/experience/Uog.png",
    category: "achievement",
    skills: ["Academic Excellence"],
  },
  {
    title: "Highest Distinction — Computer Science",
    duration: "2022",
    company: "High School",
    description:
      "Graduated top of cohort in Computer Science, demonstrating mastery of programming fundamentals and theory.",
    image: "/experience/distinction.jpeg",
    category: "achievement",
    skills: ["Computer Science", "Academics"],
  },
  {
    title: "Certificates",
    duration: "Ongoing",
    company: "Self-paced",
    description:
      "Completed certifications: Figma for UX Design, DevOps, AI and ML algorithms, and more.",
    image: "/experience/certificate.jpeg",
    category: "achievement",
    skills: ["UX Design", "DevOps", "AI/ML"],
  },
];

