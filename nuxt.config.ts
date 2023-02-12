// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: { "css-panda/postcss": {} },
  },
  css: ["@/styles/panda.css"],
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
  modules: ["@nuxt/content"],
});
