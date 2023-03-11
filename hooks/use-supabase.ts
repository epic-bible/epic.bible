import { useSupabaseClient } from "#imports";
import type { Database } from "@/types/db";

export function useSupabase() {
  const supabase = useSupabaseClient<Database>();
  return supabase;
}
