import React from "react";
import { Box, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box bg="gray.50" p={6} borderRight="1px" borderColor="gray.200">
      <VStack spacing={4} align="stretch">
        <Link to="/">
          <Button variant="ghost" size="lg" justifyContent="flex-start" _hover={{ bg: "gray.100" }} rounded="md" px={4} py={2} w="100%">
            Dashboard
          </Button>
        </Link>
        <Link to="/live-session">
          <Button variant="ghost" size="lg" justifyContent="flex-start" _hover={{ bg: "gray.100" }} rounded="md" px={4} py={2} w="100%">
            Live Session
          </Button>
        </Link>
        <Link to="/past-sessions">
          <Button variant="ghost" size="lg" justifyContent="flex-start" _hover={{ bg: "gray.100" }} rounded="md" px={4} py={2} w="100%">
            Past Sessions
          </Button>
        </Link>
        <Link to="/insights">
          <Button variant="ghost" size="lg" justifyContent="flex-start" _hover={{ bg: "gray.100" }} rounded="md" px={4} py={2} w="100%">
            Insights
          </Button>
        </Link>
        <Link to="/meditation">
          <Button variant="ghost" size="lg" justifyContent="flex-start" _hover={{ bg: "gray.100" }} rounded="md" px={4} py={2} w="100%">
            Meditation
          </Button>
        </Link>
        <Link to="/neurofeedback-games">
          <Button variant="ghost" size="lg" justifyContent="flex-start" _hover={{ bg: "gray.100" }} rounded="md" px={4} py={2} w="100%">
            Neurofeedback
          </Button>
        </Link>
        <Link to="/settings">
          <Button variant="ghost" size="lg" justifyContent="flex-start" _hover={{ bg: "gray.100" }} rounded="md" px={4} py={2} w="100%">
            Settings
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
