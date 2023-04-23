import type { Database } from "@/types/db";
import { __DEV__ } from "@/utils/env";

export function useAuth() {
  const supabaseUser = useSupabaseUser();
  const client = useSupabaseAuthClient<Database>();

  const user = computed(() => supabaseUser.value?.user_metadata);

  async function login() {
    const { error } = await client.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: __DEV__ ? "http://localhost:3000" : "https://epic.bible",
      },
    });
    if (error) {
      console.error(error);
    }
  }

  async function logout() {
    const { error } = await client.auth.signOut();
    if (error) {
      console.log(error);
    }
  }

  return {
    user,
    isAuthenticated: !!user.value,
    login,
    logout,
  };
}
