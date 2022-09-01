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
} from "@chakra-ui/react";

import React, { useRef, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

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

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="30%"
      backdropBlur="2px"
    />
  );

  // const { isOpen, onOpen , onClose } = useDisclosure();

  const onToggle = () => {
    dispatch(modalActions.uploadToggle());
  };

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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Modal isOpen={onOpen} onClose={onToggle}>
        <OverlayTwo />
        <ModalContent>
          <ModalBody>
            <Flex
              justifyContent="center"
              alignItems="center"
              width="100vw"
              height="100vh"
              flexDirection="column"
            >
              <ModalHeader
                fontSize="150%"
                fontFamily="serif"
                fontWeight="bold"
                color="purple"
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
                    color={"purple"}
                    focusBorderColor="purple"
                    outline={'none'}
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
                    color={"purple"}
                    outline={'none'}
                    focusBorderColor="purple"
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
                    color={"purple"}
                    outline={'none'}
                    focusBorderColor="purple"
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
                      border="1px dotted purple"
                      flexDirection={"column"}
                      justifyContent="center"
                      alignItems='center'
                    >
                      <img
                        width={"90%"}
                        height="90%"
                        src="uploadPlaceHolder.jpeg"
                        alt="upload file"
                      />
                      <Input
                        type="file"
                        width={'80%'}
                        color={"purple"}
                        display='inline-block'
                        outline={'none'}
                        whiteSpace='nowrap'
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
                  _hover={{ bgColor: " #D8BFD8", color: "white" }}
                  color="purple"
                  onClick={handleApi}
                >
                  <Heading>Click To Upload</Heading>
                  <UploadFileIcon fontSize="large"></UploadFileIcon>
                </Button>
              </Flex>
              <Box borderRadius="50%" onClick={onToggle}>
                <CancelIcon fontSize="large" color="error"></CancelIcon>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UploadModal;
