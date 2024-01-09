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
    boxShadow:
      "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
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
