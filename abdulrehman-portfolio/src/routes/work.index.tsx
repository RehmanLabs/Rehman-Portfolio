import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/portfolio/project-card';
import { Contact } from '@/components/portfolio/contact';
import { projects, pageMeta } from '@/data/projects';
export const Route = createFileRoute('/work/')({ head: () => pageMeta('Work — Design & Development', 'Explore six detailed software development and UI/UX concept case studies by Abdulrehman.'), component: Work });
function Work() {
 const [filter,setFilter] = useState('All work');
 const visible = projects.filter(p => filter === 'All work' || p.category === filter);
 return <><section className="container-wide page-intro reveal"><div className="section-label">The portfolio / 06 concepts</div><h1>Thoughtful design.<br/><span className="text-primary">Purposeful code.</span></h1><p>A collection of ideas exploring how digital products can look better,<br className="hidden sm:inline"/> work smarter, and feel more human.</p></section><section className="container-wide work-section"><div className="work-toolbar"><div className="filter-tabs" aria-label="Filter projects">{['All work','Development','UI/UX Design'].map(item => <Button key={item} variant={item === filter ? 'secondary' : 'ghost'} onClick={() => setFilter(item)} aria-pressed={item === filter}>{item}<span className="filter-count">{item === 'All work' ? '06' : '03'}</span></Button>)}</div><span className="section-subtitle" aria-live="polite">{visible.length} concept projects</span></div><div className="project-grid">{visible.map(p => <ProjectCard key={p.slug} project={p} index={projects.indexOf(p)}/>)}</div><p className="concept-note">Independent concept studies. These explore proposed experiences, not completed client engagements.</p></section><Contact/></>;
}
