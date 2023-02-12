import { defineConfig } from "css-panda";

export default defineConfig({
  preflight: true,
  include: ["./{pages,components,layouts,theme}/**/*.{vue,tsx}"],
  exclude: [],
  outdir: "panda",
  jsxFramework: "vue",
  jsxFactory: "epic",
});
