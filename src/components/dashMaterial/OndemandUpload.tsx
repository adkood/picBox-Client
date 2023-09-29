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

// const Blur = (props: IconProps) => {
//   return (
//     <Icon
//       width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
//       zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
//       height="560px"
//       viewBox="0 0 528 560"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}
//     >
//       <circle cx="71" cy="61" r="111" fill="#F56565" />
//       <circle cx="244" cy="106" r="139" fill="#ED64A6" />
//       <circle cy="291" r="139" fill="#ED64A6" />
//       <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
//       <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
//       <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
//       <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
//     </Icon>
//   );
// };

import React, { useRef,useEffect, useState } from "react";
// import { Button, Text } from "@chakra-ui/react";

import CancelIcon from "@mui/icons-material/Cancel";
import UploadFileIcon from "@mui/icons-material/UploadFile";

import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../../store";
import { demandActions } from "../../../store";

import axios from "axios";
import { useToast } from "@chakra-ui/react";


function OndemandUpload() {

  const [isUploadComplete, setUploadComplete] = useState(false);

    const toast = useToast();
    const onOpen = useSelector((state: any) => state.modal.isDemandUpload);
    const demandId = useSelector((state: any) => state.clickDemand.id);
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

  const onToggle = () => {
    dispatch(modalActions.demandUploadToggle());
  };

  const onToggle2 = () => {
    dispatch(demandActions.demandStateToggle());
  };

  //api

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;


  const handleApi2 = () => {

    const url = `${backendUrl}/api/v1/demand/updateDemand`;
    axios({
      url,
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        demandId,
      },
    })
      .then((res) => {
        console.log(res);
        setUploadComplete(true);
        onToggle2();
        toast({
            title: "Image Uploaded Successfully :)",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
      })
      .catch((error) => {
        console.log(error);
        onToggle2();
        toast({
            title: "Unable to send request.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
      });
  }

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

    const url = `${backendUrl}/api/v1/photo`;
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
        handleApi2();
      })
      .catch((error) => {
        console.log(error);
        onToggle();
      });
  };

  useEffect(() => {
    if(isUploadComplete) {
      onToggle();
    }
  },[isUploadComplete]);

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
          height="70vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection={"column"}
        >
          <Container
            as={SimpleGrid}
            // maxW={"7xl"}
            // columns={{ base: 1, md: 2 }}
            py={{ base: 6, sm: 20, lg: 32 }}
          >
            <Heading
              lineHeight={1.2}
              fontSize={{
                base: "3xl",
                sm: "4xl",
                // md: "5xl",
                // lg: "6xl",
              }}
            >
              Double check the image before posting It   :)
            </Heading>
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
                <Button
                  fontFamily={"heading"}
                  mt={4}
                  w={"full"}
                  bgColor="grey"
                  color={"white"}
                  _hover={{
                    boxShadow: "xl",
                  }}
                  onClick={onToggle}
                >
                  Close
                </Button>
              </Box>
              form
            </Stack>
          </Container>
        </ModalContent>
      </Modal>
    </>
  );
}

export default OndemandUpload;
