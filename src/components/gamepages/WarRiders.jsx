import React from "react";

import { Outlet, Link } from "react-router-dom";

import NavBar from "../NavBar";
import Footer from "../Footer";
import SearchResult from "../SearchResult";
import Tabs from "../Tabs";
import Introduction from "../Introduction";

import WarRidersIcon from "../../asset/WarRiders/WarRiders_Icon.png";

function WarRiders() {
  return (
    <>
      <NavBar />
      <SearchResult />
      <Tabs imgsrc={WarRidersIcon} name="War Riders" />
      <Introduction />
      <Footer />
    </>
  );
}

export default WarRiders;
