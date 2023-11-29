import { Box, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Task1() {
  const [count, setCount] = useState<any[]>([]);
  const [data, setData] = useState(0);

  function printNumbers(n: number) {
    const numbers = [];
    for (let i = 1; i <= n; i++) {
      if (i % 15 === 0) {
        console.log("fish bash");
        numbers.push("fish bash");
      } else if (i % 3 === 0) {
        console.log("fish");
        numbers.push("fish");
      } else if (i % 5 === 0) {
        console.log("bash");
        numbers.push("bash");
      } else {
        console.log(i);
        numbers.push(i);
      }
    }
    setCount(numbers);
  }

  function handleChange(e: any) {
    setData(e.target.value);
  }

  useEffect(() => {
    printNumbers(data);
  }, [data]);

  return (
    <Box w={"300px"}>
      <Text fontWeight={"bold"}>Task 1</Text>
      <Input
        border={"1px"}
        type="number"
        onChange={handleChange}
        placeholder="Input number"
      />
      <Box>
        {count.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </Box>
    </Box>
  );
}
