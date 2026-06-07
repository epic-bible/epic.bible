// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Full client-side rendering (SPA mode). The app ships as a static shell and
  // renders entirely in the browser.
  ssr: false,

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
      script: [
        // Cookieless, privacy-friendly analytics (no consent required).
        {
          async: true,
          defer: true,
          src: "https://api.pirsch.io/pirsch.js",
          id: "pirschjs",
          "data-code": "fm1Mkpbody7mVpqMbU81ROeuvQfnjuHj",
        },
      ],
    },
  },

  modules: [
    "@nuxt/content",
    "~~/modules/content-chunks.module.ts",
    "@nuxtjs/supabase",
    "@nuxtjs/html-validator",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "shadcn-nuxt",
  ],

  // buHyD4a preset font (Manrope Variable). Replaces the previous Karla face.
  css: ["@fontsource-variable/manrope/index.css"],

  // Auth is optional on this public app: disable the global redirect guard so
  // unauthenticated visitors are not bounced to a login route.
  supabase: {
    redirect: false,
    types: "~/types/db.ts",
  },

  // Dark mode via class strategy, matching tailwind.config `darkMode: ["class"]`.
  // `classSuffix: ""` emits `class="dark"` / `class="light"` on <html>.
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },

  experimental: {
    typedPages: true,
    // Preload visible routes on the client: NuxtLinks prefetch their route
    // chunks as soon as they enter the viewport.
    defaults: {
      nuxtLink: {
        prefetch: true,
        prefetchOn: {
          visibility: true,
        },
      },
    },
  },

  build: {
    transpile: ["tinykeys"],
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },

  compatibilityDate: "2024-08-17",
});
