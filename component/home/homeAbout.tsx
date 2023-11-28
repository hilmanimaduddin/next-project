import { Box, Text } from "@chakra-ui/react";

export default function HomeAbout() {
  return (
    <Box textAlign={"center"} paddingInline={"10%"}>
      <Text id="about" fontSize={"3xl"} fontWeight={"bold"}>
        About
      </Text>
      <Box pt={"2%"} pb={"5%"}>
        <Text fontSize={"xl"}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique,
          tempore corporis! Sint asperiores sit provident et tenetur.
          Dignissimos veritatis, eos eligendi sint accusamus omnis atque
          tempora. Animi odit magnam amet. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Perspiciatis, architecto repellat iusto
          quasi illum debitis aliquam suscipit voluptates! Quis quia eius
          aspernatur, cumque nostrum harum incidunt autem ipsam cupiditate ab.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          exercitationem nobis repudiandae repellendus eligendi dolore est
          numquam rem, iure consectetur neque eum perspiciatis dolorem culpa
          fuga dolor deleniti soluta laudantium.
        </Text>
      </Box>
    </Box>
  );
}
