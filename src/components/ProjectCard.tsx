import type { Project } from "../data/projects";
import { MediaFrame } from "./MediaFrame";

type Props = {
  project: Project;
  onOpen: (slug: string) => void;
};

export function ProjectCard({ project, onOpen }: Props) {
  return (
    <article className="project-card">
      <MediaFrame src={project.image} />
      <div>
        <span>{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="stack">
          {project.tools.slice(0, 4).map((item) => (
            <small key={item}>{item}</small>
          ))}
        </div>
        <button className="text-button" onClick={() => onOpen(project.slug)}>
          read case study
        </button>
      </div>
    </article>
  );
}
