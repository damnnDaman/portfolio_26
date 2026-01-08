import ExperienceCard from "../ui/ExperienceCard";
import { Experience } from "@/types/experience";

interface ExtracurricularExperienceProps {
  experiences: Experience[];
}

export default function ExtracurricularExperience({
  experiences,
}: ExtracurricularExperienceProps) {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-[color:var(--heading)]">Extracurricular & Achievements</h2>
        <p className="text-[color:var(--foreground)]">
          Community, competitions, and initiatives where I built beyond the classroom.
        </p>
      </div>
      <div className="grid gap-6 md:gap-8 md:grid-cols-2">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            experience={experience}
            imageObjectFit="cover"
            imagePadding="p-0"
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

