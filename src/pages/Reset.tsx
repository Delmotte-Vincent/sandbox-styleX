import * as stylex from "@stylexjs/stylex";
import Description from "../components/Description";
import Exemple from "../components/Exemple";
import Tabs from "../components/Tabs";

const resetExemple = `
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

<button {...stylex.props(styles.base, styles.reset)}>Lorem ipsum</button>
`;

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
    <>
      <Description>
        <p>
          This exemple show you how to reset a property. This is quick simple,
          to reset a property, you have to nullish it and apply the class inside
          the props function.
        </p>
      </Description>
      <Exemple>
        <button {...stylex.props(styles.base, styles.reset)}>
          Lorem ipsum
        </button>
      </Exemple>
      <Tabs tabs={[{ title: "Reset.tsx", content: resetExemple }]} />
    </>
  );
}
