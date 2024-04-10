import { Box, VStack, HStack, Text, Button, Card, CardHeader, CardBody, Heading, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Divider, Image } from "@chakra-ui/react";
import { FaBrain, FaChartLine, FaPlayCircle } from "react-icons/fa";

const Index = () => {
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
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Neurosity Dashboard
      </Heading>
      <HStack spacing={8} alignItems="stretch">
        <VStack spacing={8} flex={1}>
          <Card>
            <CardHeader>
              <Heading size="md">Current Mood & Focus</Heading>
            </CardHeader>
            <CardBody>
              <HStack spacing={8}>
                <Stat>
                  <StatLabel>Mood</StatLabel>
                  <StatNumber>{moodData.score * 100}%</StatNumber>
                  <StatHelpText>{moodData.label}</StatHelpText>
                </Stat>
                <Stat>
                  <StatLabel>Focus</StatLabel>
                  <StatNumber>{focusData.score * 100}%</StatNumber>
                  <StatHelpText>{focusData.label}</StatHelpText>
                </Stat>
              </HStack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md">Compared to Usual</Heading>
            </CardHeader>
            <CardBody>
              <HStack spacing={8}>
                <Stat>
                  <StatLabel>Mood</StatLabel>
                  <StatNumber>
                    <StatArrow type={moodData.score >= usualMoodData.score ? "increase" : "decrease"} />
                    {Math.round(Math.abs(moodData.score - usualMoodData.score) * 100)}%
                  </StatNumber>
                  <StatHelpText>{moodData.score >= usualMoodData.score ? "Better mood than usual" : "Worse mood than usual"}</StatHelpText>
                </Stat>
                <Stat>
                  <StatLabel>Focus</StatLabel>
                  <StatNumber>
                    <StatArrow type={focusData.score >= usualFocusData.score ? "increase" : "decrease"} />
                    {Math.round(Math.abs(focusData.score - usualFocusData.score) * 100)}%
                  </StatNumber>
                  <StatHelpText>{focusData.score >= usualFocusData.score ? "Better focus than usual" : "Worse focus than usual"}</StatHelpText>
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
              <Text>Raw EEG data visualization coming soon!</Text>
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
    </Box>
  );
};

export default Index;
