import React from 'react';

const phrases = [
  'Open to remote work',
  'Banking systems',
  '.NET & React',
  'Flutter products',
  'Kathmandu, Nepal',
  'Better today than yesterday',
];

const Marquee = () => {
  return (
    <div className="band line-t line-b overflow-hidden py-4">
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {phrases.map((phrase) => (
                <span key={`${copy}-${phrase}`} className="flex items-center">
                  <span className="label whitespace-nowrap px-6">{phrase}</span>
                  <span className="text-clay">✦</span>
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
