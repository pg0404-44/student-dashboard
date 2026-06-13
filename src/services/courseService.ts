import { supabase } from "@/lib/supabase";

export async function getCourses() {

  const { data, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("Failed to fetch courses");
  }

  return data;
}