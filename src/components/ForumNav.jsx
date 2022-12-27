import { VStack, StackDivider, Box } from "@chakra-ui/react";

function forumNav() {
  return (
    <Box
      w="30%"
      h="100%"
      ml={200}
      borderRight={1}
      borderRightWidth={5}
      borderLeftColor="white"
    >
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
        w={300}
        h={275}
        textAlign="center"
        border="2px"
        borderColor="white"
        bgColor="#F7FF58"
        rounded="md"
      >
        <Box h="40px" fontSize={30}>
          Free Forum
        </Box>
        <Box h="40px" fontSize={30}>
          Tip & Knowhow
        </Box>
        <Box h="40px" fontSize={30}>
          Review
        </Box>
        <Box h="40px" fontSize={30}>
          Searching Party
        </Box>
      </VStack>
    </Box>
  );
}

export default forumNav;
