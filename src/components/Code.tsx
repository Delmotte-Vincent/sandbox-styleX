import * as stylex from "@stylexjs/stylex";
import hljs from "highlight.js";
import { useEffect } from "react";

type CodeProps = {
  content: string;
};

const styles = stylex.create({
  pre: {
    margin: 0,
  },
});

export default function Code({ content }: CodeProps) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre {...stylex.props(styles.pre)}>
      <code className="language-typescript">{content}</code>
    </pre>
  );
}
