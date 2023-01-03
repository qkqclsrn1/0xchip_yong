import React from "react";

import { Outlet, Link } from "react-router-dom";

import NavBar from "../NavBar";
import Footer from "../Footer";
import SearchResult from "../SearchResult";
import Tabs from "../Tabs";
import Introduction from "../Introduction";

import TheSandboxIcon from "../../asset/TheSandbox/TheSandbox_Icon.png";

function TheSandbox() {
  return (
    <>
      <NavBar />
      <SearchResult />
      <Tabs imgsrc={TheSandboxIcon} name="The Sandbox" />
      <Introduction />
      <Footer />
    </>
  );
}

export default TheSandbox;
