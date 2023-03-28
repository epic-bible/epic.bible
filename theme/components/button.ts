import { defineStyleConfig } from "@chakra-ui/vue-next";

export const Button = defineStyleConfig({
  baseStyle: {
    _hover: {
      bg: "transparent",
    },
    _active: {
      bg: "transparent",
    },
  },
  defaultProps: {
    variant: "outline",
    size: "sm",
  },
});
