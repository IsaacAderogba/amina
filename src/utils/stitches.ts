import type { FragmentProps } from "@iatools/rxdom";
import type * as Stitches from "@stitches/core";
import { createStitches } from "@stitches/core";
import {
  blackA,
  whiteA,
  gray,
  grayDark,
  gold,
  goldDark,
  blue,
  blueDark,
  green,
  greenDark,
  yellow,
  yellowDark,
  red,
  redDark,
} from "@radix-ui/colors";

export const defaultTokens = {
  fonts: {
    serif:
      "Constantia, 'Lucida Bright', Lucidabright, 'Lucida Serif', Lucida, 'DejaVu Serif', 'Bitstream Vera Serif', 'Liberation Serif', Georgia, serif;",
    sans: "ui-sans-serif, -apple-system, 'system-ui', 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol';",
    mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono','Courier New', monospace;",
  },
  fontSizes: {
    tiny: ".75rem",
    xs: "0.875rem",
    base: "1.1rem",
    sm: "1.25rem",
    md: "1.5rem",
    lg: "1.875rem",
    xl: "2.25rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    xs: 1,
    sm: 1.25,
    md: 1.35,
    lg: 1.625,
    xl: 1.75,
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  space: {
    0: "0rem",
    xxs: "0.25rem",
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2.25rem",
    xxl: "4rem",
    px: "1px",
    1: "0.125rem",
    2: "0.25rem",
    3: "0.375rem",
    4: "0.5rem",
    5: "0.625rem",
    6: "0.75rem",
    7: "0.875rem",
    8: "1rem",
    9: "1.25rem",
    10: "1.5rem",
    11: "1.75rem",
    12: "2rem",
    13: "2.25rem",
    14: "2.5rem",
    15: "2.75rem",
    16: "3rem",
    17: "3.5rem",
    18: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },
  radii: {
    xs: "4px",
    sm: "8px",
    md: "10px",
    base: "12px",
    lg: "14px",
    xl: "18px",
    squared: "33%",
    rounded: "50%",
    pill: "9999px",
  },
  zIndices: {
    1: "100",
    2: "200",
    3: "300",
    4: "400",
    5: "500",
    10: "1000",
    max: "9999",
  },
  borderWeights: {
    light: "1px",
    normal: "2px",
    bold: "3px",
    extrabold: "4px",
    black: "5px",
  },
  breakpoints: {
    xs: "600px",
    sm: "900px",
    md: "1048px",
    lg: "1280px",
    xl: "1536px",
  },
};

export const defaultColors = {
  ...whiteA,
  ...blackA,
  ...gray,
  ...gold,
  ...blue,
  ...green,
  ...red,
  ...yellow,

  primary: "$gold8",
  primaryHover: "$gold10",
  primaryAccent: "$gold4",
  secondary: "$blue10",
  secondaryHover: "$blue10",
  secondaryAccent: "$blue6",
  success: "$green8",
  successHover: "$green10",
  successAccent: "$green6",
  warning: "$yellow8",
  warningHover: "$yellow10",
  warningAccent: "$yellow6",
  error: "$red8",
  errorHover: "$red10",
  errorAccent: "$red6",

  title: "$gray12",
  foregroundTitle: "$gray3",
  text: "$gray11",
  foregroundText: "$gray8",
  label: "$gray9",
  foregroundLabel: "$gray9",
  disable: "$gray9",
  border: "$gray8",
  divider: "$gray4",
  accent: "$gray2",
  background: "$whiteA12",
  foreground: "$blackA12",
};

export const darkColors = {
  ...grayDark,
  ...goldDark,
  ...blueDark,
  ...greenDark,
  ...redDark,
  ...yellowDark,
};

export const defaultShadows = {
  xs: "0 5px 20px -5px rgba(20, 20, 20, 0.05)",
  sm: "0 5px 20px -5px rgba(20, 20, 20, 0.1)",
  md: "0 8px 30px rgba(20, 20, 20, 0.15)",
  lg: "0 30px 60px rgba(20, 20, 20, 0.15)",
  xl: "0 40px 80px rgba(20, 20, 20, 0.25)",
};

export const darkShadows = {
  xs: "-4px 0 15px rgb(0 0 0 / 50%)",
  sm: "0 5px 20px -5px rgba(20, 20, 20, 0.1)",
  md: "0 8px 30px rgba(20, 20, 20, 0.15)",
  lg: "0 30px 60px rgba(20, 20, 20, 0.15)",
  xl: "0 40px 80px rgba(20, 20, 20, 0.25)",
};

export const defaultMedia = {
  xs: `(min-width: ${defaultTokens.breakpoints.xs})`,
  sm: `(min-width: ${defaultTokens.breakpoints.sm})`,
  md: `(min-width: ${defaultTokens.breakpoints.md})`,
  lg: `(min-width: ${defaultTokens.breakpoints.lg})`,
  xl: `(min-width: ${defaultTokens.breakpoints.xl})`,
  xsMax: `(max-width: ${defaultTokens.breakpoints.xs})`,
  smMax: `(max-width: ${defaultTokens.breakpoints.sm})`,
  mdMax: `(max-width: ${defaultTokens.breakpoints.md})`,
  lgMax: `(max-width: ${defaultTokens.breakpoints.lg})`,
  xlMax: `(max-width: ${defaultTokens.breakpoints.xl})`,
  motion: "(prefers-reduced-motion: reduce)",
  safari: "not all and (min-resolution:.001dpcm)",
  hover: "(any-hover: hover)",
};

const defaultUtils = {
  p: (value: Stitches.PropertyValue<"padding">) => ({
    padding: value,
  }),
  pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
    paddingTop: value,
  }),
  pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
    paddingRight: value,
  }),
  pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
    paddingBottom: value,
  }),
  pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
    paddingLeft: value,
  }),
  px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: Stitches.PropertyValue<"paddingTop">) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  m: (value: Stitches.PropertyValue<"margin">) => ({
    margin: value,
  }),
  mt: (value: Stitches.PropertyValue<"marginTop">) => ({
    marginTop: value,
  }),
  mr: (value: Stitches.PropertyValue<"marginRight">) => ({
    marginRight: value,
  }),
  mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
    marginBottom: value,
  }),
  ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
    marginLeft: value,
  }),
  mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: Stitches.PropertyValue<"marginTop">) => ({
    marginTop: value,
    marginBottom: value,
  }),
  ov: (value: Stitches.PropertyValue<"overflow">) => ({ overflow: value }),
  ox: (value: Stitches.PropertyValue<"overflowX">) => ({
    overflowX: value,
  }),
  oy: (value: Stitches.PropertyValue<"overflowY">) => ({
    overflowY: value,
  }),
  bor: (value: Stitches.PropertyValue<"border">) => ({
    border: value,
  }),
  borT: (value: Stitches.PropertyValue<"borderTop">) => ({
    borderTop: value,
  }),
  borR: (value: Stitches.PropertyValue<"borderRight">) => ({
    borderRight: value,
  }),
  borB: (value: Stitches.PropertyValue<"borderBottom">) => ({
    borderBottom: value,
  }),
  borL: (value: Stitches.PropertyValue<"borderLeft">) => ({
    borderLeft: value,
  }),
  borX: (value: Stitches.PropertyValue<"borderLeft">) => ({
    borderLeft: value,
    borderRight: value,
  }),
  borY: (value: Stitches.PropertyValue<"borderTop">) => ({
    borderTop: value,
    borderBottom: value,
  }),
  bg: (value: Stitches.PropertyValue<"backgroundColor">) => ({
    background: value,
  }),
  w: (value: Stitches.PropertyValue<"width">) => ({ width: value }),
  h: (value: Stitches.PropertyValue<"height">) => ({ height: value }),
  maxW: (value: Stitches.PropertyValue<"maxWidth">) => ({ maxWidth: value }),
  maxH: (value: Stitches.PropertyValue<"maxHeight">) => ({
    maxHeight: value,
  }),
  minW: (value: Stitches.PropertyValue<"minWidth">) => ({ minWidth: value }),
  minH: (value: Stitches.PropertyValue<"minHeight">) => ({
    minHeight: value,
  }),
  pos: (value: Stitches.PropertyValue<"position">) => ({
    position: value,
  }),
  gridCols: (value: Stitches.PropertyValue<"gridTemplateColumns">) => ({
    gridTemplateColumns: value,
  }),
  gridRows: (value: Stitches.PropertyValue<"gridTemplateRows">) => ({
    gridTemplateRows: value,
  }),
};

