import ExperienceCard from "../ui/ExperienceCard";
import { Experience } from "@/types/experience";

interface WorkExperienceProps {
  experiences: Experience[];
}

export default function WorkExperience({ experiences }: WorkExperienceProps) {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-[color:var(--heading)]">Technical Work Experience</h2>
        <p className="text-[color:var(--foreground)]">
          Roles where I shipped features, owned outcomes, and collaborated across teams.
        </p>
      </div>
      <div className="grid gap-6 md:gap-8 md:grid-cols-2">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            experience={experience}
            imageObjectFit="contain"
            imagePadding="p-4"
          />
        ))}
      </div>
    </section>
  );
}

