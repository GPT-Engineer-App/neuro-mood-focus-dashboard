import React from "react";
import { Box, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaHome, FaPlayCircle, FaHistory, FaChartBar, FaHeadphones, FaGamepad, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <Box bg="white" borderRight="1px" borderColor="gray.200">
      <VStack align="stretch" pt={4}>
        <Link to="/">
          <Button variant="ghost" size="lg" justifyContent="flex-start" _hover={{ bg: "gray.100" }} rounded="md" py={2} width="100%" leftIcon={<FaHome />}>
            Dashboard
          </Button>
        </Link>
        <Link to="/live-session">
          <Button variant="ghost" size="lg" justifyContent="flex-start" _hover={{ bg: "gray.100" }} rounded="md" py={2} width="100%" leftIcon={<FaPlayCircle />}>
            Live Session
          </Button>
        </Link>
        <Link to="/past-sessions">
          <Button variant="ghost" size="lg" justifyContent="flex-start" _hover={{ bg: "gray.100" }} rounded="md" py={2} width="100%" leftIcon={<FaHistory />}>
            Past Sessions
          </Button>
        </Link>
        <Link to="/insights">
          <Button variant="ghost" size="lg" justifyContent="flex-start" _hover={{ bg: "gray.100" }} rounded="md" py={2} width="100%" leftIcon={<FaChartBar />}>
            Insights
          </Button>
        </Link>
        <Link to="/meditation">
          <Button variant="ghost" size="lg" justifyContent="flex-start" _hover={{ bg: "gray.100" }} rounded="md" py={2} width="100%" leftIcon={<FaHeadphones />}>
            Meditation
          </Button>
        </Link>
        <Link to="/neurofeedback-games">
          <Button variant="ghost" size="lg" justifyContent="flex-start" _hover={{ bg: "gray.100" }} rounded="md" py={2} width="100%" leftIcon={<FaGamepad />}>
            Neurofeedback
          </Button>
        </Link>
        <Link to="/settings">
          <Button variant="ghost" size="lg" justifyContent="flex-start" _hover={{ bg: "gray.100" }} rounded="md" py={2} width="100%" leftIcon={<FaCog />}>
            Settings
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
