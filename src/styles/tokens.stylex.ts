import * as stylex from "@stylexjs/stylex";

const DARK = "@media (prefers-color-scheme: dark)";

export const colors = stylex.defineVars({
  text: "black",
  background: "#FDFFFE",
  primaryText: "#108027",
});

export const spacing = stylex.defineVars({
  none: "0px",
  xs: "4px",
  s: "8px",
  m: "12px",
  l: "20px",
  xl: "32px",
  xxl: "48px",
  xxxl: "96px",
});
