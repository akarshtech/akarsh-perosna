'use client';

import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { useAtmosphere } from '@/context/AtmosphereContext';

function Link({ project }: { project: Project }) { return <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer">VIEW PROJECT <ArrowUpRight size={14} /></a>; }
function Image({ project }: { project: Project }) { return <a className="project-image" href={project.url} target="_blank" rel="noopener noreferrer"><img src={project.image} alt={project.name} loading="lazy" /><span className="image-cta">OPEN ↗</span></a>; }
function Meta({ project }: { project: Project }) { return <div className="project-meta mono"><span>{project.number} / 08</span><span>{project.category}</span><span>{project.year}</span></div>; }

export default function ProjectShowcase({ projects }: { projects: Project[] }) {
  const { mode } = useAtmosphere();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const cards = Array.from(section.querySelectorAll<HTMLElement>('.project-orbit-card'));
    let frame = 0;

    const update = () => {
      frame = 0;
      const distance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.max(0, Math.min(1, -section.getBoundingClientRect().top / distance));
      const galleryRadius = Math.min(window.innerWidth * 1.15, 1120);
      const rotation = progress * Math.PI * 2;
      cards.forEach((card, index) => {
        const angle = (index / cards.length) * Math.PI * 2 - rotation;
        const depth = Math.cos(angle);
        const side = Math.sin(angle);
        const frontness = Math.max(0, depth);
        card.style.setProperty('--orbit-x', `${side * galleryRadius}px`);
        card.style.setProperty('--orbit-y', `${(1 - depth) * 52}px`);
        card.style.setProperty('--orbit-z', `${depth * galleryRadius}px`);
        card.style.setProperty('--orbit-scale', (0.72 + frontness * 0.28).toFixed(3));
        card.style.setProperty('--orbit-rotate', `${side * 13}deg`);
        card.style.setProperty('--orbit-opacity', (0.48 + frontness * 0.52).toFixed(3));
        card.style.zIndex = String(Math.round((depth + 1) * 100));
      });
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(frame); };
  }, [mode, projects.length]);

  return <section ref={sectionRef} aria-label="Project showcase" className={`project-showcase project-showcase-${mode}`}><div className="project-orbit-sticky"><div className="project-orbit-track">{projects.map((project) => <div className="project-orbit-card" key={project.number}>{mode === 'studio' ? <StudioProject project={project} /> : mode === 'raw' ? <RawProject project={project} /> : <EditorialProject project={project} />}</div>)}</div></div></section>;
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
