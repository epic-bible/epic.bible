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
  ],
  css: ["@/styles/typography/all.css"],
  chakra: {
    extendTheme: theme,
  },
  fontMetrics: {
    fonts: [
      "Karla",
      {
        family: "Karla",
        src: "./styles/typography/files/karla-latin-ext-400-normal.woff2",
      },
      {
        family: "Karla",
        src: "./styles/typography/files/karla-latin-ext-600-normal.woff2",
      },
      {
        family: "Karla",
        src: "./styles/typography/files/karla-latin-ext-700-normal.woff2",
      },
    ],
  },
});
