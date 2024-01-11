import * as stylex from "@stylexjs/stylex";
import { useState } from "react";
import Description from "../components/Description";
import Exemple from "../components/Exemple";
import Tabs from "../components/Tabs";

const dynamicExemple = `
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  dynamic: (fontSize: number) => ({
    fontSize: \`\${fontSize}px\`,
  }),
});

<div {...stylex.props(styles.dynamic(size))}>Lorem ipsum</div>
`;

const styles = stylex.create({
  dynamic: (fontSize: number) => ({
    fontSize: `${fontSize}px`,
  }),
});

export default function Dynamic() {
  const [size, setSize] = useState(18);

  return (
    <>
      <Description>
        <p>
          This exemple show you how to make a dynamic css. This exemple take a
          number as input and apply it to fontSize. You just have to declare an
          arrow function and return the object that represent the css
          properties.
        </p>
      </Description>
      <Exemple>
        <input
          type="number"
          min={14}
          max={26}
          onChange={(e) => setSize(+e.target.value)}
          value={size}
        />
        <div {...stylex.props(styles.dynamic(size))}>Lorem ipsum</div>
      </Exemple>
      <Tabs tabs={[{ title: "Dynamic.tsx", content: dynamicExemple }]} />
    </>
  );
}
