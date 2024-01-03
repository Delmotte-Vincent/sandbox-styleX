import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";

type PageProps = {
  content: ReactNode;
};

const styles = stylex.create({
  page: {
    flexGrow: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "32px",
  },
});

export default function Page({ content }: PageProps) {
  return <div {...stylex.props(styles.page)}>{content}</div>;
}
