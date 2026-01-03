import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    tags: ["React", "Python", "Flask", "Gemini", "Batching", "Caching"],
    title: "Code Comprehension",
    description:
      "Automated multi-language code summarization tool with React, Python, and Gemini; batching + caching boosted real-time analysis throughput 3X and cut manual review time by 40%.",
    image: "/projects/code-comprehension.png",
    moreInfoLink: "",
    githubLink: "https://github.com/damnnDaman/codeComprehension",
  },
 
  {
    tags: ["GDSC HACK 2k25","React Native", "Expo", "Flask", "AWS EC2", "MediaPipe", "Gemini TTS"],
    title: "Speak Easy",
    description:
      "Cross-platform app converting speech to 2D ASL animations and ASL gestures to speech in real time; custom classifier + Gemini TTS; 3rd place at GDG Hacks 2025.",
    image: "/projects/speak-easy.png",
    moreInfoLink: "https://youtu.be/X8LKZt2LEmg",
    githubLink: "https://devpost.com/software/speakeasy-8nxi01",
  },
  {
    tags: ["Python", "Census Data", "Matplotlib", "Seaborn", "NumPy", "Agile"],
    title: "Canadian Jobs Data Analysis",
    description:
      "Analyzed Statistics Canada job vacancy data, led Agile stand-ups, and visualized labor trends with Matplotlib/Seaborn to drive data-informed decisions.",
    image: "/projects/jobs-analysis.png",
    moreInfoLink: "",
    githubLink: "https://github.com/damnnDaman/CanadianJobs_DataAnalysis",
  },
  {
    tags: ["Java", "Swing", "OOP", "Exception Handling"],
    title: "Wealth EPortfolio",
    description:
      "Java GUI for managing stock and mutual fund portfolios—buy/sell, gains, search—with robust OOP design, modularity, and graceful error handling.",
    image: "/projects/wealth.png",
    moreInfoLink: "",
    githubLink: "https://github.com/damnnDaman/Wealth_Eportfolio",
  },
  {
    tags: ["C#", "Unity", "Testing", "QA Automation", "Legacy Systems"],
    title: "Multi-Mode Calculator Reliability",
    description:
      "Improved reliability of a legacy Regular/Scientific/Accountant calculator by strengthening error handling and automated tests (Unity Test Framework). Applied boundary, data-flow, and basis testing to cut defects and stabilize complex math/stat ops.",
    image: "/projects/project.png",
    moreInfoLink: "",
    githubLink: "https://github.com/damnnDaman/Legacy_Calculator_Project",
  },
  {
    tags: ["C", "Python", "ctypes", "Asciimatics", "MySQL"],
    title: "vCard Contact Manager",
    description:
      "Built a vCard (.vcf) manager with a custom C parsing/validation library bridged into Python via ctypes. Added a text-based Asciimatics UI and optional MySQL storage for querying contact metadata.",
    image: "/projects/project.png",
    moreInfoLink: "",
    githubLink: "https://github.com/damnnDaman/Contactsbook-with-UI-",
  },
];

