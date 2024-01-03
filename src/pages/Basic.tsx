import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  base: {
    fontSize: 20,
    color: "blue",
  },
});

export default function Basic() {
  return <div {...stylex.props(styles.base)}>Lorem ipsum</div>;
}
