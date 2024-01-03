import * as stylex from "@stylexjs/stylex";
import { useState } from "react";

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
    <div {...stylex.props(styles.container)}>
      <input
        type="checkbox"
        onClick={(e: any) => setChecked(e.target.checked)}
      />
      <div {...stylex.props(styles.base, checked && styles.checked)}>
        Lorem ipsum
      </div>
    </div>
  );
}
