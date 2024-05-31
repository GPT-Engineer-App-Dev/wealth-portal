import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="#f3f2f1" color="black" py={4} mt={8}>
      <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center" px={4}>
        <Text>&copy; 2023 Financial Times</Text>
        <Flex>
          <Link href="#" mx={2}>Contact</Link>
          <Link href="#" mx={2}>Privacy Policy</Link>
          <Link href="#" mx={2}>Terms of Service</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;