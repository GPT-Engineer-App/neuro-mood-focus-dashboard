import { useState } from "react";
import { Box, VStack, HStack, Heading } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

const PastSessions = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <VStack spacing={0} align="stretch" h="100vh" display="flex">
      <TopBar onToggleSidebar={toggleSidebar} />
      <HStack spacing={0} align="stretch" flex={1}>
        {isSidebarOpen && <Sidebar />}
        <Box p={8} flex={1} overflowY="auto" ml={0} transition="margin-left 0.2s">
          <Heading as="h1" size="xl" mb={6}>
            Past Sessions
          </Heading>
          <p>This is a placeholder for the Past Sessions page.</p>
        </Box>
      </HStack>
    </VStack>
  );
};

export default PastSessions;
