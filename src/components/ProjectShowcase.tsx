import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { useAtmosphere } from '@/context/AtmosphereContext';

function Link({ project }: { project: Project }) { return <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer">VIEW PROJECT <ArrowUpRight size={14} /></a>; }
function Image({ project }: { project: Project }) { return <a className={`project-image project-image-${project.number}`} aria-label={`Open ${project.name} project`} href={project.url} target="_blank" rel="noopener noreferrer"><span className="project-art" aria-hidden="true"><span>{project.number}</span></span><span className="image-cta">OPEN ↗</span></a>; }
function Meta({ project }: { project: Project }) { return <div className="project-meta mono"><span>{project.number} / 08</span><span>{project.category}</span><span>{project.year}</span></div>; }

export default function ProjectShowcase({ projects }: { projects: Project[] }) {
  const { mode } = useAtmosphere();
  return <section aria-label="Project showcase" className={`project-showcase project-showcase-${mode}`}>{projects.map((project) => mode === 'studio' ? <StudioProject key={project.number} project={project} /> : mode === 'raw' ? <RawProject key={project.number} project={project} /> : <EditorialProject key={project.number} project={project} />)}</section>;
}

function EditorialProject({ project }: { project: Project }) {
  return <article className="editorial-project grain"><div className="section-shell"><div className="editorial-project-head"><div><Meta project={project} /><span className="project-label">{project.label}</span><h2>{project.name}</h2></div><span className="project-count">{project.number}</span></div><div className="editorial-project-grid"><Image project={project} /><div className="editorial-project-copy"><p>{project.description}</p><span>{project.category}</span><Link project={project} /></div></div></div></article>;
}

function StudioProject({ project }: { project: Project }) {
  return <article className="studio-project"><div className="section-shell"><div className="studio-project-grid"><Meta project={project} /><div className="studio-project-title"><span className="project-label">{project.label}</span><h2>{project.name}</h2></div><Image project={project} /><div className="studio-project-copy"><p>{project.description}</p><Link project={project} /></div></div></div></article>;
}

function RawProject({ project }: { project: Project }) {
  return <article className="raw-project"><div className="section-shell"><div className="raw-project-head"><span className="mono">PROJECT_{project.number}</span><span className="mono">{project.year}</span></div><div className="raw-project-grid"><div><h2>{project.name}</h2><div className="raw-facts mono"><span>LABEL // {project.label}</span><span>CATEGORY // {project.category}</span></div><p>{project.description}</p><Link project={project} /></div><Image project={project} /></div></div></article>;
}
