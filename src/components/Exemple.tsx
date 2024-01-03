import * as stylex from "@stylexjs/stylex";
import { ReactNode } from "react";

type ExempleProps = {
  children: ReactNode;
};

const styles = stylex.create({
  title: {
    marginTop: 0,
    marginBottom: "16px",
  },
  exemple: {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "8px",
  },
});

export default function Exemple({ children }: ExempleProps) {
  return (
    <section>
      <h2 {...stylex.props(styles.title)}>Exemple</h2>
      <div {...stylex.props(styles.exemple)}>{children}</div>
    </section>
  );
}
