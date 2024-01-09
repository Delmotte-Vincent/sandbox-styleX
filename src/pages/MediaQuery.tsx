import * as stylex from "@stylexjs/stylex";
import Description from "../components/Description";
import Exemple from "../components/Exemple";
import Tabs from "../components/Tabs";

const mediaQueryExemple = `
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  base: {
    fontSize: 20,
    width: {
      default: "200px",
      "@media (max-width: 800px)": "100%",
    },
  },
});

<button {...stylex.props(styles.base)}>Lorem ipsum</button>
`;

const styles = stylex.create({
  base: {
    fontSize: 20,
    width: {
      default: "200px",
      "@media (max-width: 800px)": "100%",
    },
  },
});

export default function MediaQuery() {
  return (
    <>
      <Description>
        <p>
          This exemple show you how to use media query in styleX. You use media
          query the same way you declare selector. "@media (media query)" will
          apply the property when the media query is correct.
        </p>
      </Description>
      <Exemple>
        <button {...stylex.props(styles.base)}>Lorem ipsum</button>
      </Exemple>
      <Tabs tabs={[{ title: "MediaQuery.tsx", content: mediaQueryExemple }]} />
    </>
  );
}
