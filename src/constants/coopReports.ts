import { CoopReport } from "@/types/coopReport";

// Seed data; update with your real co-op reports. Add/remove entries as needed.
export const coopReports: CoopReport[] = [
 
  {
    slug: "ontario-gov-ux-coop",
    title: "UI/UX Designer & Product Manager Co-op",
    term: "Fall 2025 Work Term",
    role: "UI/UX Designer & Product Manager Co-op",
    employer: "Ontario Government (Ontario Public Service)",
    location: "Ontario, Canada (hybrid)",
    coverImage: "/experience/ontario.png",
    skills: ["UI/UX", "Product Management", "Figma", "Salesforce", "Power BI", "Microsoft Fabric", "Azure DevOps", "Public Speaking", "Team Collaboration", "Government Operations", "Product Thinking"],
   
    employerInfo: {
      about:
        "Digital Branch Solutions (Land & Resources Cluster) modernizes Ontario’s Water Well program: tagging every well in the province, maintaining end-to-end records, and streamlining licensing for technicians, contractors, and managers—built on Salesforce CRM for compliant, reliable public services.",
      image: { alt: "Ontario Government digital services", url: "/experience/ontario.png" },
    },
    jobDescription:
      "Served as a hybrid UI/UX Designer and Product Manager—shaping requirements, producing design mockups and user flows for public-sector services, documenting decisions and workflows, coordinating delivery, and supporting Salesforce CRM processes while building a Power BI dashboard.",
    images: [
     
      { alt: "Figma mockups", url: "/co-op/figma.png" },
      { alt: "Hackathon snapshot", url: "/experience/OPS-hack.jpeg" },
      { alt: "Christmas Celebration", url: "/co-op/party.jpeg" },
    ],
    tags: ["UI/UX", "Public Sector", "Product Management", "OPS Hackathon 2025", "Salesforce", "Power BI"],
    
  
    goalDetails: [
      {
        title: "Strengthen Figma and user-centered design",
        actionPlan:
          "Worked closely with the UX Lead to strengthen Figma and user-centered design through hands-on learning; built an end-to-end Ontario Job Portal prototype and refined designs weekly with feedback, focusing on accessibility, usability, and consistent patterns. Completed a full interactive Figma prototype; incorporated weekly UX Lead feedback; demonstrated improved usability, accessibility, and confidence in design decisions.",
        image: { alt: "Figma user-centered design exploration", url: "/co-op/figma.png" },
      },
      {
        title: "Contribute to Water Wells Modernization & grow product sense",
        actionPlan:
          "Supported the Water Wells Modernization Project by assisting with wireframes, workflows, and user journeys; learned how Salesforce CRM supports efficient data management; applied communication and teamwork skills with cross-functional teams. Contributed wireframes and workflow documentation; gained practical Salesforce CRM knowledge; demonstrated understanding of stakeholder and user needs and applied product thinking.",
       image: { alt: "Water Wells modernization flow", url: "/co-op/salesforce.png" },
      },
      {
        title: "Build patience, resilience, and workplace comfort",
        actionPlan:
          "Adapted to Canadian workplace culture by improving professional communication and consistency; attended networking events and volunteered as a GovTech Student Champion hosting events, collaborating with students, and creating videos. Increased engagement in workplace and networking events; improved punctuality and consistency; successfully contributed to GovTech initiatives; greater confidence with colleagues and managers.",
      image: { alt: "Team collaboration moment", url: "/co-op/sitting-on-chair.jpeg" },
      },
      {
        title: "Improve public speaking and confidence",
        actionPlan:
          "Actively participated more during meetings, updates, and daily conversations; used GovTech activities and student engagement events to practice public speaking; focused on improving clarity and confidence. Increased verbal participation in meetings; improved confidence sharing ideas and updates; positive feedback from peers and supervisors; reduced hesitation speaking in groups.",
        image: { alt: "Team presentation snapshot", url: "/co-op/team.jpeg" },
      },
      {
        title: "Understand government operations and project purpose",
        actionPlan:
          "Engaged with leaders (CIO and LRC) to understand how ministries collaborate and why projects like Water Wells matter; focused on learning the business reasons behind initiatives and how digital projects support public services. Improved understanding of Ontario Government operations; able to explain purpose and impact of LRC-led projects; demonstrated awareness of cross-ministry collaboration and how individual work supports public outcomes.",
       image: { alt: "Government service value chain sketch", url: "/co-op/value-chain.png" },
      },
    ],
    acknowledgments: [
      "A Huge Thank You to the Ontario Government team, Adeeb Meer; Somas; Aidan; Pushkar; Shaheer Khan for the opportunity to work with you all.",
    ],
  },
  // {
  //   slug: "ontario-gov-ux-coop",
  //   title: "UI/UX Designer & Product Manager Co-op",
  //   term: "Winter 2026 Work Term",
  //   role: "UI/UX Designer & Product Manager Co-op",
  //   employer: "Ontario Government (Ontario Public Service)",
  //   location: "Ontario, Canada (hybrid)",
  //   coverImage: "/experience/ontario.png",
  //   skills: ["UI/UX", "Product Management", "Figma", "Salesforce", "Power BI", "Azure DevOps"],
  //   employerInfo: {
  //     about:
  //       "Digital Branch Solutions (Land & Resources Cluster) modernizes Ontario’s Water Well program: tagging every well in the province, maintaining end-to-end records, and streamlining licensing for technicians, contractors, and managers—built on Salesforce CRM for compliant, reliable public services.",
  //     image: { alt: "Ontario Government digital services", url: "/experience/ontario.png" },
  //   },
  //   jobDescription:
  //     "Running"
    // images: [
     
    //   { alt: "Figma mockups", url: "/co-op/figma.png" },
    //   { alt: "Hackathon snapshot", url: "/experience/OPS-hack.jpeg" },
    // ],
    // abstract:
    //   "I spent my work term with the Ontario Government focused on modernizing services and learning UX craft, growing in design, collaboration, and public-sector impact.",
    // tags: ["UI/UX", "Public Sector", "Product Management", "OPS Hackathon 2025", "Salesforce", "Power BI"],
    
    // highlights: [
    //   "Delivered ontario government centralized designed wireframes and prototyped Ontario-Job Board and implemented feedback thoughtfully.",
    //   "Supported Salesforce CRM processes + Agentforce Research.",
    //   "Participated in OPS hackathon - built a Microsoft Fabric based end-to-end (planning, coordination, delivery) project.",
    //   "Built a Power BI dashboard with the team; produced mockups, solution, and video that won the award.",
    //   "Stayed reliable on timelines and punctual for all meetings.",
    // ],
    // takeaways: [
    //   "Rapid feedback loops in Figma improved usability and polish.",
    //   "Structured task plans kept design delivery on schedule.",
    //   "Cross-functional hackathon work sharpened collaboration and delivery.",
    //   "Understanding policy and operational constraints led to better designs.",
    //   "Next steps: pursue a UX Professional Design Certificate, ship weekly practice use cases, and keep building public-speaking reps.",
    // ],
    // goalDetails: [
    //   {
    //     title: "Strengthen Figma and user-centered design",
    //     reflection:
    //       "Iterated quickly with UX Lead, applying design principles and accessibility considerations; weekly feedback cycles improved polish and usability.",
    //     conclusion:
    //       "Achieved; confident in Figma, component reuse, and user-centered workflows.",
    //     image: { alt: "Figma user-centered design exploration", url: "/co-op/figma.png" },
    //   },
    //   {
    //     title: "Contribute to Water Wells Modernization & grow product sense",
    //     reflection:
    //       "Delivered wireframes and workflow maps, learned Salesforce CRM context, and tied design decisions to service outcomes; built comfort framing requirements.",
    //     conclusion:
    //       "In progress; ready to deepen delivery impact with stronger product ownership next term.",
    //     image: { alt: "Water Wells modernization flow", url: "/co-op/salesforce.png" },
    //   },
    //   {
    //     title: "Build patience, resilience, and workplace comfort",
    //     reflection:
    //       "Adapted to Canadian workplace norms, stayed punctual and dependable, and learned to navigate feedback loops constructively.",
    //     conclusion:
    //       "Achieved; operating comfortably within team rhythms and expectations.",
    //     image: { alt: "Team collaboration moment", url: "/co-op/sitting-on-chair.jpeg" },
    //   },
    //   {
    //     title: "Improve public speaking and confidence",
    //     reflection:
    //       "Participated in meetings, GovTech events, and demos; practiced concise storytelling though larger presentations remain a growth area.",
    //     conclusion:
    //       "Progressing; confidence improving, plan to keep building through short demos and lightning talks.",
    //     image: { alt: "Team presentation snapshot", url: "/co-op/team.jpeg" },
    //   },
    //   {
    //     title: "Understand government operations and project purpose",
    //     reflection:
    //       "Engaged with leaders to connect day-to-day design choices to policy and operational constraints; translated objectives into clearer user flows.",
    //     conclusion:
    //       "Achieved; stronger alignment with public-sector goals informs design and product decisions.",
    //     image: { alt: "Government service value chain sketch", url: "/co-op/value-chain.png" },
    //   },
    // ],
  //   ,acknowledgments: [
  //     "Mentors and teammates for UX best practices, Salesforce context, and hackathon partnership.",
  //   ],
  // },
  
];

