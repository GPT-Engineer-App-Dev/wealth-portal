import { Box, Text, Link } from "@chakra-ui/react";

const Business = () => (
  <Box p={4} bg="#f3f2f1">
    <Text fontSize="2xl" mb={4}>Business News</Text>
    <Text>Stay updated with the latest business news.</Text>
    <Link href="/">Back to Home</Link>
  </Box>
);

export default Business;