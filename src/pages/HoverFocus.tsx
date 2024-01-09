import * as stylex from "@stylexjs/stylex";
import Description from "../components/Description";
import Exemple from "../components/Exemple";
import Tabs from "../components/Tabs";

const hoverFocusExemple = `
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

<button {...stylex.props(styles.base)}>Lorem ipsum</button>
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
});

export default function HoverFocus() {
  return (
    <>
      <Description>
        <p>
          This exemple show you how to use the css selector in styleX like focus
          or hover. When you declare a property, you can just give a value or
          you can pass an object with the default value and the state value like
          hover or focus.
        </p>
      </Description>
      <Exemple>
        <button {...stylex.props(styles.base)}>Lorem ipsum</button>
      </Exemple>
      <Tabs tabs={[{ title: "HoverFocus.tsx", content: hoverFocusExemple }]} />
    </>
  );
}
