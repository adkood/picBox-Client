import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
  Box,
  ModalHeader,
  Input,
  Heading,
  Stack,
  Text,
  Container,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
} from "@chakra-ui/react";

const avatars = [
  {
    name: "Ryan Florence",
    url: "https://bit.ly/ryan-florence",
  },
  {
    name: "Segun Adebayo",
    url: "https://bit.ly/sage-adebayo",
  },
  {
    name: "Kent Dodds",
    url: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Prosper Otemuyiwa",
    url: "https://bit.ly/prosper-baba",
  },
  {
    name: "Christian Nwamba",
    url: "https://bit.ly/code-beast",
  },
];

const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};

import React, { useRef, useState } from "react";
// import { Button, Text } from "@chakra-ui/react";

import CancelIcon from "@mui/icons-material/Cancel";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Frame from "../ui/Frame";

import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../store";
import axios from "axios";

function UploadModal() {
  const onOpen = useSelector((state: any) => state.modal.isUpload);
  const dispatch = useDispatch();
  const titleRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const discountRef = useRef<HTMLInputElement>(null);

  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const onProfilePhotoChangeHandler = (e: any) => {
    setImage(e.target.files[0]);

    const bytesSize = e.target.files[0].size;
    const sufixes = ["B", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytesSize) / Math.log(1024));
    setSize(`${(bytesSize / Math.pow(1024, i)).toFixed(2)} ${sufixes[i]}`);

    let ii = new Image();
    ii.src = window.URL.createObjectURL(e.target.files[0]);
    ii.onload = () => {
      setWidth(`${ii.width}`);
      setHeight(`${ii.height}`);
    };
  };

  // const { isOpen, onOpen , onClose } = useDisclosure();

  const onToggle = () => {
    dispatch(modalActions.uploadToggle());
  };

  // const handleAnotherApi = () => {
  //   const url = "http://127.0.0.1:8000/api/v1/count/increasePostCount";
  //   axios({
  //     url,
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     }
  //   }).then((res) => {
  //     console.log(res);
  //   }).catch((error) => {
  //     console.log(error);
  //   })
  // }

  //api
  const handleApi = () => {
    // console.log(image);
    const formData = new FormData();
    formData.append("title", titleRef.current!.value);
    formData.append("price", priceRef.current!.value);
    formData.append("priceDiscount", discountRef.current!.value);
    formData.append("size", size);
    formData.append("width", width);
    formData.append("height", height);
    formData.append("img", image);

    // console.log(formData);

    const url = "http://127.0.0.1:8000/api/v1/photo";
    axios({
      url,
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: formData,
    })
      .then((res) => {
        console.log(res);
        // handleAnotherApi();
        onToggle();
      })
      .catch((error) => {
        console.log(error);
        onToggle();
      });
  };

  return (
    <>
      <Modal isOpen={onOpen} onClose={onToggle}>
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="30%"
          backdropBlur="2px"
        />
        <ModalContent
          width="100vw"
          height="80vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection={"column"}
        >
          <Container
            as={SimpleGrid}
            // maxW={"7xl"}
            // columns={{ base: 1, md: 2 }}
            spacing={{ base: 6, lg: 26 }}
            py={{ base: 6, sm: 20, lg: 32 }}
          >
            <Stack>
              <Heading
                lineHeight={1.2}
                fontSize={{
                  base: "3xl",
                  sm: "4xl",
                  // md: "5xl",
                  // lg: "6xl",
                }}
              >
                Team Of Creators From All Over The World{" "}
                <Text
                  as={"span"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text"
                >
                  &
                </Text>{" "}
                You
              </Heading>

              <Stack direction={"row"} spacing={4} align={"center"}>
                <AvatarGroup>
                  {avatars.map((avatar) => (
                    <Avatar
                      key={avatar.name}
                      name={avatar.name}
                      src={avatar.url}
                      // eslint-disable-next-line react-hooks/rules-of-hooks
                      size={useBreakpointValue({ base: "md", md: "lg" })}
                      position={"relative"}
                      zIndex={2}
                      _before={{
                        content: '""',
                        width: "full",
                        height: "full",
                        rounded: "full",
                        transform: "scale(1.125)",
                        bgGradient: "linear(to-bl, red.400,pink.400)",
                        position: "absolute",
                        zIndex: -1,
                        top: 0,
                        left: 0,
                      }}
                    />
                  ))}
                </AvatarGroup>
                <Text
                  fontFamily={"heading"}
                  fontSize={{ base: "4xl", md: "6xl" }}
                >
                  +
                </Text>
                <Flex
                  align={"center"}
                  justify={"center"}
                  fontFamily={"heading"}
                  fontSize={{ base: "sm", md: "lg" }}
                  bg={"gray.800"}
                  color={"white"}
                  rounded={"full"}
                  minWidth={useBreakpointValue({
                    base: "44px",
                    md: "60px",
                  })}
                  minHeight={useBreakpointValue({
                    base: "44px",
                    md: "60px",
                  })}
                  position={"relative"}
                  _before={{
                    content: '""',
                    width: "full",
                    height: "full",
                    rounded: "full",
                    transform: "scale(1.125)",
                    bgGradient: "linear(to-bl, orange.400,yellow.400)",
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                >
                  YOU
                </Flex>
              </Stack>
            </Stack>
            <Stack
              bg={"gray.50"}
              rounded={"xl"}
              p={{ base: 4, sm: 6, md: 8 }}
              spacing={{ base: 8 }}
              maxW={{ lg: "lg" }}
            >
              <Box as={"form"} mt={10}>
                <Stack spacing={4}>
                  <Input placeholder="Your Title" ref={titleRef}></Input>
                  <Input
                    type={"number"}
                    placeholder="Price in Rupees (Rs.)"
                    ref={priceRef}
                  ></Input>
                  <Input
                    type={"number"}
                    placeholder="Discount in %"
                    ref={discountRef}
                  ></Input>
                  <Input
                    type="file"
                    onChange={onProfilePhotoChangeHandler}
                  ></Input>
                  {/* <Button
                    fontFamily={"heading"}
                    bg={"gray.200"}
                    color={"gray.800"}
                    onClick={handleApi}
                  >
                    Upload Image
                  </Button> */}
                </Stack>
                <Button
                  fontFamily={"heading"}
                  mt={8}
                  w={"full"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  color={"white"}
                  _hover={{
                    bgGradient: "linear(to-r, red.400,pink.400)",
                    boxShadow: "xl",
                  }}
                  onClick={handleApi}
                >
                  Upload Image
                </Button>
              </Box>
              form
            </Stack>
          </Container>

          {/* <Flex
              justifyContent="center"
              alignItems="center"
              width="100vw"
              height="100vh"
              flexDirection="column"
            >
              <ModalHeader
                fontSize="150%"
                fontWeight="bold"
                color="#9932CC"
              >
                UPLOAD IMAGES
              </ModalHeader>

              <Flex
                flexWrap="wrap"
                gap="15"
                width="40%"
                height="70%"
                bgColor="white"
                borderRadius="8px"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Flex
                  height="80%"
                  width="90%"
                  flexDirection="column"
                  justifyContent="space-around"
                >
                  <Input
                    width="100%"
                    height="14%"
                    borderRadius="10px"
                    placeholder="Your Title"
                    border={"1px solid purple"}
                    fontSize="110%"
                    fontFamily="serif"
                    color={"#9932CC"}
                    focusBorderColor="#9932CC"
                    outline={"none"}
                    ref={titleRef}
                  ></Input>
                  <Input
                    type={"number"}
                    width="100%"
                    height="14%"
                    borderRadius="10px"
                    placeholder="Price in Rupees (Rs.)"
                    border={"1px solid purple"}
                    fontSize="110%"
                    fontFamily="serif"
                    color={"#9932CC"}
                    outline={"none"}
                    focusBorderColor="#9932CC"
                    ref={priceRef}
                  ></Input>
                  <Input
                    type={"number"}
                    width="100%"
                    height="14%"
                    borderRadius="10px"
                    placeholder="Discount in %"
                    border={"1px solid purple"}
                    fontSize="110%"
                    fontFamily="serif"
                    color={"#9932CC"}
                    outline={"none"}
                    focusBorderColor="#9932CC"
                    ref={discountRef}
                  ></Input>
                  <Flex
                    width="100%"
                    height={"50%"}
                    flexDirection={"column"}
                    alignItems="center"
                    justifyContent={"space-around"}
                  >
                    <Flex
                      width="50%"
                      height="80%"
                      flexDirection={"column"}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <img
                        width={"90%"}
                        height="90%"
                        src="uploadPlaceHolder.jpeg"
                        alt="upload file"
                      />
                      <Input
                        backgroundImage={"uploadPlaceHolder.jpeg"}
                        type="file"
                        width="50%"
                        height="80%"
                        color={"#9932CC"}
                        display="inline-block"
                        outline={"none"}
                        whiteSpace="nowrap"
                        onChange={onProfilePhotoChangeHandler}
                      ></Input>
                    </Flex>
                  </Flex>
                </Flex>
                <Button
                  fontFamily={"monospace"}
                  width="90%"
                  height={"10%"}
                  borderStyle="none"
                  borderRadius="10px"
                  _hover={{ bgColor: " #9932CC", color: "white" }}
                  color="#9932CC"
                  onClick={handleApi}
                >
                  <Heading>Click To Upload</Heading>
                  <UploadFileIcon fontSize="large"></UploadFileIcon>
                </Button>
              </Flex>
              <Box borderRadius="50%" onClick={onToggle}>
                <CancelIcon fontSize="large" color="error"></CancelIcon>
              </Box>
            </Flex> */}
        </ModalContent>
      </Modal>
    </>
  );
}

export default UploadModal;
