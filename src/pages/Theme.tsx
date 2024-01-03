import * as stylex from "@stylexjs/stylex";
import { colors, spacing } from "../styles/tokens.stylex";
import { dracula } from "../styles/themes";

const styles = stylex.create({
  container: {
    color: colors.text,
    backgroundColor: colors.background,
    padding: spacing.m,
  },
});

export default function Theme() {
  return (
    <div {...stylex.props(/*dracula,*/ styles.container)}>Lorem ipsum</div>
  );
}
