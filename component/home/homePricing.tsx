import {
  Box,
  Text,
  Card,
  useColorModeValue,
  Stack,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import data from "../../json/dataprice.json";
import FallingLetter from "../transition/fallingLetter";
import { CheckIcon } from "@chakra-ui/icons";

export default function HomePricing() {
  return (
    <Box
      id="pricing"
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <FallingLetter>
        <Text fontSize={"3xl"} fontWeight={"bold"} p={2}>
          Pricing
        </Text>
      </FallingLetter>
      <Box
        paddingBlock={16}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={4}
      >
        {data.map((item, index) => (
          <FallingLetter key={index} delay={index + 1}>
            <Card
              w={"250px"}
              h={"400px"}
              border={"2px"}
              boxShadow={"2xl"}
              p={2}
            >
              <Box>
                <Text
                  fontSize={"xl"}
                  fontWeight={500}
                  bg={useColorModeValue("blue.50", "blue.900")}
                  p={2}
                  px={3}
                  color={"blue.500"}
                  rounded={"full"}
                >
                  {item.name}
                </Text>
                <Stack direction={"row"} align={"center"} justify={"center"}>
                  <Text fontSize={"3xl"}>$</Text>
                  <Text fontSize={"5xl"} fontWeight={800}>
                    {item.price}
                  </Text>
                  <Text color={"gray.500"}>/year</Text>
                </Stack>
                <List p={2} spacing={3}>
                  {item.features.map((feature, index) => (
                    <ListItem key={index}>
                      <ListIcon as={CheckIcon} color="green.400" />
                      {feature}
                    </ListItem>
                  ))}
                </List>
                <Box></Box>
              </Box>
            </Card>
          </FallingLetter>
        ))}
      </Box>
    </Box>
  );
}
