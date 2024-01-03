import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  base: {
    fontSize: 20,
  },
  primary: {
    backgroundColor: {
      default: "#A9DFBF",
      ":hover": "#52BE80",
      ":focus": "#85C1E9",
    },
  },
  danger: {
    backgroundColor: {
      default: "#CD6155",
      ":hover": "#C0392B",
      ":focus": "#85C1E9",
    },
  },
});

type VariantProps = {
  variant: "primary" | "danger";
};

export default function Variant({ variant }: VariantProps) {
  return (
    <div>
      <button {...stylex.props(styles.base, styles[variant])}>
        Lorem ipsum
      </button>
    </div>
  );
}
