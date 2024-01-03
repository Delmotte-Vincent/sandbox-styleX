import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  base: {
    fontSize: 20,
    backgroundColor: {
      default: "#A9DFBF",
      ":hover": "#52BE80",
      ":focus": "#85C1E9",
    },
  },
  reset: {
    backgroundColor: null,
  },
});

export default function Reset() {
  return (
    <button {...stylex.props(styles.base, styles.reset)}>Lorem ipsum</button>
  );
}
