export interface CoopReport {
  slug: string;
  title: string;
  term: string;
  role: string;
  employer: string;
  location?: string;
  coverImage?: string;
  // abstract?: string;
  tags?: string[];
  skills?: string[];
  goals?: string[];
  highlights?: string[];
  takeaways?: string[];
  acknowledgments?: string[];
  images?: { alt: string; url: string }[];
  employerInfo?: {
    about: string;
    image?: { alt: string; url: string };
  };
  jobDescription?: string;
  goalDetails?: {
    title: string;
    actionPlan?: string;
    measureOfSuccess?: string;
    reflection: string;
    // conclusion: string;
    image?: { alt: string; url: string };
  }[];
}

