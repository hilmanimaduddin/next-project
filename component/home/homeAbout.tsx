import { Box, Text } from "@chakra-ui/react";
import FallingLetter from "../transition/fallingLetter";
import FromLeft from "../transition/fromLeft";
import FromRight from "../transition/fromRight";

export default function HomeAbout() {
  return (
    <Box textAlign={"center"} paddingInline={"10%"}>
      <FallingLetter>
        <Text id="about" fontSize={"3xl"} fontWeight={"bold"}>
          About Me
        </Text>
      </FallingLetter>
      <Box pt={"2%"} pb={"5%"} display={"flex"} flexDir={"column"} gap={4}>
        <FromLeft>
          <Text fontSize={"xl"}>
            Kami adalah tim yang bersemangat dan berdedikasi yang berkomitmen
            untuk mengembangkan solusi perangkat lunak yang inovatif dan
            berkualitas tinggi. Kami memiliki pengalaman bertahun-tahun dalam
            berbagai industri dan teknologi, dan kami berkomitmen untuk
            memberikan layanan terbaik kepada klien kami.
          </Text>
        </FromLeft>
        <FromRight>
          <Text fontSize={"xl"}>
            Kami percaya bahwa kekuatan kami terletak pada pendekatan kami yang
            kolaboratif dan berpusat pada pelanggan. Kami bekerja erat dengan
            klien kami untuk memahami kebutuhan mereka dan mengembangkan solusi
            yang sesuai dengan harapan mereka.
          </Text>
        </FromRight>
        <FromLeft>
          <Text fontSize={"xl"}>
            Kami bangga dengan rekam jejak kami dalam memberikan solusi
            perangkat lunak yang sukses yang telah membantu klien kami mencapai
            tujuan bisnis mereka.
          </Text>
        </FromLeft>
        <FromRight>
          <Text fontSize={"xl"}>
            Kami berkomitmen untuk menyediakan lingkungan yang mendukung dan
            memberdayakan karyawan kami. Kami percaya bahwa karyawan kami adalah
            aset kami yang paling berharga, dan kami berkomitmen untuk membantu
            mereka mencapai potensi penuh mereka.
          </Text>
        </FromRight>
        <FromLeft>
          <Text fontSize={"xl"}>
            Jika Anda mencari mitra perangkat lunak yang dapat diandalkan dan
            berpengalaman untuk membantu Anda mencapai tujuan bisnis Anda, kami
            mendorong Anda untuk menghubungi kami.
          </Text>
        </FromLeft>
      </Box>
    </Box>
  );
}
