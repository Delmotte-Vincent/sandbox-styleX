import * as stylex from "@stylexjs/stylex";
import { useState } from "react";

const styles = stylex.create({
  dynamic: (fontSize: number) => ({
    fontSize: `${fontSize}px`,
  }),
});

export default function Dynamic() {
  const [size, setSize] = useState(14);

  return (
    <>
      <input
        type="number"
        min={14}
        max={26}
        onChange={(e) => setSize(+e.target.value)}
        value={size}
      />
      <div {...stylex.props(styles.dynamic(size))}>Lorem ipsum</div>
    </>
  );
}
