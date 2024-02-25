import React, { useState, useEffect } from "react";
import { Box, Grid, GridItem, Input, Button, useToast, Select, Text, VStack, Center } from "@chakra-ui/react";
import { FaRedo, FaLightbulb } from "react-icons/fa";

// Sudoku Solver & Generator (for simplicity, using a placeholder function)
const generateSudoku = (difficulty) => {
  // Pre-defined puzzles for each difficulty level
  const puzzles = {
    easy: [
      ["5", "3", "", "", "7", "", "", "", ""],
      ["6", "", "", "1", "9", "5", "", "", ""],
      ["", "9", "8", "", "", "", "", "6", ""],
      ["8", "", "", "", "6", "", "", "", "3"],
      ["4", "", "", "8", "", "3", "", "", "1"],
      ["7", "", "", "", "2", "", "", "", "6"],
      ["", "6", "", "", "", "", "2", "8", ""],
      ["", "", "", "4", "1", "9", "", "", "5"],
      ["", "", "", "", "8", "", "", "7", "9"],
    ],
    medium: [
      // A medium difficulty puzzle
    ],
    hard: [
      // A hard difficulty puzzle
    ],
  };
  return puzzles[difficulty] || puzzles.easy;
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
      <Grid templateColumns="repeat(9, 1fr)" gap={0} my={4}>
        {grid.map((row, rowIndex) =>
          row.map((value, colIndex) => (
            <GridItem w="40px" h="40px" key={`${rowIndex}-${colIndex}`} borderRight={colIndex % 3 === 2 && colIndex !== 8 ? "2px solid" : "1px solid"} borderBottom={rowIndex % 3 === 2 && rowIndex !== 8 ? "2px solid" : "1px solid"} borderColor="gray.300">
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
