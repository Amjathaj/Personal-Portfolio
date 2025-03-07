import { Box, useColorMode } from "@chakra-ui/react";

const Footer = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Box
      w="100%"
      p={4}
      color={isDark ? "white" : "black"}
      textAlign="center"
      borderTopColor="grey"
      border="1"
      marginTop={1}
    >
      ©  Amjath  2024
    </Box>
  );
};

export default Footer;
