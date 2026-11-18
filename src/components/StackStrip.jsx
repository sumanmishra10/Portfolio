import React from 'react';
import { motion } from 'framer-motion';

const stack = [
  { name: 'C#', icon: '/assets/skills/csharp.svg' },
  { name: '.NET', icon: '/assets/skills/dotnet.svg' },
  { name: 'React', icon: '/assets/skills/react.svg' },
  { name: 'JavaScript', icon: '/assets/skills/javascript.svg' },
  { name: 'Tailwind', icon: '/assets/skills/tailwind.svg' },
  { name: 'Flutter', icon: '/assets/skills/flutter.svg' },
  { name: 'SQL Server', icon: '/assets/skills/sqlserver.svg' },
  { name: 'PostgreSQL', icon: '/assets/skills/postgresql.svg' },
  { name: 'Git', icon: '/assets/skills/git.svg' },
  { name: 'Cloudflare', icon: '/assets/skills/cloudflare.svg' },
];

const StackStrip = ({ label = 'Daily stack', dark = false }) => {
  const cell = dark ? 'bg-ink hover:bg-cream' : 'bg-cream hover:bg-ink';

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8 }}
    >
      <p className="label muted">{label}</p>
      <div className="mt-5 grid grid-cols-5 gap-px border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-10">
        {stack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            title={tech.name}
            className={`flex h-20 items-center justify-center transition-colors duration-300 ${cell}`}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              width="30"
              height="30"
              loading="lazy"
              className="h-7 w-7 object-contain grayscale transition-all duration-300 hover:grayscale-0"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default StackStrip;
