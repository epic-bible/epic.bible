import { extendTheme } from "@chakra-ui/vue-next";
import { globalStyles } from "./global-styles";
import { textStyles } from "./text-styles";

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
  config: {
    initialColorMode: "light",
  },
  textStyles,
  semanticTokens: {
    colors: {
      bodyText: {
        default: "gray.700",
        _dark: "whiteAlpha.900",
      },
      bodyBg: {
        default: "white",
        _dark: "epic.900",
      },
    },
  },
});
