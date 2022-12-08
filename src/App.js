import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import theme from "./theme";
import SearchResult from "./components/SearchResult";
import Tabs from "./components/Tabs";
import Card from "./components/Card";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <NavBar />
        <SearchResult />
        <Card />
        <Tabs />
        <Footer />
      </ChakraProvider>
    </Router>
  );
}

export default App;
