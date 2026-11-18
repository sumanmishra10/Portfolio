import React from 'react';
import PageHeader from '../components/PageHeader';
import ProjectEntry from '../components/ProjectEntry';
import { projects } from '../data';

const WorkPage = () => {
  return (
    <>
      <PageHeader
        label="Selected Work"
        title="Every project, in detail"
        intro="Enterprise lending platforms and mobile products. Client work is under NDA, so the imagery below is licensed stock in place of real screens."
      />

      <section className="band pb-24">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
          {projects.map((project, index) => (
            <ProjectEntry key={project.slug} project={project} detailed imageFirst={index % 2 === 1} />
          ))}

          <p className="label-xs muted mt-8 max-w-2xl leading-relaxed">
            Photography: Pexels and Flickr contributors, used under their respective free licences. Not screenshots of
            client systems.
          </p>
        </div>
      </section>
    </>
  );
};

export default WorkPage;
