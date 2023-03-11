import { theme } from "./theme";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
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
        {
          async: true,
          src: "https://www.googletagmanager.com/gtag/js?id=G-QB86KZMPFJ",
        },
        {
          src: "/ga.js",
        },
      ],
    },
  },
  modules: [
    "@nuxt/content",
    "@chakra-ui/nuxt-next",
    "@/modules/content-chunks.module.ts",
    "@nuxtjs/fontaine",
    "@nuxtjs/supabase",
  ],
  css: ["@/styles/typography/all.css"],
  chakra: {
    extendTheme: theme,
  },
  experimental: {
    componentIslands: true,
  },
});
