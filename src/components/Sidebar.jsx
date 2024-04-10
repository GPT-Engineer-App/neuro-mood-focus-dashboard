import React from "react";
import { Box, VStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box bg="gray.50" p={6} height="100vh" borderRight="1px" borderColor="gray.200">
      <VStack spacing={6} align="stretch">
        <Text fontWeight="bold" fontSize="2xl" mb={4}>
          Menu
        </Text>
        <Link to="/">
          <Text fontSize="lg" _hover={{ color: "blue.500" }}>
            Dashboard
          </Text>
        </Link>
        <Link to="/live-session">
          <Text fontSize="lg" _hover={{ color: "blue.500" }}>
            Live Session
          </Text>
        </Link>
        <Link to="/past-sessions">
          <Text fontSize="lg" _hover={{ color: "blue.500" }}>
            Past Sessions
          </Text>
        </Link>
        <Link to="/insights">
          <Text fontSize="lg" _hover={{ color: "blue.500" }}>
            Insights
          </Text>
        </Link>
        <Link to="/meditation">
          <Text fontSize="lg" _hover={{ color: "blue.500" }}>
            Meditation
          </Text>
        </Link>
        <Link to="/neurofeedback-games">
          <Text fontSize="lg" _hover={{ color: "blue.500" }}>
            Neurofeedback Games
          </Text>
        </Link>
        <Link to="/settings">
          <Text fontSize="lg" _hover={{ color: "blue.500" }}>
            Settings
          </Text>
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
