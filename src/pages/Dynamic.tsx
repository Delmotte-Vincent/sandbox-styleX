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
  const [size, setSize] = useState(14);

  return (
    <>
      <Description>
        <div>Exemple description</div>
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
