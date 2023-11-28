import { Box, Image, Text } from "@chakra-ui/react";
import MySVG from "../public/vectorright.svg";
import MySVG1 from "../public/Vectorleft.svg";
import Navbar from "@/component/navbar";
import HomeAbout from "@/component/home/homeAbout";
import HomePricing from "@/component/home/homePricing";
import HomeContact from "@/component/home/homeContact";

export default function Home() {
  console.log("shdiowqjd", MySVG);

  return (
    <Box>
      <Navbar />
      <Box>
        <Image
          zIndex={-1}
          position={"absolute"}
          top={-45}
          left={-4}
          width={300}
          src={MySVG1.src}
          alt=""
        />
        <Image
          zIndex={-1}
          position={"absolute"}
          top={400}
          right={0}
          width={700}
          src={MySVG.src}
          alt=""
        />
      </Box>
      <Box w={"100%"}>
        <Text
          pt={"7%"}
          pl={"25%"}
          pr={"10%"}
          fontSize="3xl"
          textAlign={"center"}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut saepe
          cupiditate tenetur, consequatur nemo doloribus enim suscipit sint
          velit aliquam libero amet delectus repudiandae? Voluptatem porro
          molestiae commodi earum deleniti.
        </Text>
        <Text
          pt={"5%"}
          pl={"3%"}
          pr={"50%"}
          textAlign={"center"}
          fontSize={"xl"}
          pb={"20%"}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id
          obcaecati beatae blanditiis quam iste placeat reprehenderit, minus
          dolorem fugit provident praesentium necessitatibus accusantium culpa?
          Pariatur laborum nostrum culpa fugit.
        </Text>
      </Box>
      <HomeAbout />
      <HomePricing />
      <HomeContact />
    </Box>
  );
}
