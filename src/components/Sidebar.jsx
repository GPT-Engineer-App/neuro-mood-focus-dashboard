import React from "react";
import { Box, VStack, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box bg="gray.50" p={6} height="100vh" borderRight="1px" borderColor="gray.200">
      <Image src="path/to/logo.png" alt="Logo" mb={12} />
      <VStack spacing={6} align="stretch">
        <Text fontWeight="bold" fontSize="2xl" mb={4}>
          Menu
        </Text>
        <Link to="/">
          <Text fontSize="lg" _hover={{ color: "blue.500" }}>
            Dashboard
          </Text>
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
