import React from 'react';
import { motion } from 'motion/react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: string;
  className?: string;
  id?: string;
  key?: React.Key;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className = '',
  id,
}: FadeInProps) {
  // Use motion.create for dynamic element types
  // fallback to motion.div if something fails, but standard is motion.create(as)
  const MotionComponent = (motion as any).create
    ? (motion as any).create(as)
    : (motion as any)[as] || motion.div;

  return (
    <MotionComponent
      id={id}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
