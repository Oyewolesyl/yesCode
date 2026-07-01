import type { Project } from "../data/projects";
import { MediaFrame } from "./MediaFrame";

type Props = {
  project: Project;
  onOpen: (slug: string) => void;
};

export function ProjectCard({ project, onOpen }: Props) {
  return (
    <article className="project-card">
      <div className="project-logo-panel">
        <img src={project.logo} alt={project.title} />
      </div>
      <div>
        <span>{project.category}</span>
        <MediaFrame src={project.image} className="card-proof" />
        <p>{project.summary}</p>
        <div className="stack">
          {project.tools.slice(0, 4).map((item) => (
            <small key={item}>{item}</small>
          ))}
        </div>
        <div className="card-actions">
          <button className="text-button" onClick={() => onOpen(project.slug)}>
            case
          </button>
          <a className="text-button live" href={project.liveUrl} target="_blank" rel="noreferrer">
            live site
          </a>
        </div>
      </div>
    </article>
  );
}
