import { extendTheme } from "@chakra-ui/vue-next";
import { theme } from "./theme";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  // @ts-ignore
  modules: [
    "@nuxt/content",
    "@chakra-ui/nuxt-next",
    "@/modules/content-chunks.module.ts",
    "@nuxtjs/fontaine",
    "@nuxtjs/supabase",
    "@nuxtjs/html-validator",
    "nuxt-time",
  ],
  css: ["@/styles/typography/all.css"],
  chakra: {
    extendTheme: extendTheme(theme),
  },
  experimental: {
    componentIslands: true,
  },
});
