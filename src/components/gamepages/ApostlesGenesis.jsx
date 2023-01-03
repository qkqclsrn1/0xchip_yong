import React from "react";

import { Outlet, Link } from "react-router-dom";

import NavBar from "../NavBar";
import Footer from "../Footer";
import SearchResult from "../SearchResult";
import Tabs from "../Tabs";
import Introduction from "../Introduction";

import ApostlesGenesisIcon from "../../asset/ApostlesGenesis/ApostlesGenesis_Icon.png";

function ApostlesGenesis() {
  return (
    <>
      <NavBar />
      <SearchResult />
      <Tabs imgsrc={ApostlesGenesisIcon} name="Apostles: Genesis" />
      <Introduction />
      <Footer />
    </>
  );
}

export default ApostlesGenesis;
