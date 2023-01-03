import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import theme from "./theme";
import SearchResult from "./components/SearchResult";
import Tabs from "./components/Tabs";
import BulletinBoard from "./components/BulletinBoard";
import ForumLayout from "./components/ForumLayout";
import Introduction from "./components/Introduction";
import Layout from "./components/Layout";
import OtherdeedForOtherside from "./components/gamepages/OtherdeedForOtherside";
import TheSandbox from "./components/gamepages/TheSandbox";
import ApostlesGenesis from "./components/gamepages/ApostlesGenesis";
import BYOLand from "./components/gamepages/BYOLand";
import WarRiders from "./components/gamepages/WarRiders";

import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route
          path="/games/OtherdeedForOtherside"
          element={<OtherdeedForOtherside />}
        ></Route>
        <Route path="/games/TheSandbox" element={<TheSandbox />}></Route>
        <Route
          path="/games/ApostlesGenesis"
          element={<ApostlesGenesis />}
        ></Route>
        <Route path="/games/BYOLand" element={<BYOLand />}></Route>
        <Route path="/games/WarRiders" element={<WarRiders />}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
