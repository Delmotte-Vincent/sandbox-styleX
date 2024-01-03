import * as stylex from "@stylexjs/stylex";
import { colors } from "./tokens.stylex";

export const dracula = stylex.createTheme(colors, {
  text: "purple",
  background: "#DCDCDC",
});
