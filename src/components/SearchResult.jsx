//import Image from 'next/image';
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import displayItems from "../mock/data";
import React, { useState } from "react";
import { Heading, Stack, Input, IconButton, Flex } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

import "@fontsource/iceberg";
import eth from "../asset/eth.png";
const SearchResult = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Stack h={"300px"} justify={"center"} align={"center"} my={10} pt={10}>
        <Heading
          as="h1"
          // fontFamily="Iceberg"
          size="2xl"
          // color={"#F7FF58"}
        >
          Play, Trade and Connect
        </Heading>
        <Flex pt={5}>
          <Input
            display={"flex"}
            justify={"center"}
            align={"center"}
            w={"800px"}
            h={"60px"}
            placeholder="Search your game"
            size={"lg"}
            variant={"filled"}
            focusBorderColor={"#E9AFA3"}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <IconButton
            type={"button"}
            colorScheme="black"
            aria-label="Search database"
            icon={<FaSearch />}
            size="lg"
            h={"60px"}
            onClick={() => {}}
          />
        </Flex>
      </Stack>
    </> 
  );
};

export default SearchResult;
