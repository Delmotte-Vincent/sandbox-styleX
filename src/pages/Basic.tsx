import * as stylex from "@stylexjs/stylex";
import Tabs from "../components/Tabs";
import Exemple from "../components/Exemple";
import Description from "../components/Description";

const styles = stylex.create({
  base: {
    fontSize: 20,
    color: "blue",
  },
});

const basicExemple = `
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  base: {
    fontSize: 20,
    color: "blue",
  },
});

<div {...stylex.props(styles.base)}>Lorem ipsum</div>
`;

const test = `
import * as stylex from "@stylexjs/stylex";

<div {...stylex.props(styles.base)}>Lorem ipsum</div>
`;

export default function Basic() {
  return (
    <>
      <Description>
        <div>Exemple description</div>
      </Description>
      <Exemple>
        <div {...stylex.props(styles.base)}>Lorem ipsum</div>
      </Exemple>
      <Tabs
        tabs={[
          { title: "Basic.tsx", content: basicExemple },
          { title: "Test", content: test },
        ]}
      />
    </>
  );
}
