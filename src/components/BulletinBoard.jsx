import {
  Textarea,
  Text,
  Stack,
  Heading,
  StackDivider,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon, EditIcon } from "@chakra-ui/icons";

function bulletinBoard() {
  return (
    <Box mr={0} mb={100} w="70%">
      <Stack
        w="50%"
        mb={50}
        border="1px"
        borderColor="white"
        divider={<StackDivider />}
        spacing="5"
      >
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Staking and Staking Rewards
          </Heading>
          <Text pt="2" fontColor="black" fontSize="sm">
            Staking is a way for us to reward our community members for having a
            long term mindset and
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Overview
          </Heading>
          <Text pt="2" fontSize="sm">
            Check out the overview of your clients.
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Analysis
          </Heading>
          <Text pt="2" fontSize="sm">
            See a detailed analysis of all your business clients.
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Staking and Staking Rewards
          </Heading>
          <Text pt="2" fontSize="sm">
            Staking is a way for us to reward our community members for having a
            long term mindset and
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Staking and Staking Rewards
          </Heading>
          <Text pt="2" fontSize="sm">
            Staking is a way for us to reward our community members for having a
            long term mindset and
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Staking and Staking Rewards
          </Heading>
          <Text pt="2" fontSize="sm">
            Staking is a way for us to reward our community members for having a
            long term mindset and
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Staking and Staking Rewards
          </Heading>
          <Text pt="2" fontSize="sm">
            Staking is a way for us to reward our community members for having a
            long term mindset and
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Staking and Staking Rewards
          </Heading>
          <Text pt="2" fontSize="sm">
            Staking is a way for us to reward our community members for having a
            long term mindset and
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Staking and Staking Rewards
          </Heading>
          <Text pt="2" fontSize="sm">
            Staking is a way for us to reward our community members for having a
            long term mindset and
          </Text>
        </Box>
      </Stack>
      <Textarea w="50%" h={15} fontSize={20} placeholder="Searching.." />
      <IconButton
        colorScheme="blue"
        aria-label="Search database"
        size="lg"
        icon={<SearchIcon />}
      />
      <IconButton
        colorScheme="teal"
        aria-label="Call Segun"
        size="lg"
        icon={<EditIcon />}
      />
    </Box>
  );
}

export default bulletinBoard;
