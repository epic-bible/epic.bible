import { defineVitestConfig } from "@nuxt/test-utils/config";

// Component/unit tests run inside a Nuxt environment so that auto-imports,
// NuxtLink, and the shadcn/vue component registry resolve exactly as they do
// in the app. Pure tests opt out per-file with `// @vitest-environment node`.
export default defineVitestConfig({
  test: {
    environment: "nuxt",
    include: ["tests/**/*.{test,spec}.ts"],
    // Dummy Supabase credentials so the @nuxtjs/supabase client plugin
    // initialises cleanly inside the test Nuxt app (no live backend needed).
    env: {
      NUXT_PUBLIC_SUPABASE_URL: "http://localhost:54321",
      NUXT_PUBLIC_SUPABASE_KEY: "test-anon-key",
    },
  },
});
