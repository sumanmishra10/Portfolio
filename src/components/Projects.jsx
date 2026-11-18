import React from 'react';
import { projects } from '../data';
import ProjectEntry from './ProjectEntry';
import SectionHeading from './SectionHeading';
import { Link } from '../router';
import { ArrowUpRight } from 'lucide-react';

const Projects = ({ limit = 3 }) => {
  const visible = projects.slice(0, limit);

  return (
    <section id="projects" className="band line-t py-20 sm:py-28">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            label="Selected Work"
            title="Built, Shipped, Running"
            intro="Enterprise lending platforms and mobile products — the workflows, the data behind them, and the interface people actually use."
          />

          <Link
            to="/work"
            className="group inline-flex shrink-0 items-center gap-2 pb-1 text-sm"
          >
            <span className="ulink">All projects</span>
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-14">
          {visible.map((project, index) => (
            <ProjectEntry key={project.slug} project={project} imageFirst={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
