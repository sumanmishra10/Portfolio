import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '../router';

const ProjectEntry = ({ project, detailed = false, imageFirst = false }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group border-t border-[color:var(--line)] py-10 last:border-b"
    >
      <div className="label muted flex items-center justify-between pb-7">
        <span>{project.index}</span>
        <span className="hidden sm:block">{project.meta}</span>
        <span>{project.year}</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-center lg:gap-14">
        <div className={imageFirst ? 'lg:order-2' : ''}>
          <h3 className="display text-[clamp(1.8rem,3.8vw,2.9rem)]">{project.title}</h3>
          <p className="muted mt-2 text-[15px]">{project.subtitle}</p>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed">{project.description}</p>

          {detailed && (
            <ul className="mt-5 space-y-2 text-[14px] leading-relaxed">
              {project.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-px w-3 flex-shrink-0 bg-current opacity-40" />
                  <span className="muted">{point}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>

          {detailed ? (
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm"
            >
              <span className="ulink">Discuss a project like this</span>
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <Link to="/work" className="mt-7 inline-flex items-center gap-2 text-sm">
              <span className="ulink">View project</span>
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>

        <figure className={`overflow-hidden border border-[color:var(--line)] ${imageFirst ? 'lg:order-1' : ''}`}>
          <div className="overflow-hidden">
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
            />
          </div>
          <figcaption className="label-xs muted flex items-center justify-between px-4 py-3">
            <span>{project.meta}</span>
            <span>{project.credit}</span>
          </figcaption>
        </figure>
      </div>
    </motion.article>
  );
};

export default ProjectEntry;
