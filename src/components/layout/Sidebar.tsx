"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const items = [
  "Home",
  "Courses",
  "Analytics",
  "Settings",
];

export default function Sidebar() {
  const [active, setActive] = useState("Home");

  return (
    <nav
      className="
        hidden
        md:block
        w-64
        border-r
        border-zinc-800
        bg-zinc-950
        p-6
      "
    >
      <h2 className="mb-8 text-xl font-bold">
        Dashboard
      </h2>

      <div className="space-y-2">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className="
              relative
              w-full
              rounded-xl
              px-4
              py-3
              text-left
            "
          >
            {active === item && (
              <motion.div
                layoutId="sidebar-highlight"
                className="
                  absolute
                  inset-0
                  rounded-xl
                  bg-zinc-800
                "
              />
            )}

            <span className="relative z-10">
              {item}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}