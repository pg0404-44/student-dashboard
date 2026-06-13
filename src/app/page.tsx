import { getCourses } from "@/services/courseService";
import Sidebar from "@/components/layout/Sidebar";
import HeroTile from "@/components/dashboard/HeroTile";
import CourseCard from "@/components/dashboard/CourseCard";
import ActivityTile from "@/components/dashboard/ActivityTile";
import BentoGrid from "@/components/dashboard/BentoGrid";
import FadeInTile from "@/components/dashboard/FadeInTile";
export default async function Home() {
  const courses = await getCourses();

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex">
        <Sidebar />

    <section className="flex-1 p-6">
  <BentoGrid>

    <FadeInTile>
      <div className="lg:col-span-2">
        <HeroTile />
      </div>
    </FadeInTile>

    {courses.map((course) => (
      <FadeInTile key={course.id}>
        <CourseCard course={course} />
      </FadeInTile>
    ))}

    <FadeInTile>
      <div className="lg:col-span-2">
        <ActivityTile />
      </div>
    </FadeInTile>

  </BentoGrid>
</section>
      </div>
    </main>
  );
}