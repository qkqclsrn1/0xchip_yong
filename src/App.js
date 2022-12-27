import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import theme from "./theme";
import SearchResult from "./components/SearchResult";
import Tabs from "./components/Tabs";
import Card from "./components/Card";
import BulletinBoard from "./components/BulletinBoard";
import ForumNav from "./components/ForumNav";
import Introduction from "./components/Introduction";
import { ChakraProvider, Flex } from "@chakra-ui/react";
function App() {
  return (
    
    <ChakraProvider theme={theme}>
      <NavBar />
      <SearchResult />
      <Card />
      <Tabs /> 
      <ForumNav />
      <Introduction />
      <BulletinBoard />
      <Footer />
    </ChakraProvider>
   
  );
}

export default App;
