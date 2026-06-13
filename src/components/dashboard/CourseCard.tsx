"use client";

import { motion } from "framer-motion";
import { Course } from "@/types/course";
import {
  Code,
  Brain,
  Layers,
  Rocket
} from "lucide-react";
interface Props {
  course: Course;
}
const iconMap = {
  Code,
  Brain,
  Layers,
  Rocket,
};
export default function CourseCard({ course }: Props) {
  const Icon =
  iconMap[course.icon_name as keyof typeof iconMap] || Code;
  return (
  <motion.article
  className="
    relative
    overflow-hidden
    rounded-3xl
    border
    border-zinc-800
    bg-zinc-900/80
    backdrop-blur-xl
    p-6
  "
>
  <div
    className="
      absolute
      -right-10
      -top-10
      h-32
      w-32
      rounded-full
      bg-blue-500/10
      blur-3xl
    "
  />

  <div className="mb-4">
    <Icon size={28} />
  </div>

  <h3 className="text-lg font-semibold">
    {course.title}
  </h3>

  {/* progress bar */}

  <p className="mt-2 text-sm text-zinc-400">
    {course.progress}% Complete
  </p>
</motion.article>
    
  );
}