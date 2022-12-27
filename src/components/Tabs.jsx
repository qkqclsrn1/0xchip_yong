import { Flex, Tabs, TabList, Tab } from "@chakra-ui/react";

export default function forumTabs() {
  return (
    <Flex mt={50} align="center" width="100%" height="100%">
      <Tabs
        w="100&"
        h={100}
        diretion="coloum"
        variant="soft-rounded"
        colorScheme="green"
      >
        <TabList mb="3em">
          <Tab
            h="60px"
            fontSize="30px"
            _selected={{ color: "black", bg: "#F7FF58" }}
          >
            Introduction
          </Tab>
          <Tab
            h="60px"
            fontSize="30px"
            _selected={{ color: "black", bg: "#F7FF58" }}
          >
            NFT
          </Tab>
          <Tab
            h="60px"
            fontSize="30px"
            _selected={{ color: "black", bg: "#F7FF58" }}
          >
            Forum
          </Tab>
        </TabList>
      </Tabs>
    </Flex>
  );
}
