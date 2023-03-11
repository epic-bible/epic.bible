import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/db";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_ANON = process.env.SUPABASE_ANON!;

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON);
