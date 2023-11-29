"use client";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import FallingLetter from "./transition/fallingLetter";

interface Props {
  children: React.ReactNode;
}

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box px={4}>
      <FallingLetter>
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack w={"100%"} spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              justifyContent={"space-between"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              width={"100%"}
            >
              <Box display={"flex"}>
                <Link href="#">
                  <Text fontWeight={"bold"} fontSize={"3xl"}>
                    Home
                  </Text>
                </Link>
              </Box>
              <Box display={"flex"} gap={4} alignItems={"center"}>
                <Link href="#about">
                  <Text fontWeight={"bold"} fontSize={"3xl"}>
                    About
                  </Text>
                </Link>
                <Link href="#pricing">
                  <Text fontWeight={"bold"} fontSize={"3xl"}>
                    Pricing
                  </Text>
                </Link>
                <Link href="#contact">
                  <Text fontWeight={"bold"} fontSize={"3xl"}>
                    Contact
                  </Text>
                </Link>
                <Link href="task">
                  <Text
                    border={"2px"}
                    p={2}
                    paddingInline={4}
                    rounded={"xl"}
                    fontWeight={"bold"}
                    fontSize={"3xl"}
                    textAlign={"center"}
                  >
                    Login
                  </Text>
                </Link>
              </Box>
            </HStack>
          </HStack>
        </Flex>
      </FallingLetter>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
