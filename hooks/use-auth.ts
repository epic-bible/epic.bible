import type { Database } from "@/types/db";

export function useAuth() {
  const supabaseUser = useSupabaseUser();
  const client = useSupabaseAuthClient<Database>();
  const router = useRouter();

  const user = computed(() => supabaseUser.value?.user_metadata);

  async function login() {
    const { error } = await client.auth.signInWithOAuth({
      provider: "google",
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