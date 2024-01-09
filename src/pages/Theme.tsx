import * as stylex from "@stylexjs/stylex";
import { colors, spacing } from "../styles/tokens.stylex";
import { dracula } from "../styles/themes";
import Description from "../components/Description";
import Exemple from "../components/Exemple";
import Tabs from "../components/Tabs";

const themeExemple = `
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  container: {
    color: colors.text,
    backgroundColor: colors.background,
    padding: spacing.m,
  },
});

<div {...stylex.props(dracula, styles.container)}>Lorem ipsum</div>
`;

const themesTs = `
import * as stylex from "@stylexjs/stylex";
import { colors } from "./tokens.stylex";

export const dracula = stylex.createTheme(colors, {
  text: "purple",
  background: "#DCDCDC",
});
`;

const tokensStylexTs = `
import * as stylex from "@stylexjs/stylex";

export const colors = stylex.defineVars({
  text: "black",
  background: "white",
});

export const spacing = stylex.defineVars({
  none: "0px",
  xs: "4px",
  s: "8px",
  m: "12px",
  l: "20px",
  xl: "32px",
  xxl: "48px",
  xxxl: "96px",
});
`;

const styles = stylex.create({
  container: {
    color: colors.text,
    backgroundColor: colors.background,
    padding: spacing.m,
  },
});

export default function Theme() {
  return (
    <>
      <Description>
        <div>Exemple description</div>
      </Description>
      <Exemple>
        <div {...stylex.props(dracula, styles.container)}>Lorem ipsum</div>
      </Exemple>
      <Tabs
        tabs={[
          { title: "Theme.tsx", content: themeExemple },
          { title: "styles/themes.ts", content: themesTs },
          { title: "styles/tokens.stylex.ts", content: tokensStylexTs },
        ]}
      />
    </>
  );
}
