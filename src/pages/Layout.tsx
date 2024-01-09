import * as stylex from "@stylexjs/stylex";
import { Outlet, Link, useLocation } from "react-router-dom";
import { colors } from "../styles/tokens.stylex";

const styles = stylex.create({
  layout: {
    display: "flex",
    gap: "42px",
    backgroundColor: colors.background,
    fontSize: "16px",
    height: "100vh",
  },
  nav: {
    width: "250px",
    minWidth: "250px",
    padding: "8px",
    backgroundColor: colors.background,
    borderRight: "1px solid #EEEEEE",
  },
  list: {
    listStyle: "none",
    padding: "0px",
    margin: "0px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  link: {
    textDecoration: "none",
    color: "#707070",
    width: "100%",
    display: "inline-block",
    padding: "8px",
    borderRadius: "4px",
    backgroundColor: {
      ":hover": "#F0F3F4",
    },
  },
  activate: {
    color: "#11982D",
    backgroundColor: "#F0F3F4",
    fontWeight: "bold",
  },
});

const Layout = () => {
  const location = useLocation();

  return (
    <div {...stylex.props(styles.layout)}>
      <nav {...stylex.props(styles.nav)}>
        <ul {...stylex.props(styles.list)}>
          <li>
            <Link
              {...stylex.props(
                styles.link,
                location.pathname.length === 1 && styles.activate
              )}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              {...stylex.props(
                styles.link,
                location.pathname.includes("/basic") && styles.activate
              )}
              to="/basic"
            >
              Basic
            </Link>
          </li>
          <li>
            <Link
              {...stylex.props(
                styles.link,
                location.pathname.includes("/override") && styles.activate
              )}
              to="/override"
            >
              Override
            </Link>
          </li>
          <li>
            <Link
              {...stylex.props(
                styles.link,
                location.pathname.includes("/hover-focus") && styles.activate
              )}
              to="/hover-focus"
            >
              Hover / Focus
            </Link>
          </li>
          <li>
            <Link
              {...stylex.props(
                styles.link,
                location.pathname.includes("/media-query") && styles.activate
              )}
              to="/media-query"
            >
              MediaQuery
            </Link>
          </li>
          <li>
            <Link
              {...stylex.props(
                styles.link,
                location.pathname.includes("/reset") && styles.activate
              )}
              to="/reset"
            >
              Reset
            </Link>
          </li>
          <li>
            <Link
              {...stylex.props(
                styles.link,
                location.pathname.includes("/conditionnal") && styles.activate
              )}
              to="/conditionnal"
            >
              Conditionnal
            </Link>
          </li>
          <li>
            <Link
              {...stylex.props(
                styles.link,
                location.pathname.includes("/variant") && styles.activate
              )}
              to="/variant"
            >
              Variant
            </Link>
          </li>
          <li>
            <Link
              {...stylex.props(
                styles.link,
                location.pathname.includes("/dynamic") && styles.activate
              )}
              to="/dynamic"
            >
              Dynamic
            </Link>
          </li>
          <li>
            <Link
              {...stylex.props(
                styles.link,
                location.pathname.includes("/theme") && styles.activate
              )}
              to="/theme"
            >
              Theme
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
