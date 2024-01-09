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

export default function Basic() {
  return (
    <>
      <Description>
        <p>
          This is a basic exemple about how to use styleX. In a first place, you
          have to import styleX, then define an object that represents your
          style. After that you call styleX props funtion and apply the style
          you want.
        </p>
      </Description>
      <Exemple>
        <div {...stylex.props(styles.base)}>Lorem ipsum</div>
      </Exemple>
      <Tabs tabs={[{ title: "Basic.tsx", content: basicExemple }]} />
    </>
  );
}
