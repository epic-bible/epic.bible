import { extendTheme } from "@chakra-ui/vue-next";
import { globalStyles } from "./global-styles";
import { textStyles } from "./text-styles";
import * as components from "./components";

export const theme = extendTheme({
  fonts: {
    body: 'Karla, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
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
  styles: {
    global: globalStyles,
  },
  components,
  config: {
    initialColorMode: "light",
  },
  textStyles,
  semanticTokens: {
    colors: {
      bodyText: {
        default: "green.700",
        _dark: "green.50 !important",
      },
      bodyBg: {
        default: "white",
        _dark: "green.900 !important",
      },
    },
  },
});