export const {
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  prefix: "amina",
  theme: {
    ...defaultTokens,
    colors: defaultColors,
    shadows: defaultShadows,
  },
  media: defaultMedia,
  utils: defaultUtils,
});

export const darkTheme = createTheme({
  colors: darkColors,
  shadows: darkShadows,
});

export const cssReset = globalCss({
  "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video":
    {
      margin: "0",
      padding: "0",
      border: "0",
      fontSize: "100%",
      font: "inherit",
      verticalAlign: "baseline",
      fontFamily: "$sans",
    },
  "article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section":
    {
      display: "block",
    },
  "*": {
    boxSizing: "border-box",
  },
  "*[hidden]": {
    display: "none",
  },
  body: {
    lineHeight: "1",
    background: "$background",
    position: "relative",
  },
  "ol, ul": {
    listStyle: "none",
  },
  "blockquote, q": {
    quotes: "none",
  },
  "blockquote:before, blockquote:after, q:before, q:after": {
    content: "none",
  },
  table: {
    borderSpacing: "0",
  },
});

export type VariantProps<T> = Stitches.VariantProps<T>;
export type CSS = Stitches.CSS<typeof config>;
export type PropertyValue<T extends keyof Stitches.CSSProperties> =
  Stitches.PropertyValue<T, typeof config>;

export type Size = "small" | "default" | "large";
export type Theme = "dark" | "light";
export type SizeMap = Record<Size, CSS>;
export type NativeAttrs<T> = T & Omit<FragmentProps, keyof T>;
