import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 420, damping: 34, mass: 0.35 });
  const smoothY = useSpring(y, { stiffness: 420, damping: 34, mass: 0.35 });

  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (!finePointer) return undefined;

    setEnabled(true);
    document.documentElement.classList.add('has-custom-cursor');

    const handleMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);

      const target = event.target instanceof Element ? event.target.closest('a, button, [data-cursor]') : null;
      setHovering(Boolean(target));
    };

    const handleLeave = () => setVisible(false);
    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);

    window.addEventListener('pointermove', handleMove, { passive: true });
    window.addEventListener('pointerdown', handleDown);
    window.addEventListener('pointerup', handleUp);
    document.addEventListener('pointerleave', handleLeave);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerdown', handleDown);
      window.removeEventListener('pointerup', handleUp);
      document.removeEventListener('pointerleave', handleLeave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: smoothX, y: smoothY }}
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden mix-blend-difference md:block"
    >
      <motion.div
        animate={{
          width: hovering ? 56 : 12,
          height: hovering ? 56 : 12,
          opacity: visible ? 1 : 0,
          scale: pressed ? 0.8 : 1,
        }}
        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
        className="rounded-full bg-cream"
        style={{ x: '-50%', y: '-50%' }}
      />
    </motion.div>
  );
};

export default CustomCursor;
