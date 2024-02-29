import { Box, Container, Heading, Text, Button, VStack, HStack, Input, useToast } from "@chakra-ui/react";
import { FaBrain, FaChartLine, FaSearch } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handlePredictClick = () => {
    // Simulate a prediction result
    toast({
      title: "Prediction complete",
      description: "Earthquake likelihood has been evaluated for the selected date.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Note: In a real-world scenario, this would be a call to a machine learning API.
  };

  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading as="h1" size="2xl" textAlign="center">
            Earthquake Prediction System <FaBrain />
          </Heading>
          <Text mt={4} fontSize="lg" textAlign="center">
            Utilizing data analysis and machine learning to predict seismic activity.
          </Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg" mb={4}>
            <FaChartLine /> Seismic Data Analysis
          </Heading>
          <Text mb={8}>Enter the parameters below to analyze seismic data and predict possible earthquake occurrences.</Text>
          <VStack spacing={4}>
            <HStack justifyContent="center">
              <Input placeholder="Date (YYYY-MM-DD)" type="date" />
            </HStack>
            <Button leftIcon={<FaSearch />} colorScheme="teal" onClick={handlePredictClick}>
              Predict Earthquake
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
