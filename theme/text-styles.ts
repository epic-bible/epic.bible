import { SystemStyleObject } from "@chakra-ui/vue-system";
import { mode } from "@chakra-ui/vue-theme-tools";

const sidebarLink: SystemStyleObject = {
  display: "inline-block",
  paddingY: "1",
  transition: "color 0.2s ease-in-out",
  _activeLink: {
    "&:after": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "1px",
      transform: "scaleX(1)",
      top: "85%",
      left: "0px",
      right: "0px",
      backgroundColor: "currentColor",
    },
    fontWeight: "bold",
  },
};

const articles: Record<string, SystemStyleObject> = {
  date: {
    fontSize: "xs",
    color: mode("blue.400", "whiteAlpha.200"),
  },
  title: {
    fontWeight: "bold",
    fontSize: "lg",
  },
  excerpt: {
    fontSize: "sm",
    color: mode("blackAlpha.600", "whiteAlpha.600"),
  },
  link: {
    color: mode("blue.400", "blue.300"),
    fontWeight: "regular",
    fontSize: "sm",
  },
};

const anchor: SystemStyleObject = {
  display: "inline-block",
  paddingY: "1",
  transition: "color 0.2s ease-in-out",
  position: "relative",
  fontWeight: "bold",
  cursor: "pointer",
  zIndex: 1,
  "&:before": {
    content: "''",
    position: "absolute",
    width: "95%",
    height: "8px",
    transform: "scaleX(1)",
    top: "60%",
    left: "5px",
    right: "0px",
    zIndex: -1,
    backgroundColor: "hsl(58deg 94% 57% / 30%)",
    textDecoration: "none",
    transformOrigin: "bottom right",
    transition: "transform .4s cubic-bezier(.86, 0, .07, 1)",
  },
  _hover: {
    textDecoration: "none",
    _after: {
      transform: "scaleX(1)",
      transformOrigin: "bottom left",
    },
  },
  "&:after": {
    content: "''",
    position: "absolute",
    width: "95%",
    height: "8px",
    transform: "scaleX(0)",
    top: "75%",
    left: "5px",
    right: "0px",
    zIndex: -1,
    backgroundColor: "hsl(209deg 100% 69% / 30%)",
    textDecoration: "none",
    transformOrigin: "bottom right",
    transition: "transform .4s cubic-bezier(.86, 0, .07, 1)",
  },
};

const display: Record<string, SystemStyleObject> = {
  "4xl": {
    fontSize: { base: "2xl", sm: "3xl", md: "4xl" },
    fontWeight: "bold",
    lineHeight: "shorter",
    letterSpacing: "tight",
  },

  "2xl": {
    fontSize: { base: "4xl", sm: "5xl", md: "7xl" },
    fontWeight: "bold",
    lineHeight: "shorter",
    letterSpacing: "tight",
  },

  xl: {
    fontSize: { base: "4xl", md: "6xl" },
    fontWeight: "bold",
    lineHeight: "shorter",
    letterSpacing: "tight",
  },
  lg: {
    fontSize: { base: "3xl", md: "4xl" },
    fontWeight: "bold",
    letterSpacing: "tight",
    lineHeight: "1.2",
  },
  md: {
    fontSize: { base: "xl", md: "2xl" },
    fontWeight: "bold",
    lineHeight: "1.4",
    letterSpacing: "tight",
  },
  sm: {
    fontSize: "xl",
    fontWeight: "semibold",
    lineHeight: "1.5",
  },
  xs: {
    fontWeight: "semibold",
    lineHeight: "1.5",
  },
};

const text: Record<string, SystemStyleObject> = {
  "2xl": {
    fontSize: { base: "xl", md: "2xl" },
    lineHeight: "tall",
  },
  xl: {
    fontSize: { base: "lg", md: "xl" },
    lineHeight: "tall",
  },
  lg: {
    fontSize: "lg",
    lineHeight: "tall",
  },
  md: {
    fontSize: "16px",
    lineHeight: "24px",
  },
  sm: {
    fontSize: "14px",
    lineHeight: "20px",
  },
  xs: {
    fontSize: "12px",
    lineHeight: "18px",
  },
};

const link: SystemStyleObject = {
  color: "textLink",
  cursor: "pointer",
  fontWeight: "medium",
  textDecoration: "underline",
  textDecorationColor: "cyan.default",
  textDecorationThickness: "1px",
  textUnderlineOffset: "2px",
  _hover: {
    textDecorationThickness: "2px",
  },
};

export const textStyles: Record<string, SystemStyleObject> = {
  heading: {
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: "-0.015em",
    lineHeight: "1.24",
    fontSize: { base: "2rem", md: "3.5rem" },
  },
  "heading-2": {
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: "-0.015em",
    lineHeight: "1.24",
    fontSize: { base: "1.75rem", md: "2.75rem" },
  },
  caps: {
    textTransform: "uppercase",
    fontSize: "sm",
    letterSpacing: "widest",
    fontWeight: "bold",
  },
  sidebarLink,
  link,
  display,
  text,
  anchor,
  articles,
};
