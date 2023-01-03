import React from "react";

import { Outlet, Link } from "react-router-dom";

import NavBar from "../NavBar";
import Footer from "../Footer";
import SearchResult from "../SearchResult";
import Tabs from "../Tabs";
import Introduction from "../Introduction";

import BYOLandIcon from "../../asset/BYOLand/BYOLand_Icon.png";

function BYOLand() {
  return (
    <>
      <NavBar />
      <SearchResult />
      <Tabs imgsrc={BYOLandIcon} name="BYOLand" />
      <Introduction />
      <Footer />
    </>
  );
}

export default BYOLand;
