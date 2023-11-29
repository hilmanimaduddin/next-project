import { Box, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export default function Task2() {
  const [ascending, setAscending] = useState("");
  const [descending, setDescending] = useState("");

  function sortAscending(numbers: number[]): number[] {
    for (let i = 0; i < numbers.length - 1; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]) {
          let temp = numbers[i];
          numbers[i] = numbers[j];
          numbers[j] = temp;
        }
      }
    }
    return numbers;
  }

  function sortDescending(numbers: number[]): number[] {
    for (let i = 0; i < numbers.length - 1; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] < numbers[j]) {
          let temp = numbers[i];
          numbers[i] = numbers[j];
          numbers[j] = temp;
        }
      }
    }
    return numbers;
  }

  const handleInputChange = (event: any) => {
    const input = event.target.value;
    const numberArray = input.split(",").map(Number);
    handleAscending(numberArray);
    handleDescending(numberArray);
  };

  function handleAscending(data: number[]) {
    const sortedNumbers = sortAscending(data);
    const dataa = sortedNumbers.join(",");
    console.log("Ascending Numbers:", sortedNumbers);
    setAscending(dataa);
  }
  function handleDescending(data: number[]) {
    const sortedNumbers = sortDescending(data);
    const dataa = sortedNumbers.join(",");
    console.log("Descending Numbers:", sortedNumbers);
    setDescending(dataa);
  }

  return (
    <Box>
      <Text fontWeight={"bold"}>Task 2</Text>
      <Input
        w={"300px"}
        border={"1px"}
        placeholder="Input numbers"
        type="text"
        onChange={handleInputChange}
      />
      <Text>Dari kecil ke besar :</Text>
      <Text>{ascending}</Text>
      <Text>Dari besar ke kecil :</Text>
      <Text>{descending}</Text>
    </Box>
  );
}
