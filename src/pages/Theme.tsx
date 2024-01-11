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
        <p>
          This exemple show you how to create and apply css variables and
          themes. StyleX makes creating css variables and themes easy.
        </p>

        <p>
          Css variables have to follow one rule : you need to declare them
          inside a ".stylex.ts" file and don't export them as default. After
          that you can import and use these variables inside "create" or
          "createTheme" everywhere you want to.
        </p>

        <p>
          For the theme, you can create theme everywhere you want to. When you
          apply a theme to a styleX prop, all property that is in common with
          the theme will be override by the theme.
        </p>
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
