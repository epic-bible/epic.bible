import { defineConfig } from "css-panda";
import { recipes, textStyles, globalCss } from "./theme";

// @ts-expect-error Type mis-match. Fix in progress
export default defineConfig({
  preflight: true,
  include: ["./{pages,components,layouts,theme}/**/*.{vue,tsx,ts}"],
  exclude: [],
  outdir: "panda",
  jsxFramework: "vue",
  jsxFactory: "epic",
  // @ts-expect-error Type mis-match. Fix in progress
  globalCss,
  theme: {
    extend: {
      recipes,
      textStyles,
      tokens: {
        colors: {
          epic: {
            50: { value: "#dbffe7" },
            100: { value: "#adffc7" },
            200: { value: "#7cffa9" },
            300: { value: "#4aff8d" },
            400: { value: "#1aff75" },
            500: { value: "#00e663" },
            600: { value: "#00b340" },
            700: { value: "#008024" },
            800: { value: "#004e0f" },
            900: { value: "#021c00" },
          },
        },
      },
    },
  },
});
