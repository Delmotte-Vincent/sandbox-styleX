import * as stylex from "@stylexjs/stylex";
import Description from "../components/Description";
import Exemple from "../components/Exemple";
import Tabs from "../components/Tabs";

const variantExemple = `
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

<button {...stylex.props(styles.base, styles[variant])}>
  Lorem ipsum
</button>
`;

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
    <>
      <Description>
        <div>Exemple description</div>
      </Description>
      <Exemple>
        <button {...stylex.props(styles.base, styles[variant])}>
          Lorem ipsum
        </button>
      </Exemple>
      <Tabs tabs={[{ title: "Variant.tsx", content: variantExemple }]} />
    </>
  );
}
