"use client";

import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  animationFrom: { opacity: number; transform: string };
  animationTo: { opacity: number; transform: string };
  easing: number[];
  rootMargin?: string;
  onLetterAnimationComplete?: () => void;
  threshold?: number;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className,
  animationFrom,
  animationTo,
  delay = 0,
  easing,
}) => {
  return (
    <motion.span
      className={className}
      initial={animationFrom}
      animate={animationTo}
      transition={{ delay: delay / 1000, ease: easing }}
    >
      {text}
    </motion.span>
  );
};

export default SplitText;