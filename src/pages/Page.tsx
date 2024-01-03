import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";

type PageProps = {
  content: ReactNode;
};

const styles = stylex.create({
  page: {
    backgroundColor: "white",
    flexGrow: 1,
    height: "100%",
    borderRadius: "8px",
    padding: "8px",
  },
});

export default function Page({ content }: PageProps) {
  return <div {...stylex.props(styles.page)}>{content}</div>;
}
