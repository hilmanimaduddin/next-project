import { Box, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Task3() {
  const [data, setData] = useState("");
  const [test, setTest] = useState(false);

  function isPalindrome(str: string): boolean {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  }
  function handleChange(e: any) {
    setData(e.target.value);
  }

  useEffect(() => {
    console.log(data);
    console.log(isPalindrome(data));
    setTest(isPalindrome(data));
  }, [data]);

  return (
    <Box>
      <Text fontWeight={"bold"}>Task 3</Text>
      <Input
        w={"300px"}
        border={"1px"}
        type="text"
        placeholder="Input string"
        onChange={handleChange}
      />
      <Text>{test ? "True" : "False"}</Text>
    </Box>
  );
}
