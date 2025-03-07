import {
  Flex,
  IconButton,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/color-mode";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <VStack
      w="auto"
      borderRadius="full"
      bgColor="gray.900"
      position="fixed"
      m="2"
      left={isNotSmallerScreen ? "0" : "50%"}
      bottom={isNotSmallerScreen ? "auto" : "0"}
      top={isNotSmallerScreen ? "50%" : "auto"}
      transform={isNotSmallerScreen ? "translateY(-50%)" : "translateX(-50%)"}
      zIndex={10}
    >
      <Flex
        w="auto"
        direction={isNotSmallerScreen ? "column" : "row"}
        alignItems="center"
        justifyContent="center"
      >
        <IconButton
          m="1"
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound={true}
          onClick={toggleColorMode}
        />
      </Flex>
    </VStack>
  );
};

export default Nav;
