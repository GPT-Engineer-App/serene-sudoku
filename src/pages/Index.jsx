import React, { useState, useEffect } from "react";
import { Box, Grid, GridItem, Input, Button, useToast, Select, Text, VStack, Center } from "@chakra-ui/react";
import { FaRedo, FaLightbulb } from "react-icons/fa";

// Sudoku Solver & Generator (for simplicity, using a placeholder function)
const generateSudoku = (difficulty) => {
  // This should be replaced with an actual Sudoku puzzle generator
  // For now, we create an empty 9x9 grid
  return Array(9)
    .fill()
    .map(() => Array(9).fill(""));
};

const Index = () => {
  const [grid, setGrid] = useState(generateSudoku("easy"));
  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");
  const toast = useToast();

  useEffect(() => {
    setGrid(generateSudoku(selectedDifficulty));
  }, [selectedDifficulty]);

  const handleInputChange = (row, col, value) => {
    const newGrid = grid.map((currentRow, rowIndex) =>
      currentRow.map((cell, colIndex) => {
        if (rowIndex === row && colIndex === col) {
          return value;
        }
        return cell;
      }),
    );
    setGrid(newGrid);
  };

  const checkSudoku = () => {
    // Placeholder for checking the Sudoku
    toast({
      title: "Check Complete.",
      description: "This functionality will be implemented later.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const getHint = () => {
    // Placeholder for providing a hint
    toast({
      title: "Hint.",
      description: "This functionality will be implemented later.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const resetPuzzle = () => {
    setGrid(generateSudoku(selectedDifficulty));
  };

  return (
    <VStack p={4}>
      <Text fontSize="3xl" mb={6}>
        Sudoku Game
      </Text>
      <Select placeholder="Select Difficulty" width="fit-content" onChange={(e) => setSelectedDifficulty(e.target.value)}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </Select>
      <Grid templateColumns="repeat(9, 1fr)" gap={1} my={4}>
        {grid.map((row, rowIndex) =>
          row.map((value, colIndex) => (
            <GridItem w="40px" h="40px" key={`${rowIndex}-${colIndex}`}>
              <Input value={value} onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)} maxLength="1" textAlign="center" />
            </GridItem>
          )),
        )}
      </Grid>
      <Center>
        <Button leftIcon={<FaRedo />} colorScheme="teal" variant="outline" onClick={resetPuzzle}>
          New Puzzle
        </Button>
        <Button leftIcon={<FaLightbulb />} colorScheme="orange" ml={4} onClick={getHint}>
          Get Hint
        </Button>
        <Button colorScheme="green" ml={4} onClick={checkSudoku}>
          Check
        </Button>
      </Center>
    </VStack>
  );
};

export default Index;
