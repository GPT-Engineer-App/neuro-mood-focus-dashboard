import React from "react";
import { Box, VStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box bg="gray.100" w="200px" p={4}>
      <VStack spacing={4} align="stretch">
        <Text fontWeight="bold" fontSize="xl">
          Menu
        </Text>
        <Link to="/">
          <Text>Dashboard</Text>
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
