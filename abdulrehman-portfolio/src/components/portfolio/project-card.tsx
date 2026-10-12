import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
 return <article className="project"><Link to="/work/$slug" params={{ slug: project.slug }} aria-label={`View ${project.name} case study`}>
 <div className="project-image-wrap"><img src={project.image} alt={`${project.name} ${project.type} concept`} width={1280} height={960} loading="lazy" className="project-image"/><span className="project-number">0{index + 1} / {project.category}</span></div>
 <div className="project-topline"><h3>{project.name}</h3><span className="project-arrow"><ArrowUpRight size={17}/></span></div><p>{project.subtitle}</p></Link>
 <div className="project-tags"><span className="project-tag">Concept project</span>{project.tags.map(tag => <span className="project-tag" key={tag}>{tag}</span>)}</div></article>;
}
