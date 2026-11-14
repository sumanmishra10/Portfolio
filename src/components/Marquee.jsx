import React from 'react';
import { Sparkle } from 'lucide-react';

const stack = [
  'ASP.NET Core',
  'C#',
  'React',
  'SQL Server',
  'PostgreSQL',
  'Flutter',
  'Dart',
  'Riverpod',
  'Hive',
  'Tailwind CSS',
  'REST APIs',
  'Background Services',
  'IIS',
  'Cloudflare',
  'Git',
  'TFS',
  'Query Optimization',
];

const Marquee = () => {
  return (
    <div className="relative border-y border-white/10 bg-white/[0.025] py-6">
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={copy === 1}>
              {stack.map((item) => (
                <span key={`${copy}-${item}`} className="flex items-center gap-10">
                  <span className="whitespace-nowrap font-mono text-sm uppercase tracking-[0.18em] text-text-muted/80">
                    {item}
                  </span>
                  <Sparkle size={14} className="shrink-0 text-primary/60" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
