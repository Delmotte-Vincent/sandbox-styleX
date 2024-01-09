import * as stylex from "@stylexjs/stylex";
import Description from "../components/Description";
import Exemple from "../components/Exemple";
import Tabs from "../components/Tabs";

const overrideExemple = `
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

<div {...stylex.props(styles.base, styles.override)}>Lorem ipsum</div>
`;

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
  return (
    <>
      <Description>
        <div>Exemple description</div>
      </Description>
      <Exemple>
        <div {...stylex.props(styles.base, styles.override)}>Lorem ipsum</div>
      </Exemple>
      <Tabs tabs={[{ title: "Override.tsx", content: overrideExemple }]} />
    </>
  );
}
