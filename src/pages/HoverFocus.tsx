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
});

export default function HoverFocus() {
  return <button {...stylex.props(styles.base)}>Lorem ipsum</button>;
}
