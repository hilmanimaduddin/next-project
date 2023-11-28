import { Box, Text, Card } from "@chakra-ui/react";
import data from "../../json/dataprice.json";
export default function HomePricing() {
  console.log("data", data);

  return (
    <Box
      id="pricing"
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text fontSize={"3xl"} fontWeight={"bold"} p={2}>
        Pricing
      </Text>
      <Box
        paddingBlock={4}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={4}
      >
        {data.map((item, index) => (
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
        ))}
      </Box>
    </Box>
  );
}
