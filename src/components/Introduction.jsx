import {
  Heading,
  Stack,
  SimpleGrid,
  Text,
  Flex,
  Image,
  Box,
} from "@chakra-ui/react";
import AxieuniverseImg from "../asset/Axie_Infinity_Universe.png";
import AxieCommnityImg from "../asset/Axie_Infinity_Community.png";
import AxieMissionImg from "../asset/Axie_Infinity_Mission.png";

function Introduction() {
  return (
    <Box mr={0} w="70%">
      <Flex
        justify={"center"}
        py={12}
        px={{ base: "20px", sm: "30px", lg: "50px" }}
        h={"100vh"}
        my={300}
        align={"center"}
      >
        <SimpleGrid columns={2} spacing={10}>
          <Stack spacing={4}>
            <Heading>Axie Infinity Universe </Heading>
            <Text>
              Axie Infinity is a universe filled with fierce, collectible
              creatures called Axies. Axie features a player-owned economy where
              players have complete ownership of their digital assets and can
              buy, sell, and trade them just like physical trading cards and
              collectibles. The Axie universe is always expanding through new
              games and experiences. Many of these experiences will allow
              players to compete with each other using complex strategies and
              tactics to attain top rankings or be rewarded with coveted
              resources. Others will have them complete quests, defeat bosses,
              and unlock in-depth storylines. The number of Axie combination is
              almost infinite. Each Axie has a variety of parts based on a
              unique genetic code. These genes correspond to body parts which
              can be interpreted in different ways by different experiences. For
              example, the first generation of Axie games have all featured
              systems where Axies can play cards or use moves in battle
              determined by their body parts.
            </Text>
          </Stack>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={AxieuniverseImg}
            objectFit={"cover"}
          />
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={AxieCommnityImg}
            objectFit={"cover"}
          />
          <Stack spacing={4}>
            <Heading> Community & Economy </Heading>
            <Text>
              All art assets and Axie genetic data can be easily accessed by 3rd
              parties, allowing community developers to build their own tools
              and experiences in the Axie Infinity universe. While still in
              early access, Axie is ranked the #1 Ethereum game by daily,
              weekly, and monthly active users. Players have spent over 1M ETH
              (4B+ USD) so far in the Axie universe. While Axie is a fun game,
              it's also taken on characteristics of a social network and earning
              platform due to the strong community and opportunity to truly own
              resources earned within the games. A key difference between Axie
              and a traditional game is that Blockchain economic design unlocks
              the ability to have complex player-owned economies and reward
              players who are able to reach advanced levels of skill. Players
              are able to have fun and work towards ambitious goals while
              simultaneously earning potential resources that will have real
              monetary value due to an open economic system and demand from
              other players - “Play-and-Earn”. Currently, players can gain more
              resources to advance in the game by: Competing in Battles to win
              leaderboard prizes as well as Smooth Love Potions (SLP) Breeding
              Axies to produce new ones with particular Body Part combinations
              Collecting and speculating on rare Axies such as Mystics and
              Origins Creating art and content On-boarding newcomers to the Axie
              universe
            </Text>
          </Stack>
          <Stack spacing={4}>
            <Heading> Mission </Heading>
            <Text>
              We're here to create an ecosystem of amazing Axie gaming
              experiences with community and player-owned economies as
              foundational pillars. By doing this we will deliver property
              rights to all users of the internet, starting with gamers. Axie is
              a digital nation where people globally come together to play,
              work, and make lifelong connections. When we started this journey
              4 years we weren't sure where we'd end up but we believed that if
              we asked the right questions we could build something with you
              that had never been seen before. We asked: What if we built a game
              that could onboard the world to Web3? What if we could make crypto
              nostalgic,educational, and immersive? What if a game could be
              built by developers and players working together through aligned
              incentives? Welcome to the Axie revolution. Disclaimer: Please
              note that anything written in this white paper should not be taken
              as financial advice. Axie is a bleeding-edge game that's
              incorporating unfinished, risky, and highly experimental
              technology. Development priorities, roadmaps, and features are
              subject to radical overhaul based on research, traction, feedback
              from the community, and a myriad of other factors.
            </Text>
          </Stack>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={AxieMissionImg}
            objectFit={"cover"}
          />
        </SimpleGrid>
      </Flex>
    </Box>
  );
}

export default Introduction;
