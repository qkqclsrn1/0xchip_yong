import React from "react";

import { Outlet, Link } from "react-router-dom";

import NavBar from "../NavBar";
import Footer from "../Footer";
import SearchResult from "../SearchResult";
import Tabs from "../Tabs";
import Introduction from "../Introduction";

import OtherdeedForOthersideIcon from "../../asset/OtherdeedForOtherside/Otherdeed_for_Otherside_Icon.png";


function OtherdeedForOtherside() {
  return (
    <>
      <NavBar />
      <SearchResult />
      <Tabs imgsrc={OtherdeedForOthersideIcon} name="Otherdeed for Otherside"/>
      <Introduction />
      <Footer />
    </>
  );
}

export default OtherdeedForOtherside;
