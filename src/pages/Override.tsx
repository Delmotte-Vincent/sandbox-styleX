import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  base: {
    fontSize: 20,
    color: "blue",
  },
  override: {
    color: "red",
  },
});

export default function Override() {
  return <div {...stylex.props(styles.base, styles.override)}>Lorem ipsum</div>;
}
