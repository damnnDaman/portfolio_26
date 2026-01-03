export interface Experience {
  title: string;
  duration: string;
  company: string;
  description: string;
  image?: string;
  skills?: string[];
  category?: "extracurricular" | "achievement";
}

