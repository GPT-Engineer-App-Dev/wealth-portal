import { Box, Text, Link } from "@chakra-ui/react";

const Opinion = () => (
  <Box p={4} bg="#f3f2f1">
    <Text fontSize="2xl" mb={4}>Opinion</Text>
    <Text>Read the latest opinions from our experts.</Text>
    <Link href="/">Back to Home</Link>
  </Box>
);

export default Opinion;