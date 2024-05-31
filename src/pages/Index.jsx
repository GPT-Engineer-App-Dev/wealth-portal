import { Box, Container, Flex, Text, VStack, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction={{ base: "column", md: "row" }} justify="space-between">
        <Box flex="3" mr={{ md: 4 }}>
          <Text fontSize="2xl" mb={4}>Featured Articles</Text>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Text fontSize="xl">Article 1</Text>
              <Text mt={2}>Summary of the article...</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Text fontSize="xl">Article 2</Text>
              <Text mt={2}>Summary of the article...</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" mt={{ base: 4, md: 0 }}>
          <Box mb={4}>
            <Text fontSize="xl" mb={2}>Trending Articles</Text>
            <VStack spacing={2} align="stretch">
              <Link href="#">Trending Article 1</Link>
              <Link href="#">Trending Article 2</Link>
            </VStack>
          </Box>
          <Box>
            <Text fontSize="xl" mb={2}>Latest Updates</Text>
            <VStack spacing={2} align="stretch">
              <Link href="#">Update 1</Link>
              <Link href="#">Update 2</Link>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;