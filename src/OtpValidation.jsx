import React from "react";
import { Button, Flex, Input, Box, Image, Text } from "@chakra-ui/react";
import leftImage from "./LeftImage.svg";
import warning from "./warning.svg";
import { AiOutlineLeft } from "react-icons/ai";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { hover } from "@testing-library/user-event/dist/hover";
export const OtpValidation = () => {
  return (
    <Flex h="80vh">
      <Flex
        width={"50%"}
        display={["none", "none", "none", "flex"]}
        bgGradient="linear(to-l, #D1F5F9, #D0EFFF ,#E7E6FF, #E9E8FF )"
        justifyContent={'center'}
      >
        <Image src={leftImage} w="50%" />
      </Flex>
      <Flex flexDirection={"column"} mx="1rem">
        <Box
          bgColor="#7D23E0"
          w="fit-content"
          height={"fit-content"}
          borderRadius="1rem"
          p="0.4rem"
        >
          <AiOutlineLeft size="1rem" color="white" fontWeight={700} />
        </Box>
        <Flex justifyContent={"center"}>
          <Flex
            h={["100%", "100%", "100%", "75vh"]}
            flexDirection={"column"}
            alignItems="center"
            pt="4rem"
            boxShadow={"0px 4px 50px 3px rgba(156, 77, 244, 0.1);"}
            border="3px solid white"
            borderRadius={"2rem"}
            w={["100%", "100%", "100%", "80%"]}
          >
            <Text
              fontSize={["1.5rem", "1.5rem", "1.5rem", "2rem"]}
              fontWeight="700"
            >
              Welcome to Ostello
            </Text>
            <Text fontSize={["1.5rem", "1.5rem", "1.5rem", "1.4rem"]} fontWeight="500">
              Register as a new Institute
            </Text>

            <PhoneInputField />
            <Flex
              justifyContent="space-evenly"
              w={["100%", "100%", "100%", "60%"]}
              my="1rem"
            >
              <Input w="10%" p='0' textAlign={'center'}></Input>
              <Input w="10%" p='0' textAlign={'center'}></Input>
              <Input w="10%" p='0' textAlign={'center'}></Input>
              <Input w="10%" p='0' textAlign={'center'}></Input>
            </Flex>
            <Text
              color={"#7D23E0"}
              fontSize={["0.8rem", "0.8rem", "0.8rem", "1.4rem"]}
              fontWeight="500"
            >
              Resend OTP
            </Text>
            <Flex
              border=" 2px solid #D11A2A"
              borderRadius={"0.4rem"}
              bgColor={"#FFDDE0"}
              p="0.4rem"
              w={["100%", "100%", "100%", "80%"]}
              my="0.8rem"
            >
              <Image src={warning} w="5%" />
              <Text
                fontSize={["0.8rem", "0.8rem", "0.8rem", "1.4rem"]}
                px="1rem"
                fontWeight={"400"}
              >
                Oops..wrong OTP, try again
              </Text>
            </Flex>
            <Button
              bgColor={"#7D23E0"}
              color="white"
              _active={{}}
              _hover={{}}
              _focus={{}}
              w={["100%", "100%", "100%", "80%"]}
              my="0.2rem"
              py="1.5rem"
              fontSize={["1.2rem", "1.2rem", "1.2rem", "2rem"]}
              fontWeight="700"
            >
              Proceed
            </Button>
            <Flex
              alignItems={"center"}
              fontSize={["0.8rem", "0.8rem", "0.8rem", "1.2rem"]}
              flexDirection={["column", "column", "column", "row"]}
              fontWeight="400"
            >
              <Text>Already have an account?</Text>
              <Button
                color={"#7D23E0"}
                bgColor="transparent"
                _active={{}}
                _hover={{}}
                _focus={{}}
              >
                Login to your account
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
const PhoneInputField = () => {
  return (
    <Flex py="0.8rem">
      <PhoneInput country={"in"} disabled={false} />
    </Flex>
  );
};
