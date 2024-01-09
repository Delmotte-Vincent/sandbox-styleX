import * as stylex from "@stylexjs/stylex";
import { useState } from "react";
import Code from "./Code";

type Tab = {
  title: string;
  content: string;
};

type TabsProps = {
  tabs: Tab[];
};

const styles = stylex.create({
  title: {
    marginTop: 0,
    marginBottom: "16px",
  },
  tabs: {
    backgroundColor: "white",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow:
      "0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08)",
  },
  header: {
    fontSize: 16,
    display: "flex",
    gap: "16px",
    borderBottom: "1px solid #F0F3F4",
    listStyle: "none",
    paddingTop: "8px",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    lineHeight: "30px",
    margin: "0px",
    cursor: {
      ":hover": "pointer",
    },
  },
  active: {
    borderBottom: "1px solid red",
  },
});

export default function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section>
      <h2 {...stylex.props(styles.title)}>Code</h2>
      <div {...stylex.props(styles.tabs)}>
        <ul {...stylex.props(styles.header)}>
          {tabs.map((tab, i) => (
            <li
              key={i}
              {...stylex.props(i === activeTab && styles.active)}
              onClick={() => setActiveTab(i)}
            >
              {tab.title}
            </li>
          ))}
        </ul>
        <Code key={tabs[activeTab].title} content={tabs[activeTab].content} />
      </div>
    </section>
  );
}
