import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Basic from "../pages/Basic";
import Override from "../pages/Override";
import Home from "../pages/Home";
import HoverFocus from "../pages/HoverFocus";
import MediaQuery from "../pages/MediaQuery";
import Reset from "../pages/Reset";
import Conditionnal from "../pages/Conditionnal";
import Variant from "../pages/Variant";
import Dynamic from "../pages/Dynamic";
import Theme from "../pages/Theme";
import Page from "../pages/Page";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Page content={<Home />} />} />
          <Route path="basic" element={<Page content={<Basic />} />} />
          <Route path="override" element={<Page content={<Override />} />} />
          <Route
            path="hover-focus"
            element={<Page content={<HoverFocus />} />}
          />
          <Route
            path="media-query"
            element={<Page content={<MediaQuery />} />}
          />
          <Route path="reset" element={<Page content={<Reset />} />} />
          <Route
            path="conditionnal"
            element={<Page content={<Conditionnal />} />}
          />
          <Route
            path="variant"
            element={<Page content={<Variant variant="danger" />} />}
          />
          <Route path="dynamic" element={<Page content={<Dynamic />} />} />
          <Route path="theme" element={<Page content={<Theme />} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
