"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function NavItem({
  label,
}: {
  label: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <motion.button
      onClick={() => setActive(!active)}
      whileTap={{ scale: 0.98 }}
      className="
        w-full
        rounded-xl
        px-4
        py-3
        text-left
      "
    >
      {label}
    </motion.button>
  );
}