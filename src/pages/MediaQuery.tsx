import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  base: {
    fontSize: 20,
    width: {
      default: "200px",
      "@media (max-width: 800px)": "100%",
    },
  },
});

export default function MediaQuery() {
  return <button {...stylex.props(styles.base)}>Lorem ipsum</button>;
}
