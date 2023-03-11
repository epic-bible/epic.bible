import type { SystemStyleObject } from "@chakra-ui/vue-next";
import { mode } from "@chakra-ui/vue-theme-tools";

export const globalStyles: SystemStyleObject = {
  "html, body": {
    color: mode("gray.700 !important", "whiteAlpha.900 !important"),
    bg: "bodyBg",
    fontFamily: "body",
  },
  table: {
    width: "100%",
    marginY: "8",
    th: {
      bg: "gray.100",
    },
    "th, td": {
      borderWidth: "1px",
      py: "3",
      px: "5",
      textAlign: "start",
    },
  },

  mark: {
    bg: "transparent",
  },

  ".chakra-prose": {
    output: {
      fontFeatureSettings: "tnum",
      fontVariantNumeric: "tabular-nums",
    },
    "li:not([role])": {
      marginY: "1",
    },
    "ol:not([role]), ul:not([role])": {
      marginY: "5",
      paddingLeft: "4",
    },
    "[alt='data-sig']": {
      maxW: "150px",
    },
    "[alt='full-width']": {
      w: "100%",
    },
    table: {
      tableLayout: "fixed",
      width: "100%",
    },

    "h1, h2, h3, h4": {
      letterSpacing: "-1px",
    },
    "h2, h3, h4": {
      scrollMarginTop: "24",
      "&:hover": {
        "a.heading-anchor": { opacity: 1 },
      },
      "a:focus": { opacity: 1 },
    },
    "p, li:not([role])": {
      lineHeight: "tall",
    },
    "p + p": {
      marginTop: 5,
    },
    "a.heading-anchor": {
      opacity: 0,
      color: "blue.400",
      transition: "opacity 0.2s ease-in-out",
      marginX: "3",
      "&:before": {
        content: '"#"',
      },
      "&:hover": {
        opacity: "1",
      },
    },
  },
};
