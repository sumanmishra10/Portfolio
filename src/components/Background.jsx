import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Background = () => {
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.3);
  const smoothX = useSpring(pointerX, { stiffness: 32, damping: 26, mass: 0.7 });
  const smoothY = useSpring(pointerY, { stiffness: 32, damping: 26, mass: 0.7 });
  const left = useTransform(smoothX, (value) => `${value * 100}%`);
  const top = useTransform(smoothY, (value) => `${value * 100}%`);

  useEffect(() => {
    const handlePointerMove = (event) => {
      pointerX.set(event.clientX / window.innerWidth);
      pointerY.set(event.clientY / window.innerHeight);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [pointerX, pointerY]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-bg" />

      <div className="animate-drift absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-primary/25 blur-[140px]" />
      <div className="animate-drift-slow absolute -right-48 top-1/3 h-[38rem] w-[38rem] rounded-full bg-indigo-500/20 blur-[150px]" />
      <div className="animate-drift absolute -bottom-56 left-1/3 h-[32rem] w-[32rem] rounded-full bg-cyan-400/10 blur-[150px]" />

      <motion.div
        style={{ left, top, x: '-50%', y: '-50%' }}
        className="absolute h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_65%)]"
      />

      <div className="vignette absolute inset-0" />
    </div>
  );
};

export default Background;
