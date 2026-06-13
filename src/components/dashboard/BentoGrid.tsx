"use client";

import { motion } from "framer-motion";

export default function BentoGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
     className="
  grid
  auto-rows-[220px]
  gap-4
  grid-cols-1
  md:grid-cols-2
  lg:grid-cols-4
"
    >
      {children}
    </motion.div>
  );
}