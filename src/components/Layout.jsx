import { Outlet, Link } from "react-router-dom";

import React from "react";

import NavBar from "./NavBar";
import Footer from "./Footer";
import SearchResult from "./SearchResult";
import Tabs from "./Tabs";

function Layout() {
  return (
    <>
      <NavBar />
      <SearchResult />
      <Tabs />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
