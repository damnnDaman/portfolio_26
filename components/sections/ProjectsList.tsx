import ProjectCard from "../ui/ProjectCard";
import { Project } from "@/types/project";

interface ProjectsListProps {
  projects: Project[];
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <section
      className="px-5 sm:px-10"
      style={{ paddingTop: 0, paddingBottom: 80 }}
    >
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

