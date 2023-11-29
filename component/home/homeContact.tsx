import { Box, Text } from "@chakra-ui/react";
import FallingLetter from "../transition/fallingLetter";
import FromLeft from "../transition/fromLeft";
import FromRight from "../transition/fromRight";
export default function HomeContact() {
  return (
    <Box pb={40} id="contact" textAlign={"center"} paddingInline={"10%"}>
      <FallingLetter>
        <Text p={16} id="contact" fontSize={"3xl"} fontWeight={"bold"}>
          Contact Me
        </Text>
      </FallingLetter>
      <Box display={"flex"} flexDirection={"column"} gap={4}>
        <FromLeft>
          <Text fontSize={"xl"}>
            Siap untuk memulai perjalanan inovasi dan kesuksesan? Mari terhubung
            dan temukan bagaimana kami dapat mengintegrasikan keahlian kami ke
            dalam upaya Anda dengan mulus.
          </Text>
        </FromLeft>
        <FromRight>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Hubungi Kami Kapan Saja, Di Mana Saja
          </Text>
        </FromRight>
        <FromLeft>
          <Text fontSize={"xl"}>
            Tim kami yang berdedikasi selalu siap membantu Anda, memupuk
            lingkungan kolaboratif di mana setiap pertanyaan dijawab dengan
            solusi komprehensif.
          </Text>
        </FromLeft>
        <FromRight>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Merangkul Teknologi untuk Kemenangan Anda
          </Text>
        </FromRight>
        <FromLeft>
          <Text fontSize={"xl"}>
            Mulailah perjalanan transformasi digital dengan komitmen kami yang
            tak tergoyahkan untuk memanfaatkan teknologi untuk memberdayakan
            tujuan Anda.
          </Text>
        </FromLeft>
      </Box>
    </Box>
  );
}
