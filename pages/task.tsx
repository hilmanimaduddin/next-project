import Task1 from "@/component/task/task1";
import Task2 from "@/component/task/task2";
import Task3 from "@/component/task/task3";
import { Box, Text } from "@chakra-ui/react";
export default function Task() {
  return (
    <Box
      pt={4}
      justifyContent={"center"}
      display={"flex"}
      flexWrap={"wrap"}
      gap={2}
    >
      <Task1 />
      <Task2 />
      <Task3 />
    </Box>
  );
}
