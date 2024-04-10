import React from "react";
import { Box, VStack, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box bg="gray.100" p={4} height="100vh">
      <Image src="path/to/logo.png" alt="Logo" mb={8} />
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
