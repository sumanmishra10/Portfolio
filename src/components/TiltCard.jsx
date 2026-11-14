import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltCard = ({ children, className = '', max = 7 }) => {
  const ref = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const spotX = useMotionValue(50);
  const spotY = useMotionValue(50);
  const smoothX = useSpring(rotateX, { stiffness: 180, damping: 20 });
  const smoothY = useSpring(rotateY, { stiffness: 180, damping: 20 });
  const spotlight = useTransform(
    [spotX, spotY],
    ([x, y]) => `radial-gradient(460px circle at ${x}% ${y}%, rgba(96, 165, 250, 0.18), transparent 62%)`
  );

  const handleMove = (event) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * max * 2);
    rotateX.set(-(py - 0.5) * max * 2);
    spotX.set(px * 100);
    spotY.set(py * 100);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    spotX.set(50);
    spotY.set(50);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={{ rotateX: smoothX, rotateY: smoothY, transformPerspective: 1100 }}
      className={`group relative [transform-style:preserve-3d] ${className}`}
    >
      <motion.div
        aria-hidden="true"
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 z-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative z-10 flex h-full flex-col [transform:translateZ(38px)]">{children}</div>
    </motion.div>
  );
};

export default TiltCard;
