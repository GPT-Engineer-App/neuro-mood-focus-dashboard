import { useState } from "react";
import { Box, VStack, HStack, Text, Button, Card, CardHeader, CardBody, Heading, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import { FaBrain, FaPlayCircle } from "react-icons/fa";

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // Sample data for demonstration purposes
  const moodData = { label: "Calm", score: 0.8 };
  const focusData = { label: "Focused", score: 0.7 };
  const usualMoodData = { label: "Usual Mood", score: 0.6 };
  const usualFocusData = { label: "Usual Focus", score: 0.5 };
  const eegData = [
    { name: "Channel 1", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Channel 2", uv: 3000, pv: 1398, amt: 2210 },
    // ... more data points
  ];

  return (
    <VStack spacing={0} align="stretch" h="100vh" display="flex">
      <TopBar onToggleSidebar={toggleSidebar} currentPage="Dashboard" />
      <HStack spacing={0} align="stretch" flex={1}>
        {isSidebarOpen && <Sidebar />}
        <Box p={8} flex={1} overflowY="auto" ml={0} transition="margin-left 0.2s" bg="gray.50">
          <Heading as="h1" size="xl" mb={6}>
            Dashboard
          </Heading>
          <HStack spacing={8} alignItems="stretch">
            <VStack spacing={8} flex={1}>
              <Card>
                <CardHeader>
                  <Heading size="md">Mood & Focus</Heading>
                </CardHeader>
                <CardBody>
                  <HStack spacing={8}>
                    <Stat>
                      <StatLabel>Mood</StatLabel>
                      <StatNumber>{moodData.score * 100}%</StatNumber>
                      <StatHelpText>{moodData.label}</StatHelpText>
                      <StatHelpText>
                        <StatArrow type={moodData.score >= usualMoodData.score ? "increase" : "decrease"} />
                        {Math.round(Math.abs(moodData.score - usualMoodData.score) * 100)}%{moodData.score >= usualMoodData.score ? " better than usual" : " worse than usual"}
                      </StatHelpText>
                    </Stat>
                    <Stat>
                      <StatLabel>Focus</StatLabel>
                      <StatNumber>{focusData.score * 100}%</StatNumber>
                      <StatHelpText>{focusData.label}</StatHelpText>
                      <StatHelpText>
                        <StatArrow type={focusData.score >= usualFocusData.score ? "increase" : "decrease"} />
                        {Math.round(Math.abs(focusData.score - usualFocusData.score) * 100)}%{focusData.score >= usualFocusData.score ? " better than usual" : " worse than usual"}
                      </StatHelpText>
                    </Stat>
                  </HStack>
                </CardBody>
              </Card>
            </VStack>
            <Box flex={2}>
              <Card h="100%">
                <CardHeader>
                  <Heading size="md">Raw EEG Data</Heading>
                </CardHeader>
                <CardBody>
                  <Box bg="gray.100" borderRadius="md" h={48} display="flex" alignItems="center" justifyContent="center">
                    <Text>Raw EEG data visualization coming soon!</Text>
                  </Box>
                </CardBody>
              </Card>
            </Box>
          </HStack>
          <HStack spacing={8} mt={8}>
            <Card flex={1}>
              <CardBody>
                <VStack spacing={4} align="stretch">
                  <Heading size="md">Shift into Focus</Heading>
                  <Text>Ready to concentrate and get work done? Start a focus session to optimize your brain state for productivity.</Text>
                  <Button colorScheme="blue" leftIcon={<FaBrain />}>
                    Begin Focus Session
                  </Button>
                </VStack>
              </CardBody>
            </Card>
            <Card flex={1}>
              <CardBody>
                <VStack spacing={4} align="stretch">
                  <Heading size="md">Start Meditation</Heading>
                  <Text>Take a break and calm your mind with a guided meditation session. Relax, recharge, and reduce stress.</Text>
                  <Button colorScheme="green" leftIcon={<FaPlayCircle />}>
                    Begin Meditation
                  </Button>
                </VStack>
              </CardBody>
            </Card>
          </HStack>
          <Card mt={8}>
            <CardBody>
              <VStack spacing={4} align="stretch">
                <Heading size="md">Past Sessions</Heading>
                <Box bg="gray.100" borderRadius="md" h={48} display="flex" alignItems="center" justifyContent="center">
                  <Text>Calendar visualization coming soon!</Text>
                </Box>
                <Button as={RouterLink} to="/past-sessions" variant="link" colorScheme="blue" alignSelf="flex-start">
                  View Past Sessions
                </Button>
              </VStack>
            </CardBody>
          </Card>
        </Box>
      </HStack>
    </VStack>
  );
};

export default Index;
