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
    padding: "8px 70px 8px 70px",
  },
});

export default function Page({ content }: PageProps) {
  return <div {...stylex.props(styles.page)}>{content}</div>;
}
