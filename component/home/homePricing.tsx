import { Box, Text, Card } from "@chakra-ui/react";
import data from "../../json/dataprice.json";
import FallingLetter from "../transition/fallingLetter";
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
              key={index}
              w={"250px"}
              h={"400px"}
              border={"1px"}
              boxShadow={"2xl"}
              p={2}
            >
              <Box>
                <Text fontWeight={"bold"} fontSize={"2xl"}>
                  {item.name}
                </Text>
                <Text fontWeight={"bold"} fontSize={"2xl"}>
                  ${item.price}
                </Text>
                <Box>
                  {item.features.map((feature, index) => (
                    <Text p={2} fontSize={"lg"} key={index}>
                      {feature}
                    </Text>
                  ))}
                </Box>
              </Box>
            </Card>
          </FallingLetter>
        ))}
      </Box>
    </Box>
  );
}
