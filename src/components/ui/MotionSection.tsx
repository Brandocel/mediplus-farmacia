import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** "up" (default) | "fade" | "left" */
  direction?: "up" | "fade" | "left";
}

const variants = {
  up:   { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } },
  fade: { hidden: { opacity: 0 },         visible: { opacity: 1 } },
  left: { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } },
};

export function MotionSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: MotionSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants[direction]}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
