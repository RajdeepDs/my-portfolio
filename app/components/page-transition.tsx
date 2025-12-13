"use client";

import { motion } from "motion/react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      animate={{
        opacity: 1,
        filter: "blur(0px)",
      }}
      initial={{
        opacity: 0,
        filter: "blur(14px)",
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
