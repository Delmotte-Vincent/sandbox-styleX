import * as stylex from "@stylexjs/stylex";
import { ReactNode } from "react";

type DescriptionProps = {
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

export default function Description({ children }: DescriptionProps) {
  return (
    <section>
      <h2 {...stylex.props(styles.title)}>Description</h2>
      <div>{children}</div>
    </section>
  );
}
