import HomeAbout from "@/component/home/homeAbout";
import HomeContact from "@/component/home/homeContact";
import HomePricing from "@/component/home/homePricing";
import Navbar from "@/component/navbar";
import FromLeft from "@/component/transition/fromLeft";
import FromRight from "@/component/transition/fromRight";
import { Box, Image, Text } from "@chakra-ui/react";
import MySVG1 from "../public/Vectorleft.svg";
import MySVG from "../public/vectorright.svg";
import MySVG2 from "../public/vector3.svg";
import MySVG3 from "../public/vector4.svg";
import MySVG4 from "../public/vector5.svg";
import MySVG5 from "../public/vector6.svg";

export default function Home() {
  console.log("shdiowqjd", MySVG);

  return (
    <Box overflowX={"hidden"} position={"relative"}>
      <Box>
        <Box w={300} position={"absolute"} zIndex={-1} left={0} top={-45}>
          <FromLeft>
            <Image w={"full"} src={MySVG1.src} alt="" />
          </FromLeft>
        </Box>
        <Box
          display={["none", "none", "block"]}
          w={600}
          position={"absolute"}
          zIndex={-1}
          left={-200}
          top={530}
        >
          <FromLeft>
            <Image w={"full"} src={MySVG3.src} alt="" />
          </FromLeft>
        </Box>
        <Box
          zIndex={-1}
          position={"absolute"}
          top={[500, 450, 400]}
          right={-10}
          width={[400, 500, 600, 700]}
        >
          <FromRight>
            <Image w={"full"} src={MySVG.src} alt="" />
          </FromRight>
        </Box>
        <Box w={700} position={"absolute"} zIndex={-1} left={-250} top={1730}>
          <FromLeft>
            <Image w={"full"} src={MySVG3.src} alt="" />
          </FromLeft>
        </Box>
        <Box
          zIndex={-1}
          position={"absolute"}
          top={1200}
          right={-300}
          width={800}
        >
          <FromRight>
            <Image w={"full"} src={MySVG.src} alt="" />
          </FromRight>
        </Box>
        <Box
          zIndex={-1}
          position={"absolute"}
          top={[2700, 2400, 2200, 1900]}
          right={-300}
          width={700}
        >
          <FromRight>
            <Image w={"full"} src={MySVG2.src} alt="" />
          </FromRight>
        </Box>
      </Box>
      <Navbar />
      <Box w={"100%"}>
        <FromRight>
          <Text
            pt={"7%"}
            pl={["5%", "10%", "15%", "25%"]}
            pr={"10%"}
            fontSize={["lg", "xl", "xl", "2xl"]}
            textAlign={"center"}
          >
            Kami adalah tim yang bersemangat dan berdedikasi yang berkomitmen
            untuk mengembangkan solusi perangkat lunak yang inovatif dan
            berkualitas tinggi. Kami memiliki pengalaman bertahun-tahun dalam
            berbagai industri dan teknologi, dan kami berkomitmen untuk
            memberikan layanan terbaik kepada klien kami.
          </Text>
        </FromRight>
        <FromLeft>
          <Text
            pt={"7%"}
            pl={"5%"}
            pr={["5%", "10%", "20%", "40%", "50%"]}
            textAlign={"center"}
            fontSize={["lg", "xl", "xl", "xl"]}
            pb={"20%"}
          >
            Kami percaya bahwa kekuatan kami terletak pada pendekatan kami yang
            kolaboratif dan berpusat pada pelanggan. Kami bekerja erat dengan
            klien kami untuk memahami kebutuhan mereka dan mengembangkan solusi
            yang sesuai dengan harapan mereka.
          </Text>
        </FromLeft>
      </Box>
      <HomeAbout />
      <HomePricing />
      <HomeContact />
    </Box>
  );
}
