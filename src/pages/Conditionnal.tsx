import * as stylex from "@stylexjs/stylex";
import { useState } from "react";
import Description from "../components/Description";
import Exemple from "../components/Exemple";
import Tabs from "../components/Tabs";

const conditionnalExemple = `
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  base: {
    fontSize: 20,
    color: "blue",
  },
  checked: {
    color: "red",
  },
});

<div {...stylex.props(styles.base, checked && styles.checked)}>
  Lorem ipsum
</div>

`;

const styles = stylex.create({
  container: {
    display: "flex",
    gap: "8px",
  },
  base: {
    fontSize: 20,
    color: "blue",
  },
  checked: {
    color: "red",
  },
});

export default function Conditionnal() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Description>
        <div>Exemple description</div>
      </Description>
      <Exemple>
        <div {...stylex.props(styles.container)}>
          <input
            type="checkbox"
            onClick={(e: any) => setChecked(e.target.checked)}
          />
          <div {...stylex.props(styles.base, checked && styles.checked)}>
            Lorem ipsum
          </div>
        </div>
      </Exemple>
      <Tabs
        tabs={[{ title: "Conditionnal.tsx", content: conditionnalExemple }]}
      />
    </>
  );
}
