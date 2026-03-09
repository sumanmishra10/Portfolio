import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Database, Server, Smartphone, LayoutDashboard } from 'lucide-react';

const projects = [
  {
    title: 'Loan Origination System',
    description: 'Developed an ASP.NET MVC application with stored procedures and query optimization for loan processing workflows.',
    tags: ['ASP.NET MVC', 'MSSQL', 'Stored Procedures', 'Optimization'],
    icon: Database,
  },
  {
    title: 'Disbursement System',
    description: 'Created a loan workflow application with status tracking automation to streamline the disbursement cycle.',
    tags: ['Backend', 'Workflow Automation', 'UI tracking'],
    icon: LayoutDashboard,
  },
  {
    title: 'Loan Public Portal',
    description: 'Built a public-facing web application giving customers insight into their loan status and critical information.',
    tags: ['Frontend', 'Responsive UI', 'Data Visualization'],
    icon: Server,
  },
  {
    title: 'Hospital Management System',
    description: 'Developed a Flutter-based HMS mobile application featuring patient and appointment modules along with a robust backend architecture.',
    tags: ['Flutter', 'Mobile', 'API Integration', 'Healthcare'],
    icon: Smartphone,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: 'spring', stiffness: 100 }
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Decorative background gradients */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:flex md:items-end md:justify-between space-y-4 md:space-y-0"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
            <p className="mt-6 text-text-muted max-w-2xl text-lg">
              A selection of enterprise applications and mobile platforms I've architected and built.
            </p>
          </div>
          
          <a 
            href="https://github.com/suman6mishra" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors group"
          >
            View GitHub 
            <ExternalLink size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="glass p-8 rounded-3xl group border border-white/5 hover:border-primary/50 relative overflow-hidden h-full flex flex-col"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur" />
                
                <div className="relative z-10 flex-grow">
                  <div className="w-14 h-14 rounded-2xl bg-surface border border-white/10 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">
                    <Icon className="text-primary" size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-muted/90 leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>
                
                <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase bg-white/5 text-text-muted border border-white/10 group-hover:border-primary/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
