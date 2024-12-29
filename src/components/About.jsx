import { Box, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";

const About = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Flex
      direction="column"
      w="100%"
      justifyContent="center"
      alignItems="center"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box marginTop="16">
        <Heading
          fontWeight="bold"
          bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
          bgClip="text"
          size="2xl"
          textTransform="uppercase"
        >
          About
        </Heading>
      </Box>

      <Box alignSelf="center" px="2" py="16">
      <Text
          textAlign="center"
          fontSize="2xl"
          fontWeight="semibold"
          color={isDark ? "gray.400" : "gray.700"}
        >
          I&apos;m a experienced and motivated Frontend Developer with combined experience in software development,
encompassing both frontend and backend development roles. Possesses a strong foundation in core web technologies
(HTML, CSS, JavaScript) and modern frameworks (Bootstrap, ReactsJS), coupled with backend capabilities in Python and SQL
        </Text>

      </Box>
    </Flex>
  );
};

export default About;
